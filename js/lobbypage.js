const usernameInput = getElementById("usernameInput");
const levelInput = getElementById("levelInput");
const playGameButton = getElementById("playGameButton");
const instructionOpenButton = getElementById("instructionOpenButton");

playGameButton.addEventListener("click", function () {
  if (usernameInput.value.trim() === "") {
    usernameInput.focus();
    return alert("Username is required");
  }

  if (levelInput.value === "Select Level") {
    levelInput.focus();
    return alert("Level is required");
  }

  localStorage.setItem("username", usernameInput.value);
  localStorage.setItem("level", levelInput.value);

  switchPage("game");
});

if (localStorage.getItem("username")) {
  usernameInput.value = localStorage.getItem("username");
}

if (localStorage.getItem("level")) {
  levelInput.value = localStorage.getItem("level");
}
