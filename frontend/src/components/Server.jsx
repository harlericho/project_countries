const URL = "http://localhost:9000/api/countries/";
export const getCountries = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
export const getCountry = async (id) => {
  const response = await fetch(URL + id);
  const data = await response.json();
  return data;
};
export const createCountry = async (country) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(country),
  });
  const data = await response.json();
  return data;
};
export const updateCountry = async (country) => {
  const response = await fetch(URL + country.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(country),
  });
  const data = await response.json();
  return data;
};
export const deleteCountry = async (id) => {
  const response = await fetch(URL + id, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
