"use client"

import { Card } from "@/components/ui/card"
import PlaceholderGraph, { PlaceholderGraphLine } from "./placeholder"
import { useState } from "react"
import { Loader2 } from "lucide-react"

export default function GraphCard() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Card className="2xl:col-span-3 overflow-hidden col-span-2 row-span-2 w-full h-full relative z-0 flex items-center justify-center">
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
    </Card>
  )
}
