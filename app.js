const p1 = {
  display: document.querySelector(".p1"),
  button: document.querySelector(".player1"),
};

const p2 = {
  display: document.querySelector(".p2"),
  button: document.querySelector(".player2"),
};

const select = document.querySelector("select");
const butReset = document.querySelector(".reset");

p1.button.addEventListener("click", function () {
  winner(p1, p2);
});

p2.button.addEventListener("click", function () {
  winner(p2, p1);
});

butReset.addEventListener("click", function () {
  reset([p1, p2]);
});

const winner = function (player, opponent) {
  player.display.innerText = Number(player.display.innerText) + 1;
  if (Number(player.display.innerText) === Number(select.value)) {
    player.display.style.color = "green";
    opponent.display.style.color = "red";
    player.button.style.cursor = "not-allowed";
    opponent.button.style.cursor = "not-allowed";
    player.button.disabled = true;
    opponent.button.disabled = true;
  }
};

const reset = function (players) {
  players.forEach((p) => {
    p.display.innerText = 0;
    p.display.style.color = "black";
    p.button.style.cursor = "pointer";
    p.button.disabled = false;
  });
};
