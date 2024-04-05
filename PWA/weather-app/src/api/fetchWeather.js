import axios from "axios";

const URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = "0e873248079f2fd256668702dd1e9c83";
export const fetchWeather = async (query) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        q: query,
        units: "metric",
        appid: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error("fetchWeather API error", error);
  }
};
