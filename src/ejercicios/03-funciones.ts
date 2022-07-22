function suma(a:number, b:number): number {
    return a + b;
}


const resultado = suma( 10, 20 );

console.log( resultado );


const sumarFlecha  = (a:number , b: number): number => {

    return a + b; 
    
}

function Mult(num:number, otro?:number, base:number = 2): number {
    
    return num * base;

}

const resultado1 = Mult(5,130);

console.log(resultado1);

interface personajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje:personajeLOR, curarX: number): void{

    personaje.pv  += curarX;

    // console.log( personaje );
    

}

const nuevoPersonaje: personajeLOR = {
    nombre: 'hola',
    pv: 50,

    mostrarHp(){
        console.log('Puntos de vida', this.pv );
        
    }

}

curar( nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();