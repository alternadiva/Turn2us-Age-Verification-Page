const form = document.getElementById("form");
const dob = document.getElementById("dob");

let today = new Date().toISOString().slice(0, 10);
dob.setAttribute("max", today);
