const select = document.querySelector("select");

const spanP1 = document.querySelector(".p1");
const but1 = document.querySelector(".player1");
but1.addEventListener("click", function () {
  spanP1.innerText = Number(spanP1.innerText) + 1;
  if (Number(spanP1.innerText) === Number(select.value)) {
    spanP1.style.color = "green";
    spanP2.style.color = "red";
    but1.style.cursor = "not-allowed";
    but2.style.cursor = "not-allowed";
    but1.setAttribute("disabled", true);
    but2.setAttribute("disabled", true);
  }
});

const spanP2 = document.querySelector(".p2");
const but2 = document.querySelector(".player2");
but2.addEventListener("click", function () {
  spanP2.innerText = Number(spanP2.innerText) + 1;
  if (Number(spanP2.innerText) === Number(select.value)) {
    spanP1.style.color = "red";
    spanP2.style.color = "green";
    but1.style.cursor = "not-allowed";
    but2.style.cursor = "not-allowed";
    but1.setAttribute("disabled", true);
    but2.setAttribute("disabled", true);
  }
});

const butReset = document.querySelector(".reset");
butReset.addEventListener("click", function () {
  spanP1.innerText = 0;
  spanP2.innerText = 0;
  spanP1.style.color = "black";
  spanP2.style.color = "black";
  but1.style.cursor = "pointer";
  but2.style.cursor = "pointer";
  but1.removeAttribute("disabled");
  but2.removeAttribute("disabled");
});
