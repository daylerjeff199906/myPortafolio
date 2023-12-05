export interface ISocialMedia {
  name: string;
  url_link: string;
}
export interface IProfile {
  id: number;
  name: string;
  description: string;
  url_image: string;
  url_link: string;
  category: string;
  social_medias: ISocialMedia[];
}
