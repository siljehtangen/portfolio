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

export interface ParsedProject extends Project {
  cleanTitle: string
  date: string
}
