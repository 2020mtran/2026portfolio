"use client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ProjectCard from "@/components/ui/projectShowcase";


export default function Projects() {

    return (
        <div className="flex flex-col min-h-screen items-center justify-center gap-16 overflow-hidden relative w-full py-8">
            <Header />
            <div className="flex flex-col px-32 gap-16 mt-20">
                <ProjectCard 
                    image="/WuwaHomepage.png" 
                    title="Wuwa.Network" 
                    description="June 2025 - Sep. 2025 | Users upload an image of their in-game stats and extract data using Optical Character Recognition (OCR) with ~100% accuracy including post-processing."
                    iconsArray={["/nextjs-original.svg", "/tailwindcss-original.svg", "/python-original.svg"]}
                    githubLink=""
                    pageLink="projects/wuwaNetwork"
                />
                <ProjectCard 
                    image="/EatWithEmilyHomepage.png" 
                    title="Freelancing Project" 
                    description="Feb. 2025 - May 2025 | For a client who wanted her recipe website upgraded. Includes dynamic content rendering of ~150 pages, cloud databasing, and revenue-generating ads. "
                    iconsArray={["/react-original.svg", "/tailwindcss-original.svg", "/cloudinary.svg"]}
                    githubLink=""
                    pageLink="projects/freelancingProject"
                />
                <ProjectCard 
                    image="/OldPortfolioHomepage.png" 
                    title="Old Portfolio Project" 
                    description="Dec. 2024 - Jan. 2025 | Developed a portfolio website highly inspired by Discord profile layouts. Integrated direct emailing, multiple pages, and custom SVGs."
                    iconsArray={["/react-original.svg", "/css3-original.svg"]}
                    githubLink=""
                    pageLink="projects/oldPortfolio"
                />
                <ProjectCard 
                    image="/WebsiteTemplateExample.png" 
                    title="Website Templates" 
                    description="Sep. 2024 - Nov. 2024 | Learned how to create websites using basic HTML and CSS. I went back to learn the fundamentals of web development and built some website templates as practice."
                    iconsArray={["/html5-original.svg", "/css3-original.svg"]}
                    githubLink=""
                    pageLink=""
                />
                <ProjectCard 
                    image="/DiscordBotsExample.png" 
                    title="Discord Bots" 
                    description="June 2024 - July 2024 | BlitzBot allows users to make personal gaming ranked leaderboards with friends. Outrider Amber allows users to obtain roles and ping them when new releases for a game appear."
                    iconsArray={["python-original.svg", "/mongodb-original.svg"]}
                    githubLink=""
                    pageLink=""
                />
                <ProjectCard 
                    image="/MentalMe.png" 
                    title="MentalMe" 
                    description="Jan. 2024 - May 2024 | MentalMe is a mental health mobile app that reminds users to care for their mental health. Users can journal, chat with the app’s mascot, and claim daily/weekly login rewards to use on in-app purchasable cosmetics.  "
                    iconsArray={["python-original.svg", "/mongodb-original.svg"]}
                    githubLink=""
                    pageLink=""
                />
            </div>
            <Footer />
        </div>
    );

}