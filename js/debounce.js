const UlElement = document.getElementById("listItemsDebounce");
const noUserString = `<li>No Users Found</li>`;
// UlElement.innerHTML = noUserString;
// const inputTextElement = document.getElementById("inputTextDebounce");
// inputTextElement.addEventListener("input", searchItems);


const getData = () => {
  const inputTextElement = document.getElementById("inputTextDebounce");
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

const debounce = (fn, delay = 300) => {
  let createTimeout = null;
  return (...args) => {
    clearTimeout(createTimeout);
    createTimeout = setTimeout(() => fn.apply(this, args), delay);
  };
};

const debounceItems = debounce(getData, 300);
