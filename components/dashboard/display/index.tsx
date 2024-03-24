"use client"

import PlaceholderGraphic from "./placeholder"
import { useEffect, useRef, useState } from "react"
import Chart from "./chart"
import { TMarketData } from "@/lib/chart"

export default function GraphCard() {
  const [isLoading, setIsLoading] = useState(false)
  const [enable, setEnable] = useState(true)

  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 3000)
  }, [])

  // TEST API CALL:
  const [data, setData] = useState<TMarketData | null>(null)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const res = await fetch(
        "https://api.polygon.io/v2/aggs/ticker/AAPL/range/10/minute/2024-03-19/2024-03-19?adjusted=true&sort=asc&apiKey=nJ70HN6T9nOPnfApFyAeIDxL_4CUocsv"
      )
      const data = await res.json()
      setData(data as TMarketData)
      setIsLoading(false)
      setEnable(true)
    }

    fetchData()
  }, [])

  return (
    <div
      ref={cardRef}
      className="2xl:col-span-3 overflow-hidden col-span-2 row-span-2 w-full h-full relative z-0 flex items-center justify-center"
    >
      {enable && cardRef.current && data ? (
        <Chart
          data={data.results.map((d) => ({
            time: d.t.toString(),
            min: d.l,
            max: d.h,
            median: d.o,
            firstQuartile: d.o > d.c ? d.c : d.o,
            thirdQuartile: d.o > d.c ? d.o : d.c,
            outliers: [],
          }))}
          width={cardRef.current.clientWidth}
          height={cardRef.current.clientHeight}
        />
      ) : (
        <PlaceholderGraphic isLoading={isLoading} />
      )}
    </div>
  )
}
