import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 rounded-md gap-5 border">
      <div className="h-40 flex justify-center items-center overflow-hidden rounded-sm">
        <img src={item?.image_url} alt="recipe-item" className="block w-full" />
      </div>
      <div>
        <span className="text-md  font-medium ">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.tittle}
        </h3>
        <span className="text-md  font-medium ">
          {item?.descrption}
        </span>
        <Link
          to={`/recipe-item/${item?.id}/details`}
          className="text-sm rounded-lg mt-5  uppercase  p-3 px-8 font-medium tracking-wider bg-indigo-700 text-white flex gap-1 justify-center items-center"
          
        >
          <FaArrowRight/> Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
