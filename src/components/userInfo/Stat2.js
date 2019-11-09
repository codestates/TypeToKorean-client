import React from 'react';
import Chart from 'chart.js';

// BarChart
export default class Stat2 extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'bar',
      options: {
        annotation: {
          annotations: [
            {
              type: 'line',
              mode: 'vertical',
              scaleID: 'x-axis-0',
              value: '70%',
              borderColor: 'red',
              label: {
                content: 'Your Average Speed',
                enabled: true,
                position: 'center',
              },
            },
          ],
        },
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 50,
              },
            },
          ],
          xAxes: [
            {
              barPercentage: 1.0,
              categoryPercentage: 1.0,
              gridLines: {
                display: false,
              },
              scaleLabel: {
                display: true,
                labelString: 'Average Speed',
              },
            },
          ],
        },
      },
      data: {
        labels: this.props.data.map(d => d.label),
        datasets: [
          {
            label: this.props.title,
            data: this.props.data.map(d => d.value),
            backgroundColor: this.props.color,
          },
        ],
      },
    });
    console.log(this.myChart);
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map(d => d.label);
    this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
    this.myChart.update();
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}
