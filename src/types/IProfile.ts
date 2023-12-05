export interface ISocialMedia {
  name: string;
  url_link: string;
}
export interface IProfile {
  id: number;
  name: string;
  last_name: string;
  description: string;
  url_image: string;
  url_link: string;
  category: string;
  social_medias: ISocialMedia[];
  job: string;
  address: string;
  phone: string;
  correo: string;
  biography: string;
  date_birth: string;
}
