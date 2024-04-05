import React from "react";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
const CityCard = ({ data, saved, setSaved, setData }) => {
  //   function getFormattedTimeFromUnixTimestamp(timestamp, timezoneOffset) {
  //     // Convert Unix timestamp to milliseconds
  //     const timestampMs = timestamp * 1000;

  //     // Create a new Date object
  //     const date = new Date(timestampMs);

  //     // Adjust time according to timezone offset
  //     const utcOffset = timezoneOffset || 0; // Default to 0 if timezoneOffset is not provided
  //     const adjustedDate = new Date(date.getTime() + utcOffset * 1000);

  //     // Format the date as per your requirement
  //     const formattedTime = adjustedDate.toLocaleString("en-US", {
  //       timeZone: "UTC", // To display in UTC
  //       hour12: true, // If you want to display in 12-hour format
  //       hour: "numeric",
  //       minute: "numeric",
  //       second: "numeric",
  //     });

  //     return formattedTime;
  //   }
  // //   console.log("Current Unix timestamp:", Date.now() / 1000);
  // //   console.log(" data.dt", data.dt);
  //   const formattedTime = getFormattedTimeFromUnixTimestamp(
  //     data.dt,
  //     data.timezone
  //   );
  //   console.log("Time:", formattedTime);

  const RenderCity = ({ cities }) => {
    return (
      <div
        style={{
          margin: 24,
          textAlign: "center",
          border: "1px solid #e3e3e3",
          borderRadius: 8,
          background: "#c6c6c6",
        }}
      >
        <div style={{ textAlign: "right", margin: 4 }}>
          <button
            onClick={() => {
              setData((prevData) => {
                const updatedData = prevData.map((item) => {
                  if (item.name === cities.name) {
                    // If the item with the same name is found, update its 'saved' property
                    return { ...item, saved: !item.saved };
                  }
                  return item; // Return the unchanged item if the name doesn't match
                });
                const localStorageSave = updatedData.filter(
                  (city) => city.saved
                );
                localStorage.setItem(
                  "weatherData",
                  JSON.stringify(localStorageSave)
                );
                setSaved(localStorageSave);
                return updatedData;
              });
            }}
          >
            {cities.saved ? (
              <MdBookmark style={{ fontSize: 32 }} />
            ) : (
              <MdBookmarkBorder style={{ fontSize: 32 }} />
            )}
          </button>
        </div>
        <h2>
          <span>{cities.name}</span>
          <sup
            style={{
              background: "orange",
              color: "white",
              padding: 8,
              margin: "0px 8px",
              borderRadius: 8,
              fontSize: 12,
            }}
          >
            {cities.sys.country}
          </sup>
        </h2>
        <div
          style={{
            fontSize: 36,
            fontWeight: "bold",
          }}
        >
          {Math.round(cities.main.temp)}
          <sup
            style={{
              fontSize: 24,
            }}
          >
            &deg;C
          </sup>
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${cities.weather[0].icon}@2x.png`}
            alt={cities.weather[0].description}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <p
            style={{
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            {cities.weather[0].description}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "0px",
      }}
    >
      {data.map((cities) => {
        return <RenderCity cities={cities} key={cities.name} />;
      })}
    </div>
  );
};

export default CityCard;
