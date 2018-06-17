<template>
    <div>
        <br>

        <label>Gráfico Burbujas:</label>
        <br><br>
        <hr>
        <br><br>

        <div style="width:100%; float:left;">
            <vue-chart v-if="this.tortaData !== null" type="bubble" :data="this.tortaData"></vue-chart>
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
            tortaData: null,
            barra:true,
            torta:false,
            clubs: [],
            colores: []

        }),
        created() {
            console.log("estoy creando");
            this.$http.get("http://159.65.128.52:8080/TBD-G7/club").then(response => {
                this.clubs = response.data;
                this.crearBubble();
                console.log("grafico creado", this.chartData);


            });
        },

        methods: {

            /*---------------------------------------------------------------------------------------------------------*/
            /*---------------------------------------------------------------------------------------------------------*/

            crearBubble(){
                this.tortaData = {
                    labels: ["Promedio de comentarios positivos","Promedio de comentarios negativos"],
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            pointBackgroundColor: 'white',
                            borderWidth: 1,
                            pointBorderColor: '#249EBF',
                            data: [
                                {
                                    x: 100,
                                    y: 0,
                                    r: 10
                                },
                                {
                                    x: 60,
                                    y: 30,
                                    r: 20
                                },
                                {
                                    x: 40,
                                    y: 60,
                                    r: 25
                                },
                                {
                                    x: 80,
                                    y: 80,
                                    r: 50
                                },
                                {
                                    x: -20,
                                    y: -30,
                                    r: 25
                                }]

                        },

                        {
                            label: 'Data 5}One',
                            backgroundColor: '#4ef8e9',
                            pointBackgroundColor: 'white',
                            borderWidth: 1,
                            pointBorderColor: '#ffde00',
                            data: [
                                {
                                    x: -30,
                                    y: 0,
                                    r: -10
                                },
                                {
                                    x: 10,
                                    y: 20,
                                    r: 5
                                },
                                {
                                    x: 90,
                                    y: 40,
                                    r: 25
                                },
                                {
                                    x: 60,
                                    y: 60,
                                    r: 40
                                },
                                {
                                    x: -10,
                                    y: 30,
                                    r: 25
                                }]

                        }


                    ]

                }
            },

        }
    };
</script>