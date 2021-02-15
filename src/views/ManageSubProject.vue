<template>
  <div id="managesubproject">
    <h1 class="ml-2">จัดการโครงการ</h1>
    <b-nav class="mt-3" id="menu">
        <b-navbar-nav class="mb-2 mr-sm-2 mb-sm-0 ml-auto">
                <b-nav-form>
                    <b-input-group >
                        <b-form-input id='search' placeholder="ค้นหาชื่อโครงการ"></b-form-input>
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
      <div class="header">
        <div class="pb-xlg h-100">
           <div class="d-flex justify-content-between align-items-center mb-lg">
              <h3>โครงการหลัก 1</h3>
              <i class="la la-arrow-right text-primary la-lg rotate-315"/>
            </div>
            
        </div>
        <div>
  <b-button v-b-toggle.collapse-1>ข้อมูลโครงการ</b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <div id="collapseInfoMP">
          <b-row>
      <b-col lg="6" sm="10" xs="12" class="ml-2">
            <div class="d-flex flex-wrap justify-content-between">
              <div class="mt">
                <p class="text-muted mb-0 mr"><small>ประเด็นยุทธศาสตร์ : 1</small></p>
                <p class="text-muted mb-0 mr"><small>ยุทธศาสตร์ : 1</small></p>
                <p class="text-muted mb-0 mr"><small>กลยุทธ์ : 1</small></p>
                <p class="text-muted mb-0 mr"><small>ผู้รับผิดชอบ : CoE</small></p>
                <p class="text-muted mb-0 mr"><small>ค่าเป้าหมาย : ร้อยละจำนวนของผู้เข้าร่วมโครงการ</small></p>
              </div>
               <div class="mt">
                <p class="text-muted mb-0 mr"><small>ผลการดำเนินงาน : </small></p>
                <p class="text-muted mb-0 mr"><small>ปัญหาและอุปสรรค : </small></p>
                <p class="text-muted mb-0 mr"><small>รายละเอียดผลการดำเนินงาน : </small></p>
                <p class="text-muted mb-0 mr"><small>หมายเหตุ : </small></p>
              </div>
            </div>
      </b-col>
    </b-row>
        <b-container fluid>
          <b-row class="mt-3 mb-2">
            <b-col class="mr-0" cols="12" >
              <div class="d-flex flex-wrap justify-content-betweet">
                <div class="mr-2 col-sm-2" id="border">
                  <p class="mb-0"><small>งบประมาณตามแผน</small></p>
                  <h5 class="mb-0 text-center">2300</h5>
                  <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                </div>
                <div class="mr-2 col-sm-2" id="border">
                  <p class="mb-0"><small>โอนเข้า</small></p>
                  <h5 class="mb-0 text-center">0</h5>
                  <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                </div>
                <div class="mr-2 col-sm-2" id="border">
                  <p class="mb-0"><small>โอนออก</small></p>
                  <h5 class="mb-0 text-center">0</h5>
                  <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                </div>
                <div class="mr-2 col-sm-2" id="border">
                  <p class="mb-0"><small>คงเหลือตามแผน</small></p>
                  <h5 class="mb-0 text-center">2300</h5>
                  <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                </div>
              </div>  
            </b-col>
            <b-col class="mr-0" cols="12">
              <div class="d-flex flex-wrap justify-content-betweet">
                <div class="mr-2 col-sm-2" id="border">
                  <p class="mb-0"><small>ขออนุมัติใช้</small></p>
                  <h5 class="mb-0 text-center">0</h5>
                  <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                </div>
                <div class="mr-2 col-sm-2" id="border">
                  <p class="mb-0"><small>เบิกจ่าย</small></p>
                  <h5 class="mb-0 text-center">0</h5>
                  <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                </div>
                <div class="mr-2 col-sm-2" id="border">
                  <p class="mb-0"><small>คงเหลือตามหลักการ</small></p>
                  <h5 class="mb-0 text-center">2300</h5>
                  <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                </div>
                <div class="mr-2 col-sm-2" id="border">
                  <p class="mb-0"><small>คงเหลือจากเบิกจ่ายจริง</small></p>
                  <h5 class="mb-0 text-center">2300</h5>
                  <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                </div>
              </div>  
            </b-col>
          </b-row>
        </b-container>
        </div>  
    </b-card>
  </b-collapse>
