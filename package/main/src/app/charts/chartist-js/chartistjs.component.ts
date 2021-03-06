import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';

declare var require: any;

const data: any = require('./data.json');

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}
@Component({
  templateUrl: './chartistjs.component.html'
})
export class ChartistjsComponent {
  // Barchart
  barChart1: Chart = {
    type: 'Bar',
    data: data['Bar'],
    options: {
      seriesBarDistance: 15,
      height: 400,
      axisX: {
        showGrid: false, offset: 70
      },
      axisY: {
        showGrid: true, offset: 50
      }
    },
    responsiveOptions: [
      [
        'screen and (min-width: 640px)',
        {
          axisX: {
            labelInterpolationFnc: function (value: number, index: number) {
              return index % 1 === 0 ? `${value}` : null;
            }
          }
        }
      ]
    ]
  };

  // Line chart
  lineChart1: Chart = {
    type: 'Line',
    data: data['LineWithArea'],
    options: {
      low: 0,
      height: 400,
      showArea: true,
      fullWidth: true
    }
  };
  // Line chart 2
  lineChart2: Chart = {
    type: 'Line',
    data: data['Line'],
    options: {
      low: 0,
      height: 400,
      showArea: true,
      fullWidth: true
    }
  };
  // Line chart 2
  lineChart3: Chart = {
    type: 'Line',
    data: data['Line2'],
    options: {
      low: 0,
      height: 400,
      showArea: true,
      fullWidth: true
    }
  };
  // Scatter chart
  scatterChart1: Chart = {
    type: 'Line',
    data: data['Scatter'],
    options: {
      showLine: false,
      height: 400,
      axisX: {
        labelInterpolationFnc: function (value: number, index: number) {
          return index % 13 === 0 ? `W${value}` : null;
        }
      }
    },
    responsiveOptions: [
      [
        'screen and (min-width: 640px)',
        {
          axisX: {
            labelInterpolationFnc: function (value: number, index: number) {
              return index % 4 === 0 ? `W${value}` : null;
            }
          }
        }
      ]
    ]
  };
  // Pie chart
  pieChart1: Chart = {
    type: 'Pie',
    data: data['Pie'],
    options: {
      donut: true,
      donutWidth: 50,
      startAngle: 270,
      total: 200,
      height: 400,
      showLabel: false
    }
  };
  donuteChart1: Chart = {
    type: 'Pie',
    data: data['Pie'],
    options: {
      donut: true,
      height: 400,
      showLabel: false
    }
  };

  // Bi Poller chart
  bipollarChart1: Chart = {
    type: 'Bar',
    data: data['Bi-PolarBar'],
    options: {
      high: 10,
      height: 400,
      low: -10,
      axisX: {
        labelInterpolationFnc: function (value: number, index: number) {
          return index % 2 === 0 ? value : null;
        }
      }
    }
  };

}
