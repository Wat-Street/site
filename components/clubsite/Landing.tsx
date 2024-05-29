"use client";
import { motion } from "framer-motion";

const Landing = () => {
    return (
        <div>
            <div className="flex flex-col text-center pt-36 sm:pt-36">
                <div className="text-6xl font-bold text-neutral-50">
                    Wat Street
                </div>
                <div className="text-2xl mt-2 text-neutral-50">
                    UWaterloo's Quantitative Finance Team
                </div>
                <button className="text-neutral-50 rounded-lg bg-black ring-1 ring-neutral-800 mx-auto px-9 py-2 mt-4 hover:bg-neutral-800 hover:ring-neutral-600 transition ease-in-out duration-200">
                    <a
                        href="https://forms.gle/Tr4LMB2VgTQ6CMDc6"
                        target="_blank"
                    >
                        Join our Team
                    </a>
                </button>
            </div>
            <div>
                <svg
                    viewBox="0 0 1920 900"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="invisible sm:visible w-full absolute left-0 bottom-0 -z-10 sm:translate-y-20"
                >
                    <path
                        opacity="0.5"
                        d="M91.4944 615.058C73.3812 615.058 6 679.895 6 679.895V879H1926V6C1926 6 1712.27 211.742 1694.15 211.232C1676.04 210.721 1572.43 119.337 1556.49 119.337C1540.55 119.337 1509.39 172.942 1488.39 174.474C1467.38 176.005 1393.47 97.3842 1365.21 98.4053C1336.96 99.4263 1175.39 302.105 1160.9 302.105C1146.41 302.105 1123.23 261.774 1098.59 262.795C1073.96 263.816 941.366 432.8 921.08 434.842C900.793 436.884 881.954 405.232 868.188 405.232C854.422 405.232 670.393 615.058 647.208 615.058C624.022 615.058 553.019 533.374 535.63 532.863C518.242 532.353 505.924 566.558 492.159 567.068C478.393 567.579 436.37 512.442 424.053 512.953C411.736 513.463 390.724 542.563 382.03 542.563C373.336 542.563 333.487 496.105 323.344 497.126C313.2 498.147 159.6 646.711 148.732 647.221C137.864 647.732 109.608 615.058 91.4944 615.058Z"
                        fill="url(#paint0_radial_0_1)"
                    />
                    <g opacity="0.2" filter="url(#filter0_f_0_1)">
                        <path
                            d="M6 679.895C6 679.895 73.3812 615.058 91.4944 615.058C109.608 615.058 137.864 647.732 148.732 647.221C159.6 646.711 313.2 498.147 323.344 497.126C333.487 496.105 373.336 542.563 382.03 542.563C390.724 542.563 411.736 513.463 424.053 512.953C436.37 512.442 478.393 567.579 492.159 567.068C505.924 566.558 518.242 532.353 535.63 532.863C553.019 533.374 624.022 615.058 647.208 615.058C670.393 615.058 854.422 405.232 868.188 405.232C881.954 405.232 900.793 436.884 921.08 434.842C941.366 432.8 1073.96 263.816 1098.59 262.795C1123.23 261.774 1146.41 302.105 1160.9 302.105C1175.39 302.105 1336.96 99.4263 1365.21 98.4053C1393.47 97.3842 1467.38 176.005 1488.39 174.474C1509.39 172.942 1540.55 119.337 1556.49 119.337C1572.43 119.337 1676.04 210.721 1694.15 211.232C1712.27 211.742 1926 6 1926 6"
                            stroke="#FFD88C"
                            stroke-width="5"
                        />
                    </g>
                    <path
                        opacity="0.3"
                        d="M6 679.895C6 679.895 73.3812 615.058 91.4944 615.058C109.608 615.058 137.864 647.732 148.732 647.221C159.6 646.711 313.2 498.147 323.344 497.126C333.487 496.105 373.336 542.563 382.03 542.563C390.724 542.563 411.736 513.463 424.053 512.953C436.37 512.442 478.393 567.579 492.159 567.068C505.924 566.558 518.242 532.353 535.63 532.863C553.019 533.374 624.022 615.058 647.208 615.058C670.393 615.058 854.422 405.232 868.188 405.232C881.954 405.232 900.793 436.884 921.08 434.842C941.366 432.8 1073.96 263.816 1098.59 262.795C1123.23 261.774 1146.41 302.105 1160.9 302.105C1175.39 302.105 1336.96 99.4263 1365.21 98.4053C1393.47 97.3842 1467.38 176.005 1488.39 174.474C1509.39 172.942 1540.55 119.337 1556.49 119.337C1572.43 119.337 1676.04 210.721 1694.15 211.232C1712.27 211.742 1926 6 1926 6"
                        stroke="#FFE9BF"
                        stroke-width="2"
                    />
                    <defs>
                        <filter
                            id="filter0_f_0_1"
                            x="0.267548"
                            y="0.20108"
                            width="1931.46"
                            height="685.495"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="2"
                                result="effect1_foregroundBlur_0_1"
                            />
                        </filter>
                        <radialGradient
                            id="paint0_radial_0_1"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(844 6.00004) rotate(72.7949) scale(699.815 2398.8)"
                        >
                            <stop
                                offset="0.530455"
                                stop-color="#FBE290"
                                stop-opacity="0.25"
                            />
                            <stop
                                offset="1"
                                stop-color="#FBE290"
                                stop-opacity="0"
                            />
                        </radialGradient>
                    </defs>
                </svg>
                <svg
                    viewBox="400 0 1100 1400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:invisible w-full absolute left-0 bottom-0 -z-10 sm:translate-y-20"
                >
                    <path
                        opacity="0.5"
                        d="M91.4944 615.058C73.3812 615.058 6 679.895 6 679.895V879H1926V6C1926 6 1712.27 211.742 1694.15 211.232C1676.04 210.721 1572.43 119.337 1556.49 119.337C1540.55 119.337 1509.39 172.942 1488.39 174.474C1467.38 176.005 1393.47 97.3842 1365.21 98.4053C1336.96 99.4263 1175.39 302.105 1160.9 302.105C1146.41 302.105 1123.23 261.774 1098.59 262.795C1073.96 263.816 941.366 432.8 921.08 434.842C900.793 436.884 881.954 405.232 868.188 405.232C854.422 405.232 670.393 615.058 647.208 615.058C624.022 615.058 553.019 533.374 535.63 532.863C518.242 532.353 505.924 566.558 492.159 567.068C478.393 567.579 436.37 512.442 424.053 512.953C411.736 513.463 390.724 542.563 382.03 542.563C373.336 542.563 333.487 496.105 323.344 497.126C313.2 498.147 159.6 646.711 148.732 647.221C137.864 647.732 109.608 615.058 91.4944 615.058Z"
                        fill="url(#paint0_radial_0_1)"
                    />
                    <g opacity="0.4" filter="url(#filter0_f_0_1)">
                        <path
                            d="M6 679.895C6 679.895 73.3812 615.058 91.4944 615.058C109.608 615.058 137.864 647.732 148.732 647.221C159.6 646.711 313.2 498.147 323.344 497.126C333.487 496.105 373.336 542.563 382.03 542.563C390.724 542.563 411.736 513.463 424.053 512.953C436.37 512.442 478.393 567.579 492.159 567.068C505.924 566.558 518.242 532.353 535.63 532.863C553.019 533.374 624.022 615.058 647.208 615.058C670.393 615.058 854.422 405.232 868.188 405.232C881.954 405.232 900.793 436.884 921.08 434.842C941.366 432.8 1073.96 263.816 1098.59 262.795C1123.23 261.774 1146.41 302.105 1160.9 302.105C1175.39 302.105 1336.96 99.4263 1365.21 98.4053C1393.47 97.3842 1467.38 176.005 1488.39 174.474C1509.39 172.942 1540.55 119.337 1556.49 119.337C1572.43 119.337 1676.04 210.721 1694.15 211.232C1712.27 211.742 1926 6 1926 6"
                            stroke="#FFD88C"
                            stroke-width="5"
                        />
                    </g>
                    <path
                        opacity="0.4"
                        d="M6 679.895C6 679.895 73.3812 615.058 91.4944 615.058C109.608 615.058 137.864 647.732 148.732 647.221C159.6 646.711 313.2 498.147 323.344 497.126C333.487 496.105 373.336 542.563 382.03 542.563C390.724 542.563 411.736 513.463 424.053 512.953C436.37 512.442 478.393 567.579 492.159 567.068C505.924 566.558 518.242 532.353 535.63 532.863C553.019 533.374 624.022 615.058 647.208 615.058C670.393 615.058 854.422 405.232 868.188 405.232C881.954 405.232 900.793 436.884 921.08 434.842C941.366 432.8 1073.96 263.816 1098.59 262.795C1123.23 261.774 1146.41 302.105 1160.9 302.105C1175.39 302.105 1336.96 99.4263 1365.21 98.4053C1393.47 97.3842 1467.38 176.005 1488.39 174.474C1509.39 172.942 1540.55 119.337 1556.49 119.337C1572.43 119.337 1676.04 210.721 1694.15 211.232C1712.27 211.742 1926 6 1926 6"
                        stroke="#FFE9BF"
                        stroke-width="2"
                    />
                    <defs>
                        <filter
                            id="filter0_f_0_1"
                            x="0.267548"
                            y="0.20108"
                            width="1931.46"
                            height="685.495"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="2"
                                result="effect1_foregroundBlur_0_1"
                            />
                        </filter>
                        <radialGradient
                            id="paint0_radial_0_1"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(844 6.00004) rotate(72.7949) scale(699.815 2398.8)"
                        >
                            <stop
                                offset="0.530455"
                                stop-color="#FBE290"
                                stop-opacity="0.25"
                            />
                            <stop
                                offset="1"
                                stop-color="#FBE290"
                                stop-opacity="0"
                            />
                        </radialGradient>
                    </defs>
                </svg>

                {/* <motion.svg
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
                            <stop
                                offset="0.644248"
                                stop-color="#DDDDDD"
                                stop-opacity="0.3"
                            />
                            <stop
                                offset="1"
                                stop-color="#DDDDDD"
                                stop-opacity="0"
                            />
                        </linearGradient>
                    </defs>
                </motion.svg> */}
            </div>
        </div>
    );
};

export default Landing;
