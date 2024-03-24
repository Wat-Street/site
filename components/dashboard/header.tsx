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
  const [selectedItem, setSelectedItem] = useState("No Stock Selected");

  return (
    <>
      <StockCryptoSearch
        open={stockSelectorOpen}
        setOpen={setStockSelectorOpen}
        setSelectedItem={setSelectedItem}
      />
      <div className="flex z-50 w-screen items-center min-h-[5rem] h-20 px-4 border-b border-border">
        <div className="w-10 select-none z-0 h-10 min-w-[2.5rem] mr-3 -translate-y-0.5">
          <Image src={Logo} alt="Wat Street Logo" className="w-full h-full" />
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
            className="ml-4 !font-normal"
            onClick={() => setStockSelectorOpen(true)}
          >
            {selectedItem}{" "}
            <span className="text-muted-foreground font-semibold ml-4">⌘K</span>
          </Button>
          <Button variant="secondary" className="ml-4">
            Apply
          </Button>
        </div>
      </div>
    </>
  )
}
