//lista delle squadre di calcio//
const serieIta = [
  { nome: "Milan", punti: 0, falliSubiti: 0 },
  { nome: "Parma", punti: 0, falliSubiti: 0 },
  { nome: "Fiorentina", punti: 0, falliSubiti: 0 },
  { nome: "Catanzaro", punti: 0, falliSubiti: 0 }
]

//genero numeri casuali//
const numeroRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


for (const squadra of serieita) {
  console.log(`Nome squadra: ${squadra.nome}`);
}

// Aggiorno punti e falli con numeri casuali//
for (const squadra of serieita) {
  squadra.punti = numeroRandom(10, 90);       // punti casuali
  squadra.falliSubiti = numeroRandom(5, 50);  // falli casuali
}

// Creo un nuovo array con solo nome e falliSubiti
const soloFalli = serieita.map(squadra => ({
  nome: squadra.nome,
  falliSubiti: squadra.falliSubiti
}));

// Stampo il nuovo array in console
console.log(soloFalli);