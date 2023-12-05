/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { useData } from "../../hooks/client/useData";
import { usePagination } from "../../hooks/client/usePagination";
import { IProject } from "../../types/IProjects";
import { IProfile } from "@/types/IProfile";

export const DataContext = createContext<{
  loading: boolean;
  dataProjects: IProject[];
  dataProfile: IProfile;
  dataDefault: {
    categories: string | number;
  };
}>({
  loading: true,
  dataProjects: [] as IProject[],
  dataProfile: {} as IProfile,
  dataDefault: {
    categories: "",
  },
});

const filterData = (data: IProject[], category: string) => {
  if (category === "") {
    return data;
  } else {
    return data.filter((item) => item.category === category);
  }
};

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const { loading, projects, profile, getProfile, getProjects } = useData();
  const { getParams } = usePagination();
  const [dataProjects, setDataProjects] = useState<IProject[]>([]);
  const [dataProfile, setDataProfile] = useState<IProfile>({} as IProfile);

  const dataDefault = {
    categories: getParams("categories", ""),
  };

  useEffect(() => {
    getProjects();
    getProfile();
  }, []);

  useEffect(() => {
    setDataProjects(
      filterData(projects as IProject[], dataDefault.categories as string)
    );
  }, [projects, dataDefault.categories]);

  useEffect(() => {
    setDataProfile(profile as IProfile);
  }, [profile]);

  return (
    <DataContext.Provider
      value={{ loading, dataDefault, dataProjects, dataProfile }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const UseLogicData = () => useContext(DataContext);
