<template>
<div>
  <br>

  <label>Gráfico del club U de Chile:</label>
  <br><br>
  <hr>
  <br><br>

  <div style="width:50%; float: left;"  >

    <vue-chart  v-if="this.chartData !== null" type="horizontalBar" :data="this.chartData"></vue-chart>
    <div v-else>
      <div class=" lds-css ng-scope">
        <div style="width:100%;height:100%" class="lds-bars">
          <div></div><div></div><div></div><div></div> <div></div>
        </div>
      </div>
    </div>

  </div>

  <div style="width:50%; float: right;"  >

    <vue-chart  v-if="this.chartData !== null" type="pie" :data="this.chartData"></vue-chart>
    <div v-else>
      <div class=" lds-css ng-scope">
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
        barra: true,
        torta: false,
        clubs: []

    }),

    created() {
        console.log("estoy creando");
        this.$http.get("http://159.65.128.52:8080/TBD-G7/club").then(response => {
            this.clubs = response.data;
        console.log("club:" + this.clubs);
        this.crearGrafico();
        console.log("grafico creado", this.chartData);


    });
    },

    methods: {

        mostrarBarra()
        {
            this.barra = true;
            this.torta = false;

        }
    ,
        mostrarTorta()
        {
            this.barra = false;
            this.torta = true;

        }
    ,
        timeConverter(timestamp){
            var ent = parseInt(timestamp)
            var num = ent / 1000
            var a = new Date(num);
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
            console.log("el tiempo que va a salir es; ", a.getFullYear(timestamp))

        },


        crearGrafico()
        {

            this.chartData = {
                labels: [],
                datasets: [
                    {
                        label: "Comentarios positivos",
                        backgroundColor: "#56FB4C",
                        data: []
                    },

                    {
                        label: "Comentarios negativos",
                        backgroundColor: "#FB5C57",
                        data: []
                    },


                ]

            };
            /* Largo  */
            var tam = this.clubs[2].statistics.length
            console.log("el timestamp que quiero cambiar es: ", this.clubs[2].statistics[tam - 1].lastUpdate)

            console.log("el timestamp cambiado es: ", this.timeConverter(this.clubs[2].statistics[tam - 1].lastUpdate))
            /*Primer elemento de fecha*/
            this.chartData.labels.push(this.clubs[2].statistics[0].lastUpdate)
            /*Segundo elemento intermedio de fecha*/
            this.chartData.labels.push(this.clubs[2].statistics[Math.trunc(tam / 2)].lastUpdate)
            /*Ultima fecha*/
            this.chartData.labels.push(this.clubs[2].statistics[tam - 1].lastUpdate)
            /**Comentarios positivos/
             /*Primer elemento de fecha*/
            this.chartData.datasets[0].data.push(this.clubs[2].statistics[0].positive_value)
            /*Segundo elemento intermedio de fecha*/
            this.chartData.datasets[0].data.push(this.clubs[2].statistics[Math.trunc(tam / 2)].positive_value)
            /*Ultima fecha*/
            this.chartData.datasets[0].data.push(this.clubs[2].statistics[tam - 1].positive_value)

            /**Comentarios negativos/
             /*Primer elemento de fecha*/
            this.chartData.datasets[1].data.push(this.clubs[2].statistics[0].negative_value)
            /*Segundo elemento intermedio de fecha*/
            this.chartData.datasets[1].data.push(this.clubs[2].statistics[Math.trunc(tam / 2)].negative_value)
            /*Ultima fecha*/
            this.chartData.datasets[1].data.push(this.clubs[2].statistics[tam - 1].negative_value)

        },

    }

    };
</script>