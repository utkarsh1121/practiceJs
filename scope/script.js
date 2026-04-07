function createToster(config) {
  return function (string) {
    const container = document.createElement("div");
    container.className = "container";

    // Create the paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = string;

    // Append paragraph to container
    container.appendChild(paragraph);

    // Append container to body
    document.body.appendChild(container);
    setTimeout(() => {
      document.body.removeChild(container);
    }, config.duration);
  }
}
// const toster = createToster({
//   positionX: "right", 
//   positionY: "top", 
//   theme: "dark",
//   duration: 3000,
// })

const darkToster = createToster({ theme: "dark", duration: 3000 });
const lightToster = createToster({ theme: "light", duration: 2000 });

// lightToster("Light message");

// toster("Example of a toster from the function.");
// toster("Example of a toster from the function.");

document.querySelector(".darkToster").addEventListener("click", () => {
  darkToster("Dark message");
});
document.querySelector(".lightToster").addEventListener("click", () => {
  lightToster("Light message");
});