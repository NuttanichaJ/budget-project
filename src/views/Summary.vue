<template>
    <div id="summary">
        <SummaryHead />
        

        <!-- budget -->
        <div class="mt-3">
            <b-container fluid="lg" class="mt-3">
                <b-row>
                    <b-col col lg="10" md="9" sm="12" class="mr-0 shadow p-3 mb-1 bg-white rounded">
                        <h6 class="mb-3">สรุปงบประมาณของสาขาวิชา</h6>
                        <apexchart width="100%" type="bar" :options="chartBudgetOptions" :series="seriesBudget"></apexchart>
                    </b-col>
                    <b-col col lg='2' md="3" sm="12">
                        <p>รายละเอียดของสาขาวิชา</p>
                        <ul class="listdepart">
                            <li><a href="/SubSummary">วิศวกรรมโยธา</a></li>
                            <li><a href="/SubSummary">วิศวกรรมไฟฟ้า</a></li>
                            <li><a href="/SubSummary">วิศวกรรมเกษตร</a></li>
                            <li><a href="/SubSummary">วิศวกรรมอุตสาหการ</a></li>
                            <li><a href="/SubSummary">วิศวกรรมเครื่องกล</a></li>
                            <li><a href="/SubSummary">วิศวกรรมสิ่งแวดล้อม</a></li>
                            <li><a href="/SubSummary">วิศวกรรมเคมี</a></li>
                            <li><a href="/SubSummary">วิศวกรรมคออมพิวเตอร์</a></li>
                        </ul>
                    </b-col>

                </b-row>
            </b-container>
        </div>

        <!-- project -->
        <!-- <div>
            <b-container>
                <apexchart width="50%" type="donut" :options="donutProjectOption" :series="seriesProject"></apexchart>
            </b-container>
        </div> -->

        
    </div>
</template>

<script>
import SummaryHead from "@/components/SummaryHead.vue"
export default {
    name: "Summary",
    components :{
        SummaryHead
    },
    data() {
        return {
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
        
      }
    },
    
}
</script>

<style lang="scss" scope>
.listdepart{
    list-style-type: none;
    font-size: 14px;
    margin: 0;
    padding: 0;
}

</style>