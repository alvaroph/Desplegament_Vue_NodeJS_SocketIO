<template>
    <div>
        <v-navigation-drawer>
            <v-list>
                <v-list-item title="Xat Lateral"></v-list-item>
                <v-text-field
                        label="Missatge"
                        hide-details="auto"
                        v-model="mensaje"
                        ></v-text-field>
                <v-btn @click="sendMessage">Enviar</v-btn>
            </v-list>
            <ul>
                <li v-for="actual in conversacion" v-bind:key="actual">
                {{ actual }}
            </li>
            </ul>
            </v-navigation-drawer>
    </div>
</template>

<script>
import {enviarMensaje, initSocket} from '../services/communicationManager.js';

export default {
    data() {
        return {
            mensaje:``,
            conversacion: []
        }
    },
    methods:{
        sendMessage(){            
            enviarMensaje(this.mensaje);
        },
      },

    created() {
        initSocket(this);        
    },
}
</script>
