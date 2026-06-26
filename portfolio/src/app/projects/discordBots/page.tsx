"use client";
import Header from "@/components/ui/header";
import MobileHeader from "@/components/ui/mobileHeader";
import Footer from "@/components/ui/footer";
import Image from "next/image";


export default function discordBots() {

    return (
        <div className="flex flex-col min-h-screen items-center justify-center overflow-hidden relative w-full pb-8">
            <div className="flex md:hidden w-full">
                <MobileHeader />
            </div>
            <div className="hidden md:flex w-full">
                <Header />
            </div>
            <div className="flex flex-col relative lg:min-h-screen w-full bg-[radial-gradient(circle_farthest-side_at_50%_20%,rgba(73,156,163,0.6),transparent_140%)] pt-20">
                <div className="flex flex-col lg:px-32 xl:px-64 gap-3 lg:gap-6 mt-16">
                    <h1 className="text-4xl md:text-6xl 3xl:text-8xl text-center font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] bg-clip-text text-transparent" style={{
                        backgroundImage:
                        "linear-gradient(to bottom, #f2f2f2 50%, transparent)",
                    }}>Discord Bots</h1>
                    <h1 className="text-md md:text-xl 3xl:text-3xl text-center opacity-50 mb-8">June 2024 - August 2024</h1>
                    <div className="rounded-[32px] md:p-4 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all
                    duration-300 hover:-translate-y-1 hover:border-[#5a5a5a] hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]">
                    
                        <div className="relative flex overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] w-full">
                            <Image
                                src="/DiscordBotsExample.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="z-2 opacity-20 mix-blend-overlay bg-[url('/noise.png')] [background-size:240px] absolute inset-0 pointer-events-none" />
                <div className="z-4 bg-[linear-gradient(to_bottom,transparent,var(--background))] h-16 lg:h-60 absolute inset-x-0 bottom-0 top-auto" />
            </div>
            <div className="flex flex-col lg:flex-row px-4 lg:px-36 xl:px-64 2xl:px-72 pt-16 lg:pt-0 xl:pt-32 gap-16">
                <div className="flex flex-col gap-6">
                    <h2 className="text-white text-lg 3xl:text-2xl">Objective</h2>
                    <p className="text-white opacity-60 text-md 3xl:text-xl">I just graduated from university so I decided to first make a project that I would find fun and also useful to myself!</p>
                    <p className="text-white opacity-60 text-md 3xl:text-xl">The goal was to create Discord bots that served a purpose to an online community that I hang out in.</p>
                    <p className="text-white opacity-60 text-md 3xl:text-xl">More specifically, I wanted to create at least one bot to practice my Python skills and get a refresher on how to work with mongoDB.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-white text-lg">Overview</h2>
                    <h2 className="text-white opacity-60 text-md 3xl:text-xl">- Utilized in a community with ~500 members till today</h2>
                    <h2 className="text-white opacity-60 text-md 3xl:text-xl">- BlitzBot allows users to make personal gaming ranked leaderboards with their friends. </h2>
                    <h2 className="text-white opacity-60 text-md 3xl:text-xl">- Outrider Amber allows users to obtain roles in Discord servers and ping when new releases for a game appear.  </h2>

                </div>
            </div>
            <div className="flex flex-col lg:px-32 xl:px-64 gap-16 py-16 w-full">
                <div className="flex flex-col items-center gap-6">
                    <h2 className="text-white font-bold text-2xl 3xl:text-3xl">Highlights</h2>
                    <div className="rounded-[32px] p-4 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] w-full">
                    
                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/BlitzBotPreview.webp"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover brightness-85"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">01: BlitzBot Preview</h2>

                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/OutriderAmberPreview.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover brightness-85"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">02: Outrider Amber Preview</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}