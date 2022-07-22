import { Producto, calcularISV } from '../ejercicios/06-desestructuración-funcion';


const carritoCompras: Producto[] = [
    {
        desc: 'telefono',
        precio: 100
    },
    {
        desc: 'telefono2',
        precio: 150
    },
];

const [total, isv] = calcularISV( carritoCompras );

console.log( 'total ',  total );
console.log( 'isv ',  isv );
