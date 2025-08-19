interface Project {
  name: string
  anoSemestre: string
  academicPartner: string
  description: string
  personalContributions: string
  technologies: string[]
  softSkills: string[]
  whatCanImprove: string[]
  link: string
}

interface NavbarLink {
  label: string
  reference: string
}

export const navbarLinks: NavbarLink[] = [
  {
    label: "Sobre",
    reference: "/about",
  },
  {
    label: "Projetos",
    reference: "/projects",
  },
  { label: "Contato", reference: "/contact" },
]

export const projects: Project[] = [
  {
    name: "DataSars",
    anoSemestre: "2023-1",
    academicPartner: "Vanguarda",
    description:
      'Para jornalistas da Rede Vanguarda que desejam acessar, visualizar e analisar dados da COVID Longa, o "Data-SARS" é um site que permite fácil acesso a informações relacionadas à COVID Longa. Diferente de alguns sites que propagam Fake News e não possuem filtros de pesquisa, nosso produto fornece dados de forma simples de entender e analisar, já que nossas informações são autênticas e oferecemos uma área de interação minimalista.',
    personalContributions:
      "Neste projeto atuei como desenvolvedor, desenvolvendo grande parte do Back-end em Flask. Fui responsável por todo o processo de raspagem de dados utilizando a biblioteca Selenium, além dos gráficos feitos com ChartJS. O DataSars foi minha primeira experiência em uma equipe de desenvolvimento e com a metodologia ágil Scrum, o que trouxe várias dificuldades durante o projeto, como falta de comunicação, desorganização e falta de conhecimento. Em alguns momentos, a equipe parecia perdida sem saber como avançar. Considerando que não era o único se adaptando a essa forma de trabalho em equipe, o projeto como um todo ficou bastante desorganizado, mas no final conseguimos entregar um bom resultado.",
    technologies: [
      "GIT",
      "Python",
      "Flask",
      "Pandas",
      "Selenium",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    softSkills: ["Comunicação", "Colaboração", "Trabalho em equipe"],
    whatCanImprove: [
      "Planejamento",
      "Conhecimento das tecnologias usadas no projeto",
      "Comunicação",
    ],
    link: "https://github.com/Grupo-Syntax-Squad/API",
  },
  {
    name: "CallGenie",
    anoSemestre: "2023-2",
    academicPartner: "FATEC",
    description:
      'Para empresas que buscam implementar soluções de gerenciamento de chamados, o "CallGenie" é um sistema CRUD que possibilita melhor gestão de chamados, com uma interface minimalista e documentos que auxiliam o usuário na utilização. Neste projeto, implementamos o sistema para uma loja de informática fictícia, porém ele pode ser aplicado em qualquer área que tenha dificuldades no gerenciamento de chamados.',
    personalContributions:
      "Neste projeto, desenvolvi grande parte do back-end usando Express e também auxiliei na integração do front-end com o back-end. A principal dificuldade foi a falta de conhecimento das tecnologias adotadas, o que me atrasou bastante e também impactou o ritmo da equipe.",
    technologies: [
      "GIT",
      "HTML",
      "CSS",
      "React",
      "JavaScript",
      "TypeScript",
      "Express",
      "Sequelize",
    ],
    softSkills: ["Adaptabilidade", "Capacidade de resolver problemas"],
    whatCanImprove: ["Planejamento", "Comunicação"],
    link: "https://github.com/Grupo-Syntax-Squad/CallGenie",
  },
  {
    name: "AssetBox",
    anoSemestre: "2024-1",
    academicPartner: "Youtan",
    description:
      "O projeto tem como objetivo resolver problemas de controle de gestão de ativos em empresas que utilizam o sistema. Nesse sentido, a aplicação deve conter interfaces para monitoramento, registro e controle de ativos, além de oferecer opções para delegação e manipulação. É essencial também gerar relatórios de indicadores, emitir notificações sobre o status dos ativos e cadastrar usuários responsáveis por eles.",
    personalContributions:
      "Neste projeto atuei como Scrum Master, desenvolvi diversos endpoints da API em Java com SpringBoot e também realizei a integração de páginas do Front-end com os endpoints do Back-end. Meu maior desafio foi assumir pela primeira vez o papel de Scrum Master. Durante os dois primeiros sprints, tive bastante dificuldade em reunir a equipe e identificar os problemas enfrentados, já que comunicação sempre foi uma área mais fraca para mim. Outro desafio inicial foi começar o desenvolvimento utilizando uma plataforma de gerenciamento de projetos desconhecida, o que dificultava o acompanhamento do progresso. A partir do segundo sprint, mudei para outra plataforma de gestão mais adequada, onde tanto eu quanto a equipe conseguimos trabalhar melhor.",
    technologies: [
      "GIT",
      "HTML",
      "CSS",
      "Bulma CSS",
      "React",
      "JavaScript",
      "Java",
      "SpringBoot",
    ],
    softSkills: ["Planejamento", "Trabalho sob pressão"],
    whatCanImprove: ["Planejamento", "Gestão de tempo"],
    link: "https://github.com/Grupo-Syntax-Squad/AssetBox",
  },
  {
    name: "Tupã",
    anoSemestre: "2024-2",
    academicPartner: "Tecsus",
    description:
      "O projeto tem como objetivo criar um sistema de monitoramento para estações meteorológicas de baixo custo, registrando dados de sensores como vento, chuva, umidade, temperatura e pressão. O sistema deve armazenar o histórico para relatórios e dashboards, além de enviar alertas em leituras anômalas. Ele será adaptável a novos sensores e incluirá explicações matemáticas sobre os cálculos envolvidos.",
    personalContributions:
      "Neste projeto, contribuo com o desenvolvimento de endpoints no back-end utilizando Django ORM para gerenciar a interação com o banco de dados de forma eficiente. Também desenvolvemos um serviço consumer responsável por receber, processar e armazenar os dados transmitidos pelas estações. Paralelamente, criei o sistema embarcado que integra os sensores, permitindo a coleta de dados diretamente nas estações. Além disso, atuei no time de DevOps, onde definimos diretrizes e fluxos para a realização de testes de integração — que foi o maior desafio enfrentado ao longo do projeto.",
    technologies: [
      "GIT",
      "CSS",
      "TailwindCSS",
      "NextJS",
      "HighCharts",
      "React",
      "TypeScript",
      "Django",
      "Python",
    ],
    softSkills: ["Planejamento", "Trabalho sob pressão"],
    whatCanImprove: ["Planejamento", "Gestão de tempo"],
    link: "https://github.com/Grupo-Syntax-Squad/Tupan",
  },
]

export const projectsReversed: Project[] = [...projects].reverse()
