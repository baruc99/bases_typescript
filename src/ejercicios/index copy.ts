

function queTipoSoy<T>(argumento: T) {


    return argumento;
    
}


let soyString = queTipoSoy('Hola mundo');
let soynumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8]);

let soyexplicito = queTipoSoy<number>(100);


