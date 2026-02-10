import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "./apis/giphy.api";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphyApi<GiphyResponse>(`/search`, {
    params: {
      q: query,
      limit: 10,
    },
  });

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: parseInt(gif.images.original.width, 10),
    height: parseInt(gif.images.original.height, 10),
  }));
};

//Without Axios
// export const getGifsByQuery = async (query: string) => {
//   fetch(
//     `https://api.giphy.com/v1/gifs/search?api_key=zNXVRVcYY2As0UNuJKazoh0NWIKJr6ZW&q=${query}&limit=10&lang=es`,
//   );
// };
