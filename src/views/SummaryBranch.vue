<template>
    <div id="subSummary">
        <div >
            <h3 class="mb-3 " v-if="this.user.permission == 'สาขาวิชา'">สรุปงบประมาณ {{ user.depart_name}}</h3>
            <h4 class="mb-3 " v-else ></h4>
        </div>

        <div class="mt-4">
            <b-row align-h="center">
            
                <b-col col lg="5" class="mr-3 shadow p-2 mb-1 bg-white rounded">
                    <h6 class="pl-1">งบประมาณของโครงการทั้งหมด</h6>
                    <apexchart width="100%" type="bar" :options="chartBudgetOptions" :series="dataBudget"></apexchart>
                </b-col>

                <b-col lg="5" class="ml-1 shadow p-2 mb-1 bg-white rounded">
                    <h6 class="pl-1">จำนวนโครงการ</h6>
                    <apexchart width="90%" type="donut" :options="projectOption" :series="dataProject"></apexchart>
                </b-col>
            </b-row>
      </div>

        <div class="mt-3" >
            <b-nav class="mt-2">
                <b-navbar-nav>
                    <b-navbar-brand class="">รายละเอียดของโครงการ</b-navbar-brand>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-button
                            class="ml-auto px-3 my-2"
                            style="background-color: #1d6f42"
                            id="download-xlsx"
                          >
                            <font-awesome-icon
                              :icon="['fas', 'file-excel']"
                              class="mr-2"
                            />พิมพ์</b-button
                          >
                </b-navbar-nav>
            </b-nav>
            <div id="table" class="sty-table shadow bg-white rounded"></div>
        </div>
        
    </div>

</template>

<script>
import Tabulator from 'tabulator-tables'; 
import MainprojectDataservice from "../services/mainproject.dataservice.js";

var table;

