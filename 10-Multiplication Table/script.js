const generateButton = document.querySelector(".GenerateButton");
const inputNumber = document.querySelector(".digit");
const tableContainer = document.querySelector(".table-container");

function generateTable(number) {
  let tableHTML = "<table>";
  for (let i = 1; i <= 15; i++) {
    tableHTML += "<tr>";
    tableHTML += `<td>${number}</td>`;
    tableHTML += `<td>${"x"}</td>`;
    tableHTML += `<td>${i}</td>`;
    tableHTML += `<td>${"="}</td>`;
    tableHTML += `<td>${number * i}</td>`;
    tableHTML += "</tr>";
  }
  tableHTML += "</table>";
  tableContainer.innerHTML = tableHTML;
}

generateButton.addEventListener("click", function () {
  // Get the value from the input
  const inputValue = parseInt(inputNumber.value);
  // Validate the input
  if (isNaN(inputValue) || inputValue < 1 || inputValue > 99) {
    alert("Please enter a number between 1 and 10.");
    return;
  }
  // Generate the table
  generateTable(inputValue);
});
