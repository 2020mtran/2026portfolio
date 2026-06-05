import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='flex flex-col w-full px-32 pt-16 pb-8 border-t border-[#f2f2f21a]'>
            <div className='flex flex-col gap-5'>
                <div className="flex flex-row gap-5">
                <a
                href="https://github.com/2020mtran"
                target="_blank"
                className="hover:scale-110 transition-transform inline-block"
                >
                    <FaGithub className="text-4xl text-white" />
                </a>
                <a
                href="https://www.linkedin.com/in/2020mtran/"
                target="_blank"
                >
                    <FaLinkedin className="text-4xl text-white hover:scale-110 transition-transform" />
                </a>
                </div>
                <p className='text-white text-left text-md'>All rights reserved. Copyright © 2026 Matthew Tran</p>
            </div>
        </div>
    );
}