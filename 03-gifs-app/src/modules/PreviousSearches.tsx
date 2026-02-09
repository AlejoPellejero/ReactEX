interface Props {
  searches: string[];
  onClick: (searchTerm: string) => void;
}

export const PreviousSearches = ({ searches, onClick }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas anteriores</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li key={search} onClick={() => onClick(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
