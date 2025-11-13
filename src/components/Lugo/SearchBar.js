import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
      <input
        type="text"
        placeholder="Buscar cóctel (ej. mojito, margarita...)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "60%",
          padding: "0.6rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginRight: "0.5rem"
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.6rem 1rem",
          backgroundColor: "#ff3366",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
