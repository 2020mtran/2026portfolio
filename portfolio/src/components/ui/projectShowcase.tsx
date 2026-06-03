import Image from "next/image";

type ProjectCardProps = {
    image: string;
    title: string;
    description: string;
    iconsArray: Array<string>;
}

export default function ProjectCard({
    image, title, description, iconsArray,
}: ProjectCardProps) {

    return (
        <div className="relative flex overflow-hidden rounded-3xl bg-[linear-gradient(190deg,#252525,#121212)] border border-[#3d3d3d] shadow-[0_0_40px_rgba(255,255,255,0.03)] min-h-87.5 w-full">

        {/* Image Side */}
        <div className="relative basis-[65%] overflow-hidden" style={{
            clipPath: "polygon(0 0, 92% 0, 88% 100%, 0 100%)",
        }}>

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
        <div className="relative basis-[40%] p-10 flex flex-col">

            <h2 className="text-4xl font-bold text-gray-300">
                {title}
            </h2>

            {/* Description Header */}
            <div className="flex items-center gap-3 mt-6">
                <div className="w-8 h-0.5 bg-[#f2f2f2cc]" />

                <span className="uppercase tracking-[0.2em] text-[#f2f2f2cc] font-semibold">
                    Description
                </span>
            </div>

            <p className="mt-2 text-lg text-[#f2f2f280]">
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
            <div className="flex gap-4 mt-2">
                {iconsArray.map((icon, index) => (
                    <Image
                        key={index}
                        src={icon}
                        alt="Technology Icon"
                        width={40}
                        height={40}
                    />
                ))}
            </div>

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