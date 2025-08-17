import "@/app/globals.css"
import Navbar from "@/components/navbar"
import Titulo from "@/components/titulo"
import Subtitulo from "@/components/subtitulo"
import { JetBrains_Mono, Roboto } from "next/font/google"
import Paragrafo from "@/components/paragrafo"
import Page from "@/components/page"

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
})

export default function Home() {
  return (
    <Page>
      <main className="px-10 pt-5 gap-5 h-5/6 flex flex-col justify-center md:w-3/4 md:m-auto">
        <div className="gap-3 flex flex-col">
          <Subtitulo>Olá, meu nome é</Subtitulo>
          <h1 className="text-5xl xl:text-6xl 2xl:text-9xl text-white">
            Wellington Luiz de Faria
          </h1>
          <Titulo>Desenvolvedor de Software</Titulo>
        </div>
        <div className="gap-3 xl:gap-3 flex flex-col">
          <Paragrafo>
            Atualmente cursando Desenvolvimento de Software Multiplataforma na
            Fatec São José dos Campos - Prof. Jessen Vidal.
          </Paragrafo>
          <Paragrafo>
            Descobri a área de Desenvolvimento de Software em 2019 e, desde
            então, venho estudando e participando de projetos reais para
            aprimorar continuamente meus conhecimentos técnicos. Atualmente,
            curso Desenvolvimento de Software Multiplataforma (DSM) na Fatec São
            José dos Campos – Prof. Jessen Vidal, onde aprofundo meus
            conhecimentos em tecnologias modernas e boas práticas de
            desenvolvimento.
          </Paragrafo>
        </div>
      </main>
    </Page>
  )
}
