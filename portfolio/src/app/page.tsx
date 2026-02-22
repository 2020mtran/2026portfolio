import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {

  const techStack = [
    { name: "Nextjs", icon: "/nextjs-original.svg" },
    { name: "React", icon: "/react-original.svg" },
    { name: "JavaScript", icon: "/javascript-original.svg" },
    { name: "TailwindCSS", icon: "/tailwindcss-original.svg" },
    { name: "React Native", icon: "/reactnative-original.svg" },
    { name: "HTML", icon: "/html5-original.svg" },
    { name: "CSS", icon: "/css3-original.svg" },
    { name: "Python", icon: "/python-original.svg" },
    { name: "AWS", icon: "/amazonwebservices-original-wordmark.svg" },
    { name: "MongoDB", icon: "/mongodb-original.svg" },
    { name: "Firebase", icon: "/firebase-original.svg" },
    { name: "SQL", icon: "/sqlite-original.svg" },
  ]

  const techStackMobile1 = [
    { name: "Nextjs", icon: "/nextjs-original.svg" },
    { name: "React", icon: "/react-original.svg" },
    { name: "JavaScript", icon: "/javascript-original.svg" },
    { name: "TailwindCSS", icon: "/tailwindcss-original.svg" },
    { name: "HTML", icon: "/html5-original.svg" },
    { name: "CSS", icon: "/css3-original.svg" },
  ]

  const techStackMobile2 = [
    { name: "React Native", icon: "/reactnative-original.svg" },
    { name: "Python", icon: "/python-original.svg" },
    { name: "AWS", icon: "/amazonwebservices-original-wordmark.svg" },
    { name: "MongoDB", icon: "/mongodb-original.svg" },
    { name: "Firebase", icon: "/firebase-original.svg" },
    { name: "SQL", icon: "/sqlite-original.svg" },
  ]

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-16 sm:m-16">

      {/* container for hero section mobile vers. */}
      <div className="flex flex-col lg:hidden">

        {/* container for textside */}
          <div className="flex flex-col items-center gap-10 m-3 sm:m-0">
            <h2 className="text-2xl text-left w-[80%] sm:w-[60%] self-baseline">Masters Computer Science Student</h2>
            <h1 className="text-6xl text-center font-bold">Matthew Tran</h1>
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

      {/* container for tech stack mobile */}
      <div className="flex flex-col gap-5 w-full px-4 overflow-hidden lg:hidden">
        <h1 className="text-gradient text-5xl font-inter font-bold text-center">Tech Stack</h1>

        {/* container for marquee */}
        <Marquee className="" speed={30}>
          {techStackMobile1.map((tech, i) => (
            <div className="flex flex-col">
              <div
                key={i}
                className="flex items-center justify-center bg-background/50 p-2 m-5 w-20 h-20 backdrop-blur"
                title={tech.name}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-md text-center">{tech.name}</p>
            </div>
          ))}
        </Marquee>
        <Marquee className="" speed={30}>
          {techStackMobile2.map((tech, i) => (
            <div className="flex flex-col">
              <div
                key={i}
                className="flex items-center justify-center bg-background/50 p-2 m-5 w-20 h-20 backdrop-blur"
                title={tech.name}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-md text-center">{tech.name}</p>
            </div>
          ))}
        </Marquee>
        
      </div>

      {/* container for tech stack pc */}
      <div className="hidden lg:flex flex-col gap-5 w-full px-4 overflow-hidden">
        <h1 className="text-gradient text-5xl font-inter font-bold text-center">Tech Stack</h1>

        {/* container for marquee */}
        <Marquee className="" speed={30}>
          {techStack.map((tech, i) => (
            <div className="flex flex-col">
              <div
                key={i}
                className="flex items-center justify-center bg-background/50 p-2 m-5 w-20 h-20 backdrop-blur"
                title={tech.name}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-md text-center">{tech.name}</p>
            </div>
          ))}
        </Marquee>
        
      </div>

      {/* container for project section mobile */}
      <div className="flex flex-col gap-5 mb-8 lg:hidden">
        <h1 className="text-gradient text-5xl font-inter font-bold text-center">Projects</h1>
        <div className="max-w-sm rounded overflow-hidden shadow-whiteshadow-lg px-4">
          <Image 
              src="/WuwaHomepage.png"
              width={800}
              height={500}
              alt="Picture of my best website"
            />
          <div className="px-6 py-4 bg-gray-900 flex flex-col gap-2">
            <div className="font-bold text-xl">Wuwa.Network</div>
            <p className="text-gray-200 text-base">
              Users upload an image of their in-game stats and extract data using Optical Character Recognition (OCR) with ~100% accuracy including post-processing. 
            </p>
            <div className="flex flex-row gap-1">
              <Image
                src="/nextjs-original.svg"
                width={30}
                height={50}
                alt="NextJS Icon"
              />
              <Image
                src="/tailwindcss-original.svg"
                width={30}
                height={50}
                alt="NextJS Icon"
              />
              <Image
                src="/python-original.svg"
                width={30}
                height={50}
                alt="NextJS Icon"
              />
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-whiteshadow-lg px-4">
          <Image 
              src="/EatWithEmilyHomepage.png"
              width={800}
              height={500}
              alt="Picture of my best website"
            />
          <div className="px-6 py-4 bg-gray-900 flex flex-col gap-2">
            <div className="font-bold text-xl">EatWithEmily.com</div>
            <p className="text-gray-200 text-base">
              Freelancing project for a client who wanted her recipe website upgraded. Includes dynamic content rendering of ~150 pages, cloud databasing, and revenue-generating ads. 
            </p>
            <div className="flex flex-row gap-1">
              <Image
                src="/react-original.svg"
                width={30}
                height={50}
                alt="React Icon"
              />
              <Image
                src="/tailwindcss-original.svg"
                width={30}
                height={50}
                alt="TailwindCSS Icon"
              />
              <Image
                src="/cloudinary.svg"
                width={30}
                height={50}
                alt="Cloudinary Icon"
              />
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-whiteshadow-lg px-4">
          <Image 
              src="/OldPortfolioHomepage.png"
              width={800}
              height={500}
              alt="Picture of my best website"
            />
          <div className="px-6 py-4 bg-gray-900 flex flex-col gap-2">
            <div className="font-bold text-xl">First Personal Portfolio</div>
            <p className="text-gray-200 text-base">
              Developed a portfolio website highly inspired by Discord profile layouts. Integrated direct emailing, multiple pages, and custom SVGs. 
            </p>
            <div className="flex flex-row gap-1">
              <Image
                src="/react-original.svg"
                width={30}
                height={50}
                alt="React Icon"
              />
              <Image
                src="/css3-original.svg"
                width={30}
                height={50}
                alt="CSS Icon"
              />
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-whiteshadow-lg px-4">
          <Image 
              src="/WebsiteTemplateExample.png"
              width={800}
              height={500}
              alt="Picture of my best website"
            />
          <div className="px-6 py-4 bg-gray-900 flex flex-col gap-2">
            <div className="font-bold text-xl">Self-Made Website Templates</div>
            <p className="text-gray-200 text-base">
              Learned how to create websites using basic HTML and CSS. I went back to learn the fundamentals of web development and built some website templates as practice.
            </p>
            <div className="flex flex-row gap-1">
              <Image
                src="/html5-original.svg"
                width={30}
                height={50}
                alt="HTML Icon"
              />
              <Image
                src="/css3-original.svg"
                width={30}
                height={50}
                alt="CSS Icon"
              />
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-whiteshadow-lg px-4">
          <Image 
              src="/DiscordBotsExample.png"
              width={800}
              height={500}
              alt="Picture of my best website"
            />
          <div className="px-6 py-4 bg-gray-900 flex flex-col gap-2">
            <div className="font-bold text-xl">BlitzBot & Outrider Amber</div>
            <p className="text-gray-200 text-base">
              BlitzBot allows users to make personal gaming ranked leaderboards with friends. Outrider Amber allows users to obtain roles and ping them when new releases for a game appear.
            </p>
            <div className="flex flex-row gap-1">
              <Image
                src="/python-original.svg"
                width={30}
                height={50}
                alt="Python Icon"
              />
              <Image
                src="/firebase-original.svg"
                width={30}
                height={50}
                alt="Firebase Icon"
              />
              <Image
                src="/amazonwebservices-original-wordmark.svg"
                width={30}
                height={50}
                alt="AWS Icon"
              />
            </div>
          </div>
        </div>


      </div>


    </div>
  );
}
