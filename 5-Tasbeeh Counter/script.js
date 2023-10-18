var button = document.querySelector(".btn");
var colums = document.querySelectorAll("td");
var length = colums.length;
count = 0;

button.addEventListener("click", function () {
  addAnimations("btn");
  count++;

  if (count < 35) {
    colums[1].innerHTML++;
    button.innerHTML = "ٱللَّٰهُ أَكْبَرُ";
  } else if (count < 68) {
    colums[2].innerHTML++;
    button.innerHTML = "ٱلْحَمْدُ لِلَّٰهِ";
  } else if (count < 101) {
    colums[3].innerHTML++;
    button.innerHTML = "سُبْحَانَ ٱللَّٰهِ";
  } else {
    count = 0;
    colums[0].innerHTML++;
    colums[1].innerHTML = count;
    colums[2].innerHTML = count;
    colums[3].innerHTML = count;
  }
});

function addAnimations(pressedKey) {
  var selectedButton = document.querySelector("." + pressedKey);
  selectedButton.classList.add("pressed");

  setTimeout(function () {
    selectedButton.classList.remove("pressed");
  }, 200);
}
