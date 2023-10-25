<template>
    <v-app>
      <v-toolbar color="cyan" dark>
        <v-toolbar-title>Recepción de pedidos</v-toolbar-title>
      </v-toolbar>
      <v-container>
        <v-card v-for="(pedido, index) in pedidos" :key="index">
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cart</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Pedido #{{ pedido.id }}</v-list-item-title>
                <v-list-item-subtitle>Cliente: {{ pedido.cliente }}</v-list-item-subtitle>
                <v-list-item-subtitle>Productos: {{ pedido.productos }}</v-list-item-subtitle>
                <v-list-item-subtitle>Total: {{ pedido.total }} €</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar>
                <v-btn color="success" @click="aceptarPedido(pedido)">Aceptar</v-btn>
                <v-btn color="error" @click="rechazarPedido(pedido)">Rechazar</v-btn>
              </v-list-item-avatar>
            </v-list-item>
          </v-list>
        </v-card>
        <v-snackbar v-model="snackbar" :bottom="true" :timeout="3000">
          {{ mensaje }}
          <v-btn color="pink" text @click="snackbar = false">Cerrar</v-btn>
        </v-snackbar>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pedidos: [
          {
            id: 1,
            cliente: "Ana",
            productos: "Pizza, ensalada, refresco",
            total: 15.5,
          },
          {
            id: 2,
            cliente: "Luis",
            productos: "Hamburguesa, patatas, cerveza",
            total: 12.0,
          },
          {
            id: 3,
            cliente: "Marta",
            productos: "Sushi, té verde, helado",
            total: 18.0,
          },
        ],
        snackbar: false,
        mensaje: "",
      };
    },
    methods: {
      aceptarPedido(datosPedido) {
        // Aquí iría el código para enviar la confirmación al API Rest
        this.mensaje = `Has aceptado el pedido ${datosPedido.id}`;
        this.snackbar = true;
      },
      rechazarPedido(pedido) {
        // Aquí iría el código para enviar el rechazo al API Rest
        this.mensaje = `Has rechazado el pedido ${pedido.id}`;
        this.snackbar = true;
      },
    },
  };
  </script>
  
  <style></style>
  
  