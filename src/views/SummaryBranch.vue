<template>
    <div id="subSummary">
        
        <div>
            <div>
                <h4 class="mb-3 ">สาขาวิชา ....</h4>
                <SummaryHead />
            </div>

            <div>
                <b-container fluid>
                    <b-row class="border mt-3" >
                        <b-col lg="6" align-self="center" class="p-3 m-2 shadow-sm bg-white rounded">
                            <apexchart width="100%" type="pie" :options="projectOption" :series="dataProject"></apexchart>
                        </b-col>
                        <b-col lg="5" align-self="center" class="ml-3">
                            <p class="font18">จำนวนโครงการทั้งหมด [] โครงการ</p>
                            <p class="font18">โครงการที่ยังไม่ดำเนินการ [] โครงการ</p>
                            <p class="font18">โครงการที่กำลังดำเนินการ [] โครงการ</p>
                            <p class="font18">โครงการที่ดำเนินการเสร็จสิ้น [] โครงการ</p>
                        </b-col>
                        
                    </b-row>
                    <div class="mt-3">
                        <h5>รายละเอียดของโครงการ</h5>
                        <p>แสดงตารางของโครงการ</p>
                        <div id="table" class="sty-table"></div>
                    </div>
                </b-container>
            </div>
            
            
        </div>

    </div>
</template>
<script>
import SummaryHead from "@/components/SummaryHead.vue"
export default {
    name: "SummaryBranch",
    components :{
        SummaryHead
    },
    data() {
        return {
            projectOption: {
                plotOptions: {
                    pie: {
                        size: '10%',
                        fontSize: '24px',
                    }
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'left'
                },
                labels: ['โครงการย่อยที่เสร็จสิ้น', 'โครงการย่อยที่กำลังดำเนินการ', 'โครงการที่ยังไม่ได้ดำเนินการ',],
                colors: ['#7ebc59','#F1B24A','#E62739',],
            }, 
            dataProject: [ 21, 32, 11, ],  // series data
        }
        
        
    },
    // table
        history: true,
        layout:"fitDataStretch",
        addRowPos: "bottom",
        columns: [
        {title:"ชื่อโครงการ", field:"SP_Name", width:250, editor:"input", hozAlign:"left", formatter:"textarea", frozen:true,},
        {title:"ผู้รับผิดชอบ", field:"SP_Owner", width:140, editor:"input", hozAlign:"left",},
        {title:"ตัวชี้วัด", field:"SP_Indicator",  width:140, editor:"input", hozAlign:"left", },
        {title:"ค่าเป้าหมาย", field:"SP_Target_Value", editor:"input", width:140, hozAlign:"left",}, //define table columns
        {title:"งบประมาณตามแผน", field:"SP_Budget", editor:"number", width:140, hozAlign:"right",  formatter:"money"}, //define table columns
        {title:"โอนเข้า", field:"SP_Income", width:140, hozAlign:"right",  formatter:"money",}, //define table columns
        {title:"โอนออก", field:"SP_Outcome", width:140, hozAlign:"right",  formatter:"money", }, //define table columns
        {title:"คงเหลือตามแผน", field:"SP_Total_Amount", editor:"number", width:140, hozAlign:"right", formatter:"money", }, //define table columns
        {title:"ขออนุมัติใช้", field:"SP_Approve_Use", editor:"number", width:140, hozAlign:"right",  formatter:"money", }, //define table columns
        {title:"เบิกจ่าย", field:"SP_Disburse", editor:"number", width:140, hozAlign:"right",  formatter:"money",}, //define table columns
        {title:"คงเหลือตามหลักการ", field:"SP_Total_From_Priciple",}, //define table columns
        {title:"คงเหลือจากเบิกจ่ายจริง", field:"SP_Total_From_Disburse",  }, //define table columns
        {title:"ผลการดำเนินงาน", field:"Performance_Result", editor:"input", width:160, hozAlign:"left",}, //define table columns
        {title:"ปัญหาและอุปสรรค", field:"Problem", editor:"input", width:160, hozAlign:"left",}, //define table columns
        {title:"รายละเอียดผลการดำเนินงาน", field:"Detail_Result", editor:"input", width:160, hozAlign:"left",}, //define table columns
        {title:"หมายเหตุ", field:"Annotation", editor:"input", width:160, hozAlign:"left",}, //define table columns
        {title:"สถานะโครงการ", field:"SP_Status", editor:"select", editorParams:{values:{"ยังไม่ดำเนินการ":"ยังไม่ดำเนินการ", "กำลังดำเนินการ":"กำลังดำเนินการ", "เสร็จสิ้น":"เสร็จสิ้น" },},  width:160,
          formatter:function(cell){
              var value = cell.getValue();
              var color;
                if(value == "ยังไม่ดำเนินการ"){
                    color = '#e62739'
                    
                } else if(value == "กำลังดำเนินการ"){
                    color = '#F9CE1D'
                    
                } else if(value == "เสร็จสิ้น"){
                    color = '#4CAF50'
                }
                return "<button style='color: white; background-color:"+ color +"; display: inline-block; border: none; outline: none; text-align: center; text-decoration: none; padding: .4em .4em .55em; border-radius: .4em;'>" + value + "</button>"
          }
        },
      ],
      template: '<div ref="table"></div>'
    
}

</script>
<style lang="scss" scoped>
#subSummary {
  margin: 30px;
}
.font16{
    font-size: 16px;
}

small{
  font-size: 14px;
}
.font18{
    font-size: 18px;
}
.font28{
    font-size: 28px;
}

</style>
