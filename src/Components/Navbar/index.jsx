import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context";

const Navbar = () => {
  const{searchParams,setSearchParams,handleSubmit}=useContext(GlobalContext);
  console.log(searchParams)
  return (
    <nav className="flex justify-between container mx-auto py-8 flex-col lg:flex-row gap-5 lg:gap-0 items-center">
      <h2 className="text-2xl font-semibold">
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Food recipe
          </NavLink>
        </li>
        </ul>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter items ..."
          className="bg-white/75 p-3 px-8 shadow-lg shadow-red-100 rounded-lg outline-none lg:w-96 focus:shadow-red-200"
          onChange={(event)=> setSearchParams(event.target.value)}
          value={searchParams}
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
