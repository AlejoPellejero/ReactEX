import type { GiphyResponse } from "../data/giphy.response";

const API_KEY = "zNXVRVcYY2As0UNuJKazoh0NWIKJr6ZW";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
);

const createImageOnDom = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.append(imgElement);
};

myRequest
  .then((response) =>
    response.json().then(({ data }: GiphyResponse) => {
      const imgUrl = data.images.original.url;
      createImageOnDom(imgUrl);
      /*const imageUrl = data.data.images.original.url;
      console.log(imageUrl);

      const imgElemnt = document.createElement("img");
      imgElemnt.src = imageUrl;

      document.body.append(imgElemnt);*/
    }),
  )
  .catch((err) => console.warn(err));

/*response.json().then((data) => {
      console.log(data);
    });*/
