import type { CSSProperties } from "react";

const name = "Fernando";
const lastName = "Herrera";
const favoriteGames = ["Zelda", "Mario", "Metroid"];
const isActive = true;
const address = {
  street: "123 Main St",
  city: "Madrid",
  country: "Spain",
};

const myStyle: CSSProperties = {
  color: "blue",
  backgroundColor: "lightgray",
  padding: "10px",
};

export function MyAwesomeApp() {
  return (
    <>
      <h1>{name}</h1>
      <h3>{lastName}</h3>
      <p>{favoriteGames.join(",")}</p>
      <p>{isActive ? "Active" : "Inactive"}</p>
      <p style={myStyle}>{JSON.stringify(address)}</p>
    </>
  );
}
