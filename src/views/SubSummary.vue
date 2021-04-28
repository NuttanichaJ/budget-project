<template>
    <div id="subsummary">
        <div class=" mt-3">
            <b-tabs content-class="mt-5 dark" fill>
                <b-tab title="กองบริหารงานคณะ">
                    <div class="">
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
                                            <!-- <div id="table" class="sty-table shadow bg-white rounded"></div> -->
                                        </div>
                                    </div>
                            </b-tab>
                            <!-- <b-tab title="ฝ่ายแผนยุทธศาสตร์">
                                <p>ฝ่ายแผนยุทธศาสตร์</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="ฝ่ายเหรัญญิก">
                                <p>ฝ่ายเหรัญญิก</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="ฝ่ายวิชาการ">
                                <p>ฝ่ายวิชาการ</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="ฝ่ายวิจัย" >
                                <p>ฝ่ายวิจัย</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="ฝ่ายปฏิบัติการ">
                                <p>ฝ่ายปฏิบัติการ</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="หน่วยวิเทศ">
                                <p>หน่วยวิเทศ</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="หน่วยพัฒนานักศึกษา">
                                <p>หน่วยพัฒนานักศึกษา</p>

                                <SummaryBranch1 />
                            </b-tab>

                                <SummaryBranch />
                            </b-tab> -->
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
                                            <!-- <div id="table" class="sty-table shadow bg-white rounded"></div> -->
                                        </div>
                                    </div>
                            </b-tab>

                            <!-- <b-tab @click='alert()' title="วิศวกรรมโยธา">
                                <p class="font16">วิศวกรรมโยธา</p>

                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมไฟฟ้า">
                                <p>วิศวกรรมไฟฟ้า</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมเกษตร">
                                <p>วิศวกรรมเกษตร</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมอุตสาหการ">
                                <p>วิศวกรรมอุตสาหการ</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมเครื่องกล">
                                <p>วิศวกรรมเครื่องกล</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมสิ่งแวดล้อม">
                                <p>วิศวกรรมสิ่งแวดล้อม</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมเคมี">
                                <p>วิศวกรรมเคมี</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมคออมพิวเตอร์" >
                                <p>วิศวกรรมคออมพิวเตอร์</p>
                                <SummaryBranch1 />
                            </b-tab>

   
                            </b-tab>
                            <b-tab title="วิศวกรรมไฟฟ้า">
                                <p>วิศวกรรมไฟฟ้า</p>

                            </b-tab>
                            <b-tab title="วิศวกรรมเกษตร">
                                <p>วิศวกรรมเกษตร</p>

                            </b-tab>
                            <b-tab title="วิศวกรรมอุตสาหการ">
                                <p>วิศวกรรมอุตสาหการ</p>
   
                            </b-tab>
                            <b-tab title="วิศวกรรมเครื่องกล">
                                <p>วิศวกรรมเครื่องกล</p>
    
                            </b-tab>
                            <b-tab title="วิศวกรรมสิ่งแวดล้อม">
                                <p>วิศวกรรมสิ่งแวดล้อม</p>
  
                            </b-tab>
                            <b-tab title="วิศวกรรมเคมี">
                                <p>วิศวกรรมเคมี</p>

                            </b-tab>
                            <b-tab title="วิศวกรรมคออมพิวเตอร์" >
                                <p>วิศวกรรมคออมพิวเตอร์</p>
        
                            </b-tab> -->
                        </b-tabs>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </div>
  
</template>

<script>

import SummaryBranch1 from './SummaryBranch.vue'
import MainprojectDataservice from "../services/mainproject.dataservice.js"
import DepartmentDataservice from "../services/department.dataservice"
import Tabulator from 'tabulator-tables';

var table;

export default {
    name: "SubSummary",
    components :{
       SummaryBranch1
    },
    data() {
      return {
            tableData_: [],
            BranchDepartment: [],
            Department: [],
            amountData: [],
            statusData: [],
            // allamountData: [],
            // allstatusData: [],
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
              if(response.data[i].D_Name != 'แอดมิน') {
                  if(response.data[i].D_Name.includes('สาขา')){
                    this.BranchDepartment.push({D_ID: response.data[i].D_ID, D_Name: response.data[i].D_Name})
                  }
                  else {
                      if(!response.data[i].D_Name.includes('ผู้บริหาร')) {
                        this.Department.push({D_ID: response.data[i].D_ID, D_Name: response.data[i].D_Name})
                      }
                    
                  }
                
              }
            }
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

.font16{
    font-size: 16px;
}

</style>