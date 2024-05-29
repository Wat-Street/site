import Image from "next/image";
import mef from "@/assets/logos/mef-grayscale.png";
import logo from "@/assets/logos/watstreet.png";
import Socials from "@/components/clubsite/Socials";

import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <div className="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 mt-20 min-w-full min-h-20 sm:px-20 border-t border-neutral-800 sm:items-center pt-6 sm:py-6">
            <div className="flex flex-col sm:mt-3 mx-auto">
                <div className="text-center sm:text-left text-neutral-300 text-sm">
                    Sponsored by:
                </div>
                <Image
                    src={mef}
                    alt="logo"
                    className="aspect-[500/258] w-56 sm:-ml-4 -mt-2 brightness-150"
                />
            </div>
            <div className="flex flex-col order-last sm:order-2 -mt-16 sm:mt-0">
                <Image
                    src={logo}
                    alt="logo"
                    className="w-32 h-32 mx-auto drop-shadow-[0_0px_40px_rgba(251,228,159,0.7)]"
                />
                <div className="text-neutral-300 text-center text-sm">
                    © 2024 Wat Street
                </div>
            </div>
            <div className="justify-self-center sm:justify-self-end order-3">
                <Socials />
            </div>
        </div>
    );
};

export default Footer;
