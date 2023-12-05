/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { useData } from "../../hooks/client/useData";
import { usePagination } from "../../hooks/client/usePagination";
import { IProject, ISkill } from "../../types/IProjects";
import { IProfile } from "@/types/IProfile";

export const DataContext = createContext<{
  loading: boolean;
  dataProjects: IProject[];
  dataSkills: ISkill[];
  dataProfile: IProfile;
  dataDefault: {
    categories: string | number;
  };
}>({
  loading: true,
  dataProjects: [] as IProject[],
  dataSkills: [] as ISkill[],
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
  const {
    loading,
    projects,
    profile,
    getProfile,
    getProjects,
    getSkills,
    skills,
  } = useData();
  const { getParams } = usePagination();
  const [dataProjects, setDataProjects] = useState<IProject[]>([]);
  const [dataProfile, setDataProfile] = useState<IProfile>({} as IProfile);
  const [dataSkills, setDataSkills] = useState<ISkill[]>([]);

  const dataDefault = {
    categories: getParams("categories", ""),
  };

  useEffect(() => {
    getProjects();
    getProfile();
    getSkills();
  }, []);

  useEffect(() => {
    setDataProjects(
      filterData(projects as IProject[], dataDefault.categories as string)
    );
  }, [projects, dataDefault.categories]);

  useEffect(() => {
    setDataProfile(profile as IProfile);
  }, [profile]);

  useEffect(() => {
    // setDataProjects(
    //   filterData(projects as IProject[], dataDefault.categories as string)
    // );
    setDataSkills(skills as ISkill[]);
  }, [skills]);

  return (
    <DataContext.Provider
      value={{ loading, dataDefault, dataProjects, dataProfile, dataSkills }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const UseLogicData = () => useContext(DataContext);
