const menu = document.getElementsByClassName("menu");
const gameBtn = document.getElementsByClassName("gameBtn");

menu[0].onclick = function() {
  window.location = "Website/index.html";
};
menu[1].onclick = function() {
  window.location = "Website/games.html";
};
menu[2].onclick = function() {
  window.location = "Website/contacts.html";
};
menu[3].onclick = function() {
  window.location = "Website/announcements.html";
};
menu[4].onclick = function() {
  window.location = "Website/atf.html";
};

gameBtn[0].onclick = function() {
  window.location = "Sealed in Stone/index.html"
}
