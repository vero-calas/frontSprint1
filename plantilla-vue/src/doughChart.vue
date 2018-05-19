<template>
<div>
    <br>

    <label>Gráficos de ..... :</label>
    <br><br>
    <hr>
    <br><br>
   
    <div style="width:50%; float: left;"  >
        
        <vue-chart  v-if="this.chartData !== null" type="bar" :data="this.chartData"></vue-chart>
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
    
  }),
  created() {
    console.log("estoy creando");
    this.$http.get("http://localhost:8081/club").then(response => {
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
    crearGrafico() {
  
      this.chartData = {
        labels: [],
        datasets: [
          {
            label: "Component 1",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
            data: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10]
          },

          {
            label: "Component 2",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
            data: [20, 30, 40, 10, 20, 30, 10, 20, 30, 9]
          }
        ]
      };
      console.log("char data es " + this.chartData);
    

      console.log("el tamaño es :" + this.clubs.length);
      for (let i = 0; i < this.clubs.length; i++) {
        this.chartData.labels = this.chartData.labels.concat([
          this.clubs[i].name
        ]);
      }
      
      console.log("char:" + this.chartData.labels);
     
    }
  }
};
</script>

<style scoped>
</style>
