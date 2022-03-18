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

  if (userAge < 16) {
    window.location.assign("./pages/not-eligible.html");
    return false;
  } else if (userAge < 18) {
    console.log("might be eligible");
    window.location.assign("./pages/not-eligible.html");
    return false;
  } else {
    window.location.assign("./pages/eligible.html");
    return true;
  }
}

const infoBtn = document.getElementById("info-btn");
infoBtn.addEventListener("click", toggleInfo);

function toggleInfo() {
  const info = this.nextElementSibling;
  info.classList.toggle("active-info");
  infoBtn.classList.toggle("active-btn");
  document.getElementById("arrow").classList.toggle("active-arrow");
}
