import React, { useState } from "react"
import { Group } from "@visx/group"
import { BoxPlot } from "@visx/stats"
import { scaleBand, scaleLinear } from "@visx/scale"
import genStats, {
  Stats,
  BoxPlot as BoxPlotType,
} from "@visx/mock-data/lib/generators/genStats"
import { getSeededRandom, getRandomNormal } from "@visx/mock-data"
import { Tooltip, defaultStyles as defaultTooltipStyles } from "@visx/tooltip"
import { AxisBottom } from "@visx/axis"
import { useTooltip } from "@visx/tooltip"
import { StatsData } from "./types"

// // seeded randomness
// const seededRandom = getSeededRandom(0.1)
// const randomNormal = getRandomNormal.source(getSeededRandom(0.789))(4, 3)
// const data: BoxPlotType[] = genStats(15, randomNormal, () => 10 * seededRandom())

// accessors
const x = (d: BoxPlotType) => new Date(parseInt(d.x)).toLocaleTimeString()
const min = (d: BoxPlotType) => d.min
const max = (d: BoxPlotType) => d.max
const median = (d: BoxPlotType) => d.median
const firstQuartile = (d: BoxPlotType) => d.firstQuartile
const thirdQuartile = (d: BoxPlotType) => d.thirdQuartile

interface TooltipData {
  name: string
  min: number
  median: number
  max: number
  firstQuartile: number
  thirdQuartile: number
}

export default function TestGraph({
  width,
  height,
  data,
}: {
  width: number
  height: number
  data: BoxPlotType[]
}) {
  // const {
  //   tooltipOpen,
  //   tooltipLeft,
  //   tooltipTop,
  //   tooltipData,
  //   hideTooltip,
  //   showTooltip,
  // } = useTooltip<TooltipData>()

  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null)
  const [hoveredBar, setHoveredBar] = useState(-1)

  // bounds
  const xMax = width
  const yMax = height - 120

  // scales
  const xScale = scaleBand<string>({
    range: [0, xMax],
    round: true,
    domain: data.map(x),
    padding: 0,
  })

  const values = data.reduce((allValues, boxPlot) => {
    allValues.push(boxPlot.min, boxPlot.max)
    return allValues
  }, [] as number[])
  const minYValue = Math.min(...values)
  const maxYValue = Math.max(...values)

  const yScale = scaleLinear<number>({
    range: [yMax, 0],
    round: true,
    domain: [minYValue, maxYValue],
  })

  const boxWidth = xScale.bandwidth()
  const constrainedWidth = Math.min(40, boxWidth)

  return width < 10 ? null : (
    <div className="relative h-full cursor-crosshair">
      <svg width={width} height={height}>
        {/* <LinearGradient id="statsplot" to="#8b6ce7" from="#87f2d4" /> */}
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill="url(#statsplot)"
          rx={14}
        />
        <Group top={40}>
          {data.map((d: BoxPlotType, i) => (
            <g key={i}>
              <BoxPlot
                min={min(d)}
                max={max(d)}
                left={xScale(x(d))! + 0.3 * constrainedWidth}
                firstQuartile={firstQuartile(d)}
                thirdQuartile={thirdQuartile(d)}
                median={median(d)}
                boxWidth={constrainedWidth * 0.4}
                fill={firstQuartile(d) === median(d) ? "#06B061" : "#FF2F30"}
                fillOpacity={hoveredBar === i ? 0.5 : 1}
                stroke={firstQuartile(d) === median(d) ? "#06B061" : "#FF2F30"}
                strokeWidth={1}
                valueScale={yScale}
                minProps={{
                  onMouseOver: () => {
                    setHoveredBar(i)
                    setTooltipData({
                      min: min(d),
                      name: x(d),
                      max: max(d),
                      firstQuartile: firstQuartile(d),
                      median: median(d),
                      thirdQuartile: thirdQuartile(d),
                    })
                  },
                }}
                maxProps={{
                  onMouseOver: () => {
                    setHoveredBar(i)
                    setTooltipData({
                      min: min(d),
                      name: x(d),
                      max: max(d),
                      firstQuartile: firstQuartile(d),
                      median: median(d),
                      thirdQuartile: thirdQuartile(d),
                    })
                  },
                }}
                boxProps={{
                  onMouseOver: () => {
                    setHoveredBar(i)
                    setTooltipData({
                      min: min(d),
                      name: x(d),
                      max: max(d),
                      firstQuartile: firstQuartile(d),
                      median: median(d),
                      thirdQuartile: thirdQuartile(d),
                    })
                  },
                }}
                medianProps={{
                  style: {
                    stroke: "white",
                  },
                  onMouseOver: () => {
                    setHoveredBar(i)
                    setTooltipData({
                      min: min(d),
                      name: x(d),
                      max: max(d),
                      firstQuartile: firstQuartile(d),
                      median: median(d),
                      thirdQuartile: thirdQuartile(d),
                    })
                  },
                }}
              />
            </g>
          ))}
        </Group>

        <AxisBottom
          top={height}
          scale={xScale}
          // tickFormat={formatDate}
          stroke={"#ff0000"}
          tickStroke={"#ff0000"}
          tickLabelProps={{
            fill: "#ff0000",
            fontSize: 11,
            textAnchor: "middle",
          }}
        />
      </svg>

      {tooltipData && (
        <div className="p-2 top-2 left-2 absolute text-white rounded-lg shadow-sm border bg-neutral-950">
          <div className="text-xs font-semibold">{tooltipData.name}</div>
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
