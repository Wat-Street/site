"use client";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div>
      <div className="flex flex-col text-center">
        <div className="text-6xl font-bold text-neutral-50">Wat Street</div>
        <div className="text-2xl mt-2 text-neutral-50">
          UWaterloo's Quantitative Finance Team
        </div>
        <button className="text-neutral-50 rounded-lg bg-black ring-1 ring-neutral-800 mx-auto px-9 py-2 mt-4 hover:bg-neutral-800 hover:ring-neutral-600 transition ease-in-out duration-200">
          <a href="https://forms.gle/Tr4LMB2VgTQ6CMDc6" target="_blank">
            Join our Team
          </a>
        </button>
        {/* <button className="rounded-lg bg-gradient-to-b from-neutral-800/90 to-neutral-800/20 bg-neutral-800/20 ring-1 ring-neutral-800/20 mx-auto px-9 py-2 mt-4 hover:bg-gradient-to-b hover:from-neutral-800 hover:to-neutral-800/20  transition ease-in-out">
                    Join our Team
                </button> */}
      </div>
      <div>
        <motion.svg
          viewBox="0 0 1922 774"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full absolute left-0 bottom-0 -z-10"
        >
          <motion.path
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            opacity="0.5"
            d="M1 674.895C1 674.895 68.3812 610.058 86.4944 610.058C104.608 610.058 132.864 642.732 143.732 642.221C154.6 641.711 308.2 493.147 318.344 492.126C328.487 491.105 368.336 537.563 377.03 537.563C385.724 537.563 406.736 508.463 419.053 507.953C431.37 507.442 473.393 562.579 487.159 562.068C500.924 561.558 513.242 527.353 530.63 527.863C548.019 528.374 619.022 610.058 642.208 610.058C665.393 610.058 849.422 400.232 863.188 400.232C876.954 400.232 895.793 431.884 916.08 429.842C936.366 427.8 1068.96 258.816 1093.59 257.795C1118.23 256.774 1141.41 297.105 1155.9 297.105C1170.39 297.105 1331.96 94.4263 1360.21 93.4053C1388.47 92.3842 1462.38 171.005 1483.39 169.474C1504.39 167.942 1535.55 114.337 1551.49 114.337C1567.43 114.337 1671.04 205.721 1689.15 206.232C1707.27 206.742 1921 1 1921 1"
            stroke="#dddddd"
            stroke-width="2"
          />
        </motion.svg>

        <motion.svg
          viewBox="0 0 1920 774"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full absolute left-0 bottom-0 -z-10"
        >
          <motion.path
            initial={{ fillOpacity: 1 }}
            animate={{ fillOpacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            opacity="0.5"
            d="M85.4944 609.058C67.3812 609.058 0 673.895 0 673.895V873H1920V0C1920 0 1706.27 205.742 1688.15 205.232C1670.04 204.721 1566.43 113.337 1550.49 113.337C1534.55 113.337 1503.39 166.942 1482.39 168.474C1461.38 170.005 1387.47 91.3842 1359.21 92.4053C1330.96 93.4263 1169.39 296.105 1154.9 296.105C1140.41 296.105 1117.23 255.774 1092.59 256.795C1067.96 257.816 935.366 426.8 915.08 428.842C894.793 430.884 875.954 399.232 862.188 399.232C848.422 399.232 664.393 609.058 641.208 609.058C618.022 609.058 547.019 527.374 529.63 526.863C512.242 526.353 499.924 560.558 486.159 561.068C472.393 561.579 430.37 506.442 418.053 506.953C405.736 507.463 384.724 536.563 376.03 536.563C367.336 536.563 327.487 490.105 317.344 491.126C307.2 492.147 153.6 640.711 142.732 641.221C131.864 641.732 103.608 609.058 85.4944 609.058Z"
            fill="url(#paint0_linear_26_3)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_26_3"
              x1="1.76251e-06"
              y1="19"
              x2="4.81044e-05"
              y2="672"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.644248" stop-color="#DDDDDD" stop-opacity="0.3" />
              <stop offset="1" stop-color="#DDDDDD" stop-opacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* <motion.svg
                    viewBox="0 0 1920 759"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full absolute left-0 bottom-0 -z-10"
                >
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop",
                            repeatDelay: 1,
                        }}
                        opacity="0.5"
                        d="M75.7857 612.058C57.3989 612.058 -11 676.895 -11 676.895V876H1938V3C1938 3 1721.04 208.742 1702.65 208.232C1684.26 207.721 1579.09 116.337 1562.91 116.337C1546.73 116.337 1515.1 169.942 1493.78 171.474C1472.45 173.005 1397.43 94.3842 1368.74 95.4053C1340.06 96.4263 1176.05 299.105 1161.34 299.105C1146.63 299.105 1123.1 258.774 1098.09 259.795C1073.09 260.816 938.494 429.8 917.901 431.842C897.308 433.884 878.185 402.232 864.211 402.232C850.237 402.232 663.428 612.058 639.893 612.058C616.357 612.058 544.281 530.374 526.63 529.863C508.979 529.353 496.475 563.558 482.502 564.068C468.528 564.579 425.87 509.442 413.367 509.953C400.864 510.463 379.535 539.563 370.71 539.563C361.884 539.563 321.433 493.105 311.137 494.126C300.84 495.147 144.92 643.711 133.888 644.221C122.856 644.732 94.1725 612.058 75.7857 612.058Z"
                        stroke="#DDDDDD"
                        stroke-width="2"
                    />
                </motion.svg> */}
      </div>
    </div>
  );
};

export default Landing;
