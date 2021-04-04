// import config from '../config';

// const colors = config.app.colors;
// const {inverse, info, primary, danger, warning, success} = colors;
// const chartColors = config.app.chartColors;
// const {axisColor} = chartColors;

// let columnColors = [inverse, primary, info, success, warning, danger, '#EC2A00', '#FF8C22'];
// let lineColors = [primary, success, warning];

export const chartData = {
    // apex: {
    //   column: {
    //     series: [{
    //       data: [5438020, 78505, 5538020, 5459515]
    //     }],
    //     options: {
    //       chart: {
    //         height: 0,
    //         type: 'bar'
    //       },
    //       colors: columnColors,
    //       plotOptions: {
    //         bar: {
    //           columnWidth: '20%',
    //           distributed: true
    //         }
    //       },
    //       dataLabels: {
    //         enabled: false,
    //       },
    //       xaxis: {
    //         categories: ['งบประมาณทั้งหมด (ตามแผน)', 'เบิกจ่ายทั้งหมด', 'งบประมาณคงเหลือ (ตามแผน)', 'งบประมาณคงเหลือ (เบิกจ่ายจริง)'],
    //         labels: {
    //           show: false,
    //           // style: {
    //           //   colors: columnColors,
    //           //   fontSize: '14px'
    //           // }
    //         },
    //         axisBorder: {
    //           show: false
    //         },
    //         axisTicks: {
    //           show: false
    //         }
    //       },
    //       yaxis: {
    //         labels: {
    //           style: {
    //             color: axisColor,
    //           }
    //         }
    //       },
    //     }
    //   },
    //   pie: {
    //     donut:{
    //       series: [21, 11, 32,],
    //       options: {
    //         labels: ["โครงการที่กำลังดำเนินการ", "โครงการที่ยังไม่ได้ดำเนินการ", "โครงการที่เสร็จสิ้น"],
    //         colors: [success, warning, '#FF0000',],
    //         stroke: {
    //           show: false,
    //           width: 0
    //         },
    //         legend: {
    //           position: 'bottom'
    //         },
    //         responsive: [{
    //           breakpoint: 480,
    //           options: {
    //             chart: {
    //               width: 200
    //             },
    //             legend: {
    //               position: 'bottom'
    //             }
    //           }
    //         }],
    //         chart: {
    //           height: 350,
    //           type: 'pie',
    //         },
    //       }
    //     }
    //     },
       
    // },

    // data chart

    //  summary branch
    
    
    


    chartBudgetOptions: {
      plotOptions: {
        bar: {
          columnWidth: '40%',
        //   distributed: true
        }
      },
      dataLabels: {
        enabled: false
        },
      xaxis: {
        categories: [
            ['งบประมาณทั้งหมด','(ตามแผน)'],
            ['เบิกจ่ายทั้งหมด', ''],
            ['งบประมาณคงเหลือ','(ตามแผน)'], 
            ['งบประมาณคงเหลือ', '(เบิกจ่ายจริง)']
        ]
      },
      yaxis: {
           title: {
                text: "จำนวนเงิน (บาท)",
                style: {
                    fontSize: '14px'
                }
            }
      }
    },
    seriesBudget: [
        {
            name: 'วิศวกรรมโยธา',
            data: [90, 40, 45, 50],
            color: '#775DD0'
        },
        {
            name: 'วิศวกรรมไฟฟ้า',
            data: [94,46,66,70],
            color: '#FF9800'
        },
        {
            name: 'วิศวกรรมเกษตร',
            data: [95,37,38,50],
            color: '#A5978B'
        },
        {
            name: 'วิศวกรรมอุตสาหการ',
            data: [87,41,62,45],
            color: '#FD6A6A'
        },
        {
            name: 'วิศวกรรมเครื่องกล',
            data: [90,51,72,63],
            color: '#69D2E7'
        },
        {
            name: 'วิศวกรรมสิ่งแวดล้อม',
            data: [85,44,60,64],
            color: '#C5D86D'
        },
        {
            name: 'วิศวกรรมเคมี',
            data: [89,45,90,83],
            color: '#E2C044'
        },
        {
            name: 'วิศวกรรมคออมพิวเตอร์',
            data: [92,57,49,65],
            color: '#43BCCD'
        },
    ],
    //  summary project
    donutProjectOption: {
        plotOptions: {
            pie: {
                donut: {
                    size: '65%',
                    customScale: 0.8
                }
            }
        },
        labels: ['โครงการย่อยที่กำลังดำเนินการ', 'โครงการย่อยที่เสร็จสิ้น']
    },
    colorPro:['#FF8C00','#32CD32'], //colors: colorPro,
    seriesProject: [44, 55],

    // data dashbord home
    // data budjed
    chartBudgetOptions: {
      plotOptions: {
        bar: {
          columnWidth: '30%',
        }
      },
      dataLabels: {
        enabled: false
        },
      xaxis: {
        title:{ 
          text: "งบประมาณของโครงการ",
          style: {
            fontSize: '16px',
          }
        },
        categories: [
          ['งบประมาณทั้งหมด','(ตามแผน)'],
          ['เบิกจ่ายทั้งหมด', ''],
          ['งบประมาณคงเหลือ','(ตามแผน)'], 
          ['งบประมาณคงเหลือ', '(เบิกจ่ายจริง)']
        ]
      },
      yaxis: {
        title: {
          text: "จำนวนเงิน",
          style: {
            fontSize: '14px'
          }
        }
      }
    },
    
    // series data
    dataBudget:[{
      name: 'งบประมาณ',
      data: [54380, 78505, 55380, 54595],
    }],

    // number of project
    projectOption: {
      legend: {
        position: 'bottom'
      },
      plotOptions: {
        pie: {
          size: '65%',
        }
      },
      labels: ['โครงการย่อยที่เสร็จสิ้น', 'โครงการย่อยที่กำลังดำเนินการ', 'โครงการที่ยังไม่ได้ดำเนินการ',],
      colors: ['#4CAF50','#F9CE1D', '#EA3546',],
    }, 
    dataProject: [ 21, 32, 11, ],  // series data
    
  
    
}

