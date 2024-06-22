import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Titulo from "@/components/titulo";
import Subtitulo from "@/components/subtitulo";
import { JetBrains_Mono, Roboto } from "next/font/google";
import Paragrafo from "@/components/paragrafo";
import Page from "@/components/page";

const jetbrains_mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains"
});

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-roboto"
});

export default function Home() {
    return (
        <Page>
            <main className="px-10 pt-5 gap-5 h-5/6 flex flex-col justify-center md:w-3/4 md:m-auto">
                <div className="gap-3 flex flex-col">
                    <Subtitulo>Hi, my name is</Subtitulo>
                    <h1 className="text-5xl xl:text-9xl text-white">Wellington Luiz de Faria</h1>
                    <Titulo>Software Developer</Titulo>
                </div>
                <div className="gap-3 xl:gap-3 flex flex-col">
                    <Paragrafo>Currently studying Multiplatform Software Development at Fatec São José dos Campos - Prof. Jessen Vidal.</Paragrafo>
                    <Paragrafo>I have been developing since 2018 when I discovered the area of ​​software development, and now studying higher education I am looking to improve my skills to grow as a developer and professional.</Paragrafo>
                </div>
            </main>
        </Page>
    );
}