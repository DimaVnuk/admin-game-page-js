"use strict";
let itemId = 0;
let elementForDelete = null;
let game = {};
const radioButtonPriceCollection = document.querySelectorAll(".radio-style");
nameValid.innerHTML = "Enter more than 5 word";
nameValid.style.color = "red";
articleValid.innerHTML = "Enter your symbol in format 'B12'";
articleValid.style.color = "red";
countValid.innerHTML = "Enter only positive integers number";
countValid.style.color = "red";
priceValid.innerHTML = "Enter only positive integers number";
priceValid.style.color = "red";
dateValid.innerHTML = "Enter date";
dateValid.style.color = "red";

nameValid.hidden = true;
articleValid.hidden = true;
countValid.hidden = true;
priceValid.hidden = true;
dateValid.hidden = true;

const form = document.forms[0];
const formSecond = document.forms[1];

nameGame.addEventListener("change", (event) => {
  const str = event.target.value;
  if (str.length < 5) {
    nameValid.hidden = false;
  } else {
    nameValid.hidden = true;
    game.name = str;
  }
});

articleGame.addEventListener("change", (event) => {
  const str = event.target.value;
  if (str[0] >= "A" && str[0] <= "Z" && +str[1] && +str[2]) {
    articleValid.hidden = true;
    game.article = str;
  } else articleValid.hidden = false;
});

countGame.addEventListener("change", (event) => {
  const str = event.target.value;
  const num = +event.target.value;
  if (num && num > 0 && !str.includes(".") && !str.includes(",")) {
    countValid.hidden = true;
    game.count = num;
  } else {
    countValid.hidden = false;
  }
});

priceGame.addEventListener("change", (event) => {
  const num = +event.target.value;
  if (num >= 0) {
    priceValid.hidden = true;
    game.price = num;
  } else {
    priceValid.hidden = false;
  }
});

creationDate.addEventListener("change", (event) => {
  const date = event.target.value.split("-");
  game.date = date.reverse().join(".");
});

pictureGame.addEventListener("change", (event) => {
  game.img = event.target.value;
});

textArea.addEventListener("change", (event) => {
  game.desc = event.target.value;
});

formCreate.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    nameValid.hidden &&
    articleValid.hidden &&
    countValid.hidden &&
    priceValid.hidden
  ) {
    game.itemId = ++itemId;
    radioButtonPriceCollection.forEach((elem) => {
      if (cheap.checked) {
        game.priceSegment = "cheap";
      }
      if (optimal.checked) {
        game.priceSegment = "optimal";
      }
      if (premium.checked) {
        game.priceSegment = "premium";
      }
    });

    catalog.push(game);

    renderList();

    game = {};
    form.reset();
    formSecond.reset();
  }
});

if (catalog.length) {
  renderList();
}
