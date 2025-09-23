export interface ProjectLink {
  type: string
  url: string
}

export interface Project {
  title: string
  technologies: string[]
  description: string
  highlights: string[]
  links?: ProjectLink[]
}
