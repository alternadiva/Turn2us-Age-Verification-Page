const form = document.getElementById("form");
const dob = document.getElementById("dob");

const today = new Date();
const HTMLDateFormat = today.toISOString().slice(0, 10);
dob.setAttribute("max", HTMLDateFormat);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const userInput = Object.fromEntries(formData);
  const userDOB = userInput.dob;
});
