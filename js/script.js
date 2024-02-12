const pages = {
  lobby: getElementById("lobbypage"),
  game: getElementById("gamepage"),
};

function getElementById(id) {
  return document.getElementById(id);
}

function switchPage(pageId) {
  closeAllPage();

  if (pages[pageId]) {
    pages[pageId].classList.remove("hidden");
  }
}

function closeAllPage() {
  for (const key in pages) {
    pages[key].classList.add("hidden");
  }
}

switchPage('lobby')
