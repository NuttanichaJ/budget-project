<template>
    <div id="subSummary">
        <div >
            <h4 class="mb-3 " v-if="this.user.permission == 'สาขาวิชา'">{{ user.depart_name}}</h4>
            <h4 class="mb-3 " v-else ></h4>
        </div>

        <div>
            <div>
               <h6 class="ml-0 mt-2 mb-0 p-0">สรุปงบประมาณ</h6>
            </div>
            <b-container fluid>
                <b-row class="mt-1 d-flex justify-content-betweet" >
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                        <p class="mb-0 pl-1 font14">งบประมาณทั้งหมด (ตามแผน)</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>907900</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font14" >บาท</p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                        <p class="mb-0 pl-1 font14">งบประมาณคงเหลือตามแผน</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>907900</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font14">บาท</p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                        <p class="mb-0 pl-1 font14">งบประมาณคงเหลือจากหลักการ</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>846615</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font14">บาท</p>
                    </b-col>
                    <b-col class="p-2 mb-1 mr-2 border border-dark rounded">
                        <p class="mb-0 pl-1 font14">งบประมาณคงเหลือจากเบิกจ่ายจริง</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>892023</strong></p>
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
                        <p class="mb-0 text-center font24 mt-2"><strong>225</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                        <p class="mb-0 pl-1 font14">โครงการที่ดำเนินการเสร็จสิ้น</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>175</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                        <p class="mb-0 pl-1 font14">โครงการที่กำลังดำเนินการ</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>40</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded">
                        <p class="mb-0 pl-1 font14">โครงการที่ยังไม่ดำเนินการ</p>
                        <p class="mb-0 text-center font24 mt-2"><strong>10</strong></p>
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
                    <b-button class="ml-auto px-3 my-2" id="download-xlsx" @click="download">
                    <font-awesome-icon :icon="['fas', 'file-excel']" class="mr-2" />พิมพ์</b-button>
                </b-navbar-nav>
            </b-nav>
            <div ref="table"  class="table-sty"></div>
        </div>
        
    </div>

</template>

<script>
import Tabulator from 'tabulator-tables'; 
export default {
    name: "SummaryBranch",
    data() {
        return {
            user : this.$store.state.user,

            // data table
            tableData: [
                {SP_Name : 'โครงการ1'}
            ],
        }

    },
    // table
    mounted(){
    //instantiate Tabulator when element is mounted
        this.tabulator = new Tabulator(this.$refs.table, {
        data: this.tableData, //link data to table
        columns: [
            {title:"ชื่อโครงการ", field:"SP_Name", width:250, hozAlign:"left", formatter:"textarea", frozen:true,},
            {title:"ประเด็นยุทธศาสตร์", field:"Strategic_Issue_ID", width:100, editor:"input", hozAlign:"right", },
            {title:"ยุทธศาสตร์", field:"Strategic_ID", width:100, editor:"input",  hozAlign:"right", },
            {title:"กลยุทธ์", field:"Strategy_ID", width:100, editor:"input",  hozAlign:"right",},
            {title:"ผู้รับผิดชอบ", field:"SP_Owner", width:140, hozAlign:"left",},
            {title:"ตัวชี้วัด", field:"SP_Indicator",  width:140,  hozAlign:"left", },
            {title:"ค่าเป้าหมาย", field:"SP_Target_Value", width:140, hozAlign:"left",}, 
            {title:"งบประมาณตามแผน", field:"SP_Budget", width:140, hozAlign:"right",  formatter:"money", } , 
            {title:"โอนเข้า", field:"SP_Income", width:140, hozAlign:"right",  formatter:"money", }, 
            {title:"โอนออก", field:"SP_Outcome", width:140, hozAlign:"right",  formatter:"money",}, 
            {title:"คงเหลือตามแผน", field:"SP_Total_Amount",  width:140, hozAlign:"right",  formatter:"money", }, 
            {title:"ขออนุมัติใช้", field:"SP_Approve_Use", width:140, hozAlign:"right",  formatter:"money", }, 
            {title:"เบิกจ่าย", field:"SP_Disburse", width:140, hozAlign:"right",  formatter:"money",}, 
            {title:"คงเหลือตามหลักการ", field:"SP_Total_From_Priciple",  width:140, hozAlign:"right",}, 
            {title:"คงเหลือจากเบิกจ่ายจริง", field:"SP_Total_From_Disburse", width:160, hozAlign:"right", formatter:"money", }, 
            {title:"ผลการดำเนินงาน", field:"Performance_Result", width:160, hozAlign:"left",}, 
            {title:"ปัญหาและอุปสรรค", field:"Problem", width:160, hozAlign:"left",}, 
            {title:"รายละเอียดผลการดำเนินงาน", field:"Detail_Result", width:160, hozAlign:"left",}, 
            {title:"หมายเหตุ", field:"Annotation", width:160, hozAlign:"left",}, 
            {title:"สถานะโครงการ", field:"SP_Status", editorParams:{values:{"ยังไม่ดำเนินการ":"ยังไม่ดำเนินการ", "กำลังดำเนินการ":"กำลังดำเนินการ", "เสร็จสิ้น":"เสร็จสิ้น" },},  width:160,
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
        this.tabulator.download("xlsx", "data.xlsx");
    });


    },
    template: '<div ref="table"></div>', //create table holder element
    
}

</script>

<style lang="scss" scoped>
@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

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
