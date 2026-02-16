
const input = document.getElementById("username");
const button = document.getElementById("checkBtn");
const output = document.getElementById("output");

let user = {
  name: "",
  allowed: false
};

button.addEventListener("click", () => {
  const value = input.value.trim();

  if (value === "") {
    alert("Please enter your name!");
    console.error("Input field is empty.");
    return;
  }

  user.name = value;

  if (user.name.length > 3) {
    user.allowed = true;
    output.textContent = `welcome ${user.name}`;
    output.style.color = "green";
    console.log("User allowed:", user);
  } else {
    user.allowed = false;
    output.textContent = "Not allowed";
    output.style.color = "red";
    console.warn("User not allowed:", user);
  }
});