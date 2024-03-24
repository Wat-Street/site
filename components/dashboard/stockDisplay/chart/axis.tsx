import { AxisBottom, AxisRight } from "@visx/axis"
import * as Chart from "@/lib/chart"
import { ScaleBand, ScaleLinear } from "d3-scale"

export default function ChartAxis({
  dimensions,
  xScale,
  yScale,
}: {
  dimensions: { width: number; height: number; margin: number }
  xScale: ScaleBand<number>
  yScale: ScaleLinear<number, number, never>
}) {
  const { width, height, margin } = dimensions

  return (
    <>
      <AxisBottom
        top={height - margin}
        scale={xScale}
        stroke={"#737373"}
        tickStroke={"#737373"}
        tickFormat={Chart.shortenDate}
        tickLabelProps={{
          fontSize: 11,
          fill: "#737373",
          textAnchor: "middle",
          fontFamily: "inherit",
        }}
      />

      <AxisRight
        left={width - margin}
        scale={yScale}
        stroke={"#737373"}
        tickStroke={"#737373"}
        tickFormat={(value) => Chart.formatPrice(value.valueOf())}
        tickLabelProps={{
          fontSize: 11,
          fill: "#737373",
          textAnchor: "middle",
          fontFamily: "inherit",
          dx: 18,
        }}
      />
    </>
  )
}
