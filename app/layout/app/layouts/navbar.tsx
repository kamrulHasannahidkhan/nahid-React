import { NavLink } from "react-router";



export default function Navbar(){
    return  <nav className="flex justify-between items-center px-10 py-5 bg-white">
      <h1 className="text-2xl font-bold text-orange-500">
        expelab
      </h1>

      <nav className="flex gap-8 text-black">
        <NavLink to="//">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Services">Services</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/Newsletter">Our App</NavLink>
        
      </nav>
      <nav className="flex gap-5 ">
      <button className="bg-white text-orange-500 px-5 py-2 rounded-full">
        Login
      </button>

      <button className="bg-orange-500 text-white px-5 py-2 rounded-full">
        Sign Up
      </button>
      </nav>
    </nav>;
}