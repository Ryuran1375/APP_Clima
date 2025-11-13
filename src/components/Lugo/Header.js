import React from "react";

const Header = ({ title }) => {
  return (
    <header style={{ backgroundColor: "#000000ff", color: "white", padding: "1rem" }}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
