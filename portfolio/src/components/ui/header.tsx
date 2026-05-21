import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full px-12 my-8">
            <div className="flex items-center justify-between w-full">
                <h1 className="text-gradient text-xl font-bold">Matthew Tran</h1>
                <nav className="flex gap-6 text-sm">
                    <p>About</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </nav>
            </div>
        </header>
    )
}