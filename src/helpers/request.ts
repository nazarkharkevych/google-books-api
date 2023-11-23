import { QueryParams } from "../types/queryParams";

async function request<T>({
  query,
  category,
  sortBy,
  startIndex = 0,
}: QueryParams) {
  const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
  const PARAMS
    = `?q=${query}+subject:${category}&maxResults=30&orderBy=${sortBy}&startIndex=${startIndex}&key=${process.env.REACT_APP_API_KEY}`;

  const response = await fetch(BASE_URL + PARAMS);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await (response.json() as Promise<T>);
}

export default request;
