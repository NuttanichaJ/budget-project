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
                    <b-row align-h="center" class="mt-3 mr-0 shadow-sm p-3 mb-1 bg-white rounded">
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
            <div class=" mt-3">
                <b-tabs content-class="mt-5 dark" fill>
                    <b-tab title="กองบริหารงานคณะ">
                        <div>
                            <b-tabs content-class="mt-3" fill>
                                <b-tab 
                                    v-for="item in Department" 
                                    :key="item.D_ID" 
                                    :title="item.D_Name"
                                >
                                        <div>
                                            <div>
                                                <h4 class="mb-3 ">{{item.D_Name}}</h4>
                                            </div>

                                            <div>
                                                <div>
                                                <h6 class="ml-0 mt-2 mb-0 p-0">สรุปงบประมาณ</h6>
                                                </div>
                                                <b-container fluid>
                                                    <b-row class="mt-1 d-flex justify-content-betweet" >
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">งบประมาณทั้งหมด (ตามแผน)</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{amountData.totalMP_Budget}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14" >บาท</p>
                                                        </b-col>
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">งบประมาณคงเหลือตามแผน</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{amountData.totalMP_Total_Amount}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">บาท</p>
                                                        </b-col>
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">งบประมาณคงเหลือจากหลักการ</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{amountData.totalMP_Total_From_Disburse}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">บาท</p>
                                                        </b-col>
                                                        <b-col class="p-2 mb-1 mr-2 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">งบประมาณคงเหลือจากเบิกจ่ายจริง</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{amountData.totalMP_Total_From_Disburse}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">บาท</p>
                                                        </b-col>
                                                    </b-row>
                                                </b-container>
                                            </div>
                                            <div>
                                                <div>
                                                <h6 class="ml-0 mt-2 mb-0 p-0">จำนวนโครงการ</h6>
                                                </div>
                                                <b-container fluid>
                                                    <b-row class="mt-1 d-flex justify-content-betweet " >
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14 ">จำนวนโครงการทั้งหมด</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{statusData.All}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                                                        </b-col>
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">โครงการที่ดำเนินการเสร็จสิ้น</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{statusData.Done}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                                                        </b-col>
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">โครงการที่กำลังดำเนินการ</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{statusData.Processing}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                                                        </b-col>
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">โครงการที่ยังไม่ดำเนินการ</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{statusData.No}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                                                        </b-col>
                                                    </b-row>
                                                </b-container>
                                            </div>
                                            <div class="mt-3" >
                                                <b-nav class="mt-2">
                                                    <b-navbar-nav>
                                                        <b-navbar-brand class="">รายละเอียดของโครงการ</b-navbar-brand>
                                                    </b-navbar-nav>            
                                                    <b-navbar-nav class="ml-auto">
                                                        <b-button class="ml-auto px-3 my-2" style="background-color: #1d6f42" id="download-xlsx">
                                                        <font-awesome-icon :icon="['fas', 'file-excel']" class="mr-2" />พิมพ์</b-button>
                                                    </b-navbar-nav>
                                                </b-nav>
                                            </div>
                                        </div>                                
                                    </b-tab>
                            </b-tabs>
                        </div>
                    </b-tab>

                    <b-tab title="สาขาวิชา">
                        <div class="mt-0">
                            <b-tabs content-class="mt-3" fill>
                                <b-tab 
                                    v-for="item in BranchDepartment" 
                                    :key="item.D_ID" 
                                    :title="item.D_Name"
                                >
                                <!-- :click="getAllProjects(item.D_ID)" -->
                                        <div>
                                            <div>
                                                <h4 class="mb-3 ">{{item.D_Name}}</h4>
                                            </div>

                                            <div>
                                                <div>
                                                <h6 class="ml-0 mt-2 mb-0 p-0">สรุปงบประมาณ</h6>
                                                </div>
                                                <b-container fluid>
                                                    <b-row class="mt-1 d-flex justify-content-betweet" >
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">งบประมาณทั้งหมด (ตามแผน)</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{amountData.totalMP_Budget}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14" >บาท</p>
                                                        </b-col>
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">งบประมาณคงเหลือตามแผน</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{amountData.totalMP_Total_Amount}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">บาท</p>
                                                        </b-col>
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">งบประมาณคงเหลือจากหลักการ</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{amountData.totalMP_Total_From_Disburse}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">บาท</p>
                                                        </b-col>
                                                        <b-col class="p-2 mb-1 mr-2 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">งบประมาณคงเหลือจากเบิกจ่ายจริง</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{amountData.totalMP_Total_From_Disburse}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">บาท</p>
                                                        </b-col>
                                                    </b-row>
                                                </b-container>
                                            </div>
                                            <div>
                                                <div>
                                                <h6 class="ml-0 mt-2 mb-0 p-0">จำนวนโครงการ</h6>
                                                </div>
                                                <b-container fluid>
                                                    <b-row class="mt-1 d-flex justify-content-betweet " >
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14 ">จำนวนโครงการทั้งหมด</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{statusData.All}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                                                        </b-col>
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">โครงการที่ดำเนินการเสร็จสิ้น</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{statusData.Done}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                                                        </b-col>
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">โครงการที่กำลังดำเนินการ</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{statusData.Processing}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                                                        </b-col>
                                                        <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                                                            <p class="mb-0 pl-1 font14">โครงการที่ยังไม่ดำเนินการ</p>
                                                            <p class="mb-0 text-center font24 mt-2"><strong>{{statusData.No}}</strong></p>
                                                            <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                                                        </b-col>
                                                    </b-row>
                                                </b-container>
                                            </div>
                                            <div class="mt-3" >
                                                <b-nav class="mt-2">
                                                    <b-navbar-nav>
                                                        <b-navbar-brand class="">รายละเอียดของโครงการ</b-navbar-brand>
                                                    </b-navbar-nav>            
                                                    <b-navbar-nav class="ml-auto">
                                                        <b-button class="ml-auto px-3 my-2" style="background-color: #1d6f42" id="download-xlsx">
                                                        <font-awesome-icon :icon="['fas', 'file-excel']" class="mr-2" />พิมพ์</b-button>
                                                    </b-navbar-nav>
                                                </b-nav>
                                            </div>
                                        </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </b-tab>
                    <div id="table" class="sty-table shadow bg-white rounded"></div>
                </b-tabs>
            </div>
            
        </div>
    </div>
