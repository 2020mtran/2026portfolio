"use client";
import Header from "@/components/ui/header";
import MobileHeader from "@/components/ui/mobileHeader";
import Footer from "@/components/ui/footer";
import Image from "next/image";


export default function WuwaNetwork() {

    return (
        <div className="flex flex-col min-h-screen items-center justify-center overflow-hidden relative w-full pb-8">
            <div className="flex md:hidden w-full">
                <Header />
            </div>
            <div className="hidden md:flex w-full">
            <Header />
            </div>
            <div className="flex flex-col relative lg:min-h-screen w-full bg-[radial-gradient(circle_farthest-side_at_50%_20%,rgba(0,99,200,0.5),transparent_140%)] pt-20">
                <div className="flex flex-col lg:px-32 xl:px-64 gap-3 lg:gap-6 mt-16">
                    <h1 className="text-4xl md:text-6xl 3xl:text-8xl text-center font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] bg-clip-text text-transparent" style={{
                        backgroundImage:
                        "linear-gradient(to bottom, #f2f2f2 50%, transparent)",
                    }}>Wuwa.Network</h1>
                    <h1 className="text-md md:text-xl 3xl:text-3xl text-center opacity-50 mb-8">June 2025 - September 2025</h1>
                    <div className="rounded-[32px] md:p-4 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all
                    duration-300 hover:-translate-y-1 hover:border-[#5a5a5a] hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]">
                    
                        <div className="relative flex overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] w-full">
                            <Image
                                src="/WuwaHomepage.png"
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
                    <h2 className="text-white text-lg 3xl:text-2xl">Vision</h2>
                    <p className="text-white opacity-60 text-md 3xl:text-xl">One day, I wanted to showcase my character builds from a game called Wuthering Waves to my friends. I looked for websites to do so and the few I found were inefficient.</p>
                    <p className="text-white opacity-60 text-md 3xl:text-xl">The websites either had fully manual input or had an inaccurate scanner.</p>
                    <p className="text-white opacity-60 text-md 3xl:text-xl">As a challenge, I decided to make a website to solve these problems. It would be fully automatic with a singular upload and the scanner would be fine-tuned to ensure accuracy.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-white text-lg">Overview</h2>
                    <h2 className="text-white opacity-60 text-md 3xl:text-xl">- Allows users to upload an image of their in-game stats and extract data using Optical Character Recognition (OCR) with ~97% accuracy (~100% with post-processing).</h2>
                    <h2 className="text-white opacity-60 text-md 3xl:text-xl">- 120+ unique data points are compiled and summarized in a card with total values and a stylish display.</h2>
                    <h2 className="text-white opacity-60 text-md 3xl:text-xl">- Intricate testing done through voluntary users in an online community.</h2>
                </div>
            </div>
            <div className="flex flex-col lg:px-32 xl:px-64 gap-16 py-16 w-full">
                <div className="flex flex-col items-center gap-6">
                    <h2 className="text-white font-bold text-2xl 3xl:text-3xl">Highlights</h2>
                    <div className="rounded-[32px] p-4 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] w-full">
                    
                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/WuwaNetworkExample1.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">01: Final Output Example</h2>

                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/WuwaNetworkExample2.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">02: Showcase of Different Outputs</h2>

                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/WuwaNetworkExample3.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">03: Generator Page</h2>

                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/WuwaNetworkExample4.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">04: Users can confirm their stats before generating the card.</h2>

                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/WuwaNetworkExample5.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">05: FAQ Page</h2>

                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/WuwaNetworkExample6.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">06: A few questions users may have.</h2>

                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/WuwaNetworkExample7.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">07: Project Resources Page</h2>

                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/WuwaNetworkExample8.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 text-end">08: A few resources to provide the user with a look behind-the-scenes of my project including timeline of events and ideas.</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}