import { useState } from "react";
import { CustomHeader } from "./components/CustomHeader";
import { CustomSearchButton } from "./components/CustomSearchButton";
import { PreviousSearches } from "./PreviousSearches";
import { ShowGifsContainer } from "./components/ShowGifsContainer";
import { getGifsByQuery } from "./actions/get-gifs-by-query.action";
import type { Gif } from "./interfaces/gif.interface";

export const GifsApp = () => {
  const [previousSearches, setpreviousSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleSearchClicked = (searchTerm: string) => {};

  const handleSearch = async (query: string) => {
    const newQueryTest = query.trim().toLocaleLowerCase();
    if (newQueryTest === "" || newQueryTest.length >= 9) return;
    if (previousSearches.includes(newQueryTest)) return;
    setpreviousSearches((prev) => [newQueryTest, ...prev.slice(0, 8)]);

    const newGifs = await getGifsByQuery(query);
    setGifs(newGifs);
  };

  return (
    <>
      <CustomHeader
        title="Buscador de gif GLOBAL"
        description="Descubre y comparte los mejores gifs de la comunidad"
      />

      <CustomSearchButton
        placeholder="Buscar lo que quieras"
        onQuery={handleSearch}
      />

      <PreviousSearches
        searches={previousSearches}
        onClick={handleSearchClicked}
      />

      <ShowGifsContainer gifs={gifs} />
    </>
  );
};
