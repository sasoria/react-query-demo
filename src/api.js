export const lukeUrl = "https://swapi.dev/api/people/1/";
export const obiWanUrl = "https://swapi.dev/api/people/10/";

const getOptions = {
  method: "GET",
};

const postOptions = (content) => ({
  method: "POST",
  body: JSON.stringify(content),
});

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error("HTTP request failed");
  }
};

export const fetcher = async ({ queryKey }) => {
  const response = await fetch(queryKey, getOptions);
  checkResponse(response);

  return response.json();
};

export const postContent = async (url, content) => {
  const response = await fetch(url, postOptions(content));
  checkResponse(response);

  return response;
};
