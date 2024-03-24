"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Loader2, X } from "lucide-react"

interface ItemStockProps {
  ticker: string;
  name: string;
  primaryExchange: string;
  setOpen: any;
}

interface ItemCryptoProps {
  ticker: string;
  name: string;
  currencySymbol: string;
}

export default function StockCryptoSearch({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const [search, setSearch] = useState("")

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        console.log("searching for: " + search)
        handleSearch();
      } else {
        console.log("search cleared")
      }
    }, 300)
    return () => clearTimeout(delayDebounceFn)
  }, [search])

  const [isStock, setIsStock] = useState(true)
  const activeClass = {
    on: "border-brand bg-brand/10 text-brand focus-visible:ring-brand shadow-lg shadow-brand/25",
    off: "border-border text-muted-foreground focus-visible:ring-ring",
  }

  // State for getting the top 5 results of the search
  const [topFiveStockResults, setTopFiveStockResults] = useState<ItemStockProps[]>([]);
  const [topFiveCryptoResults, setTopFiveCryptopResults] = useState<ItemCryptoProps[]>([]);

  // Handle search function --> runs every 300ms as according to useEffect above
  const handleSearch = async () => {
    if (isStock) {
      try {
        const response = await fetch(`https://api.polygon.io/v3/reference/tickers?market=stocks&search=${search}&active=true&limit=5&apiKey=nJ70HN6T9nOPnfApFyAeIDxL_4CUocsv`);
        const data = await response.json();
        console.log(data);

        const topMatches = data.results.map((result: any) => ({
          ticker: result.ticker,
          name: result.name,
          primaryExchange: result.primary_exchange,
        }));

        setTopFiveStockResults(topMatches);

      } catch (error) {
          console.error(error + "The request to get data did not go through");
      }
    }

    else if (!isStock) {
      try {
        console.log("not stock version")
        const response = await fetch(`https://api.polygon.io/v3/reference/tickers?market=crypto&search=${search}&active=true&apiKey=nJ70HN6T9nOPnfApFyAeIDxL_4CUocsv`);
        const data = await response.json();
        console.log(data);

        const topMatches = data.results.map((result: any) => ({
          ticker: result.ticker,
          name: result.name,
          currencySymbol: result.currency_symbol,
        }))

        setTopFiveCryptopResults(topMatches);

      } catch (error) {
          console.error(error + "The request to data did not go through");
      }
    }

  }


  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <div className="pt-3 px-3 space-x-2 flex">
        <button
          onClick={() => setIsStock(true)}
          className={`py-0.5 px-1 rounded-sm text-xs border ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isStock ? activeClass.on : activeClass.off
          }`}
        >
          Stock
        </button>
        <button
          onClick={() => setIsStock(false)}
          className={`py-0.5 px-1 rounded-sm text-xs border ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isStock ? activeClass.off : activeClass.on
          }`}
        >
          Crypto
        </button>
      </div>
      <CommandInput
        value={search}
        onValueChange={setSearch}
        autoFocus
        placeholder={`Search for a ${isStock ? "stock" : "crypto"}...`}
      />
      <CommandList>
        <div className="overflow-hidden p-2 text-foreground">

          {isStock 
          ? 
          topFiveStockResults.map((result, index) => (
            <StockItem key={index} ticker={result.ticker} name={result.name} primaryExchange={result.primaryExchange} setOpen={setOpen}/>
          )) 
          : 
          topFiveCryptoResults.map((result, index) => (
            <CryptoItem key={index} ticker={result.ticker} name={result.name} currencySymbol={result.currencySymbol}/>
          ))}

          {/* <div className="flex w-full justify-center text-muted-foreground items-center text-sm py-2">
            <Loader2 className="animate-spin h-4 w-4 mr-2 text-brand" />{" "}
            Searching...
          </div> */}

          {/* <div className="flex w-full justify-center text-muted-foreground items-center text-sm py-2">
            <X className="h-4 w-4 mr-2 text-brand" /> No items found.
          </div> */}
        </div>
      </CommandList>
    </CommandDialog>
  )
}



const StockItem: React.FC<ItemStockProps> = ({ ticker, name, primaryExchange, setOpen }) => {

  const handleChoice = (ticker: string) => {
    console.log(ticker);
    setOpen(false);
  }

  return (
    <button className="relative w-full flex justify-between cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
            onClick={() => handleChoice(ticker)}
    >
      <div className="font-semibold">
        {ticker}{" "}
        <span className="text-muted-foreground font-normal inline-block ml-1">
          {name}
        </span>
      </div>
      <div className="text-muted-foreground">{primaryExchange}</div>
    </button>
  )
}

const CryptoItem: React.FC<ItemCryptoProps> = ({ ticker, name, currencySymbol }) => {
  return (
    <button className="relative w-full flex justify-between cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring">
      <div className="font-semibold">
        {ticker}{" "}
        <span className="text-muted-foreground font-normal inline-block ml-1">
          {name}
        </span>
      </div>
      <div className="text-muted-foreground">{currencySymbol}</div>
    </button>
  )
}

