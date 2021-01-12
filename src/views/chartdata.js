import config from '../config';

const colors = config.app.colors;
const {inverse, info, primary, danger, warning, success} = colors;
const chartColors = config.app.chartColors;
const {axisColor} = chartColors;

let columnColors = [inverse, primary, info, success, warning, danger, '#EC2A00', '#FF8C22'];
let lineColors = [primary, success, warning];

export const chartData = {
    apex: {
        column: {
          series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30]
          }],
          options: {
            chart: {
              height: 350,
              type: 'bar',
            },
            colors: columnColors,
            plotOptions: {
              bar: {
                columnWidth: '45%',
                distributed: true
              }
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
              labels: {
                style: {
                  colors: columnColors,
                  fontSize: '14px'
                }
              },
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              }
            },
            yaxis: {
              labels: {
                style: {
                  color: axisColor,
                }
              }
            },
          }
        },
        pie: {
          series: [25, 15, 44, 55, 41, 17],
          options: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            theme: {
              monochrome: {
                enabled: true,
                color: primary,
              }
            },
            stroke: {
              show: false,
              width: 0
            },
            legend: false,
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          }
        }
      },
      echarts: {
        line: {
          color: lineColors,
          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            data: ['2015 Precipitation', '2016 Precipitation'],
            textStyle: {
              color: axisColor
            }
          },
          grid: {
            top: 70,
            bottom: 50,
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: lineColors[1]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params) {
                    return 'Precipitation  ' + params.value
                      + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                  }
                }
              },
              data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
            },
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: lineColors[0]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params) {
                    return 'Precipitation  ' + params.value
                      + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                  }
                }
              },
              data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                color: axisColor
              },
              axisLine: {
                lineStyle: {
                  color: axisColor
                }
              },
            }
          ],
          series: [
            {
              name: '2015 Precipitation',
              type: 'line',
              xAxisIndex: 1,
              smooth: true,
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name: '2016 Precipitation',
              type: 'line',
              smooth: true,
              data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
            }
          ]
        },
        donut: {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            show: false
          },
          color: [primary, success, danger, warning, info],
          series: [
            {
              name: 'Access source',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 335, name: 'Direct interview'},
                {value: 310, name: 'Email marketing'},
                {value: 234, name: 'Alliance advertising'},
                {value: 135, name: 'Video ad'},
                {value: 1548, name: 'Search engine'}
              ]
            }
          ]
        }
    }
}