import { Outlet } from "react-router-dom";
export const LayoutClient = () => {
  return (
    <>
      {/* AppBar */}
      <Outlet />
      {/* Footer */}
    </>
  );
};
