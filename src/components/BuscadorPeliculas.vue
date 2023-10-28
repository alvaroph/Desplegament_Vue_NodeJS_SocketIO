<script>
import {getPeliculas,infoDetallada} from '../services/communicationManager.js';
import XatLateral from './XatLateral.vue';
import { state } from "@/services/socket";
export default {
    data() {
      return {
        searchString: '',
        result : [],
        details : {},
        isActive: false,
        estado: state
      }
    },
    computed: {
        chat() {
          return state.chat;
        },
      },
    components: {
        XatLateral
    },
  
    methods:{     
         cercaPelicula(){
            getPeliculas(this.searchString).then((response) => {
                this.result = response;
                this.isActive = false;
             });
        },
        async infoDetallada(imdbID){
            console.log(imdbID);
            this.details= await infoDetallada(imdbID);
            this.isActive = true;
        }
    }
  }
  </script>
  
  <template>
            <v-app class="rounded rounded-md">
            <v-app-bar title="Cercador de pel·licules"></v-app-bar>
            <xat-lateral></xat-lateral>    
            
            <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
                <v-container class=" mb-6">
                <v-row>
                    <ul>
                <li v-for="actual in chat" v-bind:key="actual">
                {{ actual[0] }}
            </li>
            </ul>
                    <v-col cols="8">
                        <v-text-field
                        label="Titol a cercar"
                        hide-details="auto"
                        v-model="searchString"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-btn @click="cercaPelicula"> Cerca pe·licula </v-btn>
                    </v-col>
                </v-row>
                     <v-card v-if="isActive" :title="details.Title">
                            <v-card-text> 
                                {{ details.Plot }}
                                {{ details.Director }}
                                <v-list>
                                    <v-list-item v-for="item in details.Ratings" :key="item">{{ item.Source }} <v-chip>{{ item.Value }}</v-chip> </v-list-item>
                                </v-list>
                            
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn  text="TANCAR" @click="isActive = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                <v-row>
                    <v-col cols="12">
                        <span class="headline">Resultats</span>
                    </v-col>
                </v-row>
                <v-row>             
                        <v-col cols="4" v-for="item in result" :key="item.imdbID">
                        <v-card >
                            <img :src="item.Poster" cover />
                            <v-card-title>
                                {{item.Title }}
                            </v-card-title>
                            <v-card-text>
                               {{ item.Year }}
                            </v-card-text>
                            <v-card-actions>
                                <v-btn @click="infoDetallada(item.imdbID)" color="primary" text>MÉS INFO</v-btn>
                            </v-card-actions>  
                        </v-card>
                    </v-col>
                </v-row>
                </v-container>  
                
            </v-main>
        </v-app>
  </template>
  
  