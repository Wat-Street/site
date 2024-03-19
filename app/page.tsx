import Image from "next/image";
import mef from "@/assets/images/mef.png";

export default function HomePage() {
    return (
        <main className="mx-auto min-h-screen max-w-screen-lg">
            <div className="h-20"></div>
            <div className="grid grid-rows-2 text-center pt-24">
                <h1 className="text-6xl font-black tracking-widest">
                    WAT STREET
                </h1>
                <p className="pt-6 text-xl tracking-widest font-light">
                    UWaterloo's Quantitative Finance Team
                </p>
            </div>
            <div className="text-center mt-20 text-xl">Sponsors:</div>
            <Image src={mef} alt="logo" width={200} className="mx-auto" />
        </main>
    );
}
