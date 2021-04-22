<template>
    <div id="summary">
        <div>
            
        </div>
        <b-form inline class="mb-2 mr-1 my-3" >
            <label class="mr-2 ml-0 p-0" for="Strategic_Issue">ประเด็นยุทธศาสตร์</label>
            <b-form-select v-model="selectedStrategic" :options="optionsStrategic" size="sm" id="Strategic_Issue"></b-form-select>
        </b-form>
        <div>
            <div>
                <h5 class="mb-0">งบประมาณ</h5>
            </div>
            <b-container fluid>
                <b-row class="mt-1 d-flex justify-content-betweet" >
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                        <p class="mb-0 pl-1 font16">งบประมาณทั้งหมด (ตามแผน)</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>907900</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font16" >บาท</p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                        <p class="mb-0 pl-1 font16">งบประมาณคงเหลือตามแผน</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>907900</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font16">บาท</p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                        <p class="mb-0 pl-1 font16">งบประมาณคงเหลือจากหลักการ</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>846615</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font16">บาท</p>
                    </b-col>
                    <b-col class="p-2 mb-1 mr-2 border border-dark rounded">
                        <p class="mb-0 pl-1 font16">งบประมาณคงเหลือจากเบิกจ่ายจริง</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>892023</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font16">บาท</p>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <div>
            <div>
               <h5 class="ml-0 mt-3 mb-0 p-0">จำนวนโครงการ</h5>
            </div>
            <b-container fluid>
                <b-row class="mt-1 d-flex justify-content-betweet " >
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                        <p class="mb-0 pl-1 font16 ">จำนวนโครงการทั้งหมด</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>225</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font16">โครงการ</p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                        <p class="mb-0 pl-1 font16">โครงการที่ดำเนินการเสร็จสิ้น</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>175</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font16">โครงการ</p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                        <p class="mb-0 pl-1 font16">โครงการที่กำลังดำเนินการ</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>40</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font16">โครงการ</p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                        <p class="mb-0 pl-1 font16">โครงการที่ยังไม่ดำเนินการ</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>10</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font16">โครงการ</p>
                    </b-col>
                </b-row>
            </b-container>
        </div>


        <!-- budget -->
        <div class="mt-3">
            <div class="mt-5 mx-2">
                    <b-row class="mr-0 shadow-sm p-3 mb-1 bg-white rounded">
                        <b-col lg="6" md="12" sm="12" class="mt-lg-0 mt-md-3 mt-sm-3">
                            <h6 class="mb-3"><strong>สรุปงบประมาณของกองบริหารงานคณะ</strong></h6>
                            <apexchart width="100%" type="bar" :options="chartBudgetOptions" :series="seriesBudgetCentral"></apexchart>
                        </b-col>
                        <b-col col lg="6" md="12" sm="12" class="mt-lg-0">
                            <h6 class="mb-3"><strong>สรุปงบประมาณของสาขาวิชา</strong></h6>
                            <apexchart width="100%" type="bar" :options="chartBudgetOptions" :series="seriesBudgetBranch"></apexchart>
                        </b-col>
                        
                    </b-row>
                    <b-row class="mt-3 mr-0 shadow-sm p-3 mb-1 bg-white rounded">
                        <b-col lg="6" md="12" sm="12" class="mt-lg-0 mt-md-3 mt-sm-3 ">
                            <h6 class="mb-3 p-3"><strong>สรุปจำนวนโครงการของกองบริหารงานคณะ</strong></h6>
                            <apexchart width="80%" type="donut" :options="projectOption" :series="dataProject"></apexchart>
                        </b-col>
                        <b-col lg="6" md="12" sm="12" class="mt-lg-0 justify-content-md-center">
                            <h6 class="mb-3 p-3"><strong>สรุปจำนวนโครงการของสาขาวิชา</strong></h6>
                            <apexchart width="80%" type="donut" :options="projectOption" :series="dataProject"></apexchart>
                        </b-col>
                        
                    </b-row>

            </div>
        </div>
        <div class="mt-5 mb-2">
            <h6>รายละเอียดโครงการของ</h6>
            <SubSummary />
        </div>


    </div>
</template>

<script>
import SubSummary from '../views/SubSummary.vue'
export default {
    name: "Summary",
    components: {
        SubSummary
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

            selectedStrategic : 'all',
            optionsStrategic: [
                 { value: 'all', text: 'ทั้งหมด' },
                 { value: '1', text: '1' },
                 { value: '2', text: '2' },
                 { value: '3', text: '3' },
            ]
        }
    },

}
</script>

<style lang="scss" scope>
#summary {
  margin: 30px;
}

.font16{
    font-size: 16px;
}

small{
  font-size: 16px;
}
.font18{
    font-size: 18px;
}
.font24{
    font-size: 24px;
}
li{
    font-size: 16px;
}
#detail:hover, #detail:active {
  color:blue;
}
</style>