// 1. Zoznam symbolov
let symboly = ["🍒", "🍋", "🍉", "7", "💎"];

// 2. Vyberieme HTML elementy
let vysledok = document.getElementById("slot-symboly");
let sprava = document.getElementById("slot-vyhra");

// 3. Funkcia, ktorá sa spustí po kliknutí
function tocSloty() {
  // vyber 3 symboly náhodne
  let s1 = symboly[Math.floor(Math.random() * symboly.length)];
  let s2 = symboly[Math.floor(Math.random() * symboly.length)];
  let s3 = symboly[Math.floor(Math.random() * symboly.length)];

  // zobraz ich
  vysledok.textContent = s1 + " " + s2 + " " + s3;

  // skontroluj výhru
  if (s1 === s2 && s2 === s3) {
    sprava.textContent = "Vyhral si! 🎉";
  } else {
    sprava.textContent = "Skús znova!";
  }
}

// 4. Pripoj funkciu k tlačidlu
document.getElementById("tocit-sloty").onclick = tocSloty;

