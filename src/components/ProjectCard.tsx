import { useState } from 'react'
import type { Project } from '../data/projects'
import Gallery from './Gallery'

const imageUrl = (file: string) => `${import.meta.env.BASE_URL}projekt-bilder/${file}`

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const images = (project.images ?? []).map(imageUrl)

  return (
    <article className="card">
      {images.length > 0 && (
        <button className="card-cover" onClick={() => setOpen(true)} aria-label={`Show images of ${project.title}`}>
          <img src={images[0]} alt="" loading="lazy" />
          {images.length > 1 && <span className="card-count">{images.length} images</span>}
        </button>
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tags">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="card-links">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer">
            Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live demo
          </a>
        )}
      </div>
      {open && <Gallery title={project.title} images={images} onClose={() => setOpen(false)} />}
    </article>
  )
}
