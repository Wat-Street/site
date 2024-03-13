export default function PlaceholderGraphLine({
  blur = false,
}: {
  blur?: boolean
}) {
  return (
    <svg
      width="100%"
      viewBox="0 0 1327 860"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="min-w-full scale-105 z-10 select-none absolute left-0 bottom-0"
    >
      <path
        d="M60 600.5C47.5 600.5 1 664 1 664V859H1326V4C1326 4 1178.5 205.5 1166 205C1153.5 204.5 1082 115 1071 115C1060 115 1038.5 167.5 1024 169C1009.5 170.5 958.5 93.5 939 94.5C919.5 95.5 808 294 798 294C788 294 772 254.5 755 255.5C738 256.5 646.5 422 632.5 424C618.5 426 605.5 395 596 395C586.5 395 459.5 600.5 443.5 600.5C427.5 600.5 378.5 520.5 366.5 520C354.5 519.5 346 553 336.5 553.5C327 554 298 500 289.5 500.5C281 501 266.5 529.5 260.5 529.5C254.5 529.5 227 484 220 485C213 486 107 631.5 99.5 632C92 632.5 72.5 600.5 60 600.5Z"
        stroke="#ffbb0f"
        stroke-width="2"
        className={`animate-graph ${blur ? "blur-lg" : ""}`}
      />
    </svg>
  )
}
