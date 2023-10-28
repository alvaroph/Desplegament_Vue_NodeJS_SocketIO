# Desplegament de Vue + NodeJS + Socket.IO


## Consideracions del escenari de desplegament al servidor

Aqui tenim un desplegament en el que la part de frontend está servida per NodeJS. 

El port es configura al servidor node. Si volem desplegar al labs, haurem de buscar un port 
que estigui lliure. S'ha de configurar al fitxer del servidor.

Hem de especificar que node servirà a banda de Socket i/o l'API, fitxers estatics (index.html)

El front que es desplega ha d'estar compilat. S'ha de fer previament un build a vite i s'ha de deixar a la carpeta que haguem definit com a static files del servidor de node.

Si el front i el backend estan servits pel mateix servidor no hi han problemes de CORS.

S'ha de tenir en compte que al servidor de NODEJS s'han d'afegir unes linies d'API Fallback. 
( aixó vol dir que el routing de vue funcionará amb node. Primer el servidor intenta servir la ruta i sino pot, pasa el control a index.html qui es qui gestionarà la ruta, s'ha de vigilar que la carpeta de static files d'aquesta part contingui els fitxers correctes).

