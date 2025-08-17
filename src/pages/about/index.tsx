import "@/app/globals.css"
import Navbar from "@/components/navbar"
import Page from "@/components/page"
import Paragrafo from "@/components/paragrafo"
import Titulo from "@/components/titulo"
import { JetBrains_Mono, Roboto } from "next/font/google"

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
})

export default function About() {
  return (
    <div
      className={`${jetbrains_mono.variable} ${roboto.variable} font-roboto xl:h-screen`}
    >
      <Navbar />
      <main className="px-10 pb-5 gap-5 h-5/6 flex flex-col justify-center md:w-3/4 md:m-auto">
        <Titulo>Sobre</Titulo>
        <div className="flex flex-col gap-3 text-xl">
          <Paragrafo>
            Olá! Meu nome é Wellington Luiz de Faria. Tenho estudado a área de
            Desenvolvimento de Software desde 2019, expandindo continuamente
            minhas habilidades por meio de estudos e projetos reais.
          </Paragrafo>
          <Paragrafo>
            Atualmente, estou cursando Desenvolvimento de Software
            Multiplataforma na Fatec São José dos Campos - Prof. Jessen Vidal,
            com foco em aprimorar minha expertise técnica e crescer como
            profissional.
          </Paragrafo>
          <Paragrafo>
            Aqui estão algumas das tecnologias com as quais tenho trabalhado
            recentemente:
          </Paragrafo>
          <div className="flex flex-wrap justify-between text-[#875AFB] font-jetbrains">
            <ul className="list-disc list-inside text-2xl 2xl:text-4xl">
              <li>Django</li>
              <li>Python</li>
              <li>NextJS</li>
            </ul>
            <ul className="list-disc list-inside text-2xl 2xl:text-4xl">
              <li>React</li>
              <li>FastAPI</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
