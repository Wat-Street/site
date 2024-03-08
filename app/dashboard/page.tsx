"use client"

import Header from "@/components/dashboard/header"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function DashboardPage() {
  const [stockSelectorOpen, setStockSelectorOpen] = useState(false)

  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <Header setOpen={setStockSelectorOpen} />

        <div className="w-full h-full p-4 grid gap-4 grid-cols-3 grid-rows-2">
          <Card className="row-span-1 col-span-1 w-full h-full"></Card>
          <Card className="col-span-2 row-span-2 w-full h-full"></Card>
          <Card className="row-span-1 col-span-1 w-full h-full"></Card>
        </div>
      </div>
    </>
  )
}
