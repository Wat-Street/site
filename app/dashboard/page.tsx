import GraphCard from "@/components/dashboard/graph"
import Header from "@/components/dashboard/header"
import ModelParamsCard from "@/components/dashboard/modelParams"
import { Card } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <Header />

        <div className="w-screen h-screen max-h-screen absolute top-0 left-0 pt-24 p-4 grid gap-4 grid-cols-3 2xl:grid-cols-4 grid-rows-2">
          {/* <Card className="row-span-1 col-span-1 w-full h-full"></Card> */}
          <ModelParamsCard />
          <GraphCard />
          <Card className="row-span-1 col-span-1 w-full h-full"></Card>
        </div>
      </div>
    </>
  )
}
