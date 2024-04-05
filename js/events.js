// structure of eventlistener
// addEventListener("eventlistener name", () => {}, useCapture (true/false));

// event bubbling (by default)
document.getElementById("grandparent").addEventListener("click", () => {
  console.log("clicked grandparent");
});
document.getElementById("parent").addEventListener("click", () => {
  console.log("clicked parent");
});
document.getElementById("child").addEventListener("click", () => {
  console.log("clicked child");
});

// // or //

// document.getElementById("grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("clicked grandparent");
//   },
//   false
// );
// document.getElementById("parent").addEventListener(
//   "click",
//   () => {
//     console.log("clicked parent");
//   },
//   false
// );
// document.getElementById("child").addEventListener(
//   "click",
//   () => {
//     console.log("clicked child");
//   },
//   false
// );

// // event capturing
// document.getElementById("grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("clicked grandparent");
//   },
//   true
// );
// document.getElementById("parent").addEventListener(
//   "click",
//   () => {
//     console.log("clicked parent");
//   },
//   true
// );
// document.getElementById("child").addEventListener(
//   "click",
//   () => {
//     console.log("clicked child");
//   },
//   true
// );

// // event capturing & event bubbling
// // order will be executed from capturing to bubbling
// document.getElementById("grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("clicked grandparent");
//   },
//   true
// ); //capturing
// document.getElementById("parent").addEventListener(
//   "click",
//   () => {
//     console.log("clicked parent");
//   },
//   false
// ); //bubbling
// document.getElementById("child").addEventListener(
//   "click",
//   () => {
//     console.log("clicked child");
//   },
//   true
// ); //capturing

// // stopping event Propagation
// // Event Propagation determines in which order the elements receive the event. There are two ways to handle this event propagation order of HTML DOM is Event Bubbling and Event Capturing.
// document.getElementById("grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("clicked grandparent");
//   },
//   false
// ); //bubbling
// document.getElementById("parent").addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation(); // stops the event
//     console.log("clicked parent");
//   },
//   false
// ); //bubbling
// document.getElementById("child").addEventListener(
//   "click",
//   () => {
//     console.log("clicked child");
//   },
//   false
// ); //bubbling

// event delegation

document.querySelector("#userInput").addEventListener("keyup", (e) => {
  if (e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
