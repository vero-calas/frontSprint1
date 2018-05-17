<template>
<div>
    <label>Gráfico de Líneas:</label>
    <vue-chart type="line" :data="chartData"></vue-chart>
</div>
</template>

<script>
    import VueChart from 'vue-chart-js'

    export default {
        name: 'App',

        components: {
            VueChart
        },

        data: () => ({
        chartData: {
            labels: ['U de Chile', 'Colo-Colo', 'U Católica', 'miau'],
            datasets: [
                {
                    label: 'Datos',
                    backgroundColor: ["#3e95cd"],
                    fill: 'false',
                    borderColor: 'blue',
                    pointBackgroundColor: ['blue', 'yellow'],
                    lineTension: 0,
                    data: [{x: 10,y:  20},{x: 30,y: 30}, {x: 20, y: 10}, {x: 10, y: 50}]
                },
                {
                    label: 'Datos',
                    backgroundColor: ["#3e95cd"],
                    fill: 'false',
                    borderColor: 'red',
                    pointBackgroundColor: ['red', 'yellow'],
                    lineTension: 0,
                    data: [{x: 20,y:  10},{x: 30,y: 30}, {x: 10, y: 20}, {x: 50, y: 10}]
                }
            ]
        },
        options:{
          scales:{
              yAxes:[{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
        }
    })
    }

</script>

<style>

</style>