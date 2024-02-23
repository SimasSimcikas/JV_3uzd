const skaiciai = [];
let i = 0;
let sum = 0;
let didziausasSkaicius = 0;
let maziausiasSkaicius = 0;

while (i < 6) {
  let skaicius = prompt("Įveskite 6 skaičius");
  skaiciai.push(parseFloat(skaicius));
  i++;
}

let skaiciuMasyvas = skaiciai;
console.log(skaiciuMasyvas);

for (let i = 0; i < skaiciai.length; i++) {
  sum = sum + skaiciai[i];
}

console.log("Skaičių suma: " + sum);

const vidurkis = sum / skaiciai.length;
console.log("Skaičių vidurkis: " + vidurkis);

for (let i = 1; i < skaiciai.length; i++) {
  if (skaiciai[i] > didziausasSkaicius) {
    didziausasSkaicius = skaiciai[i];
  }
}
console.log("Didžiausias skaičius: " + didziausasSkaicius);

for (let i = 1; i < skaiciai.length; i++) {
  if (skaiciai[i] + 1 < maziausiasSkaicius) {
    maziausiasSkaicius = skaiciai[i];
  }
}
console.log("Mažiausias skaičius: " + maziausiasSkaicius);
