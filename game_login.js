function addUser()
{
var Ninjago = document.getElementById("player1_name_input").value;
var Ninja = document.getElementById("player2_name_input").value;
localStorage.setItem("player1", Ninjago);
localStorage.setItem("player2", Ninja);
window.location="game_page.html";
}
