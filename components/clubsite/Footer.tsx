import Image from "next/image";
import mef from "@/assets/logos/mef-grayscale.png";
import logo from "@/assets/logos/watstreet.png";
import Socials from "@/components/clubsite/Socials";

import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        // <div className="mt-36 min-w-full min-h-20 px-20 bg-neutral-950/0 border-t border-neutral-800 grid grid-cols-3">
        //     <div className="my-auto">
        //         <Image
        //             src={logo}
        //             alt="logo"
        //             className="w-14 h-14 justify-self-start"
        //         />
        //     </div>
        //     <div className="my-auto justify-self-center">
        //         <Socials />
        //     </div>
        //     <div className="my-auto justify-self-end text-neutral-200">
        //         © WatStreet 2024
        //     </div>
        // </div>
        <div className="grid grid-cols-3 mt-20 mi-w-full min-h-20 px-20 border-t border-neutral-800 items-center py-6">
            <div className="flex flex-col mt-3">
                <div className="text-neutral-300 text-sm">Sponsored by:</div>
                <Image
                    src={mef}
                    alt="logo"
                    className="aspect-[500/258] w-56 -ml-4 -mt-2 brightness-150"
                />
            </div>
            <div className="flex flex-col">
                <Image
                    src={logo}
                    alt="logo"
                    className="w-32 h-32 mx-auto drop-shadow-[0_0px_40px_rgba(251,228,159,0.7)]"
                />
                <div className="text-neutral-300 text-center text-sm">
                    © 2024 Wat Street
                </div>
            </div>
            <div className="justify-self-end">
                <Socials />
            </div>
        </div>
    );
};

export default Footer;
