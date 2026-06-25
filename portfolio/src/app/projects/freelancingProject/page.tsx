"use client";
import Header from "@/components/ui/header";
import MobileHeader from "@/components/ui/mobileHeader";
import Footer from "@/components/ui/footer";
import Image from "next/image";


export default function freelancingProject() {

    return (
        <div className="flex flex-col min-h-screen items-center justify-center overflow-hidden relative w-full pb-8">
            <div className="flex md:hidden w-full">
                <MobileHeader />
            </div>
            <div className="hidden md:flex w-full">
                <Header />
            </div>
            <div className="flex flex-col relative lg:min-h-screen w-full bg-[radial-gradient(circle_farthest-side_at_50%_20%,rgba(229,57,53,0.5),transparent_140%)] pt-20">
                <div className="flex flex-col lg:px-32 xl:px-64 gap-3 lg:gap-6 mt-16">
                    <h1 className="text-4xl md:text-6xl 3xl:text-8xl text-center font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] bg-clip-text text-transparent" style={{
                        backgroundImage:
                        "linear-gradient(to bottom, #f2f2f2 50%, transparent)",
                    }}>Freelancing Project</h1>
                    <h1 className="text-md md:text-xl 3xl:text-3xl text-center opacity-50 mb-8">February 2025 - May 2025</h1>
                    <div className="rounded-[32px] md:p-4 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all
                    duration-300 hover:-translate-y-1 hover:border-[#5a5a5a] hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]">
                    
                        <div className="relative flex overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] w-full">
                            <Image
                                src="/EatWithEmilyHomepage.png"
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
                    <p className="text-white opacity-60 text-md 3xl:text-xl">A client wanted me to do a freelacning project for her. She had a very poorly made website made by BlueHost. There were tons of pop-up ads and elements were misaligned all over. She even had to pay over a hundred dollars a year for hosting services.</p>
                    <p className="text-white opacity-60 text-md 3xl:text-xl">The job I was given was to recreate the website from scratch and also find a way to reduce hosting prices.</p>
                    <p className="text-white opacity-60 text-md 3xl:text-xl">The site is still up today and is still being maintained by me.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-white text-lg">Overview</h2>
                    <h2 className="text-white opacity-60 text-md 3xl:text-xl">- Including dynamic content rendering of ~150 pages and cloud databasing, upgraded client’s recipe site from template to fully custom crafted. </h2>
                    <h2 className="text-white opacity-60 text-md 3xl:text-xl">- Migrated hosting to Netlify, cutting hosting costs by approximately 90%. </h2>
                    <h2 className="text-white opacity-60 text-md 3xl:text-xl">- Projected yearly revenue increase of $500-$1000+ from Google Adsense alone.</h2>
                </div>
            </div>
            <div className="flex flex-col lg:px-32 xl:px-64 gap-16 py-16 w-full">
                <div className="flex flex-col items-center gap-6">
                    <h2 className="text-white font-bold text-2xl 3xl:text-3xl">Highlights</h2>
                    <div className="rounded-[32px] p-4 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] w-full">
                    
                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/FreelancingProjectExample1.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover brightness-85"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">01: Homepage</h2>

                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/FreelancingProjectExample2.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover brightness-85"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">02: Homepage continued</h2>

                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/FreelancingProjectExample3.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover brightness-85"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">03: Recipe Catalog</h2>

                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/FreelancingProjectExample4.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover brightness-85"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">04: Another recipe catalog</h2>

                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/FreelancingProjectExample5.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover brightness-85"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">05: Recipe page</h2>

                        <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] lg:min-h-87.5 w-full">
                            <Image
                                src="/FreelancingProjectExample6.png"
                                alt="Project Screenshot"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover brightness-85"
                            />
                        </div>
                        <h2 className="text-white opacity-50 text-xs 3xl:text-lg pt-4 pb-10 text-end">06: Recipe page continued</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}