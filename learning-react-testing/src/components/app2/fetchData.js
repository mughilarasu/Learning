import axios from "axios";

const fetchData = (controller = new AbortController()) => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
    .then((res) => {
      return res.data.name;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchData;
