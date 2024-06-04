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

export default function Home() {
    return (
        <div className={`${jetbrains_mono.variable} ${roboto.variable} font-roboto h-screen w-screen text-[#AAAAAA]`}>
            <Navbar />
            <main className="px-10 gap-5 h-5/6 flex flex-col justify-center ">
                <div className="gap-3 flex flex-col">
                    <p className="text-3xl font-jetbrains text-[#F2283C]">Hi, my name is</p>
                    <h1 className="text-5xl">Wellington Luiz de Faria</h1>
                    <h2 className="text-4xl font-jetbrains text-[#875AFB]">Software Developer</h2>
                </div>
                <div className="gap-3 text-xl xl:gap-3 xl:text-2xl flex flex-col text-justify">
                    <p>Currently studying Multiplatform Software Development at Fatec São José dos Campos - Prof. Jessen Vidal.</p>
                    <p>I have been developing since 2018 when I discovered the area of ​​software development, and now studying higher education I am looking to improve my skills to grow as a developer and professional.</p>
                </div>
            </main>
        </div>
    );
}