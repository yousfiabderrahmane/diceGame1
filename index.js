let title = document.querySelector("h1");
let button = document.querySelector("button");
let player1Name = prompt("Players 1 name :");
let player2Name = prompt("Players 2 name :");
let count1 = 0;
let count2 = 0;
document.getElementById("diceName1").innerHTML = `${player1Name}(${count1})`;
document.getElementById("diceName2").innerHTML = `${player2Name}(${count2})`;

button.onclick = function () {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber1);
  document.getElementById("num1").innerHTML = randomNumber1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber2);
  document.getElementById("num2").innerHTML = randomNumber2;
  document
    .querySelectorAll("img")[0]
    .setAttribute("src", `/images/dice${randomNumber1}.png`);
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", `/images/dice${randomNumber2}.png`);
  if (randomNumber1 > randomNumber2) {
    title.innerHTML = `${player1Name} won !`;
    count1 += 1;
  } else if (randomNumber1 < randomNumber2) {
    title.innerHTML = `${player2Name} won !`;
    count2 += 1;
  } else {
    title.innerHTML = "Draw !";
  }
  document.getElementById("diceName1").innerHTML = `${player1Name}(${count1})`;
  document.getElementById("diceName2").innerHTML = `${player2Name}(${count2})`;
};
