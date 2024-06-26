import { TBoxPlot } from "@/lib/chart"
import { Line } from "@visx/shape"

export default function TooltipLines({
  top,
  left,
  dimensions,
}: {
  top: number
  left: number
  dimensions: { width: number; height: number; margin: number }
}) {
  const { width, height, margin } = dimensions

  return (
    <g>
      <Line
        from={{ x: 0, y: top }}
        to={{ x: width - margin, y: top }}
        stroke={"#fff"}
        strokeOpacity={0.2}
        strokeWidth={1}
        pointerEvents="none"
        strokeDasharray="5,2"
      />
      <Line
        from={{ x: left, y: 0 }}
        to={{ x: left, y: height - margin }}
        stroke={"#fff"}
        strokeOpacity={0.2}
        strokeWidth={1}
        pointerEvents="none"
        strokeDasharray="5,2"
      />
    </g>
  )
}
