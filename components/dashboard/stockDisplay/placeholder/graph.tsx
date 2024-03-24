import PlaceholderGraphLine from "./line"

export { PlaceholderGraphLine }

export default function PlaceholderGraph() {
  return (
    <svg
      width="100%"
      viewBox="0 0 1327 858"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="scale-105 -z-10 opacity-75 select-none absolute left-0 bottom-0"
    >
      <path
        d="M60 598.5C47.5 598.5 1 662 1 662V857H1326V2C1326 2 1178.5 203.5 1166 203C1153.5 202.5 1082 113 1071 113C1060 113 1038.5 165.5 1024 167C1009.5 168.5 958.5 91.5 939 92.5C919.5 93.5 808 292 798 292C788 292 772 252.5 755 253.5C738 254.5 646.5 420 632.5 422C618.5 424 605.5 393 596 393C586.5 393 459.5 598.5 443.5 598.5C427.5 598.5 378.5 518.5 366.5 518C354.5 517.5 346 551 336.5 551.5C327 552 298 498 289.5 498.5C281 499 266.5 527.5 260.5 527.5C254.5 527.5 227 482 220 483C213 484 107 629.5 99.5 630C92 630.5 72.5 598.5 60 598.5Z"
        fill="url(#paint0_linear_41_15)"
        stroke="#525252"
      />

      <defs>
        <linearGradient
          id="paint0_linear_41_15"
          x1="663.5"
          y1="2"
          x2="663.5"
          y2="857"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="0.65" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.82" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}