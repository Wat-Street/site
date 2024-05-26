import Image from "next/image";
import { execs, leads, team } from "@/lib/data";

import akuna from "@/assets/logos/akuna.png";
import bloomberg from "@/assets/logos/bloomberg.png";
import boosted from "@/assets/logos/boosted.png";
import citadel from "@/assets/logos/citadel.png";
import imc from "@/assets/logos/imc.png";
import whitehorse from "@/assets/logos/whitehorse.png";

const Team = () => {
    return (
        <div>
            <div className="memberCards my-auto">
                <div className="flex justify-center gap-3">
                    {execs.map((exec) => (
                        <div className="memberCard execCard w-[195px] h-48 rounded-lg bg-neutral-800 col-span-2">
                            <div className="memberCardBorder"></div>
                            <div className="memberCardContent w-[calc(100%-2px)] h-[calc(100%-2px)] m-[1px] rounded-lg bg-black flex flex-col">
                                <Image
                                    src={exec.image}
                                    alt="placeholder"
                                    fill={true}
                                    className="teamPic object-cover overflow-hidden rounded-lg z-0"
                                />
                                <div className="mt-[calc(60%)] text-center leading-3 opacity-100 z-10">
                                    <div className="text-neutral-50 text-2xl font-bold px-1">
                                        {exec.name}
                                    </div>
                                    <div className="text-sm text-neutral-200 px-2">
                                        {exec.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-3 mt-3">
                    {leads.map((lead) => (
                        <div className="memberCard execCard w-[195px] h-48 rounded-lg bg-neutral-800 col-span-2">
                            <div className="memberCardBorder"></div>
                            <div className="memberCardContent w-[calc(100%-2px)] h-[calc(100%-2px)] m-[1px] rounded-lg bg-black flex flex-col">
                                <Image
                                    src={lead.image}
                                    alt="placeholder"
                                    fill={true}
                                    className="teamPic object-cover overflow-hidden rounded-lg opacity-30 z-0"
                                />
                                <div className="mt-[calc(60%)] text-center leading-3 z-10">
                                    <div className="text-neutral-50 text-2xl font-bold px-1">
                                        {lead.name}
                                    </div>
                                    <div className="text-sm text-neutral-200 px-2">
                                        {lead.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-3 gap-y-3 mt-6">
                    {team.map((member) => (
                        <div className="memberCard w-[195px] h-24 rounded-lg bg-neutral-800">
                            <div className="memberCardBorder"></div>
                            <div className="memberCardContent w-[calc(100%-2px)] h-[calc(100%-2px)] m-[1px] rounded-lg bg-black flex flex-col">
                                <div className="my-auto">
                                    <div className="mt-2 text-center text-neutral-50 text-2xl font-bold px-2 leading-6">
                                        {member.name}
                                    </div>
                                    <div className="text-sm text-center text-neutral-300 px-2 mt-[1px]">
                                        {member.team}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-neutral-50 text-xl font-semibold">
                Our advisors have worked at:
            </div>
            <div className="mt-8 inline-flex flex-nowrap w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="companyList flex items-center justify-start [&_li]:mx-6 [&_img]:max-w-none">
                    <li>
                        <Image
                            src={citadel}
                            className="aspect[14/5] w-56"
                            alt="citadel"
                        />
                    </li>
                    <li>
                        <Image
                            src={bloomberg}
                            className="aspect[14/5] w-56"
                            alt="citadel"
                        />
                    </li>
                    <li>
                        <Image
                            src={akuna}
                            className="aspect[14/5] w-56"
                            alt="citadel"
                        />
                    </li>
                    <li>
                        <Image
                            src={boosted}
                            className="aspect[14/5] w-56"
                            alt="citadel"
                        />
                    </li>
                    <li>
                        <Image
                            src={imc}
                            className="aspect[14/5] w-56"
                            alt="citadel"
                        />
                    </li>
                    <li>
                        <Image
                            src={whitehorse}
                            className="aspect[14/5] w-56"
                            alt="citadel"
                        />
                    </li>
                </ul>
                <ul
                    className="companyList flex items-center justify-start [&_li]:mx-6 [&_img]:max-w-none"
                    aria-hidden="true"
                >
                    <li>
                        <Image
                            src={citadel}
                            className="aspect[14/5] w-56"
                            alt="citadel"
                        />
                    </li>
                    <li>
                        <Image
                            src={bloomberg}
                            className="aspect[14/5] w-56"
                            alt="citadel"
                        />
                    </li>
                    <li>
                        <Image
                            src={akuna}
                            className="aspect[14/5] w-56"
                            alt="citadel"
                        />
                    </li>
                    <li>
                        <Image
                            src={boosted}
                            className="aspect[14/5] w-56"
                            alt="citadel"
                        />
                    </li>
                    <li>
                        <Image
                            src={imc}
                            className="aspect[14/5] w-56"
                            alt="citadel"
                        />
                    </li>
                    <li>
                        <Image
                            src={whitehorse}
                            className="aspect[14/5] w-56"
                            alt="citadel"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Team;
