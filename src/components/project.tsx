import Link from "next/link"

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
    <div className="project text-white font-jetbrains flex flex-col gap-10">
      <h4 className="text-3xl 2xl:text-5xl">
        <Link
          href={project.link}
          target="_blank"
          className="text-indigo-500 hover:underline"
        >
          {project.name} - {project.anoSemestre}
        </Link>
      </h4>
      <div>
        <h5 className="text-2xl 2xl:text-4xl mb-2">Parceiro acadêmico:</h5>
        <p className="font-roboto text-xl 2xl:text-3xl">
          {project.academicPartner}
        </p>
      </div>
      <div>
        <h5 className="text-2xl 2xl:text-4xl mb-2">Objetivo do projeto:</h5>
        <p className="font-roboto text-xl 2xl:text-3xl">
          {project.description}
        </p>
      </div>
      <div>
        <h5 className="text-2xl 2xl:text-4xl mb-2">Minhas contribuições:</h5>
        <p className="font-roboto text-xl 2xl:text-3xl">
          {project.personalContributions}
        </p>
      </div>
      <div>
        <h5 className="text-2xl 2xl:text-4xl mb-2">Tecnologias:</h5>
        <ul className="text-xl 2xl:text-3xl list-disc list-inside flex flex-col xl:h-28 flex-wrap">
          {project.technologies.map((technologie) => (
            <li>{technologie}</li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className="text-2xl 2xl:text-4xl mb-2">
          Soft Skills que eu desenvolvi durante o projeto:
        </h5>
        <ul className="text-xl 2xl:text-3xl list-disc list-inside">
          {project.softSkills.map((softSkill) => (
            <li>{softSkill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className="text-2xl 2xl:text-4xl mb-2">
          O que pode melhorar para o próximo projeto:
        </h5>
        <ul className="text-xl 2xl:text-3xl list-disc list-inside">
          {project.whatCanImprove.map((whatCanImprov) => (
            <li>{whatCanImprov}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
