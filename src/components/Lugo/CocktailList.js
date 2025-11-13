import React from "react";
import CocktailItem from "./CocktailItem";

const CocktailList = ({ cocktails }) => {
  if (!Array.isArray(cocktails) || cocktails.length === 0) {
    return <p style={{ textAlign: "center" }}>No se encontraron cócteles.</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
      }}
    >
      {cocktails.map((cocktail) => (
        <CocktailItem key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
};

export default CocktailList;