export default {
    name: "SummaryBranch",
    data() {
        return {
            user : this.$store.state.user,
            //
            chartBudgetOptions: {
                plotOptions: {
                    bar: {
                        columnWidth: '50%',
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
                    text: "จำนวนเงิน",
                    style: {
                        fontSize: '14px'
                    }
                    }
                }
            },
        
            // series data
            dataBudget:[],

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
            dataProject: [],  // series data
            

            // data table
            tableData: [],
        }

    },
    // table
    mounted(){
        this.getProjects();

        //instantiate Tabulator when element is mounted
        table = new Tabulator("#table", {
        layout: "fitDataStretch",
        dataTreeStartExpanded: true,
        dataTree: true,
        dataTreeFilter: false, //disable child row filtering
        printAsHtml: true, //enable html table printing
        columns: [
            {
            title: "ชื่อโครงการ",
            field: "Name",
            width: 250,
            hozAlign: "left",
            formatter: "textarea",
            frozen: true,
            },
            {
            title: "ประเด็นยุทธศาสตร์",
            field: "Strategic_Issue_ID",
            width: 100,
            editor: "input",
            hozAlign: "right",
            },
            {
            title: "ยุทธศาสตร์",
            field: "Strategic_ID",
            width: 100,
            editor: "input",
            hozAlign: "right",
            },
            {
            title: "กลยุทธ์",
            field: "Strategy_ID",
            width: 100,
            editor: "input",
            hozAlign: "right",
            },
            { title: "ผู้รับผิดชอบ", field: "Owner", width: 140, hozAlign: "left" },
            {
            title: "ตัวชี้วัด",
            field: "Indicator",
            width: 140,
            hozAlign: "left",
            },
            {
            title: "ค่าเป้าหมาย",
            field: "Target_Value",
            width: 140,
            hozAlign: "left",
            },
            {
            title: "งบประมาณตามแผน",
            field: "Budget",
            width: 140,
            hozAlign: "right",
            formatter: "money",
            },
            {
            title: "โอนเข้า",
            field: "Income",
            width: 140,
            hozAlign: "right",
            formatter: "money",
            },
            {
            title: "โอนออก",
            field: "Outcome",
            width: 140,
            hozAlign: "right",
            formatter: "money",
            },
            {
            title: "คงเหลือตามแผน",
            field: "Total_Amount",
            width: 140,
            hozAlign: "right",
            formatter: "money",
            },
            {
            title: "ขออนุมัติใช้",
            field: "Approve_Use",
            width: 140,
            hozAlign: "right",
            formatter: "money",
            },
            {
            title: "เบิกจ่าย",
            field: "Disburse",
            width: 140,
            hozAlign: "right",
            formatter: "money",
            },
            {
            title: "คงเหลือตามหลักการ",
            field: "Total_From_Priciple",
            width: 140,
            hozAlign: "right",
            },
            {
            title: "คงเหลือจากเบิกจ่ายจริง",
            field: "Total_From_Disburse",
            width: 160,
            hozAlign: "right",
            formatter: "money",
            },
            {
            title: "ผลการดำเนินงาน",
            field: "Performance_Result",
            width: 160,
            hozAlign: "left",
            },
            {
            title: "ปัญหาและอุปสรรค",
            field: "Problem",
            width: 160,
            hozAlign: "left",
            },
            {
            title: "รายละเอียดผลการดำเนินงาน",
            field: "Detail_Result",
            width: 160,
            hozAlign: "left",
            },
            {
            title: "หมายเหตุ",
            field: "Annotation",
            width: 160,
            hozAlign: "left",
            },
            {
            title: "สถานะโครงการ",
            field: "Status",
            editorParams: {
                values: {
                ยังไม่ดำเนินการ: "ยังไม่ดำเนินการ",
                กำลังดำเนินการ: "กำลังดำเนินการ",
                เสร็จสิ้น: "เสร็จสิ้น",
                },
            },
            width: 160,
            formatter: function (cell) {
                var value = cell.getValue();
                var color;
                if (value == "ยังไม่ดำเนินการ") {
                color = "#EA3546";
                } else if (value == "กำลังดำเนินการ") {
                color = "#F9CE1D";
                } else if (value == "เสร็จสิ้น") {
                color = "#4CAF50";
                }
                return (
                "<button style='color: white; background-color:" +
                color +
                "; display: inline-block; border: none; outline: none; text-align: center; text-decoration: none; padding: .4em .4em .55em; border-radius: .4em;'>" +
                value +
                "</button>"
                );
            },
            },
        ],
        });

        // export excel
        document
        .getElementById("download-xlsx")
        .addEventListener("click", function () {
            table.download("csv", "data.csv");
        });

    },

    template: '<div id="table" class="sty-table"></div>', //create table holder element

    methods: {
        getProjects() {
            MainprojectDataservice.getAll()
                .then((response) => {
                var totalMP_Budget = 0;
                var totalMP_Total_Amount = 0;
                var totalMP_Total_From_Disburse = 0;
                var totalMP_Total_From_Priciple = 0;

                var statusDone = 0;
                var statusProcessing = 0;
                var statusNo = 0;

                for (var i in response.data) {
                    if(response.data[i].D_ID == this.user.depart_id){
                        totalMP_Budget += response.data[i].MP_Budget;
                        totalMP_Total_Amount += response.data[i].MP_Total_Amount;
                        totalMP_Total_From_Disburse +=
                        response.data[i].MP_Total_From_Disburse;
                        totalMP_Total_From_Priciple +=
                        response.data[i].MP_Total_From_Priciple;

                        var childrens = [];
                        
                        for (var j in response.data[i].subprojects) {
                            if (response.data[i].subprojects[j].SP_Status == "เสร็จสิ้น") {
                                statusDone += 1;
                            } else if (
                                response.data[i].subprojects[j].SP_Status == "กำลังดำเนินการ"
                            ) {
                                statusProcessing += 1;
                            } else if (
                                response.data[i].subprojects[j].SP_Status == "ยังไม่ดำเนินการ"
                            ) {
                                statusNo += 1;
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
                                Total_From_Priciple:
                                response.data[i].subprojects[j].SP_Total_From_Priciple,
                                Total_From_Disburse:
                                response.data[i].subprojects[j].SP_Total_From_Disburse,
                                Performance_Result:
                                response.data[i].subprojects[j].Performance_Result,
                                Problem: response.data[i].subprojects[j].Problem,
                                Detail_Result: response.data[i].subprojects[j].Detail_Result,
                                Annotation: response.data[i].subprojects[j].Annotation,
                                Status: response.data[i].subprojects[j].SP_Status,
                            });
                        }

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
                            D_ID: response.data[i].D_ID,
                            _children: childrens,
                        });
    
                    }
                    }

                    this.dataBudget.push({
                        name: 'งบประมาณ',
                        data: [
                                totalMP_Budget,totalMP_Total_Amount, totalMP_Total_From_Priciple, totalMP_Total_From_Disburse,
                              ],
                    })

                    this.dataProject = [statusDone, statusProcessing, statusNo]

                    table.setData(this.tableData);
                
                })
                .catch((e) => {
                    console.log(e);
                });
            },
    },
        
}

</script>

<style lang="scss" scoped>
@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100&display=swap');
#subSummary {
  margin: 30px;
}
.font14{
    font-size: 14px;
}

.font18{
    font-size: 18px;
}
.font24{
    font-size: 24px;
}
.table-sty {
  padding: 0;
  margin: 0;
  font-size: 14px;
  
}

</style>