</div>
        
        
    
      </div>
       <b-nav class="mt-3" id="menu">
        <b-navbar-nav class="mb-2 mr-sm-0 mb-sm-0 mr-auto">
                <b-nav-form>
                    <b-input-group >
                        <b-button id="add-subproject" class="mb-2 ml-sm-2 mb-sm-0" >เพิ่มโครงการย่อย</b-button>      
                        <b-button class="mb-2 ml-sm-2 mb-sm-0" to="/transfer">โอนเงินเข้า-ออก</b-button>
                    </b-input-group>
                </b-nav-form>        
        </b-navbar-nav>
    </b-nav>
      </div>
    <div>

  </div>
    <div ref="table" class="sty-table"></div>
  </div>

</template>

<script>
import Tabulator from 'tabulator-tables'; 
import SubProjectDataSevice from "../services/SP.DataSevice";

export default {
  name: "ManageSubProject",
  data() {
      return {
        tabulator: null, //variable to hold your table
        tableData: [], //data for table to display
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
    this.retrieveSubProject();

    var printDelIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        return '<a class="btn btn-secondary" target="_self">ลบ</a>'
    };
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.$refs.table, {
      data: this.tableData, //link data to table
      columns: [
        {title:"ชื่อโครงการ", field:"SP_NAME", width:140, editor:"input", hozAlign:"left", formatter:"textarea", frozen:true},
        {title:"ผู้รับผิดชอบ", field:"SP_OWNER", width:140, editor:"input", hozAlign:"left",},
        {title:"ตัวชี้วัด", field:"SP_INDICATOR",  width:140, editor:"input", hozAlign:"left", },
        {title:"ค่าเป้าหมาย", field:"SP_TARGET_VALUE", editor:"input",  width:140, hozAlign:"left",}, //define table columns
        {title:"งบประมาณตามแผน", field:"SP_BUDGET", editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"โอนเข้า", field:"SP_INCOME", editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"โอนออก", field:"SP_OUTCOME", editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"คงเหลือตามแผน", field:"SP_TOTAL_AMOUNT", editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"ขออนุมัติใช้", field:"SP_APPROVE_USE", editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"เบิกจ่าย", field:"SP_DISBURSE", editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"คงเหลือตามหลักการ", field:"SP_TOTAL_FROM_PRINCIPLE", editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"คงเหลือจากเบิกจ่ายจริง", field:"SP_TOTAL_FROM_DISBURSE", editor:"number",  width:160, hozAlign:"right", formatter:"money", formatterParams:{
    decimal:".",
    thousand:",",
}}, //define table columns
        {title:"ผลการดำเนินงาน", field:"PERFORMANCE_RESULT", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"ปัญหาและอุปสรรค", field:"PROBLEM", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"รายละเอียดผลการดำเนินงาน", field:"DETAIL_RESULT", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"หมายเหตุ", field:"ANNOTATION", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"สถานะโครงการ", field:"status", editor:"select", editorParams:{values:{"ยังไม่ได้ดำเนินการ":"ยังไม่ได้ดำเนินการ", "กำลังดำเนินการ":"กำลังดำเนินการ", "ดำเนินการเสร็จแล้ว":"ดำเนินการเสร็จแล้ว", }, hozAlign:"left"},  width:160}, 
        {formatter:printDelIcon, hozAlign:"left", cellClick:function(e, cell){if(confirm("ต้องการลบ " + cell.getRow().getData().SP_NAME + " ใช่หรือไม่?")== true){
          cell.getRow().delete()}} }, //cellClick:function(e, cell){alert("Printing row data for: " + cell.getRow().getData().name)}
        ], //define table columns
    });

     // search name
      // var valueEl = document.getElementById("search");
      // valueEl.addEventListener("keyup", function(){
      //   table.setFilter('name','like', valueEl.value);        
      // })

      //add row
       document.getElementById("add-subproject").addEventListener("click", function(){
        this.tabulator.addRow({});
      });


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
    retrieveSubProject() {
          SubProjectDataSevice.getAll()
            .then(response => {
              this.tableData = response.data;
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
    },
    //Add row on "Add Row" button click
    // addRow() {
    //   this.tabulator.addRow({});
    // },

    search() {
      var valueEl = document.getElementById("search");
      if(valueEl != '') {
        this.tabulator.setFilter('name','regex', valueEl.value);
      }
    },
    
  },
};

</script>

<style lang="scss">
@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

#managesubproject {
  margin: 20px;
}


</style>

