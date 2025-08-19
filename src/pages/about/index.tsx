import "@/app/globals.css"
import Navbar from "@/components/navbar"
import Page from "@/components/page"
import Paragraph from "@/components/paragraph"
import Title from "@/components/title"
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
    <Page screen={false}>
      <main className="p-10 gap-5 h-5/6 flex flex-col justify-center md:w-5/6 md:m-auto">
        <Title>Sobre mim</Title>
        <div className="flex flex-col gap-3 text-xl">
          <Paragraph>
            Olá! Meu nome é Wellington Luiz de Faria. Entrei no mundo do
            Desenvolvimento de Software em 2019 e desde então sigo aprendendo e
            colocando em prática tudo o que estudo. Hoje sou concluinte de
            Desenvolvimento de Software Multiplataforma na Fatec São José dos
            Campos – Prof. Jessen Vidal e também atuo como Desenvolvedor Júnior.
          </Paragraph>
          <Paragraph>
            Ao longo dessa jornada, já trabalhei com back-end, full-stack,
            DevOps e até sistemas embarcados, sempre buscando evoluir e me
            desafiar em diferentes contextos. Também tive a chance de assumir o
            papel de Scrum Master, o que me ajudou a desenvolver ainda mais
            minha organização e trabalho em equipe.
          </Paragraph>
          <Paragraph>
            Aqui estão algumas das tecnologias, metodologias e conceitos com os
            quais tenho sólida experiência:
          </Paragraph>
          <div className="flex flex-row flex-wrap justify-between text-[#875AFB] font-jetbrains">
            <List>
              <li>
                Desenvolvimento back-end com Python (Django, FastAPI, Flask) e
                Java (Spring Boot)
              </li>
              <li>Desenvolvimento front-end com React, Next.js, TypeScript</li>
              <li>
                Comunicação entre sistemas embarcados e APIs web (REST,
                WebSockets)
              </li>
              <li>
                Manipulação e visualização de dados (Pandas, ChartJS,
                HighCharts)
              </li>
            </List>
            <List>
              <li>Testes de integração, carga e performance (load tests)</li>
              <li>Monitoramento de dados e análise de logs</li>
              <li>Containerização e infraestrutura com Docker</li>
              <li>Controle de versão e colaboração com Git</li>
            </List>
            <List>
              <li>CI/CD e deploy de aplicações</li>
              <li>Metodologias ágeis (Scrum) e planejamento de sprints</li>
              <li>Trabalho colaborativo em equipe e resolução de problemas</li>
              <li>Desenvolvimento de interfaces responsivas e UX</li>
            </List>
          </div>
        </div>
      </main>
    </Page>
  )
}

interface ListProps {
  children: JSX.Element[]
}

function List({ children }: ListProps) {
  return (
    <ul className="list-disc list-inside text-xl 2xl:text-2xl">{children}</ul>
  )
}
