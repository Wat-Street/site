import Header from "@/components/dashboard/header"
import ModelParamsCard from "@/components/dashboard/modelParams"
import { Card } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <Header />

        <div className="w-full h-full p-4 grid gap-4 grid-cols-3 grid-rows-2">
          <Card className="row-span-1 col-span-1 w-full h-full"></Card>
          <Card className="col-span-2 row-span-2 w-full h-full"></Card>
          <Card className="row-span-1 col-span-1 w-full h-full"></Card>
        </div>
      </div>
    </>
  )
}
