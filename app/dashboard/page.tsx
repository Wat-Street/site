import StockDisplayCard from "@/components/dashboard/stockDisplay"
import Header from "@/components/dashboard/header"
import ModelParamsCard from "@/components/dashboard/modelParams"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardPage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <Header />

        <div className="w-screen h-screen max-h-screen absolute top-0 left-0 pt-24 p-4 grid gap-4 grid-cols-3 2xl:grid-cols-4 grid-rows-2">
          {/* <Card className="row-span-1 col-span-1 w-full h-full"></Card> */}
          <ModelParamsCard />
          <StockDisplayCard />
          <Card className="row-span-1 p-4 col-span-1 w-full h-full">
            <Skeleton className="h-6 w-52" />
            <div className="space-y-3 mt-10">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-52" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-4 w-44" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-4 w-64" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-4 w-44" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-4 w-52" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-4 w-64" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
