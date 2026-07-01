"use client";
import Header from "@/components/ui/header";
import MobileHeader from "@/components/ui/mobileHeader";
import Footer from "@/components/ui/footer";
import Image from "next/image";


export default function about() {

    return (
        <div className="flex flex-col min-h-screen items-center justify-center overflow-hidden relative w-full pb-8">
            <div className="flex md:hidden w-full">
                <MobileHeader />
            </div>
            <div className="hidden md:flex w-full">
                <Header />
            </div>
            <div className="flex flex-col relative lg:min-h-screen w-full bg-[radial-gradient(circle_farthest-side_at_50%_20%,rgba(255,255,255,0.1),transparent_90%)] py-20">
                <div className="flex flex-row lg:px-32 xl:px-64 gap-3 lg:gap-6 mt-16">
                    <div className="flex flex-col gap-3 lg:gap-6 w-[45%]">
                        <h1 className="text-lg self-baseline text-[#f2f2f242]">
                            <span className="text-2xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
                                •
                            </span>{" "} 
                        About Me</h1>
                        <div className="rounded-[32px] md:p-4 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all
                        duration-300 hover:-translate-y-1 hover:border-[#5a5a5a] hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]">
                            <div className="relative flex overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] w-full">
                                <Image
                                    src="/Me1.jpeg"
                                    alt="Project Screenshot"
                                    width={800}
                                    height={1200}
                                    className="w-full h-[600px] object-cover"
                                />
                            </div>
                        </div>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-12 mt-8">What have I accomplished so far?</h1>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-12 text-[#f2f2f29b]">In May 2024, I graduated from CSUF with a Bachelor's in Computer Science.</h1>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-12 text-[#f2f2f29b] mb-8">Due to health conditions during my time in university, I was not able to accomplish more that I wanted to.</h1>
                        <div className="rounded-[32px] md:p-4 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all
                        duration-300 hover:-translate-y-1 hover:border-[#5a5a5a] hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]">
                            <div className="relative flex overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] w-full">
                                <Image
                                    src="/Me3.jpg"
                                    alt="Project Screenshot"
                                    width={800}
                                    height={1200}
                                    className="w-full h-[600px] object-cover"
                                />
                            </div>
                        </div>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-12 mt-8">What am I doing now?</h1>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-12 text-[#f2f2f29b]">After taking a year and a half off of school to focus on self-improvement, I decided it was time for me to make my next major step in life.</h1>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-12 text-[#f2f2f29b]">Currently, I am purusing a Master's in Computer Science back at CSUF. I can now take the opportunities that I wished I could had taken years ago because my health has significantly improved since then.</h1>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-12 text-[#f2f2f29b] mb-8">In the Fall semester of 2026, I will be a Teaching Associate (basically a pseudo-professor), teaching Artificial Intelligence to 4th year undergraduate students and my fellow graduate student peers.</h1>
                        <div className="rounded-[32px] md:p-4 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all
                        duration-300 hover:-translate-y-1 hover:border-[#5a5a5a] hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]">
                            <div className="relative flex overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] w-full">
                                <Image
                                    src="/books.jpg"
                                    alt="Project Screenshot"
                                    width={800}
                                    height={1200}
                                    className="w-full h-[600px] object-cover"
                                />
                            </div>
                        </div>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-12 mt-8">Thank you for reading!</h1>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-12 text-[#f2f2f29b] mb-8">All these photos were taken by me during my time in university.</h1>
                    </div>
                    <div className="flex flex-col gap-3 lg:gap-6 w-[55%] py-32">
                        <h1 className="text-md md:text-xl 3xl:text-3xl text-center opacity-90 px-16 mb-12">Let's learn some things about me, shall we?</h1>
                        <div className="rounded-[32px] md:p-4 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all
                        duration-300 hover:-translate-y-1 hover:border-[#5a5a5a] hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]">
                            <div className="relative flex overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] w-full">
                                <Image
                                    src="/Me2.jpeg"
                                    alt="Project Screenshot"
                                    width={800}
                                    height={1200}
                                    className="w-full h-[600px] object-cover"
                                />
                            </div>
                        </div>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-16 mt-12">Looking for purpose in life.</h1>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-16 text-[#f2f2f29b]">During my time post-graduation, I didn't know what direction I wanted to go down in life. The only prior experience I had was a bit of web and mobile app development.</h1>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-16 text-[#f2f2f29b] mb-12">While I was still dealing with my health issues, I began to learn web development back from the basics. The Odin Project is a website that teaches the fundamentals of front-end development and it took me a couple months to get through it.</h1>
                        <div className="rounded-[32px] md:p-4 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all
                        duration-300 hover:-translate-y-1 hover:border-[#5a5a5a] hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]">
                            <div className="relative flex overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] w-full">
                                <Image
                                    src="/Me4.jpg"
                                    alt="Project Screenshot"
                                    width={800}
                                    height={1200}
                                    className="w-full h-[600px] object-cover brightness-80"
                                />
                            </div>
                        </div>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-16 mt-12">Outlook on life.</h1>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-16 text-[#f2f2f29b]">Everyday, I look back and think: "I was robbed of being able to live my life to the fullest." </h1>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-16 text-[#f2f2f29b]">Now, I cherish every single day, mostly freed from the chains of illness. Picking up the pieces and moving forward with it all . . .</h1>
                        <h1 className="text-md md:text-xl 3xl:text-3xl opacity-90 px-16 text-[#f2f2f29b] mb-12">Whenever I catch myself slowing down in life, I just remind myself that my past self wanted to be in the spot I am in right now . . . and my future self would be proud looking back at my efforts of today.</h1>
                        <div className="rounded-[32px] md:p-4 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all
                        duration-300 hover:-translate-y-1 hover:border-[#5a5a5a] hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]">
                            <div className="relative flex overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] w-full">
                                <Image
                                    src="/lamp.jpg"
                                    alt="Project Screenshot"
                                    width={800}
                                    height={1200}
                                    className="w-full h-[600px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="z-2 opacity-20 mix-blend-overlay bg-[url('/noise.png')] [background-size:240px] absolute inset-0 pointer-events-none" />
                <div className="z-4 bg-[linear-gradient(to_bottom,transparent,var(--background))] h-16 lg:h-60 absolute inset-x-0 bottom-0 top-auto" />
            </div>
            {/* <div className="flex flex-col lg:px-32 xl:px-64 gap-16 py-16 w-full">
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
            </div> */}
            <Footer />
        </div>
    );

}