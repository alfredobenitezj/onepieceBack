import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createdebug from 'debug'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bienvenido a server de la banda del sombrero de paja');
    });

    app.listen(port,()=>{
        console.log(`Este server esta corriendo en el puerto ${port}`)
    });
    