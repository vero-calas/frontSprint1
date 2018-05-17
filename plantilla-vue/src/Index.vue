<template>

  <vue-chart type="bar" :data="chartData"></vue-chart>
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
                    data: [20, 30, 40]
                }
            ]
        }
    }),
    }
</script>

<style>


</style>