const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const pass = document.querySelector(".output");

  const strongPassword = generateStrongPassword();

  pass.innerHTML = strongPassword;
});

function generateStrongPassword() {
  const specialChars = "!@#$%^&*(){}";
  const digits = "1234567890";
  const UpperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LowerCaseLetters = UpperCaseLetters.toLowerCase();

  let password = "";

  password += generateRandomChars(specialChars);
  password += generateRandomChars(digits);
  password += generateRandomChars(UpperCaseLetters);
  password += generateRandomChars(LowerCaseLetters);

  password = password.replace(/,/g, "");

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  return password;
}

function generateRandomChars(charSet) {
  const randomChars = [];
  for (let i = 0; i < 4; i++) {
    const charIndex = Math.floor(Math.random() * charSet.length);
    randomChars.push(charSet[charIndex]);
  }
  return randomChars;
}
