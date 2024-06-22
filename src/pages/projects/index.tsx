import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Page from "@/components/page";
import Project from "@/components/project";
import Titulo from "@/components/titulo";
import { projects } from "@/constants/projects";
import { JetBrains_Mono, Roboto } from "next/font/google";

const jetbrains_mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains"
});

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-roboto"
});

export default function Projects() {
    return (
        <Page screen={false}>
            <main className="p-10 gap-5 h-5/6 flex flex-col justify-center md:w-3/4 md:m-auto">
                <Titulo>Projects</Titulo>
                <div id="projects" className="flex flex-col gap-10 text-xl">
                    {projects.map(project => (
                        <Project project={project}  />
                    ))}
                </div>
            </main>
        </Page>
    );
}