import CircumIcon from "@klarr-agency/circum-icons-react";
import {  FaAngleDoubleUp, FaEnvelope,  FaFacebookF, FaFileAlt, FaGithub, FaHome, FaLinkedinIn, FaServer, FaUserAlt } from 'react-icons/fa';
import './app.css';
import ScrollToTop from "react-scroll-to-top";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Resume from "./component/Resume/Resume";
import Contact from "./component/Contact/Contact";
function App() {
  

  return (
    <div className="drawer  lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content pt-2 pl-2">
    {/* Page content here */}

    <Home/>
    <About/>
    <Resume/>
    <Portfolio/>
    <Contact/>
    <label htmlFor="my-drawer-2" className="btn btn-outline  border-fuchsia-50 drawer-button lg:hidden absolute top-2"><CircumIcon name="grid_4-1" color="#ffff"/></label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <div className="menu font-mono min-h-screen overflow-y-scroll p-4  w-80 bg-gray-800 text-white">
    <div className="flex flex-col items-center">
    <div className="avatar">
    <div className="w-32 rounded-full border-4 border-[#71797E] ring-offset-base-100  ring-offset-2">
      <img src="https://i.ibb.co/j8dvmbs/profilepic.jpg" />
    </div>
  </div>
  <p className="text-3xl text-left pt-4 font-extrabold">Samshul Islam </p>
  <div className="flex gap-4 mt-4 mb-4">
      <span className="bg-black hover:bg-blue-800 border-4 border-[#71797E] rounded-full text-lg p-2"><a href="https://www.linkedin.com/in/shakileeecuet/" target="_blank"><FaLinkedinIn /></a></span>
      <span className="bg-black hover:bg-blue-800 border-4 border-[#71797E] rounded-full text-lg p-2"><a href="https://github.com/Samshuleeecuet" target="_blank"><FaGithub/></a></span>
      <span className="bg-black hover:bg-blue-800 border-4 border-[#71797E] rounded-full text-lg p-2"><a href='https://www.facebook.com/Shakil.EEE.CUET' target='_blank'><FaFacebookF/></a></span>
      <span className="bg-black hover:bg-blue-800 border-4 border-[#71797E] rounded-full text-lg p-2"><a href="mailto:samshul2001@gmail.com" target="_blank"><FaEnvelope/></a></span>

  </div>
    </div> 
    <ul>
      {/* Sidebar content here */}
      <li className="flex"><a href="#homepage" id="navtext" className="hover:text-white"><FaHome id="navicon" className="text-white text-2xl "/>Home</a></li>
      <li className="flex"><a href="#aboutpage" id="navtext" className="hover:text-white"><FaUserAlt id="navicon"  className="text-white text-2xl"/>About</a></li>
      <li className="flex"><a href="#resumepage" id="navtext" className="hover:text-white"><FaFileAlt id="navicon"  className="text-white text-2xl"/>Resume</a></li>
      <li className="flex"><a href="#portfoliopage" id="navtext" className="hover:text-white"><FaServer id="navicon"  className="text-white text-2xl"/>Portfolio</a></li>
      <li className="flex"><a href="#contactpage" id="navtext" className="hover:text-white"><FaEnvelope className="text-white text-2xl" id="navicon" />Contact</a></li>
    </ul>
    </div>
  
  </div>
  <ScrollToTop smooth  height="60px" width="60px" component={<p style={{ color:'#149ddd',display:'flex',justifyContent:'center' }}><FaAngleDoubleUp className="text-xl"/></p>}/>
  </div>
  )
}

export default App
