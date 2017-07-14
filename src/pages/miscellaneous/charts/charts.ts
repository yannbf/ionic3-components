import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import chartJs from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html'
})
export class ChartsPage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('halfDoughnutCanvas') halfDoughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('radarCanvas') radarCanvas;
  @ViewChild('polarCanvas') polarCanvas;
  @ViewChild('pieCanvas') pieCanvas;
  @ViewChild('bubbleCanvas') bubbleCanvas;
  @ViewChild('mixedCanvas') mixedCanvas;

  barChart: any;
  doughnutChart: any;
  halfDoughnutChart: any;
  lineChart: any;
  radarChart: any;
  polarAreaChart: any;
  pieChart: any;
  bubbleChart: any;
  mixedChart: any;

  constructor(public navCtrl: NavController) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.barChart = this.getBarChart();
      this.doughnutChart = this.getDoughnutChart();
      this.halfDoughnutChart = this.getHalfDoughnutChart();
    }, 150);
    setTimeout(() => {
      this.lineChart = this.getLineChart();
      this.radarChart = this.getRadarChart();
      this.polarAreaChart = this.getPolarAreaChart();
    }, 250);
    setTimeout(() => {
      this.bubbleChart = this.getBubbleChart();
      this.mixedChart = this.getMixedChart();
      this.pieChart = this.getPieChart();
    }, 350);

  }

  updateData() {
    // After instantiating your chart, its data is accessible and
    // can be changed anytime with the function update().
    // It takes care of everything and even redraws the animations :D
    this.pieChart.data.datasets[0].data = [Math.random() * 1000, Math.random() * 1000, Math.random() * 1000];
    this.pieChart.update();
  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType,
    });
  }

  /*
  *  By specifying different types inside each dataset
  *  it's possible to have multiple bar types mixed into one.
  */
  getMixedChart() {
    const data = {
      labels: ['Item 1', 'Item 2', 'Item 3'],
      datasets: [
        {
          type: 'bar',
          label: 'Bar Component',
          data: [10, 20, 30],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
        {
          type: 'line',
          label: 'Line Component',
          data: [30, 20, 10],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }
      ]
    };

    return this.getChart(this.mixedCanvas.nativeElement, 'bar', data);

  }

  getPieChart() {
    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    };

    return this.getChart(this.pieCanvas.nativeElement, 'pie', data);

  }

  getPolarAreaChart() {
    const data = {
      datasets: [{
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
        label: 'My dataset' // for the legend
      }],
      labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
    };

    const options = {
      elements: {
        arc: {
          borderColor: '#000000'
        }
      }
    };

    return this.getChart(this.polarCanvas.nativeElement, 'polarArea', data, options);
  }

  getBubbleChart() {
    const data = {
      datasets: [
        {
          label: 'First Dataset',
          data: [
            { x: 20, y: 30, r: 15 },
            { x: 40, y: 10, r: 10 },
          ],
          backgroundColor: '#FF6384',
          hoverBackgroundColor: '#FF6384',
        }]
    };

    const options = {
      elements: {
        points: {
          borderWidth: 1,
          borderColor: 'rgb(0, 0, 0)'
        }
      }
    };

    return this.getChart(this.bubbleCanvas.nativeElement, 'bubble', data, options);
  }

  getRadarChart() {
    const data = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };

    const options = {
      scale: {
        reverse: true,
        ticks: {
          beginAtZero: true
        }
      }
    };

    return this.getChart(this.radarCanvas.nativeElement, 'radar', data, options);
  }

  getDoughnutChart() {
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56']
      }]
    };

    return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
  }

  getHalfDoughnutChart() {
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56']
      }]
    };

    const options = {
      circumference: Math.PI,
      rotation: 1.0 * Math.PI
    };

    return this.getChart(this.halfDoughnutCanvas.nativeElement, 'doughnut', data, options);
  }

  getBarChart() {
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
  }

  getLineChart() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
          spanGaps: false,
        },
        {
          label: 'My Second dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(175,92,192,0.4)',
          borderColor: 'rgba(31,156,156,1)',
          borderCapStyle: 'butt',
          borderDash: [5, 8],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(31,156,156,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(31,156,156,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [15, 39, 50, 81, 51, 55, 30],
          spanGaps: false,
        }
      ]
    };

    return this.getChart(this.lineCanvas.nativeElement, 'line', data);
  }
}
