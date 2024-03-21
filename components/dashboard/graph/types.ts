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
  x: string
  min: number
  firstQuartile: number
  median: number
  thirdQuartile: number
  max: number
}
