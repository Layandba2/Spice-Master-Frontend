import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: 'GET',
        headers: {
          'User-Agent': 'insomnia/8.2.0',
          Authorization: 'Bearer 53540f6ca6b8e4c6ea02f8a265ea09c714057ada675035d098b23d062b1eb245152b33ec9a5b13390d75cdc497e44741f7932369042ac8e46b6eeb9cb5a21854026ff036f924c25509053a4a885c5c4429735516fc6205e671da23932cab18b36db26a8c67f75594925cba1bee64766be0696a37dd4ed3e7612c411e731a6bcf'
        }
      };

    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();

    return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
          Authorization: 'Bearer 53540f6ca6b8e4c6ea02f8a265ea09c714057ada675035d098b23d062b1eb245152b33ec9a5b13390d75cdc497e44741f7932369042ac8e46b6eeb9cb5a21854026ff036f924c25509053a4a885c5c4429735516fc6205e671da23932cab18b36db26a8c67f75594925cba1bee64766be0696a37dd4ed3e7612c411e731a6bcf',
          "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};