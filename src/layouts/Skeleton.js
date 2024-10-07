import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Skeleton() {
  return <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
  </>
  
}