import { Route, Routes, BrowserRouter } from "react-router-dom";

import { IndexHome } from "../pages/client/Home";
import { LayoutClient } from "../layouts/layoutClient";

export const ClientRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route path="/" element={<IndexHome />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
