"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CandlestickChart, LineChart } from "lucide-react"
import Image from "next/image"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

export default function StockDisplayHeader({
  tab,
  setTab,
}: {
  tab: "Candles" | "Line"

  setTab: Dispatch<SetStateAction<"Candles" | "Line">>
}) {
  return (
    <div className="w-full mb-4 shrink-0 flex items-center justify-between">
      <div className="font-semibold text-lg flex items-center">AAPL</div>
      <Tabs
        value={tab}
        onValueChange={(value) => {
          setTab(value as "Candles" | "Line")
        }}
      >
        <TabsList>
          <TabsTrigger value="Candles">
            <CandlestickChart className="w-4 h-4 mr-1" />
            Candles
          </TabsTrigger>
          <TabsTrigger value="Line">
            <LineChart className="w-4 h-4 mr-1" />
            Line
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
