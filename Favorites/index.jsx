import { useContext } from "react";
import { GlobalContext } from "../Context";
import RecipeItem from "../RecipeItem";

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);
  return (
    <div>
      <div className="container mx-auto flex flex-wrap justify-center gap-10 py-8">
      {
        favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem  key={item.id} item={item} />)
      ) : (
        <p className="lg:text-3xl font-bold text-center">
          No Favorites Found yet
        </p>
      )}
    </div>
    </div>
  )
}

export default Favorites
