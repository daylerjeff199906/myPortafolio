/* eslint-disable react-hooks/exhaustive-deps */
import { DocumentData } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { useData } from "../../hooks/client/useData";
import { IProject } from "../../types/IProjects";
import { IProfile } from "@/types/IProfile";

export const DataContext = createContext({
  loading: true,
  dataProjects: [] as IProject[],
  dataProfile: {} as IProfile,
});

const convertDataProjects = (projects: DocumentData[]) => {
  const dataProjects = projects.map((project) => {
    const { id, name, description, url_image, url_link, category } = project;
    return {
      id,
      name,
      description,
      url_image,
      url_link,
      category,
    };
  });
  return dataProjects;
};

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const { loading, projects, profile, getProfile, getProjects } = useData();
  const [dataProjects, setDataProjects] = useState<IProject[]>([]);
  const [dataProfile, setDataProfile] = useState<IProfile>({} as IProfile);

  useEffect(() => {
    getProjects();
    getProfile();
  }, []);

  console.log("dataProjects", projects);

  useEffect(() => {
    // setDataProjects(convertDataProjects(projects));
  }, [projects]);

  useEffect(() => {
    setDataProfile(profile as IProfile);
  }, [profile]);

  return (
    <DataContext.Provider value={{ loading, dataProjects, dataProfile }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseLogicData = () => useContext(DataContext);
