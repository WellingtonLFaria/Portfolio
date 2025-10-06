import "@/app/globals.css"
import Title from "@/components/title"
import Subtitle from "@/components/subtitle"
import { JetBrains_Mono, Roboto } from "next/font/google"
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
        <div className="gap-20 flex">
          <span className="gap-3 flex flex-col">
            <Subtitle>Olá, meu nome é</Subtitle>
            <h1 className="text-4xl xl:text-5xl 2xl:text-8xl text-white">
              Wellington Luiz de Faria
            </h1>
            <Title>Desenvolvedor de Software</Title>
          </span>
          <img
            src="/images/perfil.jpg"
            alt="Foto de perfil"
            className="w-50 h-50 rounded-full object-cover"
          />
        </div>
      </main>
    </Page>
  )
}
