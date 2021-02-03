<template>
  <div id="manageproject">
    <h1 class="ml-2">จัดการโครงการ</h1>
    <h2 class="ml-2">โครงการหลัก</h2>
    <b-nav class="mt-3" id="menu">
        <b-navbar-nav class="mb-2 mr-sm-2 mb-sm-0 ml-auto">
                <b-nav-form>
                    <b-input-group >
                        <b-form-input placeholder="ค้นหาชื่อโครงการ" id='search'></b-form-input>
                        <b-input-group-append>
                            <b-button class="mb-2 mr-sm-2 mb-sm-0"><font-awesome-icon icon="search" /></b-button>                        
                        </b-input-group-append>
                        <!-- <b-button class="mb-2 mr-sm-2 mb-sm-0" @click='save'>บันทึก</b-button>
                        <b-button class="mb-2 mr-sm-0 mb-sm-0" @click='cancel'>ยกเลิก</b-button> -->
                    </b-input-group>
                </b-nav-form>        
        </b-navbar-nav>
    </b-nav>
    <div>
       <b-nav class="mt-3" id="menu">
        <b-navbar-nav class="mb-2 mr-sm-0 mb-sm-0 mr-auto">
                <b-nav-form>
                    <b-input-group>
                        <b-button id="add-project" style="display: none;" class="mb-2 ml-sm-2 mb-sm-0" >เพิ่มโครงการหลัก</b-button>
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

