const menu = document.getElementsByClassName("menu");
const gameBtn = document.getElementsByClassName("gameBtn");

menu[0].onclick = function() {
  window.location = "index.html";
};
menu[1].onclick = function() {
  window.location = "games.html";
};
menu[2].onclick = function() {
  window.location = "contacts.html";
};
menu[3].onclick = function() {
  window.location = "announcements.html";
};
menu[4].onclick = function() {
  window.location = "atf.html";
};

gameBtn[0].onclick = function() {
  window.location = "Sealed in Stone/index.html"
}
