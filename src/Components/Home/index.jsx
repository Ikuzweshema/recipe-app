import { useContext, useEffect } from "react";
import { GlobalContext } from "../Context";
import RecipeItem from "../RecipeItem";

const Home = () => {
  const { loading, recipeList,setRecipeList,setLoading} = useContext(GlobalContext);
   useEffect(()=>{
      async function fetchInitialData(){
          setLoading(true);
         const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza');
         const data = await response.json();
         console.log(data);
         if(data?.data?.recipes){
            setRecipeList(data?.data?.recipes);
            setLoading(false)
         }
      }
      fetchInitialData()
   },[])
  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-10 py-8">
      {loading ? (
        <span className="animate-spin delay-0 inline-block w-10 h-10 border-2 border-solid  border-indigo-600 rounded-full"></span>
      ) : recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem  key={item.id} item={item} />)
      ) : (
        <p className="lg:text-3xl font-bold text-center">
          No Recipes Found.Try searching..
        </p>
      )}
    </div>
  );
};

export default Home;
