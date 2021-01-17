import ReactApexChart from "react-apexcharts";
var React = require('react');
var Component = React.Component;


class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: "% gain from start of fund",
                data: [100, 98, 94, 101, 105, 106, 115, 125, 129]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Performance of This Fund',
                    align: 'left',
                    style: {
                        fontSize:  '20px',
                        fontWeight:  'bold',
                        fontFamily:  "Roboto",
                        color:  '#263238'
                    },
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                }
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>
        );
    }
}

export default LineChart;