import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "RecyclingRates",
          toolbar: {
            show: false
          },
        },
        xaxis: {
          categories: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019]
        },
        title: {
            text: "Recycling Rates (%) in Singapore",
            align: 'center',
        }        
      },
      series: [
        {
          name: "Percentage",
          data: [22, 20, 20, 20, 19, 19, 21, 21, 22, 17]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
             
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineGraph;
