# base

## Project setup

Aqui tenim un desplegament en el que la part de frontend está servida per NodeJS. 

El port es configura al servidor node. Si volem desplegar al labs, haurem de buscar un port 
que estigui lliure. 

Si el front i el backend estan servits pel mateix servidor no hi han problemes de CORS.

S'ha de tenir en compte que al servidor de NODEJS s'han d'afegir unes linies d'API Fallback. 
( aixó vol dir que el routing de vue funcionará amb node. Primer el servidor intenta servir la ruta i sino pot, pasa el control a index.html qui es qui gestionarà la ruta).
