const color = document.querySelector(".hex");
const btn = document.querySelector(".generate");
// const box = document.getElementsByClassName(".counter-div");

const generateNumber = () => {
  const randomNumber = Math.random().toString(16).toUpperCase().substring(2, 8);
  const newColor = "#" + randomNumber;
  color.innerHTML = newColor;
  // color.innerHTML.style.color = newColor;
  // box.style.backgroundColor = newColor;
  document.body.style.backgroundColor = newColor;
};
btn.addEventListener("click", generateNumber);
generateNumber();
