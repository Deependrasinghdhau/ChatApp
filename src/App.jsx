import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import HeroSection1 from "./components/HeroSection1";


function App() {
  const [sideBar,setSideBar] = useState(false);
  
  const handleSideBar = () =>{
    sideBar ? setSideBar(0) : setSideBar(1);
  }
  return (
    <>
      <Navbar sidebar = {sideBar} setSideBar={handleSideBar} />
      <HeroSection1 sideBar={sideBar} setSideBar={handleSideBar}/>
    </>
  );
}

export default App;
