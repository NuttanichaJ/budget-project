<template>
  <div id="manageproject">
    <h1 class="ml-2">จัดการโครงการ</h1>
    <b-nav class="mt-3">
      <b-navbar-nav class="mb-2 mr-sm-2 mb-sm-0 mr-auto">
        <b-nav-form>
          <b-input-group>
              <b-button class="mb-2 ml-sm-2 mb-sm-0" id='history-undo' v-b-tooltip.hover title="เลิกทำ">
                <font-awesome-icon :icon="['fas', 'undo']"/></b-button>
              <b-button class="mb-2 ml-sm-2 mb-sm-0" id='history-redo' v-b-tooltip.hover title="ทำซ้ำ">
                <font-awesome-icon :icon="['fas', 'redo']"/></b-button> 
          </b-input-group>
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav class="mb-2 mr-sm-2 mb-sm-0 ml-auto">
            <b-nav-form>
                <b-input-group>
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
       <b-nav class="mt-3 mb-3">
        <b-navbar-nav class="mb-2 mr-sm-0 mb-sm-0 mr-auto">
                <b-nav-form>
                  <!-- @click='addRow' -->
                    <b-input-group>
                        <b-button id="add-project" class="mb-2 ml-sm-2 mb-sm-0">เพิ่มโครงการหลัก</b-button>      
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
import MainprojectDataSevice from "../services/mainproject.datasevice.js";
import SubprojectDataSevice from "../services/subproject.datasevice"

var table;
var listEditMP = [];
var undoDatas = [];

