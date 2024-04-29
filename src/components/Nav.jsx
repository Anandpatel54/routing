import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
   <div className="gap-[10px]">
     <nav className="flex justify-center gap-10 capitalize mt-10">
      <NavLink className={"text-red-300 shadow-lg px-5 py-3 rounded-lg"} to="/">home</NavLink>
      <NavLink className={"shadow-lg px-5 py-3 rounded-lg"} to="/create">book entry</NavLink>
      <NavLink className={"shadow-lg px-5 py-3 rounded-lg"} to="/show">library</NavLink>
    </nav>  
   </div>
  );
};

export default Nav;
