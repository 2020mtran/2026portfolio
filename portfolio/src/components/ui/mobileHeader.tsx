import Link from "next/link";

export default function MobileHeader() {
    return (
        <header className="fixed top-0 z-50 w-full">
            <div className="max-w-4xl flex lg:hidden items-center justify-between px-3 my-5">
                <div className="flex items-center gap-3 px-2 py-2.5 
                rounded-full border border-white/10 
                bg-white/5 backdrop-blur-2xl backdrop-saturate-150 
                shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all active:scale-95">
                    <button className="flex items-center px-5 py-2.5 
                    rounded-full bg-white/5 backdrop-blur-2xl backdrop-saturate-150 
                    shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all">About</button>
                    <button className="flex items-center px-5 py-2.5 
                    rounded-full
                    transition-all">Projects</button>
                </div>
            </div>
        </header>
    )
}