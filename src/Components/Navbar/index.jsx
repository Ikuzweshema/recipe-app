import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context";
import { FaHome, FaSearch, FaStar } from "react-icons/fa";

const Navbar = () => {
  const{searchParams,setSearchParams,handleSubmit}=useContext(GlobalContext);
  return (
    <nav className="flex justify-between container mx-auto py-8 flex-col lg:flex-row gap-5 lg:gap-0 items-center">
      <h2 className="text-2xl font-semibold">
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            <img src="/logo.png" alt=""  width="90" height="90" />
          </NavLink> 
        </li>
        </ul>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className=" flex gap-2">
        <input
          type="text"
          name="search"
          placeholder="Search Something ..."
          className=" p-3 px-8 border-2  border-indigo-600 rounded-md outline-none lg:w-96 focus:shadow-red-200"
          onChange={(event)=> setSearchParams(event.target.value)}
          value={searchParams}
        />
        <button type="submit" className=" bg-indigo-600 px-4 rounded-md text-white p-3"><FaSearch/></button>
        </div>
        
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
          
          >
            <span   className= "text-black hover:text-gray-700 duration-300 flex gap-1 justify-center items-center"> <FaHome/> Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300 flex gap-1 justify-center items-center"
          >
            <FaStar/>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
