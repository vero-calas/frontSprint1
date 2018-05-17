<template>
<div>
    <br>

    <label>Gráficos de ..... :</label>
    <br><br>
    <hr>
    <br><br>
    <div style="width:50%; float: left;">
        <vue-chart type="bar" :data="chartData"></vue-chart>
    </div>

    <div style="width:50%; float:right">
        <vue-chart type="doughnut" :data="chartData"></vue-chart>
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

    import VueChart from 'vue-chart-js'

    export default {
        name: 'App',

        components: {
            VueChart
        },

        data: () => ({
        chartData: {
            labels: ['U de Chile', 'Colo-Colo', 'U Católica'],
            datasets: [
                {
                    label: 'Component 1',
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
                    data: [10, 20, 30]
                },

                {
                    label: 'Component 2',
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
                    data: [20, 30, 40]
                }
            ]
        }
    }),

    }
</script>

<style scoped>


</style>
