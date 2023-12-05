import { Footer } from "../components";
import { NavBarCuston } from "../components";
import { Outlet } from "react-router-dom";
export const LayoutClient = () => {
  return (
    <>
      <NavBarCuston />
      <Outlet />
      <Footer />
    </>
  );
};
