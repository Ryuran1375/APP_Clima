import React, { useState } from "react";

const CocktailItem = ({ cocktail }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        overflow: "hidden",
        textAlign: "center",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
    >
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />
      <div style={{ padding: "1rem" }}>
        <h3>{cocktail.strDrink}</h3>
        <p style={{ color: "#666", fontSize: "0.9rem" }}>
          {cocktail.strCategory} • {cocktail.strAlcoholic}
        </p>
        <button
          onClick={() => setShowDetails(!showDetails)}
          style={{
            marginTop: "0.5rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#ff3366",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {showDetails ? "Ocultar detalles" : "Ver detalles"}
        </button>

        {showDetails && (
          <div style={{ marginTop: "1rem", fontSize: "0.9rem", textAlign: "left" }}>
            <p><strong>Instrucciones:</strong> {cocktail.strInstructions}</p>
            <p><strong>Vaso:</strong> {cocktail.strGlass}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CocktailItem;
