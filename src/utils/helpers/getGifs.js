const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=15&api_key=1q8bsMLFhZWuVmX3BpYp4CJw8RJqIyKR`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized.url,
    };
  });
  return gifs;
};

export default getGifs;
