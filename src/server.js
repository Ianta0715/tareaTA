const express = require('express');
const PORT = process.env.PORT || 3000;
const people = process.env.people;
const dotenv = require('dotenv');
const axios = require('axios');

const server = express();

dotenv.config();



server.use('/',() =>{
 console.log('servidor funcionando');
 
});

server.listen(()=> console.log(`Servidor escuchando en puerto ${PORT}`))

const fetch = ()=> {
    try {
    const respuesta = axios.get(people);
    console.log(respuesta.data);
    
} catch (error) {
    
}
}