import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Wat Street",
    description:
        "The University of Waterloo's quantitative finance design team.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-black text-white antialiased selection:bg-[#FFBB0F] selection:text-yellow-950 max-w-screen`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
