"use client"

import { Card } from "@/components/ui/card"
import PlaceholderGraph, { PlaceholderGraphLine } from "./placeholder"
import { useState } from "react"

export default function GraphCard() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Card className="2xl:col-span-3 overflow-hidden col-span-2 row-span-2 w-full h-full relative z-0 flex items-center justify-center">
      <div className="absolute text-lg z-10 select-none font-semibold">
        No Model Selected
      </div>
      {isLoading ? (
        <>
          <PlaceholderGraphLine blur />
          <PlaceholderGraphLine blur />
          <PlaceholderGraphLine />
        </>
      ) : null}
      <PlaceholderGraph />
    </Card>
  )
}
