import Home from "../pages/Home";
import Skeleton from "../layouts/Skeleton";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Skeleton />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  

}