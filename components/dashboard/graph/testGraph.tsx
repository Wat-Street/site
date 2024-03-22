import React, { useCallback, useState } from "react"
import { Bar, Line } from "@visx/shape"
import { BoxPlot } from "@visx/stats"
import { scaleBand, scaleLinear } from "@visx/scale"
import { AxisBottom, AxisRight } from "@visx/axis"
import { TBoxPlot } from "./types"
import { useTooltip, defaultStyles } from "@visx/tooltip"
import { localPoint } from "@visx/event"
import { max as visxMax, extent, bisector } from "@visx/vendor/d3-array"

// // seeded randomness
// const seededRandom = getSeededRandom(0.1)
// const randomNormal = getRandomNormal.source(getSeededRandom(0.789))(4, 3)
// const data: TBoxPlot[] = genStats(15, randomNormal, () => 10 * seededRandom())

// accessors
// const x = (d: TBoxPlot) => parseInt(d.x)
const x = (d: TBoxPlot) => getDate(d)
const min = (d: TBoxPlot) => d.min
const max = (d: TBoxPlot) => d.max
const median = (d: TBoxPlot) => d.median
const firstQuartile = (d: TBoxPlot) => d.firstQuartile
const thirdQuartile = (d: TBoxPlot) => d.thirdQuartile

interface TooltipData {
  x: string
  min: number
  median: number
  max: number
  firstQuartile: number
  thirdQuartile: number
}

const getDate = (d: TBoxPlot) => new Date(parseInt(d.x))
const bisectDate = bisector<TooltipData, Date>((d) => getDate(d)).left

