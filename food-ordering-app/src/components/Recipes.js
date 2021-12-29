import React from "react";
import RecipeList from "./RecipeList";
import "./Recipes.css";
import SideNav from "./SideNav";
import { useReducer } from "react";
import { initialState, reducer } from "../context/context";
import { RecipeContext } from "../context/context";

function Recipes() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      <div className="recipes">
        <SideNav />
        <RecipeList />
      </div>
    </RecipeContext.Provider>
  );
}

export default Recipes;
