<script>
import { Doughnut } from 'vue-chartjs'

export default ({
  extends: Doughnut,
  data() {
    return {
      datas: {
        labels: ['HTML5', 'CSS3', 'Ruby', 'Ruby on Rails', 'JavaScript', 'Vue.js', 'jQuery'],
        datasets: [
          {
            data: [20, 20, 20, 38, 14, 30, 10],
            backgroundColor: ['#e44b23', '#563d7c', '#701516', 'red', '#f1e05a', ' #42b983', 'rgb(24, 185, 185)'],
            hoverBackgroundColor: ['#e44b23', '#563d7c', '#701516', 'red', '#f1e05a', ' #42b983', 'rgb(24, 185, 185)']
          }
        ]
      },
      options: {
        cutoutPercentage: 0,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          labels : {
            fontSize: 22,
            fontFamily: 'Kaushan Script',
            fontColor:  "#2c3e50",
            padding: 30
          }
        },
        animation: {
        duration: 2000,
        easing: 'easeOutBounce'
        },
        tooltips: {
          bodyFontSize: 13,
          bodyFontFamily: "Georgia",
          callbacks: {
            label: function(tooltipItem, data) {
              let total = 0
              let indexItem = data.datasets[0].data[tooltipItem.index]
              data.datasets[0].data.forEach(item => {
                total += item
              })
              return Math.round(indexItem / total * 100) + ' %'
            }
          }
        }
      }
    }
  },
  mounted() {
    this.renderChart(this.datas, this.options)
  }
})
</script>
<style scoped>
l{
  color: rgb(24, 75, 185);
}
</style>