import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full px-12 my-8">
            <div className="flex items-center justify-between w-full">
                <Link href="/" className="text-gradient text-xl font-bold">Matthew Tran</Link>
                <nav className="flex gap-6 text-sm">
                    <Link href="/about">About</Link>
                    <Link href="/projects">Projects</Link>
                    {/* <p>Contact</p> */}
                </nav>
            </div>
        </header>
    )
}