export default {

  name: "ManageProject",
  data() {
      return {
        modalShow: false,
        tabulator: null, //variable to hold your table
        tableData: [
          {name: 'โครงการหลักA',strategic_issue: "2",strategic: "1",strategy: "1",
            owner: "CoE",
            indicator: "ร้อยละจำนวน..",
            target_value: "ร้อยละ 80",
            budget: "0",
            income: "0",
            outcome: "0",
            total_amount: "0",
            approve_use: "0",
            disburse: "0",
            total_from_priciple: "0",
            total_from_disburse: "0",
            status: "ยังไม่ได้ดำเนินการ", 
            _children:[
                {name:"โครงการย่อยA1",
                  owner: "CoE",
                  indicator: "ร้อยละจำนวน..",
                  target_value: "ร้อยละ 80", 
                  budget: "0",
                  income: "0",
                  outcome: "0",
                  total_amount: "0",
                  approve_use: "0",
                  disburse: "0",
                  total_from_priciple: "0",
                  total_from_disburse: "0",
                  status: "ยังไม่ได้ดำเนินการ",},
                {name:"โครงการย่อยA2",  owner: "CoE",
                  indicator: "ร้อยละจำนวน..",
                  target_value: "ร้อยละ 80", 
                  budget: "0",
                  income: "0",
                  outcome: "0",
                  total_amount: "0",
                  approve_use: "0",
                  disburse: "0",
                  total_from_priciple: "0",
                  total_from_disburse: "0",
                  status: "ยังไม่ได้ดำเนินการ",
                }],
             },
            {name: 'โครงการหลักB',strategic_issue: "1",strategic: "3",strategy: "1",
            owner: "CoE",
            indicator: "ร้อยละจำนวน..",
            target_value: "ร้อยละ 80",
            budget: "0",
            income: "0",
            outcome: "0",
            total_amount: "0",
            approve_use: "0",
            disburse: "0",
            total_from_priciple: "0",
            total_from_disburse: "0",
            status: "ยังไม่ได้ดำเนินการ",
            _children:[
                {name:"โครงการย่อยB1", owner: "CoE",
                  indicator: "ร้อยละจำนวน..",
                  target_value: "ร้อยละ 80",
                  budget: "0",
                  income: "0",
                  outcome: "0",
                  total_amount: "0",
                  approve_use: "0",
                  disburse: "0",
                  total_from_priciple: "0",
                  total_from_disburse: "0",
                  status: "ยังไม่ได้ดำเนินการ",
                },
                {name:"โครงการย่อยB2", owner: "CoE",
                  indicator: "ร้อยละจำนวน..",
                  target_value: "ร้อยละ 80",
                  budget: "0",
                  income: "0",
                  outcome: "0",
                  total_amount: "0",
                  approve_use: "0",
                  disburse: "0",
                  total_from_priciple: "0",
                  total_from_disburse: "0",
                  status: "ยังไม่ได้ดำเนินการ",}],
            },
            {name: 'โครงการหลักC',strategic_issue: "4",strategic: "1",strategy: "2",
            owner: "CoE",
            indicator: "ร้อยละจำนวน..",
            target_value: "ร้อยละ 80",
            budget: "0",
            income: "0",
            outcome: "0",
            total_amount: "0",
            approve_use: "0",
            disburse: "0",
            total_from_priciple: "0",
            total_from_disburse: "0",
            status: "ยังไม่ได้ดำเนินการ",
            },  
        ]}
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
    var printSPIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        if(cell.getRow().getData().name != undefined) {
          return '<a class="btn btn-secondary" href="/managesubproject" target="_self">แก้ไขโครงการย่อย</a>'
        }
    };
    // var printDelIcon = function(cell, formatterParams, onRendered){ //plain text value
    //     cell, formatterParams, onRendered;
    //     return '<a class="btn btn-secondary" target="_self">ลบ</a>'
    // };
    //instantiate Tabulator when element is mounted
    var table = new Tabulator('#table', {
      data: this.tableData, //link data to table
      movableRows:true,
      dataTree:true,
      dataTreeStartExpanded:true,
      dataTreeChildIndent : 20, //indent child rows
      addRowPos:"bottom",
      layout:"fitDataStretch",

      columns: [
        
        {title:"ชื่อโครงการหลัก", field:"name", width:200, hozAlign:"left", formatter:"textarea", frozen:true, responsive:0, },
        
        {title:"ผู้รับผิดชอบ", field:"owner", width:140, hozAlign:"left",},
        {title:"ค่าเป้าหมาย", field:"target_value", width:140, hozAlign:"left",}, //define table columns
        {title:"งบประมาณตามแผน", field:"budget", width:140, hozAlign:"right", formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"โอนเข้า", field:"income", width:140, hozAlign:"right", formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"โอนออก", field:"outcome", width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"คงเหลือตามแผน", field:"total_amount", width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"ขออนุมัติใช้", field:"approve_use", width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"เบิกจ่าย", field:"disburse", width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"คงเหลือตามหลักการ", field:"total_from_priciple", width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"คงเหลือจากเบิกจ่ายจริง", field:"total_from_disburse", width:160, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"ผลการดำเนินงาน", field:"performance_result", width:160, hozAlign:"left",}, //define table columns
        {title:"ปัญหาและอุปสรรค", field:"problem", width:160, hozAlign:"left",}, //define table columns
        {title:"รายละเอียดผลการดำเนินงาน", field:"detail_result", width:160, hozAlign:"left",}, //define table columns
        {title:"หมายเหตุ", field:"annotation", width:160, hozAlign:"left",}, //define table columns
        {title:"สถานะโครงการ", field:"status", editor:"select", editorParams:{values:{"ยังไม่ได้ดำเนินการ":"ยังไม่ได้ดำเนินการ", "กำลังดำเนินการ":"กำลังดำเนินการ", "ดำเนินการเสร็จแล้ว":"ดำเนินการเสร็จแล้ว" }, hozAlign:"left",},  width:160},  
        {formatter:printSPIcon, hozAlign:"left",headerSort:false, width:160, },
        ], //define table columns
    });
    
      
      // search name
      var valueEl = document.getElementById("search");
      valueEl.addEventListener("keyup", function(){
        table.setFilter('name','like', valueEl.value);       
      })

      // //add row
      //  document.getElementById("add-project").addEventListener("click", function(){
      //   table.addRow({});
      // });

  },
  //template: '<div ref="table"></div>', //create table holder element
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
    //Add row on "Add Row" button click
    // addRow() {
    //   this.tabulator.addRow({});
    // },

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
  .left {
    float: left;
  }
  .right {
    float: right;
  }


</style>

