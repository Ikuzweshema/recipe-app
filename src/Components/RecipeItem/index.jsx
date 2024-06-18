import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5  bg-white/75 rounded-2xl gap-5 border-2 shadow-xl border-white">
      <div className="h-40 flex justify-center items-center overflow-hidden rounded-xl">
        <img src={item?.image_url} alt="recipe-item" className="block w-full" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium ">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.tittle}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm rounded-lg mt-5 inline-block uppercase  p-3 px-8 font-medium tracking-wider bg-black shadow-md text-white"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
