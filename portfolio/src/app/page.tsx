import Image from "next/image";

export default function Home() {

  const techStack = [
    { name: "Nextjs", icon: "/nextjs-original.svg" },
    { name: "React", icon: "/nextjs-original.svg" },
    { name: "JavaScript", icon: "/nextjs-original.svg" },
    { name: "TailwindCSS", icon: "/nextjs-original.svg" },
    { name: "React Native", icon: "/nextjs-original.svg" },
    { name: "HTML", icon: "/nextjs-original.svg" },
    { name: "CSS", icon: "/nextjs-original.svg" },
    { name: "Python", icon: "/nextjs-original.svg" },
    { name: "AWS", icon: "/nextjs-original.svg" },
    { name: "MongoDB", icon: "/nextjs-original.svg" },
    { name: "Firebase", icon: "/nextjs-original.svg" },
    { name: "SQL", icon: "/nextjs-original.svg" },
  ]

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-15">

      {/* container for hero section mobile vers. */}
      <div className="flex flex-col lg:hidden">

        {/* container for textside */}
          <div className="flex flex-col items-center gap-10 m-5">
            <h2 className="text-2xl text-left w-[80%] sm:w-[60%] self-baseline">Masters Computer Science Student</h2>
            <h1 className="text-6xl text-center font-inter font-bold">Matthew Tran</h1>
            <h2 className="text-2xl text-right w-[90%] sm:w-[60%] self-end">Software Engineering & Web Development</h2>
          </div>

        {/* container for 3d models */}



      </div>

      {/* container for hero section pc vers. */}
      <div className="hidden lg:flex flex-row gap-5">

        {/* container for textside */}
          <div className="flex flex-col gap-1 m-5 self-center">
            <h1 className="text-gradient text-6xl font-inter font-bold">Matthew Tran</h1>
            <h2 className="text-gradient text-2xl">Masters Computer Science Student</h2>
            <h2 className="text-gradient text-2xl">Software Engineering & Web Development</h2>
          </div>

        {/* container for 3d models */}
          <div className="flex">
            <Image 
              src="/WuwaHomepage.png"
              width={800}
              height={500}
              alt="Picture of my best website"
            />
          </div>


      </div>

      {/* container for tech stack */}
      <div className="flex flex-col gap-1 m-5">
        <h1 className="text-gradient text-6xl font-inter font-bold">Tech Stack</h1>

        {/* container for marquee */}
        
        
      </div>

    </div>
  );
}
