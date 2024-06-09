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

export default function Contact() {
    return (
        <Page>
            <main className="px-10 gap-5 h-5/6 flex flex-col justify-center md:w-3/4 md:m-auto">
                <Titulo>Contact</Titulo>
                <div className="text-xl flex flex-col gap-5">
                    <Paragrafo>Here are my social networks:</Paragrafo>
                    <ul className="text-[#AAAAAA]">
                        <li className="hover:text-[#875AFB] hover:ml-3 transition-all ease-in-out"><a href="https://instagram.com/wellingtonfarial" target="_blank">▶ Instagram</a></li>
                        <li className="hover:text-[#875AFB] hover:ml-3 transition-all ease-in-out"><a href="https://linkedin.com/in/wellingtonlfaria/" target="_blank">▶ LinkedIn</a></li>
                        <li className="hover:text-[#875AFB] hover:ml-3 transition-all ease-in-out"><a href="https://github.com/WellingtonLFaria" target="_blank">▶ GitHub</a></li>
                    </ul>
                    <Paragrafo>Send me an email, I'm looking for opportunities to be part of a company that will advance my career as a Software Developer.</Paragrafo>
                    <div className="flex justify-center">
                        <a href="mailto:wellingtonll.faria@gmail.com" className="p-2 border-[#875AFB] border-2 font-jetbrains text-[#875AFB] hover:scale-110 transition-all ease-in-out hover:bg-[rgba(136,90,251,0.30)]">Say hello</a>
                    </div>
                </div>
            </main>
        </Page>
    );
}