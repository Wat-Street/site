"use client";

import { useState, useEffect } from "react";

import Header from "@/components/clubsite/Header";
import Footer from "@/components/clubsite/Footer";
import MousePos from "@/components/clubsite/MousePos";
import PaperPreview from "@/components/research/PaperPreview";

import { ScrollArea } from "@/components/ui/scroll-area";

import { researchData, tags } from "@/lib/researchData";

export default function HomePage() {
    const [allActive, setAllActive] = useState(true);
    const [activeTags, setActiveTags] = useState<string[]>([]);

    const handleTagClick = (tagName: string) => {
        if (activeTags.includes(tagName)) {
            setActiveTags(activeTags.filter((item) => item !== tagName));
        } else {
            setActiveTags([...activeTags, tagName]);
        }
    };

    useEffect(() => {
        if (activeTags.length > 0) {
            setAllActive(false);
        } else {
            setAllActive(true);
        }
    }, [activeTags]);

    return (
        <main className="mx-6 sm:mx-0 h-screen">
            <Header defaultPage={3} />
            <div className="pt-4 md:pt-8 pb-6 mx-6 min-h-[calc(100vh-80px)]">
                <div className="min-h-8 py-4 flex flex-wrap justify-center gap-1 text-sm text-neutral-50">
                    <button
                        onClick={() => {
                            setAllActive(true);
                            setActiveTags([]);
                        }}
                        className={`${allActive ? "bg-[#2c2d2d]" : ""}
                        px-4 py-2 border border-1 border-[#2c2d2d] rounded-md hover:bg-[#2c2d2d] transition ease-in-out duration-200`}
                    >
                        All
                    </button>
                    {tags.map((tag, key) => (
                        <button
                            onClick={() => handleTagClick(tag.name)}
                            className={`${
                                activeTags.includes(tag.name)
                                    ? "bg-[#2c2d2d]/80"
                                    : ""
                            }
                                px-4 py-2 border border-1 border-[#2c2d2d] rounded-md hover:bg-[#2c2d2d] transition ease-in-out duration-200`}
                        >
                            {tag.name}
                        </button>
                    ))}
                </div>
                <ScrollArea className="h-[72vh]">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                        {researchData.map((paper, key) => {
                            if (
                                allActive ||
                                paper.tags.some((tag) =>
                                    activeTags.includes(tag)
                                )
                            ) {
                                return <PaperPreview key={key} {...paper} />;
                            }
                        })}
                    </div>
                </ScrollArea>
            </div>
            <Footer />
        </main>
    );
}
