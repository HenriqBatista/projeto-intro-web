const pais1 = {
  nome1: "Brasil",
  subdivisoes1: 27,
  litoral1: true,
  turistico1: ["Cristo Redentor", " Cataratas do Iguaçu", " Chapada Diamantina"],
};

const pais2 = {
  nome2: "Argentina",
  subdivisoes2: 24,
  litoral2: true,
  turistico2: [
    "Casa Rosada",
    " Obelisco de Buenos Aires",
    " Museu de Arte Latino-Americana",
  ],
};

const pais3 = {
  nome3: "Bolívia",
  subdivisoes3: 9,
  litoral3: false,
  turistico3: ["Salar de Uyuni", " Valle de la Luna", " Tiauanaco"],
};

// const mediaSubs =
//   (pais1.subdivisoes + pais2.subdivisoes1 + pais3.subdivisoes2) / 3;
// console.log(`A media de subdivisões dos países é ${mediaSubs}`);

// const praia = pais1.litoral && pais2.litoral1 && pais3.litoral2;
// console.log(`Todos os países citados possuem litoral = ${praia}`);

// console.log(
//   `${pais1.nome.toUpperCase()}\n Subdivisões: ${pais1.subdivisoes}\n Litoral: ${
//     pais1.litoral
//   }\n Pontos Turísticos: ${pais1.turistico}`
// );

// console.log(
//   `${pais2.nome1.toUpperCase()}\n Subdivisões: ${
//     pais2.subdivisoes1
//   }\n Litoral: ${pais2.litoral1}\n Pontos Turísticos: ${pais2.turistico1}`
// );

// console.log(
//   `${pais3.nome2.toUpperCase()}\n Subdivisões: ${
//     pais3.subdivisoes2
//   }\n Litoral: ${pais3.litoral2}\n Pontos Turísticos: ${pais3.turistico2}`
// );

const paises = []

pais1.litoral1 ? paises.push(pais1) : alert("O item não foi adicionado")
pais2.litoral2 ? paises.push(pais2) : alert("O item não foi adicionado")
pais3.litoral3 ? paises.push(pais3) : alert("O item não foi adicionado")

console.log(paises)