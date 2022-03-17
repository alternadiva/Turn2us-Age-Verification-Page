const form = document.getElementById("form");
const dob = document.getElementById("dob");

const today = new Date();

const HTMLDateFormat = today.toISOString().slice(0, 10);
dob.setAttribute("max", HTMLDateFormat);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const userInput = Object.fromEntries(formData);
  const userDOB = new Date(userInput.dob);

  verifyAge(userDOB);
});

function verifyAge(dateOfBirth) {
  const msAYear = 1000 * 60 * 60 * 24 * 365.25;
  let userAge = (today.setUTCHours(23, 59, 59, 59) - dateOfBirth) / msAYear;
}
