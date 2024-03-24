import React, { MouseEvent, TouchEvent, useCallback, useState } from "react"
import { Bar, Line } from "@visx/shape"
import { BoxPlot } from "@visx/stats"
import { scaleBand, scaleLinear } from "@visx/scale"
import { useTooltip } from "@visx/tooltip"
import { localPoint } from "@visx/event"
import * as Chart from "@/lib/chart"
import TooltipLines from "./tooltipLines"
import ChartAxis from "./axis"

const margin = 48

export default function ChartComponent({
  width,
  height,
  data,
}: {
  width: number
  height: number
  data: Chart.TBoxPlot[]
}) {
  const { tooltipLeft, tooltipTop, tooltipData, hideTooltip, showTooltip } =
    useTooltip<Chart.TBoxPlot>()

  const dimensions = {
    width,
    height,
    margin,
  }

  const xScale = scaleBand<number>({
    range: [0, width - margin],
    domain: data.map((d) => Chart.time(d).getTime()),
    paddingOuter: 2,
  })

  const values = data.reduce((allValues, boxPlot) => {
    allValues.push(boxPlot.min, boxPlot.max)
    return allValues
  }, [] as number[])

  const yScale = scaleLinear<number>({
    range: [height - margin, 0],
    round: true,
    domain: [Math.min(...values), Math.max(...values)],
    nice: 100,
  })

  const constrainedWidth = Math.min(40, xScale.bandwidth())

  const handleTooltip = useCallback(
    (event: TouchEvent<SVGRectElement> | MouseEvent<SVGRectElement>) => {
      const { x } = localPoint(event) || { x: 0 }
      const outerGap = xScale.paddingOuter() * xScale.bandwidth()

      // constrainedX is necessary to account for the band scale outer padding
      const constrainedX = Math.min(
        Math.max(0, x - outerGap),
        width - margin - 2 * outerGap
      )

      // find the closest data point
      const xIndex = Math.floor(constrainedX / xScale.step())
      const x0 = xScale.domain()[xIndex]
      const index = Chart.bisectDate(data, new Date(x0), 1)
      const d0 = data[index - 1]
      const d1 = data[index]
      const d =
        d1 && Chart.getDate(d1)
          ? x0 - Chart.getDate(d0).valueOf() > Chart.getDate(d1).valueOf() - x0
            ? d1
            : d0
          : d0
      // round x distance of vertical line to the center of the bar
      const leftDistance =
        xScale.paddingOuter() * xScale.bandwidth() +
        xIndex * xScale.step() +
        xScale.step() / 2
      showTooltip({
        tooltipData: d,
        tooltipLeft: leftDistance,
        tooltipTop: yScale(
          Chart.isPositive(d) ? d.thirdQuartile : d.firstQuartile
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
        {data.map((d: Chart.TBoxPlot, i) => (
          <g key={i}>
            <BoxPlot
              min={Chart.min(d)}
              max={Chart.max(d)}
              left={xScale(Chart.time(d).getTime())! + 0.3 * constrainedWidth}
              firstQuartile={Chart.firstQuartile(d)}
              thirdQuartile={Chart.thirdQuartile(d)}
              median={Chart.median(d)}
              boxWidth={constrainedWidth * 0.4}
              fill={Chart.isPositive(d) ? "#26ab6d" : "#d93637"}
              fillOpacity={1}
              stroke={Chart.isPositive(d) ? "#26ab6d" : "#d93637"}
              strokeWidth={1}
              valueScale={yScale}
            />

            {/* This invisible bar is for tracking hover position */}
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

        <ChartAxis dimensions={dimensions} xScale={xScale} yScale={yScale} />

        {tooltipData && tooltipTop && tooltipLeft ? (
          <TooltipLines
            top={tooltipTop}
            left={tooltipLeft}
            dimensions={dimensions}
          />
        ) : null}
      </svg>
      {tooltipData && (
        <>
          <div
            style={{
              top: height - margin + 4,
              left: tooltipLeft,
            }}
            className="p-1 text-xs font-semibold -translate-x-1/2 absolute text-foreground rounded-lg shadow-sm border bg-card"
          >
            {new Date(parseInt(tooltipData.time)).toLocaleTimeString()}
          </div>
          <div
            style={{
              top: tooltipTop,
              left: width - margin,
            }}
            className="p-1 text-xs font-semibold -translate-y-1/2 absolute text-foreground rounded-lg shadow-sm border bg-card"
          >
            {Chart.isPositive(tooltipData)
              ? Chart.formatPrice(tooltipData.thirdQuartile)
              : Chart.formatPrice(tooltipData.firstQuartile)}
          </div>

          <div className="p-2 text-xs top-2 left-2 absolute text-foreground rounded-lg shadow-sm border bg-card">
            <div className="font-semibold">
              {new Date(parseInt(tooltipData.time)).toLocaleTimeString()}
            </div>
            <div className="text-muted-foreground">
              <div>Open: {Chart.formatPrice(tooltipData.median)}</div>
              <div>High: {Chart.formatPrice(tooltipData.max)}</div>
              <div>Low: {Chart.formatPrice(tooltipData.min)}</div>
              {Chart.isPositive(tooltipData) ? (
                <div>Close: {Chart.formatPrice(tooltipData.thirdQuartile)}</div>
              ) : (
                <div>Close: {Chart.formatPrice(tooltipData.firstQuartile)}</div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
