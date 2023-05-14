export interface IProject {
  id: number
  title: string
  description: string
  technologies: string[]
  github_link: string | null
  deploy_link: string | null
}