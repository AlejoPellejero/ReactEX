import { useEffect, useState } from "react";

interface Props {
  placeholder: string;
  onQuery: (query: string) => void;
}

export const CustomSearchButton = ({
  placeholder = "Buscar Gifs",
  onQuery,
}: Props) => {
  const [query, setQuery] = useState("");

  //Debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      // Cleaning function (opcional)
      clearInterval(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    //setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
