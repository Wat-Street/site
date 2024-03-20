"use client"

import { Card } from "@/components/ui/card"
import PlaceholderGraph, { PlaceholderGraphLine } from "./placeholder"
import { useEffect, useRef, useState } from "react"
import { Loader2 } from "lucide-react"
import TestGraph from "./testGraph"
import { MarketData } from "./types"

export default function GraphCard() {
  const [isLoading, setIsLoading] = useState(true)
  const [enable, setEnable] = useState(true)

  const cardRef = useRef<HTMLDivElement>(null)

  // TEST API CALL:
  const [data, setData] = useState<MarketData | null>(null)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const res = await fetch(
        "https://api.polygon.io/v2/aggs/ticker/AAPL/range/10/minute/2024-03-19/2024-03-19?adjusted=true&sort=asc&apiKey=nJ70HN6T9nOPnfApFyAeIDxL_4CUocsv"
      )
      const data = await res.json()
      setData(data as MarketData)
      setIsLoading(false)
      setEnable(true)
    }

    fetchData()
  }, [])

  return (
    <Card
      ref={cardRef}
      className="2xl:col-span-3 overflow-hidden col-span-2 row-span-2 w-full h-full relative z-0 flex items-center justify-center"
    >
      {enable && cardRef.current && data ? (
        <TestGraph
          data={data.results.map((d) => ({
            x: d.t.toString(),
            min: d.l,
            max: d.h,
            median: d.o,
            firstQuartile: d.o > d.c ? d.c : d.o,
            thirdQuartile: d.o > d.c ? d.o : d.c,
            outliers: [],
          }))}
          width={cardRef.current.clientWidth}
          height={cardRef.current.clientHeight - 40}
        />
      ) : (
        <>
          <div className="absolute flex items-center text-lg z-10 select-none font-semibold">
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Running model...
              </>
            ) : (
              "No Model Selected"
            )}
          </div>
          {isLoading ? (
            <>
              <PlaceholderGraphLine blur />
              <PlaceholderGraphLine blur />
              <PlaceholderGraphLine />
            </>
          ) : null}
          <PlaceholderGraph />
        </>
      )}
    </Card>
  )
}
