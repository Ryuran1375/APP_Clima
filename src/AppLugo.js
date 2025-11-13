import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CocktailList from "./components/CocktailList";

const App = () => {
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("margarita");

  useEffect(() => {
    if (searchTerm.trim() === "") return;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.drinks)) {
          setCocktails(data.drinks);
        } else {
          setCocktails([]);
        }
      })
      .catch((error) => console.error("Error al obtener los cócteles:", error));
  }, [searchTerm]);

  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#2b868dff", minHeight: "100vh" }}>
      <Header title="GlassofGod Cocktail" />
      <div className="container" style={{ padding: "1.5rem" }}>
        <SearchBar onSearch={setSearchTerm} />
        <CocktailList cocktails={cocktails} />
      </div>
    </div>
  );
};

export default App;
