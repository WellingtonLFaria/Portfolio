import Link from "next/link"
import Paragraph from "./paragraph"

interface ProjectData {
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

type Props = {
  project: ProjectData
}

export default function Project({ project }: Props) {
  return (
    <div className="text-white font-jetbrains flex flex-col gap-4">
      <ProjectName>
        <Link
          href={project.link}
          target="_blank"
          className="text-indigo-500 hover:underline"
        >
          {project.name} - {project.anoSemestre}
        </Link>
      </ProjectName>
      <div>
        <ProjectTopic>Parceiro acadêmico:</ProjectTopic>
        <Paragraph>{project.academicPartner}</Paragraph>
      </div>
      <div>
        <ProjectTopic>Objetivo do projeto:</ProjectTopic>
        <Paragraph>{project.description}</Paragraph>
      </div>
      <div>
        <ProjectTopic>Minhas contribuições:</ProjectTopic>
        <Paragraph>{project.personalContributions}</Paragraph>
      </div>
      <div>
        <ProjectTopic>Tecnologias:</ProjectTopic>
        <List elements={project.technologies} />
      </div>
      <div>
        <ProjectTopic>
          Soft Skills que eu desenvolvi durante o projeto:
        </ProjectTopic>
        <List elements={project.softSkills} />
      </div>
      <div>
        <ProjectTopic>O que pode melhorar para o próximo projeto:</ProjectTopic>
        <List elements={project.whatCanImprove} />
      </div>
    </div>
  )
}

interface ProjectNameProps {
  children: JSX.Element
}

function ProjectName({ children }: ProjectNameProps) {
  return <h4 className="text-2xl 2xl:text-4xl">{children}</h4>
}

interface ProjectTopicProps {
  children: JSX.Element | string
}

function ProjectTopic({ children }: ProjectTopicProps) {
  return <h5 className="text-xl 2xl:text-2xl mb-2">{children}</h5>
}

interface ListProps {
  elements: string[]
}

function List({ elements }: ListProps) {
  return (
    <ul className="text-xl 2xl:text-2xl list-disc list-inside">
      {elements.map((element) => (
        <li key={element}>{element}</li>
      ))}
    </ul>
  )
}
