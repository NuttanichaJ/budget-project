<template>
    <div id="summary">

        <div class="mt-2 mb-5">
            <b-form inline class="p-2 mx-3 nav">
                <label class="mr-sm-2" for="select-year">ปีงบประมาณ</label>
                <b-form-select id="select-year" class="mb-2 mr-sm-2 mb-sm-0"
                v-model="selectedYear" :options="optionsYear" size="sm" >
                </b-form-select>
                <b-button class="ml-auto px-3 btnprint " variant="primary" @click="$bvModal.show('model-print')">
                <font-awesome-icon :icon="['fas', 'file-excel']" class="mr-2" />พิมพ์</b-button>
            </b-form>
      
            <!-- model พิมพ์ -->
            <b-modal id="model-print" hide-footer centered>
                <template #modal-title>
                <font-awesome-icon :icon="['fas', 'file-excel']" class="mr-2" />พิมพ์
                </template>
                <div class="d-block text-center">
                <b-row class="pt-5 pb-5">
                    <b-col cols="3">
                    <label class="mr-sm-2" for="select-printYear">ปีงบประมาณ</label>
                    </b-col>
                    <b-col cols="9"> 
                    <b-form inline class="p-2 mx-3">
                        
                    </b-form>
                    </b-col>
                </b-row>

                <b-row class="pt-5 pb-5">
                    <b-col cols="3">
                    <label class="mr-sm-2" for="select-printBranch">ฝ่าย/สาขา</label>
                    </b-col>
                    <b-col cols="9"> 
                    <b-form inline class="p-2 mx-3">
                    
                    </b-form>
                    </b-col>
                </b-row>
                
                <b-row class="pt-5 pb-5">
                    <b-col cols="3">
                    <label class="mr-sm-2 " for="select-printBranch">ผู้รับผิดชอบ</label>
                    </b-col>
                    <b-col cols="9"> 
                    <b-form inline class="p-2 mx-3">
                    
                    </b-form>
                    </b-col>
                </b-row>

                </div>
                <b-row class="justify-content-md-center"> 
                <b-button class="mt-3 mr-2 px-3 w-25" variant="success" @click="$bvModal.hide('model-print')">พิมพ์</b-button>
                <b-button class="mt-3 ml-2 px-3 w-25" variant="danger" @click="$bvModal.hide('model-print')">ยกเลิก</b-button>
                </b-row> 
                
            </b-modal>

        </div>

        <!-- budget -->
        <div class="">
            <b-container fluid="lg">
                <b-row>
                    <b-col col lg="10" md="9" sm="12">
                        <h6 class="mb-3">สรุปงบประมาณของสาขาวิชา</h6>
                        <apexchart width="100%" type="bar" :options="chartBudgetOptions" :series="seriesBudget"></apexchart>
                    </b-col>
                    <b-col col lg='2' md="3" sm="12">
                        <p>รายละเอียดเพิ่มเติม</p>
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

export default {
    name: "Summary",
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
                    text: "จำนวนเงิน",
                    style: {
                        fontSize: '14px'
                    }
                }
          }
        },
        color: ['#99C2A2', '#C5EDAC', '#66C7F4'],
        seriesBudget: [
            {
                name: 'วิศวกรรมโยธา',
                data: [90, 40, 45, 50],
                color: '#63AFAE'
            },
            {
                name: 'วิศวกรรมไฟฟ้า',
                data: [94,46,66,70],
                color: '#b0aaa3'
            },
            {
                name: 'วิศวกรรมเกษตร',
                data: [95,37,38,50],
                color: '#008080'
            },
            {
                name: 'วิศวกรรมอุตสาหการ',
                data: [87,41,62,45],
                color: '#ff9a5b'
            },
            {
                name: 'วิศวกรรมเครื่องกล',
                data: [90,51,72,63],
                color: '#1E90FF'
            },
            {
                name: 'วิศวกรรมสิ่งแวดล้อม',
                data: [85,44,60,64],
                color: '#506c5c'
            },
            {
                name: 'วิศวกรรมเคมี',
                data: [89,45,90,83],
                color: '#687bbe'
            },
            {
                name: 'วิศวกรรมคออมพิวเตอร์',
                data: [92,57,49,65],
                color: '#ff9c38'
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