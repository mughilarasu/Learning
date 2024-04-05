// import axios from "axios";
// import { fetchWeather } from "./fetchWeather";

// jest.mock("axios");

// describe("fetchWeather Function", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("fetches weather data successfully", async () => {
//     const mockData = {
    // coord: {
    //     lon: 80.2785,
    //     lat: 13.0878,
    //   },
    //   weather: [
    //     {
    //       id: 801,
    //       main: "Clouds",
    //       description: "few clouds",
    //       icon: "02d",
    //     },
    //   ],
    //   base: "stations",
    //   main: {
    //     temp: 20,
    //     feels_like: 36.46,
    //     temp_min: 31.99,
    //     temp_max: 31.99,
    //     pressure: 1011,
    //     humidity: 58,
    //   },
    //   visibility: 6000,
    //   wind: {
    //     speed: 4.63,
    //     deg: 150,
    //   },
    //   clouds: {
    //     all: 20,
    //   },
    //   dt: 1711440650,
    //   sys: {
    //     type: 1,
    //     id: 9218,
    //     country: "TC",
    //     sunrise: 1711413533,
    //     sunset: 1711457398,
    //   },
    //   timezone: 19800,
    //   id: 1264527,
    //   name: "Test City",
    //   cod: 200,
    // };
//     axios.get.mockResolvedValueOnce({ data: mockData });

//     const data = await fetchWeather("Test City");

//     expect(axios.get).toHaveBeenCalledTimes(1);
//     expect(axios.get).toHaveBeenCalledWith(expect.any(String), {
//       params: {
//         q: "Test City",
//         units: "metric",
//         appid: "",
//       },
//     });
//     expect(data).toEqual(mockData);
//   });

//   it("handles error when fetching weather data", async () => {
//     const errorMessage = "Network Error";
//     axios.get.mockRejectedValueOnce(new Error(errorMessage));

//     console.error = jest.fn(); // Mock console.error

//     const data = await fetchWeather("Invalid City");

//     expect(axios.get).toHaveBeenCalledTimes(1);
//     expect(axios.get).toHaveBeenCalledWith(expect.any(String), {
//       params: {
//         q: "Invalid City",
//         units: "metric",
//         appid: "",
//       },
//     });
//     expect(data).toBeUndefined();
//     expect(console.error).toHaveBeenCalledWith(
//       "fetchWeather API error",
//       expect.any(Error)
//     );
//   });
// });
