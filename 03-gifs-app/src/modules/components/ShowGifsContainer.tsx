import type { Gif } from "../../mock-data/gifs.mock";

interface Props {
  gifs: Gif[];
}

export const ShowGifsContainer = ({ gifs }: Props) => {
  return (
    <div className="gifs-container">
      {gifs.map((info) => (
        <div key={info.id} className="gif-card">
          <img src={info.url} alt={info.title} />
          <h3>{info.title}</h3>
          <p>
            {info.width} x {info.height}(1.5MB)
          </p>
        </div>
      ))}
    </div>
  );
};