export default function TestGraph({
  width,
  height,
  data,
}: {
  width: number
  height: number
  data: TBoxPlot[]
}) {
  // const [tooltipData, setTooltipData] = useState<TooltipData | null>(null)
  const {
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  } = useTooltip<TooltipData>()

  const xScale = scaleBand<number>({
    range: [0, width - 48],
    // round: true,
    domain: data.map((d) => x(d).getTime()),
    paddingOuter: 2,
  })

  const values = data.reduce((allValues, boxPlot) => {
    allValues.push(boxPlot.min, boxPlot.max)
    return allValues
  }, [] as number[])
  const minYValue = Math.min(...values)
  const maxYValue = Math.max(...values)

  const yScale = scaleLinear<number>({
    range: [height - 48, 0],
    round: true,
    domain: [minYValue, maxYValue],
    nice: 100,
  })

  const boxWidth = xScale.bandwidth()
  const constrainedWidth = Math.min(40, boxWidth)

  const handleTooltip = useCallback(
    (
      event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
    ) => {
      const { x } = localPoint(event) || { x: 0 }
      const offsetX = Math.max(
        0,
        x - xScale.paddingOuter() * xScale.bandwidth()
      )

      const eachBand = xScale.step()
      const xIndex = Math.floor(offsetX / eachBand)
      const x0 = xScale.domain()[xIndex]
      const index = bisectDate(data, new Date(x0), 1)
      const d0 = data[index - 1]
      const d1 = data[index]
      let d = d0
      if (d1 && getDate(d1)) {
        d =
          x0.valueOf() - getDate(d0).valueOf() >
          getDate(d1).valueOf() - x0.valueOf()
            ? d1
            : d0
      }
      showTooltip({
        tooltipData: d,
        tooltipLeft: x,
        tooltipTop: yScale(
          d.firstQuartile == d.median ? d.thirdQuartile : d.firstQuartile
        ),
      })
    },
    [showTooltip, yScale, xScale]
  )

  return (
    <div className="relative h-full cursor-crosshair">
      <svg width={width} height={height}>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill="url(#statsplot)"
          rx={14}
        />
        {data.map((d: TBoxPlot, i) => (
          <g key={i}>
            <BoxPlot
              min={min(d)}
              max={max(d)}
              left={xScale(x(d).getTime())! + 0.3 * constrainedWidth}
              firstQuartile={firstQuartile(d)}
              thirdQuartile={thirdQuartile(d)}
              median={median(d)}
              boxWidth={constrainedWidth * 0.4}
              fill={firstQuartile(d) === median(d) ? "#26ab6d" : "#d93637"}
              fillOpacity={1}
              stroke={firstQuartile(d) === median(d) ? "#26ab6d" : "#d93637"}
              strokeWidth={1}
              valueScale={yScale}
              // minProps={{
              //   onMouseOver: () => {
              //     setTooltipData({
              //       min: min(d),
              //       name: new Date(x(d)).toLocaleTimeString(),
              //       max: max(d),
              //       firstQuartile: firstQuartile(d),
              //       median: median(d),
              //       thirdQuartile: thirdQuartile(d),
              //     })
              //   },
              // }}
              // maxProps={{
              //   onMouseOver: () => {
              //     setTooltipData({
              //       min: min(d),
              //       name: new Date(x(d)).toLocaleTimeString(),
              //       max: max(d),
              //       firstQuartile: firstQuartile(d),
              //       median: median(d),
              //       thirdQuartile: thirdQuartile(d),
              //     })
              //   },
              // }}
              // boxProps={{
              //   onMouseOver: () => {
              //     setTooltipData({
              //       min: min(d),
              //       name: new Date(x(d)).toLocaleTimeString(),
              //       max: max(d),
              //       firstQuartile: firstQuartile(d),
              //       median: median(d),
              //       thirdQuartile: thirdQuartile(d),
              //     })
              //   },
              // }}
              // medianProps={{
              //   onMouseOver: () => {
              //     setTooltipData({
              //       min: min(d),
              //       name: new Date(x(d)).toLocaleTimeString(),
              //       max: max(d),
              //       firstQuartile: firstQuartile(d),
              //       median: median(d),
              //       thirdQuartile: thirdQuartile(d),
              //     })
              //   },
              // }}
            />
            <Bar
              x={0}
              y={0}
              width={innerWidth}
              height={innerHeight}
              fill="transparent"
              rx={14}
              onTouchStart={handleTooltip}
              onTouchMove={handleTooltip}
              onMouseMove={handleTooltip}
              onMouseLeave={() => hideTooltip()}
            />
          </g>
        ))}

        <AxisBottom
          top={height - 48}
          scale={xScale}
          stroke={"#fff"}
          tickStroke={"#fff"}
          tickFormat={(value) => {
            // const split = (value as Date).toLocaleTimeString().split(":")
            const split = new Date(value).toLocaleTimeString().split(":")
            return split[0] + ":" + split[1] + " " + split[2].split(" ")[1]
          }}
          tickLabelProps={{
            fill: "#fff",
            fontSize: 11,
            textAnchor: "middle",
          }}
        />

        <AxisRight
          left={width - 48}
          scale={yScale}
          stroke={"#fff"}
          tickStroke={"#fff"}
          tickLabelProps={{
            fill: "#fff",
            color: "#fff",
            fontSize: 11,
            textAnchor: "middle",
            dx: 16,
          }}
        />
        {tooltipData && (
          <g>
            <Line
              from={{ x: 0, y: tooltipTop }}
              to={{ y: tooltipTop, x: innerWidth - 164 }}
              stroke={"#fff"}
              strokeOpacity={0.25}
              strokeWidth={1}
              pointerEvents="none"
              strokeDasharray="5,2"
            />
            <Line
              from={{ x: tooltipLeft, y: 0 }}
              to={{ x: tooltipLeft, y: innerHeight - 164 }}
              stroke={"#fff"}
              strokeOpacity={0.25}
              strokeWidth={1}
              pointerEvents="none"
              strokeDasharray="5,2"
            />
          </g>
        )}
      </svg>
      {tooltipData && (
        <div className="p-2 top-2 left-2 absolute text-white rounded-lg shadow-sm border bg-neutral-950">
          <div className="text-xs font-semibold">
            {new Date(parseInt(tooltipData.x)).toLocaleTimeString()}
          </div>
          <div className="text-xs text-muted-foreground">
            {tooltipData.median && <div>Open: {tooltipData.median}</div>}
            {tooltipData.max && <div>High: {tooltipData.max}</div>}
            {tooltipData.min && <div>Low: {tooltipData.min}</div>}
            {tooltipData.thirdQuartile > tooltipData.median ? (
              <div>Close: {tooltipData.thirdQuartile}</div>
            ) : (
              <div>Close: {tooltipData.firstQuartile}</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
