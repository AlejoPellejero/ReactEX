import React, { useState } from "react";
import { mockGifs } from "../mock-data/gifs.mock";
import { CustomHeader } from "./components/CustomHeader";
import { CustomSearchButton } from "./components/CustomSearchButton";
import { PreviousSearches } from "./PreviousSearches";
import { ShowGifsContainer } from "./components/ShowGifsContainer";

export const GifsApp = () => {
  const [previousSearches, setpreviousSearches] = useState(["Goku"]);

  const handleSearchClicked = (searchTerm: string) => {};

  return (
    <>
      <CustomHeader
        title="Buscador de gif GLOBAL"
        description="Descubre y comparte los mejores gifs de la comunidad"
      />

      <CustomSearchButton placeholder="Buscar lo que quieras" />

      <PreviousSearches
        searches={["Goku", "Vegeta", "Gatos", "Duende"]}
        onClick={handleSearchClicked}
      />

      <ShowGifsContainer gifs={mockGifs} />
    </>
  );
};
