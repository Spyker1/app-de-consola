const fs = require(`fs`);
const colors = require(`colors`);

const crearArchivo = async(base = 5, listar, hasta) =>{
    console.clear();
    try {
        
    let salida=``, consola = ``;


    for( let i = 1; i <= hasta; i++ ){
        salida += `${base} * ${i} = ${base * i}\n`;
        consola += `${base} ${ `X`.green } ${i} ${ `=`.blue } ${base * i}\n`;
    }

    if(listar === true){
        console.log(`=============`.cyan)
    console.log(`Tabla del:`.blue, base)
    console.log(`=============`.magenta)

    console.log(consola);
        }

    fs.writeFileSync( `./salida/tabla-${base}.txt`,salida);

    return (`Tabla del ${base}.txt`);
    
    } catch (err) {
        throw err;
    }

}


module.exports = {
    crearArchivo
}