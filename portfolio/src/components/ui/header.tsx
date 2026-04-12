import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur bg-background/70 border-b border-white/10">
            <div className="max-w-6xl hidden lg:flex items-center justify-between px-6 py-4">
                <h1 className="text-gradient text-xl font-bold">Matthew Tran</h1>
                <nav className="hidden md:flex gap-6 text-sm">
                    <p>About</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </nav>
            </div>
        </header>
    )
}