import Image from "next/image";
import logo from "@/assets/logos/watstreet.png";
import Navbar from "@/components/clubsite/Navbar";
import Socials from "@/components/clubsite/Socials";

const Header = () => {
    return (
        <div className="w-full h-20 px-20 grid grid-cols-2 items-center pt-4">
            <Image
                src={logo}
                alt="logo"
                className="-mt-2 w-[70px] h-[70px] justify-self-start drop-shadow-[0_0px_25px_rgba(251,228,159,0.5)]"
            />
            <div className="justify-self-center fixed z-50">
                <Navbar />
            </div>
            <div className="justify-self-end">
                <Socials />
            </div>
        </div>
    );
};

export default Header;
