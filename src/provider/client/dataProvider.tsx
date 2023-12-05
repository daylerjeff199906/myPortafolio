/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { useData } from "../../hooks/client/useData";
import { IProject } from "../../types/IProjects";
import { IProfile } from "@/types/IProfile";

export const DataContext = createContext<{
  loading: boolean;
  dataProjects: IProject[];
  dataProfile: IProfile;
}>({
  loading: true,
  dataProjects: [] as IProject[],
  dataProfile: {} as IProfile,
});

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
    setDataProjects(projects as IProject[]);
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
