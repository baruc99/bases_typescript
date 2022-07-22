
let habilidades: string[] = [ 'bash', 'counter', 'healing']

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    pruebloNatal?: string;
}

const personaje: Personaje ={
     nombre: 'strider',
     hp: 100,
     habilidades: ['bash', 'counter', 'healig']
};


personaje.pruebloNatal = 'pueblo paleta';

console.table( personaje );
