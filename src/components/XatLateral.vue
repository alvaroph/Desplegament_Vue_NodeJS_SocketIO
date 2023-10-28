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
                <li v-for="actual in chat" v-bind:key="actual">
                {{ actual[0] }}
            </li>
            </ul>
            </v-navigation-drawer>
    </div>
</template>

<script>
import {  socket, state } from "@/services/socket";

export default {
    data() {
        return {
            mensaje:``,
            conversacion: []
        }
    },
    methods:{
        sendMessage(){            
            socket.emit('chat message', this.mensaje);
        },
      },
      computed: {
        chat() {
          return state.chat;
        },
      },
    created() {
      //  initSocket(this);        
    },
}
</script>
