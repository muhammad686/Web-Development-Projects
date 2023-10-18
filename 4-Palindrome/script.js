const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  var word = document.querySelector(".input-text").value;
  word = word.toLowerCase();
  var reverse_word = word.split("");
  var reverseArray = reverse_word.reverse();
  var revWord = reverseArray.join("");

  if (word.length > 1) {
    if (word === revWord) {
      result.innerHTML = `${word.toUpperCase()} is a palindrome`;
    } else {
      result.innerHTML = `${word.toUpperCase()} is not a palindrome`;
    }
  }
}