export default {

  name: "ManageProject",
  data() {
      return {
        modalShow: false,
        tabulator: null, //variable to hold your table
        tableData: [],
        childrenTableData: [],
        // tableData: [
        //   {name: 'โครงการหลักA',strategic_issue: "2",strategic: "1",strategy: "1",
        //     owner: "CoE",
        //     indicator: "ร้อยละจำนวน..",
        //     target_value: "ร้อยละ 80",
        //     budget: "0",
        //     income: "0",
        //     outcome: "0",
        //     total_amount: "0",
        //     approve_use: "0",
        //     disburse: "0",
        //     total_from_priciple: "0",
        //     total_from_disburse: "0",
        //     status: "ยังไม่ได้ดำเนินการ", 
        //   },
        //   {name: 'โครงการหลักB',strategic_issue: "1",strategic: "3",strategy: "1",
        //     owner: "CoE",
        //     indicator: "ร้อยละจำนวน..",
        //     target_value: "ร้อยละ 80",
        //     budget: "0",
        //     income: "0",
        //     outcome: "0",
        //     total_amount: "0",
        //     approve_use: "0",
        //     disburse: "0",
        //     total_from_priciple: "0",
        //     total_from_disburse: "0",
        //     status: "ยังไม่ได้ดำเนินการ",
        //     childRows:[
        //         {names:"โครงการย่อยB1", owner: "CoE",
        //           indicator: "ร้อยละจำนวน..",
        //           target_value: "ร้อยละ 80",
        //           budget: "0",
        //           income: "0",
        //           outcome: "0",
        //           total_amount: "0",
        //           approve_use: "0",
        //           disburse: "0",
        //           total_from_priciple: "0",
        //           total_from_disburse: "0",
        //           status: "ยังไม่ได้ดำเนินการ",
        //         },
        //         {names:"โครงการย่อยB2", owner: "CoE",
        //           indicator: "ร้อยละจำนวน..",
        //           target_value: "ร้อยละ 80",
        //           budget: "0",
        //           income: "0",
        //           outcome: "0",
        //           total_amount: "0",
        //           approve_use: "0",
        //           disburse: "0",
        //           total_from_priciple: "0",
        //           total_from_disburse: "0",
        //           status: "ยังไม่ได้ดำเนินการ",}],
        //     },
        //     {name: 'โครงการหลักC',strategic_issue: "4",strategic: "1",strategy: "2",
        //     owner: "CoE",
        //     indicator: "ร้อยละจำนวน..",
        //     target_value: "ร้อยละ 80",
        //     budget: "0",
        //     income: "0",
        //     outcome: "0",
        //     total_amount: "0",
        //     approve_use: "0",
        //     disburse: "0",
        //     total_from_priciple: "0",
        //     total_from_disburse: "0",
        //     status: "ยังไม่ได้ดำเนินการ",
        //     },  
        // ]
        }
  },
  watch:{
    //
  },

  mounted(){
    //retrieve Main Project
    this.retrieveMainProject();

    //Delete button
    var printDelIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        return '<a class="btn btn-secondary" target="_self">ลบ</a>'
    };

    var editCheck = function(cell){
      //cell - the cell component for the editable cell
      //get row data
      var data = cell.getRow().getData();
      //console.log(data)

        if (cell.getRow().getData().MP_ID == undefined) {
            data.Action = 'add';
            listEditMP.push(data)
        } else {
            data.Action = 'edit';
            listEditMP.push(data)
      }
      return listEditMP
    }
    //instantiate Tabulator when element is mounted
    table = new Tabulator('#table', {
      //data: this.tableData,
      dataTree: true,
      dataTreeStartExpanded: true,
      dataTreeChildField:"childRows",
      //dataTreeChildIndent: 20, //indent child rows
      addRowPos:"bottom",
      layout:"fitDataStretch",
      history: true,
      //nestedFieldSeparator:"|",
      columns: [
        {title:"ชื่อโครงการ", field:"MP_Name", width:200, editor:"input", editable:editCheck, hozAlign:"left", formatter:"textarea", frozen:true, responsive:0, },
        {title:"ประเด็นยุทธศาสตร์", field:"Strategic_Issue_ID", width:100, editor:"input",  editable:editCheck, hozAlign:"right", },
        {title:"ยุทธศาสตร์", field:"Strategic_ID", width:100, editor:"input",  editable:editCheck, hozAlign:"right", },
        {title:"กลยุทธ์", field:"Strategy_ID", width:100, editor:"input",  editable:editCheck, hozAlign:"right",},
        {title:"ผู้รับผิดชอบ", field:"MP_Owner", width:140, editor:"input",  editable:editCheck, hozAlign:"left",},
        {title:"ตัวชี้วัด", field:"MP_Indicator",  width:140, editor:"input",  editable:editCheck, hozAlign:"left", },
        {title:"ค่าเป้าหมาย", field:"MP_Target_Value", editor:"input",   editable:editCheck, width:140, hozAlign:"left",}, //define table columns
        {title:"งบประมาณตามแผน", field:"MP_Budget", editor:"number",   editable:editCheck, width:140, hozAlign:"right", formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"โอนเข้า", field:"MP_Income", editor:"number",   editable:editCheck, width:140, hozAlign:"right", formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"โอนออก", field:"MP_Outcome", editor:"number",   editable:editCheck, width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"คงเหลือตามแผน", field:"MP_Total_Amount", editor:"number",   editable:editCheck, width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"ขออนุมัติใช้", field:"MP_Approve_Use", editor:"number",  editable:editCheck, width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"เบิกจ่าย", field:"MP_Disburse", editor:"number",   editable:editCheck, width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"คงเหลือตามหลักการ", field:"MP_Total_From_Priciple",  editable:editCheck, editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"คงเหลือจากเบิกจ่ายจริง", field:"MP_Total_From_Disburse", editor:"number",  editable:editCheck, width:160, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        // {title:"ผลการดำเนินงาน", field:"performance_result", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        // {title:"ปัญหาและอุปสรรค", field:"problem", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        // {title:"รายละเอียดผลการดำเนินงาน", field:"detail_result", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        // {title:"หมายเหตุ", field:"annotation", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"สถานะโครงการ", field:"status", editor:"select", editorParams:{values:{"ยังไม่ได้ดำเนินการ":"ยังไม่ได้ดำเนินการ", "กำลังดำเนินการ":"กำลังดำเนินการ", "ดำเนินการเสร็จแล้ว":"ดำเนินการเสร็จแล้ว" }, hozAlign:"left",},  width:160},
        {formatter:printDelIcon, hozAlign:"left",headerSort:false, cellClick:function(e, cell){if(confirm("ต้องการลบ " + cell.getRow().getData().MP_NAME + " ใช่หรือไม่?")== true){
          var delMP_ID = cell.getRow().getData().MP_ID
          if (delMP_ID != undefined) {
            listEditMP.push({ 'MP_ID': delMP_ID , 'Action': 'del'})
          } 
          cell.getRow().delete()
          }}
          }, //cellClick:function(e, cell){alert("Printing row data for: " + cell.getRow().getData().name)}
        ], //define table columns
    });
    
      // search name
      var valueEl = document.getElementById("search");
      valueEl.addEventListener("keyup", function(){
        table.setFilter('MP_NAME','like', valueEl.value);       
      })

      //add row
      document.getElementById("add-project").addEventListener("click", function(){
        table.addRow({});
      });

      //undo button
      document.getElementById("history-undo").addEventListener("click", function(){
        var status = table.undo();
        if(status) {
          var undoData = listEditMP.pop();
          undoDatas.push(undoData)
          console.log(listEditMP)
        }
      });

      //redo button
      document.getElementById("history-redo").addEventListener("click", function(){
        var status = table.redo();
        if(status) {
          var redoData = undoDatas.pop();
          listEditMP.push(redoData)
          console.log(listEditMP)
        }
      });

  },
  template: '<div id="table" class="sty-table"></div>', //create table holder element

  methods: {
    save() {
     this.$confirm(
      "คุณต้องการบันทึกใช่หรือไม่?",
      " ",
      "question"
      ).then(() => {
        console.log(listEditMP)
        
        var i;
        for (i in listEditMP) {
          var action = listEditMP[i].Action
          var editMP_ID = listEditMP[i].MP_ID
          if (action == 'edit') {
            this.updateProject(editMP_ID, listEditMP[i])
          }
          else if (action == 'del'){
            this.deleteMainProject(editMP_ID)
          }
          else if (action == 'add'){
            this.addNewProject(listEditMP[i])
          }
        }
        
        window.location.reload()
        listEditMP = [];
        
        //do something...
      });
    },

    cancel() {
     this.$confirm(
      "คุณต้องการยกเลิกใช่หรือไม่?",
      " ",
      "error"
      ).then(() => {
          window.location.reload()
          listEditMP = [];
          //do something...
        });
    },

    //fetch Main Project data
    retrieveMainProject() {
        MainprojectDataSevice.getAll()
          .then(response => {
            this.tableData = response.data;
            this.retrieveSubProject();
            console.log(this.tableData)
            table.setData(this.tableData);
            
          })
          .catch(e => {
            console.log(e);
          });
    },

    deleteMainProject(listDelMP) {
      MainprojectDataSevice.delete(listDelMP)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    },
    
    addNewProject(data) {
        MainprojectDataSevice.create(data)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    updateProject(MP_ID, data) {
      MainprojectDataSevice.update(MP_ID, data)
      .then(response => {
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
    },

    //fetch Main Project data
    retrieveSubProject() {
          SubprojectDataSevice.getAll()
            .then(response => {
              this.childrenTableData = response.data;
              this.addSubProjectTableData()
            })
            .catch(e => {
              console.log(e);
            });
    },

    addSubProjectTableData() {
      var i, j;
        for (i in this.tableData) {
          var childrenData = [];
          for (j in this.childrenTableData) {
            if(this.tableData[i].MP_ID == this.childrenTableData[j].MP_ID) {
              childrenData.push(this.childrenTableData[j])
              //console.log(this.tableData[i].MP_ID)
              //console.log(this.childrenTableData[j].MP_ID)
              //console.log(childrenData)
            }
          }

          this.tableData[i].childRows = childrenData;
        }
    }

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

