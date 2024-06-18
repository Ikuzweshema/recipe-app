import { createContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favoritesList, setFavoritesList] = useState(() => {
    let favs = localStorage.getItem("favorites");
   if(favs=== null || favs==undefined) return [];
    try{
      const list=JSON.parse(favs)
      return list;
    }
    catch(e){
      console.error(e);
      return [];
    }
  });
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParams("");
        navigate("/");
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
      setSearchParams("");
    }
  }
  function addFavorite(getItem) {
    let cpyFav = [...favoritesList];
    const index = cpyFav.findIndex((item) => item.id === getItem.id);
    if (index == -1) {
      cpyFav.push(getItem);
    } else {
      cpyFav.splice(index);
    }
    setFavoritesList(cpyFav);
  }
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesList));
  }, [favoritesList]);

  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        loading,
        recipeList,
        setRecipeList,
        setSearchParams,
        handleSubmit,
        recipeDetails,
        setRecipeDetails,
        addFavorite,
        favoritesList,
        setLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
