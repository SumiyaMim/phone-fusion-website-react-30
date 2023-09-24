import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Header/Navbar/Navbar"
import { useEffect } from "react";

const MainLayout = () => {

  const loc = useLocation();

  useEffect(() => {
    console.log(loc.pathname);

    if (loc.pathname === "/") {
      document.title = `Phone Fusion - home`;
    } else {
      document.title = `Phone Fusion ${loc.pathname.replace("/", "- ")}`;
    }

    if (loc.state) {
      document.title = ` ${loc.state}`;
    }

  }, [loc.pathname]);


  return (
    <div>        
        <Navbar></Navbar>
        <div className="max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto">
          <Outlet></Outlet>
          
          {/* useOutletContext concept example */}
          {/* <Outlet context={{ name: "mim" }}></Outlet> */}
        </div>
    </div>
  )
}

export default MainLayout
