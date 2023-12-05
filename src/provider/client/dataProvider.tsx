import { createContext, useContext } from "react";
import { useData } from "../../hooks/client/useData";

export const dataContext = createContext({});
export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const { loading, data, profile, getProfile, getProjects } = useData();

  return (
    <dataContext.Provider
      value={{ loading, data, profile, getProfile, getProjects }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useLogicData = () => useContext(dataContext);
