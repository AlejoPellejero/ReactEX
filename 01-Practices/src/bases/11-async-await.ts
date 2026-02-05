import type { GiphyResponse } from "../data/giphy.response";

const API_KEY = "zNXVRVcYY2As0UNuJKazoh0NWIKJr6ZW";

const createImageOnDom = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.append(imgElement);
};

const getRandomGifUrl = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
  );

  const { data } = await response.json();

  return data.images.original.url;
};

getRandomGifUrl().then(createImageOnDom);
