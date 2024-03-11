"use client"

import Image from "next/image"
import Logo from "../../assets/images/watstreet.png"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "../ui/button"
import { useState } from "react"
import StockCryptoSearch from "./stockCryptoSearch"

export default function Header() {
  const [stockSelectorOpen, setStockSelectorOpen] = useState(false)

  return (
    <>
      <StockCryptoSearch
        open={stockSelectorOpen}
        setOpen={setStockSelectorOpen}
      />
      <div className="flex w-screen items-center h-20 px-4 border-b border-border">
        <div className="w-10 select-none z-0 h-10 mr-3 -translate-y-0.5">
          <Image src={Logo} alt="Wat Street Logo" className="w-full h-full" />
          <div className="-z-10 w-full h-full absolute top-0 left-0 bg-brand blur-md opacity-30" />
        </div>
        <div className="text-xl font-semibold select-none">Backtesting</div>
        <div className="border-l border-border h-full flex items-center ml-6 px-6">
          <Select>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="arbitrage">Arbitrage</SelectItem>
              <SelectItem value="meanReversion">Mean Reversion</SelectItem>
              <SelectItem value="nlp">NLP</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="ml-4"
            onClick={() => setStockSelectorOpen(true)}
          >
            No Stock Selected{" "}
            <span className="text-muted-foreground ml-4">⌘K</span>
          </Button>
          <Button variant="secondary" className="ml-4">
            Apply
          </Button>
        </div>
      </div>
    </>
  )
}
