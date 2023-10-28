# Desplegament de Vue + NodeJS + Socket.IO

## Explicació de l'aplicació demo

Tenim un exemple d'una aplicació que fa servir VUE amb components. Té 2 comunicacions principals:
1.Fa servir crides fetch fent servir communicationManager. 
2.Per altra banda te un socket al servidor. Hi ha un component vue que te un chat fet amb socket.io. Desde un altre component s'està rebent la informació del socket en temps real. 

Per desplegar socket.io s'han fet servir les recomanacions de la pàgina de socket.io [How to use Socket.io with Vue3](https://socket.io/how-to/use-with-vue)


## Consideracions del escenari de desplegament al servidor

Aqui tenim un desplegament en el que la part de frontend está servida per NodeJS. 

El port es configura al servidor node. Si volem desplegar al labs, haurem de buscar un port 
que estigui lliure. 

Si el front i el backend estan servits pel mateix servidor no hi han problemes de CORS.

S'ha de tenir en compte que al servidor de NODEJS s'han d'afegir unes linies d'API Fallback. 
( aixó vol dir que el routing de vue funcionará amb node. Primer el servidor intenta servir la ruta i sino pot, pasa el control a index.html qui es qui gestionarà la ruta).
