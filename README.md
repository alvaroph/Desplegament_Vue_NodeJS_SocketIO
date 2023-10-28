# Desplegament de Vue + NodeJS + Socket.IO

## Explicació de l'aplicació demo

Tenim un exemple d'una aplicació que fa servir VUE amb components. Té 2 comunicacions principals:
1. Fa servir crides fetch fent servir communicationManager. 
2. Per altra banda te un socket al servidor. Hi ha un component vue que te un chat fet amb socket.io. Desde un altre component s'està rebent la informació del socket en temps real. 

Per desplegar socket.io s'han fet servir les recomanacions de la pàgina de socket.io [How to use Socket.io with Vue3](https://socket.io/how-to/use-with-vue)


## Funcionament repositori

Tenim 2 branques al repositori

1. Treball en desenvolupament local
2. Desplegament a servidor
