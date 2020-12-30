<script>
import { Doughnut } from 'vue-chartjs'

export default ({
  extends: Doughnut,
  data() {
    return {
      datas: {
        labels: ['HTML', 'CSS', 'Ruby', 'Rails', 'JavaScript', 'Vue.js'],
        datasets: [
          {
            data: [25, 20, 28, 53, 18, 22],
            backgroundColor: ['#e44b23', '#563d7c', '#701516', 'red', '#f1e05a', ' #42b983']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          labels : {
            fontSize: 22,
          }
        },
        tooltips: {
         bodyFontSize: 12,
         callbacks: {
            label: function(tooltipItem, data) {
              let total = 0 // 合計格納
              let indexItem = data.datasets[0].data[tooltipItem.index] // マウスを当てたデータ
              // 全データの合計算出
              data.datasets[0].data.forEach(item => {
                total += item
              })
              // パーセント表示
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