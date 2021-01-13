<template>
  <div id="managesubproject">
    <h1>จัดการโครงการ</h1>
      <div class="right">
        <b-button class="mb-2 mr-sm-2 mb-sm-0" @click='save'>บันทึก</b-button>
        <b-button class="mb-2 mr-sm-0 mb-sm-0" @click='cancel'>ยกเลิก</b-button>
      </div>
      <div>
      <br><br>
      <div class="header">
        <b-row>
      <b-col lg="8" sm="6" xs="12">
        <div class="pb-xlg h-100">
          <Widget class="h-100 mb-0" title="Visits Today" close>
           <div class="d-flex justify-content-between align-items-center mb-lg">
              <h3>โครงการหลัก 1</h3>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h5>1</h5><p class="text-muted mb-0 mr"><small>ประเด็นยุทธศาสตร์</small></p>
              </div>
              <div class="mt">
                <h5>1</h5><p class="text-muted mb-0"><small>ยุทธศาสตร์</small></p>
              </div>
              <div class="mt">
                <h5>1</h5><p class="text-muted mb-0 mr"><small>กลยุทธ์</small></p>
              </div>
            </div>
          </Widget>
        </div>
      </b-col>
        </b-row>
      </div>
      <br>
      </div>
      <div class="left">
        <b-button class="mb-2 mr-sm-2 mb-sm-0" @click='addrow' id="add-row">เพิ่มโครงการย่อย</b-button>
        <b-button class="mb-2 mr-sm-2 mb-sm-0" to="/transfer">โอนเงินเข้า-ออก</b-button>
      </div>

    <br>
    <div>
  <br><br>
  </div>

    <div ref="table"></div>
  </div>

</template>

<script>
import Tabulator from 'tabulator-tables'; 

export default {
  name: "ManageSubProject",
  data() {
      return {
        tabulator: null, //variable to hold your table
        tableData: [
          {
            name: "โครงการย่อย1",
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
          {
            name: "โครงการย่อย2",
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
          {
            name: "โครงการย่อย3",
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

        ], //data for table to display
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
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.$refs.table, {
      data: this.tableData, //link data to table
      columns: [
        {title:"ชื่อโครงการ", field:"name", width:140, editor:"input", headerFilter:"input", headerFilterPlaceholder:"...", hozAlign:"right",},
        {title:"ผู้รับผิดชอบ", field:"owner", width:140, editor:"input", headerFilter:"input", headerFilterPlaceholder:"...", hozAlign:"right",},
        {title:"ตัวชี้วัด", field:"indicator",  width:140, editor:"input", hozAlign:"right", headerFilter:"input", headerFilterPlaceholder:"..."},
        {title:"ค่าเป้าหมาย", field:"target_value", editor:"input",  width:140, headerFilter:"input", headerFilterPlaceholder:"...", hozAlign:"right",}, //define table columns
        {title:"งบประมาณตามแผน", field:"budget", editor:"input",  width:140, headerFilter:"number", headerFilterPlaceholder:"...", hozAlign:"right",}, //define table columns
        {title:"โอนเข้า", field:"income", editor:"input",  width:140, headerFilter:"number", headerFilterPlaceholder:"...", hozAlign:"right",}, //define table columns
        {title:"โอนออก", field:"outcome", editor:"input",  width:140, headerFilter:"number", headerFilterPlaceholder:"...", hozAlign:"right",}, //define table columns
        {title:"คงเหลือตามแผน", field:"total_amount", editor:"input",  width:140, headerFilter:"number", headerFilterPlaceholder:"...", hozAlign:"right",}, //define table columns
        {title:"ขออนุมัติใช้", field:"approve_use", editor:"input",  width:140, headerFilter:"number", headerFilterPlaceholder:"...", hozAlign:"right",}, //define table columns
        {title:"เบิกจ่าย", field:"disburse", editor:"input",  width:140, headerFilter:"number", headerFilterPlaceholder:"...", hozAlign:"right",}, //define table columns
        {title:"คงเหลือตามหลักการ", field:"total_from_priciple", editor:"input",  width:140, headerFilter:"number", headerFilterPlaceholder:"...", hozAlign:"right",}, //define table columns
        {title:"คงเหลือจากเบิกจ่ายจริง", field:"total_from_disburse", editor:"input",  width:160, headerFilter:"number", headerFilterPlaceholder:"...", hozAlign:"right",}, //define table columns
        {title:"ผลการดำเนินงาน", field:"performance_result", editor:"input",  width:160, headerFilter:"input", headerFilterPlaceholder:"...", hozAlign:"right",}, //define table columns
        {title:"ปัญหาและอุปสรรค", field:"problem", editor:"input",  width:160, headerFilter:"input", headerFilterPlaceholder:"...", hozAlign:"right",}, //define table columns
        {title:"รายละเอียดผลการดำเนินงาน", field:"detail_result", editor:"input",  width:160, headerFilter:"input", headerFilterPlaceholder:"...", hozAlign:"right",}, //define table columns
        {title:"หมายเหตุ", field:"annotation", editor:"input",  width:160, headerFilter:"input", headerFilterPlaceholder:"...", hozAlign:"right",}, //define table columns
        {title:"สถานะโครงการ", field:"status", editor:"select", editorParams:{values:{"ยังไม่ได้ดำเนินการ":"ยังไม่ได้ดำเนินการ", "กำลังดำเนินการ":"กำลังดำเนินการ", "ดำเนินการเสร็จแล้ว":"ดำเนินการเสร็จแล้ว", hozAlign:"right", }},  width:160}, 
        ], //define table columns
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
    //Add row on "Add Row" button click
    addrow() {
      this.tabulator.addRow({});
    },
  },
};

</script>

<style lang="scss">
@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

#managesubproject {
  margin: 20px;
}
  .left {
    float: left;
  }
  .right {
    float: right;
  }

</style>

