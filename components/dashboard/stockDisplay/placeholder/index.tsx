"use client"

import { Loader2 } from "lucide-react"
import PlaceholderGraphLine from "./line"
import PlaceholderGraph from "./graph"

export default function PlaceholderGraphic({
  isLoading,
}: {
  isLoading: boolean
}) {
  return (
    <>
      <div className="absolute z-10 bg-gradient-to-l from-background to-transparent h-full w-16 sm:w-32 md:w-48 right-0" />
      <div className="absolute z-10 bg-gradient-to-r from-background to-transparent h-full w-16 sm:w-32 md:w-48 left-0" />
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
          <PlaceholderGraphLine />
        </>
      ) : null}
      <PlaceholderGraph />
    </>
  )
}
