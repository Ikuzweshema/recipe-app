import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context";

const Details = () => {
  const { id } = useParams();
  const { favoritesList, recipeDetails, setRecipeDetails, addFavorite } =
    useContext(GlobalContext);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
     
      if (data?.data) {
        setRecipeDetails(data?.data);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="container mx-auto grid grid-col-1 lg:grid-cols-2 py-10 gap-10">
      <div className="row-start-2 lg:row-start-1">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetails?.recipe?.image_url}
            alt="item-details"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium ">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetails?.recipe?.title}
        </h3>
        <div>
          <span className="text-2xl font-semibold text-black ">
            Ingredients
          </span>
          <ul className=" flex flex-col gap-3">
            {recipeDetails?.recipe?.ingredients?.map((item, index) => {
              return (
                <li key={index} className="text-black">
                  <span>
                    {" "}
                    {item.quantity} {item.unit}
                  </span>
                  <span>{item.description}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          {" "}
          <button
            onClick={() => addFavorite(recipeDetails?.recipe)}
            className="text-sm rounded-lg mt-5 inline-block uppercase  p-3 px-8 font-medium tracking-wider bg-black shadow-md text-white"
          >
            {favoritesList && favoritesList.length >0 && favoritesList.findIndex(
              (item) => item.id == recipeDetails?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add To Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
