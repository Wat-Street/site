import Header from "@/components/dashboard/header"
import ModelParamsCard from "@/components/dashboard/modelParams"
import { Card } from "@/components/ui/card"
import Image from "next/image"

import PlaceholderGraph from "@/assets/graphics/placeholder-graph-1.svg"

export default function DashboardPage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <Header />

        <div className="w-screen h-screen max-h-screen absolute top-0 left-0 pt-24 p-4 grid gap-4 grid-cols-3 2xl:grid-cols-4 grid-rows-2">
          {/* <Card className="row-span-1 col-span-1 w-full h-full"></Card> */}
          <ModelParamsCard />
          <Card className="2xl:col-span-3 overflow-hidden col-span-2 row-span-2 w-full h-full relative z-0 flex items-center justify-center">
            <div className="absolute text-lg z-10 select-none font-semibold">
              No Model Selected
            </div>
            <Image
              src={PlaceholderGraph}
              alt=""
              className="min-w-full scale-105 opacity-50 select-none absolute left-0 bottom-0"
            />
          </Card>
          <Card className="row-span-1 col-span-1 w-full h-full"></Card>
        </div>
      </div>
    </>
  )
}