</template>

<script>

import MainprojectDataservice from "../services/mainproject.dataservice.js"
import DepartmentDataservice from "../services/department.dataservice"
import Tabulator from 'tabulator-tables';
// import SummaryBranch from "./SummaryBranch"

var table;

export default {
    name: "Summary",
    // components: {
    //     SummaryBranch
    // },
    data() {
        return {
            user : this.$store.state.user,

            tableData: [],
            BranchDepartment: [],
            Department: [],
            amountData: [],
            statusData: [],

            chartBudgetOptions: {

                plotOptions: {
                    bar: {
                    columnWidth: '50%',
                    },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                    // distributed: true
                }
            },
            dataLabels: {
                enabled: false
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
        }
    },

    mounted() {
        this.getDepartmentTabs()
        
        //instantiate Tabulator when element is mounted
        table = new Tabulator("#table", {
            layout:"fitDataStretch",
            dataTreeStartExpanded:true,
            dataTree:true,
            dataTreeFilter:false, //disable child row filtering
            printAsHtml:true, //enable html table printing
            columns: [
                {title:"ชื่อโครงการ", field:"Name", width:250, hozAlign:"left", formatter:"textarea", frozen:true,},
                {title:"ประเด็นยุทธศาสตร์", field:"Strategic_Issue_ID", width:100, editor:"input", hozAlign:"right", },
                {title:"ยุทธศาสตร์", field:"Strategic_ID", width:100, editor:"input",  hozAlign:"right", },
                {title:"กลยุทธ์", field:"Strategy_ID", width:100, editor:"input",  hozAlign:"right",},
                {title:"ผู้รับผิดชอบ", field:"Owner", width:140, hozAlign:"left",},
                {title:"ตัวชี้วัด", field:"Indicator",  width:140,  hozAlign:"left", },
                {title:"ค่าเป้าหมาย", field:"Target_Value", width:140, hozAlign:"left",}, 
                {title:"งบประมาณตามแผน", field:"Budget", width:140, hozAlign:"right",  formatter:"money", } , 
                {title:"โอนเข้า", field:"Income", width:140, hozAlign:"right",  formatter:"money", }, 
                {title:"โอนออก", field:"Outcome", width:140, hozAlign:"right",  formatter:"money",}, 
                {title:"คงเหลือตามแผน", field:"Total_Amount",  width:140, hozAlign:"right",  formatter:"money", }, 
                {title:"ขออนุมัติใช้", field:"Approve_Use", width:140, hozAlign:"right",  formatter:"money", }, 
                {title:"เบิกจ่าย", field:"Disburse", width:140, hozAlign:"right",  formatter:"money",}, 
                {title:"คงเหลือตามหลักการ", field:"Total_From_Priciple",  width:140, hozAlign:"right",}, 
                {title:"คงเหลือจากเบิกจ่ายจริง", field:"Total_From_Disburse", width:160, hozAlign:"right", formatter:"money", }, 
                {title:"ผลการดำเนินงาน", field:"Performance_Result", width:160, hozAlign:"left",}, 
                {title:"ปัญหาและอุปสรรค", field:"Problem", width:160, hozAlign:"left",}, 
                {title:"รายละเอียดผลการดำเนินงาน", field:"Detail_Result", width:160, hozAlign:"left",}, 
                {title:"หมายเหตุ", field:"Annotation", width:160, hozAlign:"left",}, 
                {title:"สถานะโครงการ", field:"Status", editorParams:{values:{"ยังไม่ดำเนินการ":"ยังไม่ดำเนินการ", "กำลังดำเนินการ":"กำลังดำเนินการ", "เสร็จสิ้น":"เสร็จสิ้น" },},  width:160,
                    formatter:function(cell){
                        var value = cell.getValue();
                        var color;
                            if(value == "ยังไม่ดำเนินการ"){
                                color = '#EA3546'
                                
                            } else if(value == "กำลังดำเนินการ"){
                                color = '#F9CE1D'
                                
                            } else if(value == "เสร็จสิ้น"){
                                color = '#4CAF50'
                            }
                            return "<button style='color: white; background-color:"+ color +"; display: inline-block; border: none; outline: none; text-align: center; text-decoration: none; padding: .4em .4em .55em; border-radius: .4em;'>" + value + "</button>"
                    }
                },
            ],
        });

        // export excel
        document.getElementById("download-xlsx").addEventListener("click", function(){
            table.download("csv", "data.csv");
        });

    },

        template: '<div id="table" class="sty-table"></div>', //create table holder element

        methods: {

            getDepartmentTabs() {
            DepartmentDataservice.getAll()
            .then(response => {
                for(var i in response.data){
                if(response.data[i].D_Name != 'Admin') {
                    if(response.data[i].D_Name.includes('สาขา')){
                        this.BranchDepartment.push({D_ID: response.data[i].D_ID, D_Name: response.data[i].D_Name})
                    }
                    else {
                        if(!response.data[i].D_Name.includes('ผู้บริหาร')) {
                            this.Department.push({D_ID: response.data[i].D_ID, D_Name: response.data[i].D_Name})
                        }
                    }
                    
                }}
             })
            },

            getProjects(D_ID) {
                MainprojectDataservice.getAll()
                    .then(response => {
                        var totalMP_Budget = 0;
                        var totalMP_Total_Amount = 0;
                        var totalMP_Total_From_Disburse = 0;
                        var totalMP_Total_From_Priciple = 0;

                        var statusDone = 0;
                        var statusProcessing = 0;
                        var statusNo = 0;

                        this.tableData = []
                        for(var i in response.data) {
                            if(response.data[i].D_ID == D_ID){
                                totalMP_Budget += response.data[i].MP_Budget
                                totalMP_Total_Amount += response.data[i].MP_Total_Amount
                                totalMP_Total_From_Disburse += response.data[i].MP_Total_From_Disburse
                                totalMP_Total_From_Priciple += response.data[i].MP_Total_From_Priciple

                                this.tableData.push({ 
                                    Name: response.data[i].MP_Name,
                                    Strategic_Issue_ID: response.data[i].Strategic_Issue_ID,
                                    Strategic_ID: response.data[i].Strategic_ID,
                                    Strategy_ID: response.data[i].Strategy_ID,
                                    Owner: response.data[i].MP_Owner,
                                    Indicator: response.data[i].MP_Indicator,
                                    Target_Value: response.data[i].MP_Target_Value,
                                    Budget: response.data[i].MP_Budget,
                                    Income: response.data[i].MP_Income,
                                    Outcome: response.data[i].MP_Outcome,
                                    Total_Amount: response.data[i].MP_Total_Amount,
                                    Approve_Use: response.data[i].MP_Approve_Use,
                                    Disburse: response.data[i].MP_Disburse,
                                    Total_From_Priciple: response.data[i].MP_Total_From_Priciple,
                                    Total_From_Disburse: response.data[i].MP_Total_From_Disburse,
                                    Performance_Result: response.data[i].Performance_Result,
                                    Problem: response.data[i].Problem,
                                    Detail_Result: response.data[i].Detail_Result,
                                    Annotation: response.data[i].Annotation,
                                    Status: response.data[i].MP_Status,
                                })

                                var childrens = []
                                for(var j in response.data[i].subprojects){
                                    if(response.data[i].subprojects[j].SP_Status == 'เสร็จสิ้น') {
                                        statusDone += 1
                                    }
                                    else if(response.data[i].subprojects[j].SP_Status == 'กำลังดำเนินการ') {
                                        statusProcessing += 1
                                    }
                                    else if(response.data[i].subprojects[j].SP_Status == 'ยังไม่ดำเนินการ') {
                                        statusNo += 1
                                    }
                                    childrens.push({
                                        Name: response.data[i].subprojects[j].SP_Name,
                                        Owner: response.data[i].subprojects[j].SP_Owner,
                                        Indicator: response.data[i].subprojects[j].SP_Indicator,
                                        Target_Value: response.data[i].subprojects[j].SP_Target_Value,
                                        Budget: response.data[i].subprojects[j].SP_Budget,
                                        Income: response.data[i].subprojects[j].SP_Income,
                                        Outcome: response.data[i].subprojects[j].SP_Outcome,
                                        Total_Amount: response.data[i].subprojects[j].SP_Total_Amount,
                                        Approve_Use: response.data[i].subprojects[j].SP_Approve_Use,
                                        Disburse: response.data[i].subprojects[j].SP_Disburse,
                                        Total_From_Priciple: response.data[i].subprojects[j].SP_Total_From_Priciple,
                                        Total_From_Disburse: response.data[i].subprojects[j].SP_Total_From_Disburse,
                                        Performance_Result: response.data[i].subprojects[j].Performance_Result,
                                        Problem: response.data[i].subprojects[j].Problem,
                                        Detail_Result: response.data[i].subprojects[j].Detail_Result,
                                        Annotation: response.data[i].subprojects[j].Annotation,
                                        Status: response.data[i].subprojects[j].SP_Status,
                                    })
                                }
                                if(childrens.length > 0) {
                                    this.tableData[i]._children = childrens
                                }
                                

                            }
                        }
                        this.amountData = {totalMP_Budget: totalMP_Budget, totalMP_Total_Amount: totalMP_Total_Amount, totalMP_Total_From_Disburse: totalMP_Total_From_Disburse, totalMP_Total_From_Priciple: totalMP_Total_From_Priciple}
                        this.statusData = {All: statusDone+statusProcessing+statusNo, Done: statusDone, Processing: statusProcessing, No: statusNo}
                        // console.log(this.amountData)
                        // console.log(this.statusData)
                        // console.log(this.tableData)
                        //table.setData(this.tableData);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
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