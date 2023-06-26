/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  //obtener indices aleatorioa
  function indicesAleatorios(arreglo) {
    const numeroAleatorio = Math.round(Math.random() * arreglo.length);
    return numeroAleatorio;
  }

  document.getElementById("excuse").innerHTML = `<p> ${
    who[indicesAleatorios(who)]
  } ${action[indicesAleatorios(action)]} ${what[indicesAleatorios(what)]} ${
    when[indicesAleatorios(when)]
  }</p>`;
};
