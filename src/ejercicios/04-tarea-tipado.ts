
// interface direccion{
//     calle: string;
//     pais: string;
//     ciudad: string;
// }

interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion: direccion,

    mostrarDireccion:() => string;
}

interface direccion{
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe:SuperHeroe = {
    nombre: 'spiderman',
    edad: 30,
    direccion:{
        calle: 'Main st',
        pais: 'USA',
        ciudad: 'NY'
    },

    mostrarDireccion(){
        return this.nombre + ', '+this.direccion.ciudad +', '+ this.direccion.pais;
    }

}

const direccion = superHeroe.mostrarDireccion();

console.log( direccion );
