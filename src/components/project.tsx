import Link from "next/link"
import Paragraph from "./paragraph"

interface ExperiencePeriod {
  role: string
  start: string
  end?: string
}

interface ProjectData {
  name: string
  type: "academic" | "professional"
  description: string
  link?: string
  anoSemestre?: string
  academicPartner?: string
  personalContributions?: string
  technologies?: string[]
  softSkills?: string[]
  whatCanImprove?: string[]
  periods?: ExperiencePeriod[]
}

type Props = { project: ProjectData }

export default function Project({ project }: Props) {
  return (
    <div className="text-white font-jetbrains flex flex-col gap-4">
      <ProjectName>
        {project.link ? (
          <Link
            href={project.link}
            target="_blank"
            className="text-indigo-500 hover:underline"
          >
            {project.name}
            {project.anoSemestre && ` - ${project.anoSemestre}`}
          </Link>
        ) : (
          <span>
            {project.name}
            {project.anoSemestre && ` - ${project.anoSemestre}`}
          </span>
        )}
      </ProjectName>

      {project.type === "professional" && project.periods && (
        <div>
          <ProjectTopic>Período:</ProjectTopic>
          <ul className="text-xl list-disc list-inside">
            {project.periods.map((period, index) => (
              <li key={index}>
                <strong>{period.role}</strong> — {period.start}{" "}
                {period.end ? `a ${period.end}` : "(atual)"}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.academicPartner && (
        <div>
          <ProjectTopic>Parceiro acadêmico:</ProjectTopic>
          <Paragraph>{project.academicPartner}</Paragraph>
        </div>
      )}

      <div>
        <ProjectTopic>
          {project.type === "professional"
            ? "Descrição da experiência:"
            : "Objetivo do projeto:"}
        </ProjectTopic>
        <Paragraph>{project.description}</Paragraph>
      </div>

      {project.personalContributions && (
        <div>
          <ProjectTopic>
            {project.type === "professional"
              ? "Minhas responsabilidades:"
              : "Minhas contribuições:"}
          </ProjectTopic>
          <Paragraph>{project.personalContributions}</Paragraph>
        </div>
      )}

      {project.technologies && (
        <div>
          <ProjectTopic>Tecnologias:</ProjectTopic>
          <List elements={project.technologies} />
        </div>
      )}

      {project.softSkills && (
        <div>
          <ProjectTopic>
            Soft Skills que eu desenvolvi durante o projeto:
          </ProjectTopic>
          <List elements={project.softSkills} />
        </div>
      )}
      {project.whatCanImprove && (
        <div>
          <ProjectTopic>
            O que pode melhorar para o próximo projeto:
          </ProjectTopic>
          <List elements={project.whatCanImprove} />
        </div>
      )}
    </div>
  )
}

function ProjectName({ children }: { children: React.ReactNode }) {
  return <h4 className="text-2xl 2xl:text-4xl">{children}</h4>
}

function ProjectTopic({ children }: { children: React.ReactNode }) {
  return <h5 className="text-xl 2xl:text-2xl mb-2">{children}</h5>
}

function List({ elements }: { elements: string[] }) {
  return (
    <ul className="text-xl 2xl:text-2xl list-disc list-inside">
      {elements.map((element) => (
        <li key={element}>{element}</li>
      ))}
    </ul>
  )
}
