interface Project {
    name: string,
    anoSemestre: string,
    academicPartner: string,
    description: string,
    personalContributions: string,
    technologies: string[],
    softSkills: string[],
    whatCanImprove: string[],
    link: string
}

export const projects: Project[] = [
    {
        name: "DataSars",
        anoSemestre: "2023-1",
        academicPartner: "Vanguarda",
        description: 'For Rede Vanguarda journalists who wish to access, view and analyze COVID Longa data, "Data-SARS" is a website that allows easy access to information related to COVID Longa. Unlike some sites that propagate Fake News and that do not have search filters, our product provides data in a way that is easy to understand and analyze, since our data is authentic and we have a minimalist interaction area.',
        personalContributions: "In this project I developed most of the Back-end which was made in Flask, I was responsible for the entire data scraping process which was carried out using the Selenium library, I was also responsible for the graphs made using ChartJS.",
        technologies: [
            "GIT",
            "Python",
            "Flask",
            "Pandas",
            "Selenium",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        softSkills: [
            "Communication",
            "Collaboration",
            "Team work"
        ],
        whatCanImprove: [
            "Planning",
            "Knowledge of the technologies used in the project",
            "Communication"
        ],
        link: "https://github.com/Grupo-Syntax-Squad/API"
    },
    {
        name: "CallGenie",
        anoSemestre: "2023-2",
        academicPartner: "FATEC",
        description: 'For companies looking to implement solutions for managing service calls, "CallGenie" is a CRUD system that allows better management of calls, with a minimalist interaction area and documents that help the user to use the system. In this project, we implemented the system for a fictitious computer store, however, our system can be implemented in any area, as long as there is difficulty in managing calls.',
        personalContributions: "In this project I developed much of the Back-end using Express and helped integrate the Front-end with the Back-end.",
        technologies: [
            "GIT",
            "HTML",
            "CSS",
            "React",
            "JavaScript",
            "TypeScript",
            "Express",
            "Sequelize"
        ],
        softSkills: [
            "Adaptability",
            "Ability to solve problems"
        ],
        whatCanImprove: [
            "Planning",
            "Communication"
        ],
        link: "https://github.com/Grupo-Syntax-Squad/CallGenie"
    },
    {
        name: "AssetBox",
        anoSemestre: "2024-1",
        academicPartner: "Youtan",
        description: "The project aims to solve problems in asset management control of any companies that use the system. In this sense, the application must contain interfaces for monitoring, registration and control over assets, also providing options for their delegation and manipulation. Above all, it is also crucial to generate indicator reports, issue notifications regarding the status of the asset and register recipient users for the assets.",
        personalContributions: "In this project I developed a large part of the Back-end made in Java with SpringBoot, I also carried out a large part of the integration of the Front-end with the Back-end, I also developed some Front-end pages.",
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
        softSkills: [
            "Planning",
            "Work under pressure"
        ],
        whatCanImprove: [
            "Planning",
            "Time management"
        ],
        link: "https://github.com/Grupo-Syntax-Squad/AssetBox"
    }
]