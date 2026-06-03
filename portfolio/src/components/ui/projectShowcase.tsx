import Image from "next/image";
// import { FaGithub } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiNextdotjs,
//   SiSass,
// } from "react-icons/si";

type ProjectCardProps = {
    image: string;
    title: string;
    description: string;
}

export default function ProjectCard({
    image, title, description,
}: ProjectCardProps) {

    return (
        <div className="relative flex overflow-hidden rounded-3xl bg-zinc-100 min-h-87.5 w-full">

        {/* Image Side */}
        <div className="relative basis-[55%] overflow-hidden">

            <Image
                src={image}
                alt="Project Screenshot"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                />

            {/* Diagonal Divider */}
            <div
                className="absolute top-0 -right-px h-full w-20 bg-zinc-100"
                style={{
                    clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
            />
        </div>

        {/* Content Side */}
        <div className="relative basis-[45%] p-10 flex flex-col">

            <h2 className="text-5xl font-bold text-slate-900">
                {title}
            </h2>

            {/* Description Header */}
            <div className="flex items-center gap-3 mt-8">
            <div className="w-8 h-0.5 bg-gray-300" />

            <span className="uppercase tracking-[0.2em] text-gray-400 font-semibold">
                Description
            </span>
            </div>

            <p className="mt-4 text-2xl text-gray-600">
                {description}
            </p>

            {/* Tech Header */}
            <div className="flex items-center gap-3 mt-8">
            <div className="w-8 h-0.5 bg-gray-300" />

            <span className="uppercase tracking-[0.2em] text-gray-400 font-semibold">
                Built With
            </span>
            </div>

            {/* Tech Icons */}
            {/* <div className="flex gap-4 mt-4 text-4xl">
            <SiTypescript />
            <SiNextdotjs />
            <SiSass />
            </div> */}

            {/* Github */}
            {/* <a
            href="https://github.com"
            target="_blank"
            className="absolute bottom-8 right-8"
            >
            <FaGithub className="text-4xl text-slate-900 hover:scale-110 transition-transform" />
            </a> */}

        </div>
        </div>
    );
}