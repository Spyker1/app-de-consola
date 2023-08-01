const { describe } = require('yargs');

const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type:  'number',
    demandOption: true,
    describe: `Es la base de la multiplicacion`
       })
      .option('l', {
     alias: 'listar',
     type:  'boolean',
     default: false,
     describe: `Es la que decide si se muestra o no en consola`
       })
       .option('h', {
        alias: 'hasta',
        type:  'number',
        demandOption: true,
        describe: `Es la que dice cuantos numeros se van a multiplicar`
          })
 .check( (argv, options) => {
 if( isNaN( argv.b )){
   throw `La base debe de ser un numero`
       }
 return true;
       })
   .argv;

   module.exports = argv;