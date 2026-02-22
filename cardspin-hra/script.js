
let symboly = ["🍒", "🍋", "🍉", "7", "💎"];

let vysledok = document.getElementById("slot-symboly");
let sprava = document.getElementById("slot-vyhra");

function tocSloty() {
 
  let s1 = symboly[Math.floor(Math.random() * symboly.length)];
  let s2 = symboly[Math.floor(Math.random() * symboly.length)];
  let s3 = symboly[Math.floor(Math.random() * symboly.length)];


  vysledok.textContent = s1 + " " + s2 + " " + s3;


  if (s1 === s2 && s2 === s3) {
    sprava.textContent = "Vyhral si! 🎉";
  } else {
    sprava.textContent = "Skús znova!";
  }
}


document.getElementById("tocit-sloty").onclick = tocSloty;

