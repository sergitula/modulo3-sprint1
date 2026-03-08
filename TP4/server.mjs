import express from 'express';
import {
    obtenerSuperheroePorIdController, 
    buscarSuperheroesPorAtributoController, 
    obtenerSuperheroesMayoresDe30Controller
} from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;


app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
//http://localhost:3005/superheroes/id/1 (Spiderman)
//http://localhost:3005/superheroes/id/99 (No encontrado)
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
//Por planeta: http://localhost:3005/superheroes/atributo/planetaOrigen/Tierra (Spiderman e Ironman)
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);
// http://localhost:3005/superheroes/edad/mayorA30  (Ironman (45años))


// Levantar el servidor en el puerto 3005
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
