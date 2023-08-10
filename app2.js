const {crearArchivo2} = require('./helpers/multiplicar2')
console.clear();


const[,,arg3 ='base=5'] = process.argv;
const [, base = 5] = arg3.split('=')
console.log(base);



//const base = 5;

 crearArchivo2(base)
     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
     .catch(err => console.log(err));