
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
// const pais1 = {
//   nome: "Brasil",
//   subdivisoes: 27,
//   litoral: true,
//   turistico: "Cristo Redentor, Cataratas do Iguaçu, Chapada Diamantina"
// };

// const pais2 = {
//   nome: "Argentina",
//   subdivisoes: 24,
//   litoral: true,
//   turistico:
//     "Casa Rosada, Obelisco de Buenos Aires, Museu de Arte Latino-Americana"

// };

// const pais3 = {
//   nome: "Bolívia",
//   subdivisoes: 9,
//   litoral: false,
//   turistico: "Salar de Uyuni, Valle de la Luna, Tiauanaco"
// };

/* Desta linha para cima, tudo que está comentado são os objetos dos arrays porem criados da forma que havia sido pedido nas 2 primeiras semanas do pro*/

let paises = [
  {
  Nome: "Brasil",
  Subdivisoes: 27,
  Populacao: "217 Milhões",
  Litoral: true,
  Turismo: "Cristo Redentor, Cataratas do Iguaçu, Chapada Diamantina",
  Image: "./Flag_of_Brazil.jpg",
  link: "https://pt.wikipedia.org/wiki/Brasil"
},
{
  Nome: "Argentina",
  Subdivisoes: 24,
  Populacao: "47,4 Milhões",
  Litoral: true,
  Turismo:
    "Casa Rosada, Obelisco de Buenos Aires, Teatro Colón",
    Image: "./bandeira-argentina.jpg",
    link: "https://pt.wikipedia.org/wiki/Argentina"
},
{
  Nome: "Bolívia",
  Subdivisoes: 9,
  Populacao: "11,8 Milhões",
  Litoral: false,
  Turismo: "Salar de Uyuni, Valle de la Luna, Tiauanaco",
  Image: "./Flag_of_Bolivia.jpg",
  link: "https://pt.wikipedia.org/wiki/Bol%C3%ADvia"
},
{
  Nome: "Uruguai",
  Subdivisoes: 19,
  Populacao: "3,5 Milhões",
  Litoral: true,
  Turismo: "Teatro Solis, La mano, Casapueblo",
  Image: "./Flag_of_Uruguay.jpg",
  link: "https://pt.wikipedia.org/wiki/Uruguai"
},
{
  Nome: "Chile",
  Subdivisoes: 56,
  Populacao: "16,9 Milhões",
  Litoral: true,
  Turismo:"Vale Nevado, Plaza das Armas, Capelas de Mármore",
  Image: "./Flag_of_Chile.jpg",
  link: "https://pt.wikipedia.org/wiki/Chile"
}
]

/* Testando adicionar mais um item ao array*/
pais6 = {
  Nome: "Colombia",
  Subdivisoes: 33,
  Populacao: "50,3 Milhões",
  Litoral: true,
  Turismo: "Catedral de Sal, Museu Botero, Morro de Monserrate",
  Image: "./Flag_of_Colombia.jpg",
  link: "https://pt.wikipedia.org/wiki/Col%C3%B4mbia"
}
paises.push (pais6)


/* Média numérica calculada e impressa no console */
function calculaMedia (paises){
  let mediaEstados = 0
  for(let i in paises){
    mediaEstados += paises[i].Subdivisoes / paises.length
  }
    return mediaEstados 
}
calculaMedia(paises)
console.log(`A média de Subdivisões/Estados dos países é ${calculaMedia(paises)} \n \n \n \n`);
/*////////////////////////////////////////////////////////////////////*/

/*Verificação de valores booleanos true impressa no console*/
const temLitoral = []
function verificaLitoral (paises){
    for (const i in paises){
      if(paises[i].Litoral === true){
        temLitoral.push(paises[i].Nome)
      }
    }
    console.log(`Os Países que possuem a variável booleana True sao: ${temLitoral.toString()} \n \n \n`)
}
  verificaLitoral(paises)

/* Imprimindo Objeto*/
  for (let pais of paises){
  for (let dados in pais){{
      console.log(`${dados}:${pais[dados]}`)
    }
  }
  console.log(`\n`)
}

/*Função imprimindo string*/
function verificaTurismo (paises){
  for(let pais in paises){
    console.log(`Os pontos turisticos: ${paises[pais].Turismo}, estão no(a)  ${paises[pais].Nome}`)
    console.log(`\n`)
  }
}
console.log(`\n`)
verificaTurismo(paises)


function verificaObjeto (objetoPaises, nomePaises){
  let paisEncontrado = "";
    
    for (let pais of objetoPaises){
      if (pais.Nome.toUpperCase() === nomePaises.toUpperCase()){
        paisEncontrado = pais;
        return paisEncontrado
      } else if (pais.Nome.toUpperCase() !== nomePaises.toUpperCase()){
        paisEncontrado = paisEncontrado
      }
    }
    if (paisEncontrado === ""){
      paisEncontrado = alert ("Este país não consta na lista");
    }
    console.log(paisEncontrado)
    return paisEncontrado
}

verificaObjeto (paises,"Brasil")

/*Itens listados, renderizados com DOM*/ 
const cards = document.getElementById("paises")
function criaCard (paises){
  let card = "";
  for (let pais of paises){
    card += `<section class = "pais">
      <ul class = "ul">
        <li>
          Nome:<a href=${pais.link} target="_blank">${pais.Nome}</a>
        </li>
        <li>Subdivisões: ${pais.Subdivisoes}</li>
        <li>População: ${pais.Populacao}</li>
        <li>Litoral: ${pais.Litoral ? "Sim": "Não"}</li>
        <li>
        Turismo: ${pais.Turismo}
        </li>
      </ul>
      <img src="${pais.Image}" alt="bandeira do ${pais.Nome}" class="bandeira">
      </section>`
      
}
  cards.innerHTML += card;
}
criaCard(paises)

let textoBusca = document.getElementById("input") 

document.getElementById("button").addEventListener("click", function(){ 
  let filter = paises.filter(paisFiltrado =>{
    return paisFiltrado.Nome.toLowerCase().includes(textoBusca.value.toLowerCase())
  })
  paisRender = ""
    for(let pais of filter){
      paisRender += `<section class = "pais">
      <ul class = "ul">
        <li>
          Nome:<a href=${pais.link} target="_blank">${pais.Nome}</a>
        </li>
        <li>Subdivisões: ${pais.Subdivisoes}</li>
        <li>População: ${pais.Populacao}</li>
        <li>Litoral: ${pais.Litoral}</li>
        <li>
        Turismo: ${pais.Turismo}
        </li>
      </ul>
      <img src="${pais.Image}" alt="bandeira do ${pais.Nome}" class="bandeira">
      </section>`
    }
    cards.innerHTML = paisRender
      
})

let createCard = cards.innerHTML
textoBusca.addEventListener("input", function(){
  if (textoBusca.value.length === 0){
    cards.innerHTML = createCard
  }
  
  // let paisBusca = paises.filter((nome =>{
  //   // return nome
    
  // })
  // )
  // for (filtrado of paisBusca){
  //     if (textoBusca !== filtrado){
  //       alert("País não encontrado")
  //     }
  // }
})
