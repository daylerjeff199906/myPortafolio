import { useEffect, useState } from "react";
import { Footer, SplashPage } from "../components";
import { NavBarCuston } from "../components";
import { Outlet } from "react-router-dom";
export const LayoutClient = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Simula un tiempo de espera para el splash screen (puedes ajustar esto según tus necesidades)
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashPage />
      ) : (
        <div
          className={
            darkMode
              ? "dark:bg-slate-900 dark:text-white"
              : "bg-white text-black"
          }
        >
          <NavBarCuston />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};
