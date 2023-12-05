export interface IProject {
  //   id: number;
  name: string;
  description: string;
  url_image: string;
  url_link: string;
  category: string;
  social_medias: [
    {
      name: string;
      url_link: string;
    }
  ];
}
