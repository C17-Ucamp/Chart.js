import getApi, {day, o3} from './api.js';

const displayChart = async() =>{
    const ctx = document.getElementById('myChart');
    await getApi()

    new Chart(ctx, {
        type: 'bar',
        data: {
          labels: day,
          datasets: [{
            label: 'Calidad del aire (niveles maximos)',
            data: o3,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}

const displayChart2 = async() =>{
    const ctx = document.getElementById('myChart2');
    await getApi()

    new Chart(ctx, {
        type: 'line',
        data: {
          labels: day,
          datasets: [{
            label: 'Calidad del aire (niveles maximos)',
            data: o3,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}

const displayChart3 = async() =>{
    const ctx = document.getElementById('myChart3');
    await getApi()

    new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: day,
          datasets: [{
            label: 'Calidad del aire (niveles maximos)',
            data: o3,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}

displayChart3()
displayChart2()
displayChart()