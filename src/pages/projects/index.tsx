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

export default function Projects() {
    return (
        <div className={`${jetbrains_mono.variable} ${roboto.variable} font-roboto h-screen w-screen text-[#AAAAAA]`}>
            <Navbar />
            <main className="px-10 gap-5 h-5/6 flex flex-col justify-center ">
                <h1 className="text-3xl font-jetbrains text-[#F2283C]">Projects</h1>
                <div className="flex flex-col gap-3 text-xl">

                </div>
            </main>
        </div>
    );
}