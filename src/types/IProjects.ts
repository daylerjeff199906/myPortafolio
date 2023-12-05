export interface IProject {
  id: number;
  name: string;
  description: string;
  url_image: string;
  url_link: string;
  category: string;
}

export interface ISkill {
  id: string;
  name: string;
  description: string;
  tools: [string];
  language: [string];
}
