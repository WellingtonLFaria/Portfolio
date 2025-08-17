import "@/app/globals.css"
import Navbar from "@/components/navbar"
import Page from "@/components/page"
import Paragrafo from "@/components/paragrafo"
import Titulo from "@/components/titulo"
import { JetBrains_Mono, Roboto } from "next/font/google"
import Link from "next/link"

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
})

export default function Contact() {
  return (
    <Page>
      <main className="px-10 gap-5 h-5/6 flex flex-col justify-center md:w-3/4 md:m-auto">
        <Titulo>Contato</Titulo>
        <div className="text-xl flex flex-col gap-5">
          <Paragrafo>Minhas redes sociais:</Paragrafo>
          <ul className="text-white text-2xl 2xl:text-3xl">
            <li className="hover:text-[#875AFB] hover:ml-3 transition-all ease-in-out">
              <Link
                href="https://instagram.com/wellingtonfarial"
                target="_blank"
              >
                ▶ Instagram
              </Link>
            </li>
            <li className="hover:text-[#875AFB] hover:ml-3 transition-all ease-in-out">
              <Link
                href="https://linkedin.com/in/wellingtonlfaria/"
                target="_blank"
              >
                ▶ LinkedIn
              </Link>
            </li>
            <li className="hover:text-[#875AFB] hover:ml-3 transition-all ease-in-out">
              <Link href="https://github.com/WellingtonLFaria" target="_blank">
                ▶ GitHub
              </Link>
            </li>
          </ul>
          <div className="flex justify-center">
            <Link
              href="mailto:wellingtonll.faria@gmail.com"
              className="p-2 border-[#875AFB] border-2 font-jetbrains text-[#875AFB] hover:scale-110 transition-all ease-in-out hover:bg-[rgba(136,90,251,0.30)] text-2xl 2xl:text-4xl"
            >
              Mande um olá
            </Link>
          </div>
        </div>
      </main>
    </Page>
  )
}
