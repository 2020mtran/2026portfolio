"use client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";


export default function WuwaNetwork() {

    return (
        <div className="flex flex-col min-h-screen items-center justify-center gap-16 overflow-hidden relative w-full">
            <Header />
            <div className="flex flex-col relative min-h-screen w-full bg-[radial-gradient(circle_farthest-side_at_50%_20%,_rgba(0,99,155,0.5),_transparent_140%)] pt-20">
                <div className="flex flex-col px-32 gap-16 mt-20">
                    <h1 className="text-4xl xl:text-6xl text-center font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] bg-clip-text text-transparent" style={{
                        backgroundImage:
                        "linear-gradient(to bottom, #f2f2f2 50%, transparent)",
                    }}>Wuwa.Network</h1>
                </div>
                <div className="z-2 opacity-20 mix-blend-overlay bg-[url('/noise.png')] [background-size:240px] absolute inset-0 pointer-events-none" />
                <div className="z-4 bg-[linear-gradient(to_bottom,transparent,var(--background))] h-60 absolute inset-x-0 bottom-0 top-auto" />
            </div>
            <Footer />
        </div>
    );

}