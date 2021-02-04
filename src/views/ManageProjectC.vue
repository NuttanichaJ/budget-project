<template>
  <div id="manageproject">
    <h1 class="ml-2">จัดการโครงการ</h1>
    <b-nav class="mt-3" id="menu">
        <b-navbar-nav class="mb-2 mr-sm-2 mb-sm-0 ml-auto">
                <b-nav-form>
                    <b-input-group >
                        <b-form-input placeholder="ค้นหาชื่อโครงการ" id='search'></b-form-input>
                        <b-input-group-append>
                            <b-button class="mb-2 mr-sm-2 mb-sm-0"><font-awesome-icon icon="search" /></b-button>                        
                        </b-input-group-append>
                        <b-button class="mb-2 mr-sm-2 mb-sm-0" @click='save'>บันทึก</b-button>
                        <b-button class="mb-2 mr-sm-0 mb-sm-0" @click='cancel'>ยกเลิก</b-button>
                    </b-input-group>
                </b-nav-form>        
        </b-navbar-nav>
    </b-nav>
    <div>
       <b-nav class="mt-3" id="menu">
        <b-navbar-nav class="mb-2 mr-sm-0 mb-sm-0 mr-auto">
                <b-nav-form>
                    <b-input-group >
                        <b-button id="add-project" @click='addRow' class="mb-2 ml-sm-2 mb-sm-0" >เพิ่มโครงการหลัก</b-button>      
                        <b-button class="mb-2 ml-sm-2 mb-sm-0" to="/transfer">โอนเงินเข้า-ออก</b-button>
                    </b-input-group>
                </b-nav-form>        
        </b-navbar-nav>
      </b-nav>
    </div>
    <div id="table" class="sty-table"></div>
  </div>
      

</template>

<script>
import Tabulator from 'tabulator-tables';
import MainProjectDataSevice from "../services/MPcenter.DataSevice";

export default {

  name: "ManageProject",
  
  data() {
      return {
        modalShow: false,
        tabulator: null, //variable to hold your table
        tableData: []
        }
  },
   watch:{
     
    //update table if data changes
    tableData:{
      handler: function (newData) {
        this.tabulator.replaceData(newData);
      },
      deep: true,
    }
  },

  mounted(){
    this.retrieveMainProject();
    console.log(this.tableData)
    var printSPIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        if(cell.getRow().getData().MP_NAME != undefined) {
          return '<a class="btn btn-secondary" href="/managesubproject" target="_self">แก้ไขโครงการย่อย</a>'
        }
    };

    var printDelIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        return '<a class="btn btn-secondary" target="_self">ลบ</a>'
        
    };
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator('#table', {
      data: this.tableData, //link data to table
      addRowPos:"bottom",
      columns: [
        {title:"ชื่อโครงการ", field:"MP_NAME", width:200, editor:"input", hozAlign:"left", formatter:"textarea", frozen:true, responsive:0, },
        {title:"ประเด็นยุทธศาสตร์", field:"STRATEGIC_ISSUE_ID", width:100, editor:"input", hozAlign:"right", },
        {title:"ยุทธศาสตร์", field:"STRATEGIC_ID", width:100, editor:"input", hozAlign:"right", },
        {title:"กลยุทธ์", field:"STRATEGY_ID", width:100, editor:"input", hozAlign:"right",},
        {title:"ผู้รับผิดชอบ", field:"MP_OWNER", width:140, editor:"input", hozAlign:"left",},
        {title:"ตัวชี้วัด", field:"MP_INDICATOR",  width:140, editor:"input", hozAlign:"left", },
        {title:"ค่าเป้าหมาย", field:"MP_TARGET_VALUE", editor:"input",  width:140, hozAlign:"left",}, //define table columns
        {title:"งบประมาณตามแผน", field:"MP_BUDGET", editor:"number",  width:140, hozAlign:"right", formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"โอนเข้า", field:"MP_INCOME", editor:"number",  width:140, hozAlign:"right", formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"โอนออก", field:"MP_OUTCOME", editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"คงเหลือตามแผน", field:"MP_TOTAL_AMOUNT", editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"ขออนุมัติใช้", field:"MP_APPROVE_USE", editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"เบิกจ่าย", field:"MP_DISBURSE", editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"คงเหลือตามหลักการ", field:"MP_TOTAL_FROM_PRINCIPLE", editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"คงเหลือจากเบิกจ่ายจริง", field:"MP_TOTAL_FROM_DISBURSE", editor:"number",  width:160, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        // {title:"ผลการดำเนินงาน", field:"performance_result", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        // {title:"ปัญหาและอุปสรรค", field:"problem", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        // {title:"รายละเอียดผลการดำเนินงาน", field:"detail_result", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        // {title:"หมายเหตุ", field:"annotation", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"สถานะโครงการ", field:"status", editor:"select", editorParams:{values:{"ยังไม่ได้ดำเนินการ":"ยังไม่ได้ดำเนินการ", "กำลังดำเนินการ":"กำลังดำเนินการ", "ดำเนินการเสร็จแล้ว":"ดำเนินการเสร็จแล้ว" }, hozAlign:"left",},  width:160},
        {formatter:printSPIcon, hozAlign:"left",headerSort:false, },
        {formatter:printDelIcon, hozAlign:"left",headerSort:false, cellClick:function(e, cell){if(confirm("ต้องการลบ " + cell.getRow().getData().MP_NAME + " ใช่หรือไม่?")== true){
          cell.getRow().delete()}} }, //cellClick:function(e, cell){alert("Printing row data for: " + cell.getRow().getData().name)}
        ], //define table columns
    });   

      // search name
      // var valueEl = document.getElementById("search");
      // valueEl.addEventListener("keyup", function(){
      //   table.setFilter('name','like', valueEl.value);       
      // })

      // //add row
      //  document.getElementById("add-project").addEventListener("click", function(){
      //   table.addRow({});
      // });

  },
  template: '<div ref="table"></div>', //create table holder element
  methods: {
    save() {
     this.$confirm(
      "คุณต้องการบันทึกใช่หรือไม่?",
      " ",
      "question"
    )
    },
    cancel() {
     this.$confirm(
      "คุณต้องการยกเลิกใช่หรือไม่?",
      " ",
      "error"
    )
    },
    retrieveMainProject() {
          MainProjectDataSevice.getAll()
            .then(response => {
              this.tableData = response.data;
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
    },

    // Add row on "Add Row" button click
    addRow() {
      this.tabulator.addRow({});
    },

    // search() {
    //   var valueEl = document.getElementById("search");
    //   if(valueEl != '') {
    //     this.tabulator.setFilter('name','regex', valueEl.value);
    //   }
    // }
  },

};

</script>

<style lang="scss">
@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

#manageproject {
  margin: 20px;
}

</style>

