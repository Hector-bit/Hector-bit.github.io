export type ProjectCardType = {
  name: string
  description: string
  tools: string[]
  githubLink?: { link: string, name: string}
  webLink?: { link: string, name: string}
  datas?: string
}