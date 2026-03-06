import OS from 'os';

//obtener la arquitectura del sistema
console.log('Arquitectura:', OS.arch());

//obtener el tipo de sistema operativo
console.log('Plataforma:', OS.platform());

//obtener la cantidad total de memoria 
console.log('Memoria total:', OS.totalmem());

//obtener la de memoria libre
console.log('Memoria libre:', OS.freemem());

//obtener la información de la CPU
console.log('Información de la CPU:', OS.cpus());