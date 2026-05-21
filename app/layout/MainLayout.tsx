import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./Footer";


export default function MainLayout(){
    return(<div>
        <Navbar />
          <Outlet/>
          <Footer />
          </div>
    );
};