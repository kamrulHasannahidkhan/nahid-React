import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./navbar";

export default function MainLayout(){
    return(<div>
        <Navbar />
          <Outlet/>
          <Footer />
          </div>
    );
};