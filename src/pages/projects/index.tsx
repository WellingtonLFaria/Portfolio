import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Page from "@/components/page";
import Titulo from "@/components/titulo";
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
        <Page>
            <main className="px-10 gap-5 h-5/6 flex flex-col justify-center md:w-3/4 md:m-auto">
                <Titulo>Projects</Titulo>
                <div className="flex flex-col gap-3 text-xl">

                </div>
            </main>
        </Page>
    );
}