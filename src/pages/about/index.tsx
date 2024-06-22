import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Page from "@/components/page";
import Paragrafo from "@/components/paragrafo";
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

export default function About() {
    return (
        <div className={`${jetbrains_mono.variable} ${roboto.variable} font-roboto xl:h-screen`}>
            <Navbar />
            <main className="px-10 pb-5 gap-5 h-5/6 flex flex-col justify-center md:w-3/4 md:m-auto">
                <Titulo>About me</Titulo>
                <div className="flex flex-col gap-3 text-xl">
                    <Paragrafo>Hello! My name is Wellington Luiz de Faria and I like creating software in general. My interest in Software Development arose in 2019 when I participated in the OBI (Brazilian Informatics Olympiad) in the Initiation modality.</Paragrafo>
                    <Paragrafo>I'm currently studying Multiplatform Software Development at Fatec São José dos Campos - Prof. Jessen Vida, with the aim of developing my Software Development skills and growing as a professional.</Paragrafo>
                    <Paragrafo>Here are a few technologies I’ve been working with recently:</Paragrafo>
                    <div className="flex flex-wrap justify-between text-[#875AFB] font-jetbrains">
                        <ul className="list-disc list-inside text-2xl xl:text-4xl">
                            <li>Java</li>
                            <li>SpringBoot</li>
                            <li>NextJS</li>
                        </ul>
                        <ul className="list-disc list-inside text-2xl xl:text-4xl">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}