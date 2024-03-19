import Image from "next/image";

export default function HomePage() {
    return (
        <main className="mx-auto min-h-screen max-w-screen-lg">
            <div className="grid grid-rows-2 text-center pt-24">
                <h1 className="text-6xl font-black tracking-widest">
                    WAT STREET
                </h1>
                <p className="pt-6 text-xl tracking-widest font-light">
                    UWaterloo's Quantitative Finance Team
                </p>
            </div>
        </main>
    );
}
