// lista degli oggetti con il loro peso//
const bike = [
  { nome: "Bianchi", peso: 7.5 },
  { nome: "Bmx", peso: 8 },
  { nome: "Orbea", peso: 7.0 },
  { nome: "Scott", peso: 7.2 }
];

let biciLeggera = bike[0];

//ricerca delle bici più leggere//
for (const bici of bike) {
  if (bici.peso < biciLeggera.peso) {
    biciLeggera = bici;
  }
}


//stampa della bici più leggera//
console.log(`La bici più leggera è: ${biciLeggera.nome} con ${biciLeggera.peso} kg`)