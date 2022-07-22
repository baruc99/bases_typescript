interface reproductor{

    volumen: number;
    segundo: number;
    cancion: string;
    detalles: detalles;

}

interface detalles{
    autor: string;
    anio: number;
}


const reproductor:reproductor = {

    volumen: 90,
    segundo: 36,
    cancion: 'mes',
    detalles: {
        autor: 'ed Sheeran',
        anio: 2015
    }
}


const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles

// console.log('EL volumen actual es de: ', volumen);
// console.log('EL segundo actual es de: ',segundo);
// console.log('la cancion actual es de: ',cancion);
// console.log('EL autor es de: ', autor);

const dbz: string[] = ['goku', 'vegeta', 'truks '];
const [ , , p3 ] = dbz;

console.log('personaje 1:',  );
console.log('personaje 2:',  );
console.log('personaje 3:', p3 );


