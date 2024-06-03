import "../app/globals.css"
import Navbar from "@/components/navbar";
import QuickCard from "@/components/quickcard";
import { JetBrains_Mono } from "next/font/google";

const jetbrains_mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains"
})

export default function Index() {
    return (
        <main className={`${jetbrains_mono.variable} text-white`}>
            <Navbar />
            <div className="px-20 md:px-28">
                <section className="h-screen pt-36 flex flex-col gap-2 md:gap-3">
                    <h3 className="text-[#F2283C] font-jetbrains text-2xl md:text-4xl">Hi, my name is</h3>
                    <h1 className="text-4xl md:text-6xl">Wellington Luiz de Faria</h1>
                    <h2 className="text-3xl md:text-5xl font-jetbrains text-[#875afb]">Software Developer</h2>
                    <p className="text-lg md:text-2xl text-[#AAAAAA]">Currently studying Multiplatform Software Development at Fatec São José dos Campos - Prof. Jessen Vidal (3rd Semester).</p>
                    <br />
                    <p className="text-lg md:text-2xl text-[#AAAAAA]">I have been developing since 2018 when I discovered the area of  ​​software development, and now studying higher education I am looking  to improve my skills to grow as a developer and professional.</p>
                </section>
                <section id="projects" className="h-full pt-40 md:pt-36">
                    <h1 className="text-[#F2283C] font-jetbrains text-2xl md:text-4xl">Projects</h1>
                    <div className="flex justify-around flex-wrap">
                        <QuickCard link="/">a</QuickCard>
                        <QuickCard link="/">a</QuickCard>
                        <QuickCard link="/">a</QuickCard>
                        <QuickCard link="/">a</QuickCard>
                        <QuickCard link="/">a</QuickCard>
                        <QuickCard link="/">a</QuickCard>
                    </div>
                </section>
                <section id="contact" className="h-screen pt-52 md:pt-36">
                    <h1 className="text-[#F2283C] font-jetbrains text-2xl md:text-4xl">Contact</h1>
                </section>
            </div>
        </main>
    );
}