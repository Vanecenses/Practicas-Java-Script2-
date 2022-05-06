                    // Practicas de js

// for (let i = 1; i<20 ; i ++){
// console.log(i)
// }
 let patas = 4 ;
 let accion = 'ladra'

 for (let i =1; i<=4 ; i++){
     if (i=== 4){
     console.log(accion)}
 }

// Clases
const enemigo = 'Thor'
const lokiDisfraces={
    'ironMan': 'thanos',
    'Thor': 'Odin',
    'Hulk' : 'spiderman',
    'Wolverine' : 'magneto',
}
const lokiDefautDisfraz = 'loki'
const Loki = lokiDisfraces[enemigo]? lokiDisfraces[enemigo] : lokiDefautDisfraz
// console.log (Loki)

const LokiEnemies = (losdisfraces, enemigos) => {
   return losdisfraces [enemigos]? losdisfraces[enemigos]: 'Loki'
}
console.log (LokiEnemies(lokiDisfraces,'Thor'))