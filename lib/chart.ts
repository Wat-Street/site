import { bisector } from "@visx/vendor/d3-array"

export type TMarketData = {
  ticket: string
  queryCount: number
  resultsCount: number
  adjusted: boolean
  status: string
  request_id: string
  count: number
  results: {
    v: number
    vw: number
    o: number
    c: number
    h: number
    l: number
    t: number
    n: number
  }[]
}

export type TBoxPlot = {
  time: string
  min: number
  firstQuartile: number
  median: number
  thirdQuartile: number
  max: number
}

export const time = (d: TBoxPlot) => getDate(d)
export const min = (d: TBoxPlot) => d.min
export const max = (d: TBoxPlot) => d.max
export const median = (d: TBoxPlot) => d.median
export const firstQuartile = (d: TBoxPlot) => d.firstQuartile
export const thirdQuartile = (d: TBoxPlot) => d.thirdQuartile
export const isPositive = (d: TBoxPlot) => d.firstQuartile === d.median
export const getDate = (d: TBoxPlot) => new Date(parseInt(d.time))
export const shortenDate = (date: number) => {
  const split = new Date(date).toLocaleTimeString().split(":")
  return split[0] + ":" + split[1] + " " + split[2].split(" ")[1]
}
export const formatPrice = (price: number) => price.toFixed(2)
export const bisectDate = bisector<TBoxPlot, Date>((d) => getDate(d)).left
