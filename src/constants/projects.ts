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
        personalContributions: "In this project I acted as dev, developed most of the Back-end which was done in Flask, I was responsible for the entire data scraping process which was done using the Selenium library, I was also responsible for the charts made using ChartJS. DataSars was my first development experience in a development team, and with the agile Scrum methodology, so several difficulties arose during the development of the project, including lack of communication with the team, lack of organization, lack of knowledge, sometimes the team seemed lost and not knowing which way to go to continue the project, taking into account that I was not the only one who was adapting to this way of working in a team, the project as a whole was very disorganized, but in the end everything went well and we managed to deliver a good project.",
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
        personalContributions: "In this project, I developed much of the back-end using Express and assisted in integrating the front-end with the back-end. The main difficulty of the project was primarily related to a lack of knowledge of the adopted technologies in the solution, which delayed me significantly and also slowed down the team.",
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
        personalContributions: "In this project, I acted as the Scrum Master, developed several API endpoints in Java using SpringBoot, and also handled the integration of Front-end pages with Back-end endpoints. My biggest challenge in this project was assuming the role of Scrum Master for the first time. During the initial two sprints, I struggled significantly to gather the team and identify the issues they were facing, as communication has always been one of my weaker areas. Another challenge I encountered early on was starting the project development using a project management platform with which I wasn't familiar. This made it difficult for the team to track the project's progress. By the second sprint, I switched to a different project management platform that both the team and I felt more comfortable using.",
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
    },
    {
        name: "Tupã",
        anoSemestre: "2024-2",
        academicPartner: "Tecsus",
        description: "The project aims to create a monitoring system for low-cost weather stations, recording data from sensors such as wind, rain, humidity, temperature and pressure. The system will store history for reports and dashboards and send alerts for anomalous readings. It will be adaptable to new sensors and will include mathematical explanations of the calculations involved.",
        personalContributions: "In this project, I worked on the development of endpoints in the backend, using Django ORM to manage interaction with the database. I created the Consumer service responsible for receiving, processing and storing data sent by weather stations. Furthermore, I developed the embedded system that integrates the sensors and enables data collection at the stations.",
        technologies: [
            "GIT",
            "CSS",
            "TailwindCSS",
            "NextJS",
            "HighCharts",
            "React",
            "TypeScript",
            "Django",
            "Python"
        ],
        softSkills: [
            "Planning",
            "Work under pressure"
        ],
        whatCanImprove: [
            "Planning",
            "Time management"
        ],
        link: "https://github.com/Grupo-Syntax-Squad/Tupan"
    }
]