import React, { useState, useEffect, useRef } from "react";
import { fetchWeather } from "../../api/fetchWeather";
import CityCard from "./CityCard";

const Home = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("weatherData");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [saved, setSaved] = useState([]);
  const [cache, setCache] = useState({});
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const handleWeather = async () => {
    // Check if the city is already in the data or cache
    if (
      data.some(
        (cityData) => cityData.name.toLowerCase() === query.toLowerCase()
      ) ||
      cache[query.toLowerCase()]
    ) {
      alert(`City "${query}" already exists.`);
      setQuery(""); // Clear the input field
      return;
    }
    try {
      if (cache[query]) {
        // If the data is already in the cache, use it directly
        setData((prevData) => [...prevData, cache[query]]);
      } else {
        // Otherwise, fetch the data from the API
        let response = await fetchWeather(query);
        let newObj = {
          ...response,
          saved: response.saved ? response.saved : false,
        };
        setData((prevData) => [...prevData, newObj]);
        setCache((prevCache) => ({ ...prevCache, [query]: newObj })); // Save data to local storage
      }
      setQuery("");
    } catch (error) {
      console.error("fetchWeather get data", error);
    }
  };
  const handleQuery = (e) => {
    const queryValue = e.target.value;
    setQuery(queryValue);
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13 && query !== "") {
      handleWeather(query);
    }
  };

  useEffect(() => {
    // Load data from local storage when component mounts
    const savedData = localStorage.getItem("weatherData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);
  const fetchSavedWeather = async () => {
    try {
      const promises = saved.map((city) => fetchWeather(city.name));
      const responses = await Promise.all(promises);
      const newData = responses.map((response, index) => ({
        ...response,
        saved: saved[index].saved,
      }));

      setData((prevData) => {
        return prevData.map((value, index) => {
          const matchingIndex = newData.findIndex(
            (city) => city.name === value.name
          );
          if (matchingIndex !== -1) {
            return newData[matchingIndex];
          }
          return value;
        });
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchSavedWeather(); // Fetch weather data for saved cities initially
    const intervalId = setInterval(fetchSavedWeather, 60000); // Poll every 60 seconds

    if (saved.length === 0) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [saved]); // Trigger effect when saved cities change

  return (
    <div style={{ maxWidth: 900, margin: "24px auto" }}>
      <div style={{ display: "block" }}>
        <label htmlFor="search" style={{ margin: 4 }}>
          Search City
        </label>
        <input
          type="text"
          name="search"
          id="search"
          value={query}
          onChange={handleQuery}
          onKeyDown={onKeyDownHandler}
          style={{ margin: 4, width: "100%", height: 25 }}
          ref={inputRef}
        />
        <button
          onClick={handleWeather}
          style={{
            height: 25,
            background: query === "" ? "#e8e8e8" : "blue",
            color: query === "" ? "black" : "white",
            border: 0,
            width: 100,
            margin: 4,
            cursor: "pointer",
          }}
          disabled={query === ""}
        >
          Search
        </button>
      </div>
      <div>
        {data.length > 0 && (
          <CityCard
            data={data}
            saved={saved}
            setSaved={setSaved}
            setData={setData}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
