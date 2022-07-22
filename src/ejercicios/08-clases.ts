
class PersonaNormal{


    constructor( 
        public nombre: string,
        public direccion: string
      ){}

}


class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){

        super( nombreReal, 'New york USA');
        // this.alterEgo = alterEgo;
        // this.edad = edad;
        // this.nombreReal = nombreReal; 
    }
}


// interface Personaje2{
//     nombre: string;
//     edad: number;
//     nombreReal: string;
//     imprimirNombre: () => string ;
// }

const ironman = new Heroe('iron man', 53, 'tony start');

// const spiderman: Personaje2 = {}

console.log( ironman );


