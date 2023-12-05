import { useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";

export function useData() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<DocumentData[] | null>(null);
  const [profile, setProfile] = useState({});

  const getCollection = async (name: string) => {
    const querySnapshot = await getDocs(collection(db, name));
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  };

  const getProfile = async () => {
    setLoading(true);
    try {
      const profile = await getCollection("profile");
      setProfile(profile[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getProjects = async () => {
    setLoading(true);
    try {
      const projects = await getCollection("projects");
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, projects, profile, getProfile, getProjects };
}
