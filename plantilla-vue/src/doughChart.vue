<template>
<div>
    <br>

    <label>Gráfico general de todos los club:</label>
    <br><br>
    <hr>
    <br><br>
   
    <div style="width:100%; float: left;"  >
        
        <vue-chart  v-if="this.chartData !== null" type="horizontalBar" :data="this.chartData"></vue-chart>
            <div v-else>
             <div class=" lds-css ng-scope">
                 <div style="width:100%;height:100%" class="lds-bars">
                   <div></div><div></div><div></div><div></div> <div></div>
                </div>
              </div>
            </div> 
    
   </div>

    <div style="width:50%; float:right;">
        <vue-chart v-if="this.chartData !== null" type="doughnut" :data="chartData"></vue-chart>
         <div v-else>
             <div class="lds-css  ng-scope">
                 <div style="width:100%;height:100%" class="lds-bars">
                   <div></div><div></div><div></div><div></div> <div></div> 
                </div>
              </div>
            </div>      
    </div>

   
    <div>
        <h1>Descripción:</h1>

    <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum."
    </p>
    </div>

</div>
</template>


<script>
import VueChart from "vue-chart-js";

export default {
  name: "App",

  components: {
    VueChart
  },

  data: () => ({
    chartData: null,
    barra:true,
    torta:false,
    clubs: [],
    colores: []
    
  }),
  created() {
    console.log("estoy creando");
    this.$http.get("http://159.65.128.52:8080/TBD-G7/club").then(response => {
      this.clubs = response.data;
      console.log("club:" + this.clubs);
      this.crearGrafico();
      console.log("grafico creado");

     
    });
  },
  
  methods: {
    mostrarBarra(){
        this.barra=true;
        this.torta=false;    

    },
     mostrarTorta(){
        this.barra=false;
        this.torta=true;    

    },

      colorRandom(){
        var color="#"+((1<<24)*Math.random()|0).toString(16)

            this.colores.push(color)
              console.log("color", color, "agregado")

      },

    crearGrafico() {

      this.chartData = {
        labels: [],
        datasets: [
          {
            label: "Component 1",
            backgroundColor: this.colores,
            data: []
          },


        ]
      };
     /* console.log("char data es " + this.chartData);
    

      console.log("el tamaño es :" + this.clubs.length);*/
      for (let i = 0; i < this.clubs.length-1; i++) {
        console.log("arreglo de colores:", this.colores)
          this.colorRandom();
        this.chartData.labels = this.chartData.labels.concat([
          this.clubs[i].name
         
        ]);
        this.chartData.datasets[0].data.push( this.clubs[i].statistics[0].positive_value) 
      /*  this.chartData.datasets[1].data.push( this.clubs[i].statistics[0].positive_value) */
      }
      /*
      console.log("char:" + this.chartData.labels);
       console.log("char2:" +  this.chartData.datasets[0].data);
        console.log("char3:" +  this.chartData.datasets[1].data);*/
     
    }
  }
};
</script>

<style scoped>
</style>
