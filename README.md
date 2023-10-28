# Desplegament de Vue + NodeJS + Socket.IO

## Consideracions del escenari de treball en desenvolupament

En aquesta fase inicial de treball, volem fer servir Vue servit per Vite al port 4000. 
Volem poder treballar amb npm run dev i no haver d'estar fent build cada vegada que volem provar. 
Tenim un servidor NodeJS que farà de servidor de Socket al port 3000 que volem que accepti peticions desde Vue.
Necessitem configurar CORS per a que no hi hagi problemes de connexió.
