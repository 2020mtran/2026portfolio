import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProjectCardProps = {
    image: string;
    title: string;
    description: string;
    iconsArray: Array<string>;
    githubLink: string;
    pageLink: string;
}

export default function ProjectCard({
    image, title, description, iconsArray, githubLink, pageLink,
}: ProjectCardProps) {

    const router = useRouter();

    return (
        <div onClick={() => router.push(pageLink)} className="cursor-pointer rounded-[32px] p-2 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all
            duration-300 hover:-translate-y-1 hover:border-[#5a5a5a] hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]">
            
            <div className="relative flex flex-col xl:flex-row overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] min-h-87.5 w-full">

                {/* Image Side */}
                <div className="relative basis-[65%] overflow-hidden [clip-path:none] xl:[clip-path:polygon(0_0,92%_0,88%_100%,0_100%)]">

                    <Image
                        src={image}
                        alt="Project Screenshot"
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover"
                        />

                    {/* Diagonal Divider */}
                    {/* <div
                        className="absolute top-0 -right-px h-full w-20"
                        style={{
                            clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        }}
                    /> */}
                </div>

                {/* Content Side */}
                <div className="relative w-full xl:basis-[35%] p-8 sm:p-6 xl:py-8 xl:pr-8 flex flex-col">

                    <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-300">
                        {title}
                    </h2>

                    {/* Description Header */}
                    <div className="flex items-center gap-3 mt-6">
                        <div className="w-8 h-0.5 bg-[#f2f2f2cc]" />

                        <span className="uppercase tracking-[0.2em] text-[#f2f2f2cc] font-semibold text-xs sm:text-sm">
                            Description
                        </span>
                    </div>

                    <p className="mt-2 text-base sm:text-xl text-[#f2f2f280]">
                        {description}
                    </p>

                    {/* Tech Header */}
                    <div className="flex items-center gap-3 mt-6">
                        <div className="w-8 h-0.5 bg-[#f2f2f2cc]" />

                        <span className="uppercase tracking-[0.2em] text-[#f2f2f2cc] font-semibold">
                            Built With
                        </span>
                    </div>

                    {/* Tech Icons */}
                    <div className="flex flex-wrap gap-4 mt-2">
                        {iconsArray.map((icon, index) => (
                            <Image
                                key={index}
                                src={icon}
                                alt="Technology Icon"
                                width={40}
                                height={40}
                            />
                        ))}

                        <a
                        href={githubLink}
                        target="_blank"
                        className="xl:ml-auto"
                        >
                            <FaGithub className="text-4xl text-white hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}