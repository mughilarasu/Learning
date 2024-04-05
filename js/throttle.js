const UlElement = document.getElementById("listItemsThrottle");
const noUserString = `<li>No Users Found</li>`;
// UlElement.innerHTML = noUserString;
// const inputTextElement = document.getElementById("inputTextThrottle");
// inputTextElement.addEventListener("input", searchItems);

const getData = () => {
  const inputTextElement = document.getElementById("inputTextThrottle");
  if (inputTextElement.value) {
    const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((res) => {
        const createLiElements = res
          .filter((f) =>
            f.name.toLowerCase().includes(inputTextElement.value.toLowerCase())
          )
          .map((r) => {
            return `<li>${r.name}</li>`;
          });
        UlElement.innerHTML =
          createLiElements.length > 0
            ? createLiElements.join("")
            : noUserString;
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    UlElement.innerHTML = "";
  }
};

const throttle = (fn, limit = 300) => {
  let flag = true;
  return (...args) => {
    if (flag) {
      fn.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const throttleItems = throttle(getData, 1000);
