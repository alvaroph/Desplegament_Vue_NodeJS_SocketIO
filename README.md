# Desplegament de Vue + NodeJS + Socket.IO

## Explicació de l'aplicació demo

Tenim un exemple d'una aplicació que fa servir VUE amb components. 
Té 2 comunicacions principals (les dos a la carpeta /services):
1. Fa servir crides fetch fent servir communicationManager. 
2. Per altra banda te un socket a la part client que interactua amb el servidor de nodejs.

Hi ha un component vue que te un chat fet amb socket.io. Desde un altre component s'està rebent la informació del socket en temps real. 

Per desplegar socket.io s'han fet servir les recomanacions de la pàgina de socket.io [How to use Socket.io with Vue3](https://socket.io/how-to/use-with-vue)

Les recomanacions principals d'us de Socket amb una eina com vue es fer totes les interaccions amb els sockets (.on) al fitxer socket.js. Totes les interaccions s'han de vincular amb un objecte state. 

Per fer servir el socket desde un component de vue, importem l'objecte state i si el necessitem (perque hem de fer un emit) el propi socket. 

Per interactuar amb l'objecte state podem fer servir computed() per poder accedir al estat. 


## Funcionament repositori

Tenim 2 branques al repositori (canvieu per escollir l'escenari de treball)

1. Treball en desenvolupament local
2. Desplegament a servidor
