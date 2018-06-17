 <template>
 <div class="page-container">
     <md-app md-waterfall md-mode="overlap">
         <md-app-toolbar class="md-primary md-large">
             <div class="md-toolbar-row">
                 <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                     <md-icon>menu</md-icon>
                 </md-button>

                 <span class="md-title">Observatorio Liga Nacional</span>
             </div>
         </md-app-toolbar>

         <md-app-drawer :md-active.sync="menuVisible">
             <md-toolbar class="md-transparent" md-elevation="0">
                 Elija la opción que desea ver:
             </md-toolbar>

             <div class="list-group">
                 <a v-on:click="setSelectedItemHome" href="#" class="list-group-item">Home<md-icon class="position">home</md-icon></a>
                 <a v-on:click="setSelectedItemTrofeos" href="#" class="list-group-item">Trofeos<md-icon class="position">local_play</md-icon></a>
                 <a v-on:click="setSelectedItemLiga" href="#" class="list-group-item">Valoración general<md-icon class="position">insert_chart_outlined</md-icon></a>
                 <a v-on:click="setSelectedItem" href="#" class="list-group-item">Valoraciones por equipo<md-icon class="position">insert_chart_outlined</md-icon></a>
                 <a v-on:click="setSelectedItemE" href="#" class="list-group-item">Comparaciones por equipo<md-icon class="position">insert_chart_outlined</md-icon></a>
                 <a v-on:click="setSelectedComunas" href="#" class="list-group-item">Mapa de Santiago<md-icon class="position">public</md-icon></a>
                 <a v-on:click="setSelectedMapas" href="#" class="list-group-item">Mapa de Chile<md-icon class="position">public</md-icon></a>
                 <a v-on:click="setSelectedBurbuja" href="#" class="list-group-item">Burbujasmiau<md-icon class="position">bubble_chart</md-icon></a>
             </div>
         </md-app-drawer>

         <md-app-content>
             <div>
                 <div v-if="this.eleccion == 1">
                     <home-component v-bind:datos="clubs"></home-component>
                 </div>
                 <div v-if="this.eleccion == 2">
                     <Liga-component v-bind:datos="clubs"></Liga-component>
                 </div>
                 <div v-if="this.eleccion == 3">
                     <EquipoDatacomponente v-bind:datos="clubs"></EquipoDatacomponente>
                 </div>
                 <div v-if="this.eleccion == 4">
                     <Equipoestadisticascomponente v-bind:datos="clubs"></Equipoestadisticascomponente>
                 </div>
                 <div v-if="this.eleccion == 5">
                     <Trofeos-component v-bind:datos="clubs"></Trofeos-component>
                 </div>
                 <div v-if="this.eleccion == 6">
                     <mapa-component v-bind:datos="mapas"></mapa-component>
                 </div>
                 <div v-if="this.eleccion == 7">
                     <comunas-component v-bind:datos="comunas"></comunas-component>
                 </div>
                 <div v-if="this.eleccion == 8">
                     <login-component></login-component>
                 </div>
                 <div v-if="this.eleccion == 9">
                     <burbujas-component></burbujas-component>
                 </div>
             </div>
         </md-app-content>
     </md-app>
 </div>
 </template>

 <style lang="scss" scoped>
     .md-app {
         max-height: 800px;
         border: 1px solid rgba(#000, .12);
     }

     // Demo purposes only
     .md-drawer {
         width: 600px;
         max-width: calc(100vw - 125px);
     }
 </style>

 <script>
     import home from './home.vue';
     import dataEquipo from './dataEquipos.vue';
     import estadisticasEquipo from './EstadisticasEquipos.vue';
     import ligachilena from './ligaChilena.vue';
     import trofeos from './trofeos.vue';
     import mapa from './mapa.vue'
     import comunas from './mapaComunas.vue';
     import burbujas from './bubbleChart.vue';
     export default {
         components: {
             'home-component': home,
             'Liga-component': ligachilena,
             'Trofeos-component': trofeos,
             'EquipoDatacomponente': dataEquipo,
             'Equipoestadisticascomponente': estadisticasEquipo,
             'mapa-component': mapa,
             'comunas-component': comunas,
             'burbujas-component': burbujas
         },

         name: 'Overlap',
         data: () => ({
             menuVisible: false,
                 eleccion: 0,
                 clubs:null,
                 mapas: null,
                 comunas: null
         }),
         created() {
             this.$http.get("http://159.65.128.52:8080/TBD-G7/club").then(response => {
                 this.clubs = response.data;
                 /* console.log("club:" + this.clubs);
                  console.log("data de clubes obtenida con exito!", this.clubs);*/
                 this.eleccion = 1;
             });
             this.$http.get("http://159.65.128.52:8080/TBD-G7/maps").then(response => {
                 this.mapas = response.data;
                 console.log("club:" + this.mapas);
                 console.log("data de mapas obtenida con exito!", this.mapas);
                 this.eleccion = 1;
             });
             this.$http.get("http://159.65.128.52:8080/TBD-G7/maps-santiago").then(response => {
                 this.comunas = response.data;
                 console.log("club:" + this.comunas);
                 console.log("data de mapas obtenida con exito!", this.comunas);
                 this.eleccion = 1;
             });
         },

         methods: {
             setSelectedItemHome(){
                 this.eleccion=1;
             },
             setSelectedItemLiga(){
                 this.eleccion=2;
             },
             setSelectedItem(nombre,equipoid,id){
                 this.eleccion=3;

             },
             setSelectedItemE(){
                 this.eleccion=4;
             },
             setSelectedItemTrofeos(){
                 this.eleccion=5;
             },
             setSelectedMapas(){
                 this.eleccion=6;
             },
             setSelectedComunas(){
                 this.eleccion=7;
             },
             setSelectedLogin(){
                 this.eleccion=8;
             },
             setSelectedBurbuja(){
                 this.eleccion=9;
             }

         },
         ready: function() {
             $('.dropdown-submenu a.test').on("click", function(e){
                 $(this).next('ul').toggle();
                 e.stopPropagation();
                 e.preventDefault();
             });
         }
     }
 </script>

 <style>
     .position {
         position: absolute;
         right: 15px;
     }
 </style>