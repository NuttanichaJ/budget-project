<template>
    <div id="summary">
        <div>
            <SummaryHead />
        </div>
        

        <!-- budget -->
        <div class="mt-3">
            <div class="mt-5 mx-2">
                <b-row>
                    <b-col col lg="10" md="9" sm="12" class="mr-0 ">
                            <b-row class="mr-0 shadow-sm p-3 mb-1 bg-white rounded">
                                <b-col>
                                    <h6 class="mb-3"><strong>สรุปงบประมาณของสาขาวิชา</strong></h6>
                                    <apexchart width="100%" type="bar" :options="chartBudgetOptions" :series="seriesBudgetBranch"></apexchart>
                                </b-col>
                                <b-col >
                                    <h6 class="mb-3"><strong>สรุปงบประมาณของกองบริหารงานคณะ</strong></h6>
                                    <apexchart width="100%" type="bar" :options="chartBudgetOptions" :series="seriesBudgetCentral"></apexchart>
                                </b-col>
                            </b-row>
                            <b-row class="mt-3 mr-0 shadow-sm p-3 mb-1 bg-white rounded">
                                <b-col>
                                    <!-- project -->
                                    <h6 class="mb-3 p-3"><strong>สรุปจำนวนโครงการของสาขาวิชา</strong></h6>
                                    <apexchart width="100%" type="donut" :options="projectOption" :series="dataProject"></apexchart>
                                </b-col>
                                <!-- <b-col cols="4" align-self="center" class="mb-0">
                                    <p class="mb-0">จำนวนโครงการทั้งหมด [] โครงการ</p>
                                    <p class="mb-0">โครงการที่ยังไม่ดำเนินการ [] โครงการ</p>
                                    <p class="mb-0">โครงการที่กำลังดำเนินการ [] โครงการ</p>
                                    <p class="mb-0">โครงการที่ดำเนินการเสร็จสิ้น [] โครงการ</p>
                                </b-col> -->
                                <b-col>
                                    <h6 class="mb-3 p-3"><strong>สรุปจำนวนโครงการของกองบริหารงานคณะ</strong></h6>
                                    <apexchart width="100%" type="donut" :options="projectOption" :series="dataProject"></apexchart>
                                </b-col>
                            </b-row>
                        
                    </b-col>
                    <b-col col lg='2' md="3" sm="12">
                        <div>
                            <p class="mb-1">รายละเอียดของสาขาวิชา</p>
                            <div  v-if="this.user.permission == 'ผู้บริหาร'">
                                <ul class="listdepart">
                                    <li><a href="/subSummaryDean">วิศวกรรมโยธา</a></li>
                                    <li><a href="/subSummaryDean">วิศวกรรมไฟฟ้า</a></li>
                                    <li><a href="/subSummaryDean">วิศวกรรมเกษตร</a></li>
                                    <li><a href="/subSummaryDean">วิศวกรรมอุตสาหการ</a></li>
                                    <li><a href="/subSummaryDean">วิศวกรรมเครื่องกล</a></li>
                                    <li><a href="/subSummaryDean">วิศวกรรมสิ่งแวดล้อม</a></li>
                                    <li><a href="/subSummaryDean">วิศวกรรมเคมี</a></li>
                                    <li><a href="/subSummaryDean">วิศวกรรมคออมพิวเตอร์</a></li>
                                </ul>
                            </div>
                            <div  v-if="this.user.permission == 'ส่วนกลาง'">
                                <ul class="listdepart">
                                    <li><a href="/subSummary">วิศวกรรมโยธา</a></li>
                                    <li><a href="/subSummary">วิศวกรรมไฟฟ้า</a></li>
                                    <li><a href="/subSummary">วิศวกรรมเกษตร</a></li>
                                    <li><a href="/subSummary">วิศวกรรมอุตสาหการ</a></li>
                                    <li><a href="/subSummary">วิศวกรรมเครื่องกล</a></li>
                                    <li><a href="/subSummary">วิศวกรรมสิ่งแวดล้อม</a></li>
                                    <li><a href="/subSummary">วิศวกรรมเคมี</a></li>
                                    <li><a href="/subSummary">วิศวกรรมคออมพิวเตอร์</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p class="mb-1">รายละเอียดของกองบริหารงานคณะ</p>
                            <div  v-if="this.user.permission == 'ผู้บริหาร'">
                                <ul class="listdepart">
                                    <li><a href="/subSummaryDean">ฝ่ายแผนยุทธศาสตร์</a></li>
                                    <li><a href="/subSummaryDean">ฝ่ายเหรัญญิก</a></li>
                                    <li><a href="/subSummaryDean">ฝ่ายวิชาการ</a></li>
                                    <li><a href="/subSummaryDean">ฝ่ายวิจัย</a></li>
                                    <li><a href="/subSummaryDean">ฝ่ายปฏิบัติการ</a></li>
                                    <li><a href="/subSummaryDean">หน่วยวิเทศ</a></li>
                                    <li><a href="/subSummaryDean">หน่วยพัฒนานักศึกษา</a></li>
                                </ul>
                            </div>

                        </div>
                        
                    </b-col>
                </b-row>
            </div>
        </div>


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
            user : this.$store.state.user,

        chartBudgetOptions: {
          plotOptions: {
            bar: {
              columnWidth: '50%',
              
            //   distributed: true
            }
          },
          dataLabels: {
            enabled: false
            },
          xaxis: {
            categories: [
                ['งบประมาณทั้งหมด','(ตามแผน)'],
                ['ยอดเงินคงเหลือ', '(ตามแผน)'],
                ['ยอดเงินคงเหลือ','(หลักการ)'], 
                ['ยอดเงินคงเหลือ', '(เบิกจ่ายจริง)']
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
        seriesBudgetBranch: [
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
        seriesBudgetCentral: [
            {
                name: 'ฝ่ายแผนยุทธศาสตร์',
                data: [90, 40, 45, 50],
                color: '#775DD0'
            },
            {
                name: 'ฝ่ายเหรัญญิก',
                data: [94,46,66,70],
                color: '#FF9800'
            },
            {
                name: 'ฝ่ายวิชาการ',
                data: [95,37,38,50],
                color: '#A5978B'
            },
            {
                name: 'ฝ่ายวิจัย',
                data: [87,41,62,45],
                color: '#FD6A6A'
            },
            {
                name: 'ฝ่ายปฏิบัติการ',
                data: [90,51,72,63],
                color: '#69D2E7'
            },
            {
                name: 'หน่วยวิเทศ',
                data: [85,44,60,64],
                color: '#C5D86D'
            },
            {
                name: 'หน่วยพัฒนานักศึกษา',
                data: [89,45,90,83],
                color: '#E2C044'
            },
        ],

        projectOption: {
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'left'
                },
                labels: ['โครงการย่อยที่เสร็จสิ้น', 'โครงการย่อยที่กำลังดำเนินการ', 'โครงการที่ยังไม่ได้ดำเนินการ',],
                colors: ['#7ebc59','#F1B24A','#E62739',],
            }, 
            dataProject: [ 28, 44, 55 ],  // series data
      }
    },
    methods: {
        // sumpath(){
        //     console.log(this.user.permission)
        //     if (this.user.permission == 'ผู้บริหาร') {
        //        this.$route.push('/subSummaryDean')
        //     }
        //     if (this.user.permission == 'ส่วนกลาง') {
        //         this.$route.push('/subSummary')
        //     }
        // }
    }
    
}
</script>

<style lang="scss" scope>
#summary {
  margin: 30px;
}
.listdepart{
    list-style-type: none;
    font-size: 14px;
    margin: 0;
    padding: 0;
}

</style>