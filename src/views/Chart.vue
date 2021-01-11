<script>
import { Doughnut } from 'vue-chartjs'

export default ({
  extends: Doughnut,
  data() {
    return {
      datas: {
        labels: ['HTML5', 'CSS3', 'Ruby', 'Rails', 'JavaScript', 'Vue.js'],
        datasets: [
          {
            data: [20, 20, 28, 53, 14, 24],
            backgroundColor: ['#e44b23', '#563d7c', '#701516', 'red', '#f1e05a', ' #42b983'],
            borderColor: 'lightgray',
            hoverBackgroundColor: ['#e44b23', '#563d7c', '#701516', 'red', '#f1e05a', ' #42b983']
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
            padding: 20,
            fontFamily: "Georgia",
            fontColor:  "#2c3e50"
          }
        },
        animation: {
        duration: 2000,
        easing: 'easeOutBounce'
        },
        tooltips: {
          bodyFontSize: 13,
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