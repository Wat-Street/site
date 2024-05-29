import Image from "next/image";
import logo from "@/assets/logos/watstreet.png";
import Navbar from "@/components/clubsite/Navbar";
import Socials from "@/components/clubsite/Socials";

const Header = () => {
    return (
        <div className="w-full h-20 sm:px-20 grid grid-cols-2 items-center pt-6 sm:pt-4">
            <div>
                <Image
                    src={logo}
                    alt="logo"
                    className="-mt-1.5 w-[70px] h-[70px] justify-self-start drop-shadow-[0_0px_25px_rgba(251,228,159,0.5)] overflow-visible"
                />
            </div>
            <div className="hidden sm:block justify-self-center fixed z-50">
                <Navbar />
            </div>
            <div className="justify-self-end">
                <Socials />
            </div>
        </div>
    );
};

export default Header;
