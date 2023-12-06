import { Footer } from "../components";
import { NavBarCuston } from "../components";
import { Outlet } from "react-router-dom";
export const LayoutClient = () => {
  return (
    <>
      <div className="dark">
        <NavBarCuston />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
