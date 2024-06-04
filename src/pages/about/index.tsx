import "@/app/globals.css";
import Navbar from "@/components/navbar";
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
        <div className={`${jetbrains_mono.variable} ${roboto.variable} font-roboto h-screen w-screen text-[#AAAAAA]`}>
            <Navbar />
            <main className="px-10 gap-5 h-5/6 flex flex-col justify-center ">
                <h1 className="text-3xl font-jetbrains text-[#F2283C]">About me</h1>
                <div className="flex flex-col gap-3 text-xl">
                    <p>Hello! My name is Wellington Luiz de Faria and I like creating software in general. My interest in Software Development arose in 2019 when I participated in the OBI (Brazilian Informatics Olympiad) in the Initiation modality.</p>
                    <p>I'm currently studying Multiplatform Software Development at Fatec São José dos Campos - Prof. Jessen Vida, with the aim of developing my Software Development skills and growing as a professional.</p>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <div className="flex justify-between text-[#875AFB] font-jetbrains">
                        <ul className="list-disc list-inside">
                            <li>Java</li>
                            <li>SpringBoot</li>
                            <li>NextJS</li>
                        </ul>
                        <ul className="list-disc list-inside">
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