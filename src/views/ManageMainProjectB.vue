<template>
  <div id="manageproject">
    <h1 class="ml-2">จัดการโครงการหลักของสาขา</h1>
    <b-nav class="mt-3">
      <b-navbar-nav class="mt-2 mb-2 mr-sm-2 mb-sm-0 ml-0 mr-auto">
        <b-nav-form>
          <b-input-group>
              <b-button class="mb-2 ml-sm-2 mb-sm-0 mr-1" variant="primary" id='history-undo' v-b-tooltip.hover title="เลิกทำ">
                <font-awesome-icon :icon="['fas', 'undo']"/></b-button>
              <b-button class="mb-2 ml-sm-2 mb-sm-0" variant="primary" id='history-redo' v-b-tooltip.hover title="ทำซ้ำ">
                <font-awesome-icon :icon="['fas', 'redo']"/></b-button> 
          </b-input-group>
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav class="mt-2 mb-2 mr-sm-2 mb-sm-0 ml-auto">
            <b-nav-form>
                <b-input-group>
                  <b-form-input placeholder="ค้นหาชื่อโครงการ" id='search'></b-form-input>
                    <b-input-group-append>
                        <b-button class="mb-2 mr-sm-2 mb-sm-0 mr-1 rounded-right"><font-awesome-icon icon="search" /></b-button>
                    </b-input-group-append>
                        <b-button class="mb-2 mr-sm-2 mb-sm-0 mr-1" variant="success" @click='save'>บันทึก</b-button>
                        <b-button class="mb-2 mr-sm-0 mb-sm-0 " variant="danger" @click='cancel'>ยกเลิก</b-button> 
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
                        <b-button id="add-project" class="mb-2 ml-sm-2 mb-sm-0 mr-1" variant="dark">เพิ่มโครงการหลักของสาขา</b-button>
                        <b-button class="mb-2 ml-sm-2 mb-sm-0" variant="dark" to="/transfer">โอนเงินเข้า-ออก</b-button>
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
import MainprojectDataservice from "../services/mainproject.dataservice.js";
import HistoryDataservice from "../services/history.dataservice"
import DepartmentDataservice from "../services/department.dataservice"

var table;
var listEditMP = [];
var listAddMP = [];
var listHistory= [];
var Department = []

export default {
  name: "ManageMainProjectB",
  data() {
      return {
        user: this.$store.state.user,
        modalShow: false,
        tabulator: null, //variable to hold your table
        tableData: [],
        optionsDepartment: [],
    }
  },
  
    mounted(){  

    this.getDepartmentOptions();
    //retrieve Main Project
    this.retrieveMainProject(this.user.userid, this.user.depart_id);
   
    //Edit Sub-Project button
    var printSPIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        var MP_ID = cell.getRow().getData().MP_ID
        if(cell.getRow().getData().MP_Name != undefined) {
          return '<a class="btn btn-secondary" href="/managesubproject/' + MP_ID + '"' + 'target="_self">แก้ไขโครงการย่อย</a>'
        }
    };

    //Delete button
    var printDelIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        return '<a class="btn btn-secondary" target="_self">ลบ</a>'
    };

    var Total_Amount = function(value, data){
      //value - original value of the cell
      //data - the data for the row
      return data.MP_Budget + data.MP_Income - data.MP_Outcome; //return the sum of the other two columns.
    }
    var Total_From_Priciple = function(value, data){
      //value - original value of the cell
      //data - the data for the row
      return data.MP_Total_Amount - data.MP_Approve_Use; //return the sum of the other two columns.
    }
    var Total_From_Disburse = function(value, data){
      //value - original value of the cell
      //data - the data for the row
      return data.MP_Total_Amount - data.MP_Disburse; //return the sum of the other two columns.
    }

    var checkApproveuseAndDisburse = function(cell, value){
      return value <= cell.getRow().getData().MP_Budget
    }
  

    //instantiate Tabulator when element is mounted
    table = new Tabulator("#table", {
      //data: this.tableData, //link data to table
      rowAdded:function(row){
        //row - row component    
        var data = row.getData();
        listAddMP.push(data)
      },

      rowDeleted:function(row) {
        var data = row.getData();
        var MP_ID = data.MP_ID;
        if (MP_ID != undefined) {
          data.Action = 'del';
          listEditMP.push(data)
        }
        if(listAddMP.length != 0) {      
          for(var i in listAddMP){
            if(listAddMP[i].MP_Name == data.MP_Name) {
              listAddMP.splice(i, 1)
            }
          }
        }
      },

      cellEdited:function(cell){
        //cell - cell component
        //update edited data
        var data = cell.getRow().getData();
        var MP_ID = cell.getRow().getData().MP_ID;
        if (MP_ID != undefined) {
          data.Action = 'edit';
          listEditMP.push(data)
          //Record history
          var cellValue = cell.getValue(); //new value
          var cellInitialValue = cell.getInitialValue(); //data in database
          var title = cell.getColumn()._column.definition.title; // get column name
          var projectname = data.MP_Name; // get project name
          var message = '';

          if(cellInitialValue == null) {
            cellInitialValue = ''
          }
          if(cellValue == null) {
            cellValue = ''
          }
          message ='แก้ไข ' + projectname + ' : ' + title + ' จาก ' + cellInitialValue + ' เป็น ' + cellValue
          listHistory.push({Message: message, Edited_MP_ID: MP_ID});
        }
      },
      
      history: true,
      layout:"fitDataStretch",
      addRowPos: "bottom",
      columns: [
        {title:"ชื่อโครงการ", field:"MP_Name", width:200, editor:"input", hozAlign:"left", formatter:"textarea", frozen:true, responsive:0, },
        {title:"ประเด็นยุทธศาสตร์", field:"Strategic_Issue_ID", width:100, editor:"input", hozAlign:"right", },
        {title:"ยุทธศาสตร์", field:"Strategic_ID", width:100, editor:"input",  hozAlign:"right", },
        {title:"กลยุทธ์", field:"Strategy_ID", width:100, editor:"input",  hozAlign:"right",},
        {title:"ผู้รับผิดชอบ", field:"MP_Owner", width:140, editor:"input", hozAlign:"left",},
        {title:"ตัวชี้วัด", field:"MP_Indicator",  width:140, editor:"input",  hozAlign:"left", },
        {title:"ค่าเป้าหมาย", field:"MP_Target_Value", editor:"input",   width:140, hozAlign:"left",}, //define table columns
        {title:"งบประมาณตามแผน", field:"MP_Budget", editor:"number",  width:140, hozAlign:"right", formatter:"money", formatterParams:{decimal:".", thousand:",",},
          cellEdited: function(cell) {
            //Update คงเหลือตามแผน
            var totalTransfer = cell.getRow().getData().MP_Income - cell.getRow().getData().MP_Outcome
            var Total_Amount = cell.getRow().getData().MP_Budget + totalTransfer
            cell.getRow().getCell("MP_Total_Amount").setValue(Total_Amount);
            //Update คงเหลือตามหลักการ
            var Total_From_Priciple = cell.getRow().getData().MP_Total_Amount - cell.getRow().getData().MP_Approve_Use
            cell.getRow().getCell("MP_Total_From_Priciple").setValue(Total_From_Priciple);
            //Update คงเหลือจากเบิกจ่ายจริง
            var Total_From_Disburse = cell.getRow().getData().MP_Total_Amount - cell.getRow().getData().MP_Disburse
            cell.getRow().getCell("MP_Total_From_Disburse").setValue(Total_From_Disburse);
          }, bottomCalc:"sum", bottomCalcParams:{precision:2,},
        }, //define table columns
        {title:"โอนเข้า", field:"MP_Income", width:140, hozAlign:"right", formatter:"money", formatterParams:{decimal:".",thousand:",",}, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"โอนออก", field:"MP_Outcome", width:140, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".",thousand:",",}, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"คงเหลือตามแผน", field:"MP_Total_Amount", mutator: Total_Amount, width:140, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".",thousand:",",}, mutatorEdit: Total_Amount, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"ขออนุมัติใช้", field:"MP_Approve_Use", width:140, hozAlign:"right", formatter:"money", formatterParams:{decimal:".",thousand:",",}, validator: checkApproveuseAndDisburse,
          // cellEdited: function(cell) {
          //   //Update คงเหลือตามหลักการ
          //   var Total_From_Priciple = cell.getRow().getData().MP_Total_Amount - cell.getRow().getData().MP_Approve_Use
          //   cell.getRow().getCell("MP_Total_From_Priciple").setValue(Total_From_Priciple);
          // }, bottomCalc:"sum", bottomCalcParams:{precision:2,},
        bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"เบิกจ่าย", field:"MP_Disburse", width:140, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".",thousand:",",}, validator: checkApproveuseAndDisburse,
          // cellEdited: function(cell) {
          //   //Update คงเหลือจากเบิกจ่ายจริง
          //   var Total_From_Disburse = cell.getRow().getData().MP_Total_Amount - cell.getRow().getData().MP_Disburse
          //   cell.getRow().getCell("MP_Total_From_Disburse").setValue(Total_From_Disburse);
          // }, bottomCalc:"sum", bottomCalcParams:{precision:2,},
        bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"คงเหลือตามหลักการ", field:"MP_Total_From_Priciple", mutator:Total_From_Priciple, mutatorEdit:Total_From_Priciple, width:140, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".",thousand:",",}, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"คงเหลือจากเบิกจ่ายจริง", field:"MP_Total_From_Disburse", mutator:Total_From_Disburse, mutatorEdit:Total_From_Disburse, width:160, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".",thousand:",",}, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"ผลการดำเนินงาน", field:"Performance_Result", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"ปัญหาและอุปสรรค", field:"Problem", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"รายละเอียดผลการดำเนินงาน", field:"Detail_Result", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"หมายเหตุ", field:"Annotation", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"สาขาวิชา", field:"D_Name", editor:"select", editorParams:this.optionsDepartment,  width:160},
        {formatter:printSPIcon, hozAlign:"left",headerSort:false, },
        {formatter:printDelIcon, hozAlign:"left",headerSort:false, cellClick:function(e, cell){if(confirm("ต้องการลบ " + cell.getRow().getData().MP_Name + " ใช่หรือไม่?")== true){
            cell.getRow().delete()
          }}
          }, //cellClick:function(e, cell){alert("Printing row data for: " + cell.getRow().getData().name)}
        ], //define table columns
    });   

      // search name
      var valueEl = document.getElementById("search");
      valueEl.addEventListener("keyup", function(){
        table.setFilter('MP_Name','like', valueEl.value);   
      });

      //add row
      document.getElementById("add-project").addEventListener("click", function(){
        table.addRow({MP_Approve_Use: 0, MP_Disburse: 0, MP_Total_Amount: 0, MP_Total_From_Priciple: 0, MP_Total_From_Disburse: 0, MP_Income: 0, MP_Outcome: 0, MP_Budget: 0});
      });

      //undo button
      document.getElementById("history-undo").addEventListener("click", function(){
        table.undo();
      });

      //redo button
      document.getElementById("history-redo").addEventListener("click", function(){
        table.redo();
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

        //console.log(listEditMP)
        var i;
        console.log(Department)
        for (i in listEditMP) {
          var action = listEditMP[i].Action
          var editMP_ID = listEditMP[i].MP_ID
          var projectname = listEditMP[i].MP_Name; // get project name
          var message = '';
          var dapart_name = listEditMP[i].D_Name;

          for(i in Department){
              
              if(dapart_name == Department[i].D_Name){
                  listEditMP[i].D_ID = Department[i].D_ID
              }
          }
      
          if (action == 'edit') {
            this.updateProject(editMP_ID, listEditMP[i])
          }
          else if (action == 'del'){
            //Record history
            message ='ลบ ' + projectname;
            listHistory.push({Message: message});
            this.deleteMainProject(editMP_ID)
          }
      }
        
        if (listAddMP.length != 0) {
          var j;
          for (j in listAddMP) {
              console.log(listAddMP)
            var dapart_name2 = listAddMP[j].D_Name;

            for(i in Department){
                
                if(dapart_name2 == Department[i].D_Name){
                    listAddMP[i].D_ID = Department[i].D_ID
                }
            }
            listAddMP[j].MP_Create_User_ID = this.user.userid

            //Record history
            if(listAddMP[j].MP_Name != undefined){
              message ='เพิ่ม ' + listAddMP[j].MP_Name;
              listHistory.push({Message: message});
            }
            //console.log(listAddMP[j])

            this.addNewProject(listAddMP[j])
          }
        }

        if (listHistory.length != 0) {
          var k;
          for (k in listHistory) {
            
            listHistory[k].Edited_User_ID = this.user.userid
            console.log(listHistory[k])
            this.history(listHistory[k])
          }
        }

        //window.location.reload()
        listEditMP, listAddMP, listHistory = [];
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
          listEditMP, listAddMP, listHistory = [];
          //do something...

        });
    },


    //fetch Main Project data
    retrieveMainProject(User_ID, D_ID) {
          MainprojectDataservice.getAll()
            .then(response => {
              //this.tableData = response.data
              for( var i in response.data) {
                if(User_ID == response.data[i].MP_Create_User_ID && D_ID != response.data[i].D_ID){
                    for(var j in Department){
                        // console.log(this.Department)
                        if(response.data[i].D_ID == Department[j].D_ID){
                            response.data[i].D_Name = Department[j].D_Name
                            this.tableData.push(response.data[i]);
                        }
                    }
                    
                }
                 
              }
              table.setData(this.tableData);
              console.log(this.tableData);
            })
            .catch(e => {
              console.log(e);
            });
    },

    deleteMainProject(listDelMP) {
      MainprojectDataservice.delete(listDelMP)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    },
    

    addNewProject(data) {
        MainprojectDataservice.create(data)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    updateProject(MP_ID, data) {
      MainprojectDataservice.update(MP_ID, data)
      .then(response => {
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
    },

    history(data) {
      HistoryDataservice.create(data)
      .then(response => {
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
    },

    getDepartmentOptions() {
      DepartmentDataservice.getAll()
      .then(response => {
        for(var i in response.data){
          if(response.data[i].D_Name.includes('สาขา')) {
            this.optionsDepartment.push({value: response.data[i].D_Name, label: response.data[i].D_Name})
            Department.push({D_ID: response.data[i].D_ID, D_Name: response.data[i].D_Name})
          }
        }
      })
    }

  },

};

</script>

<style lang="scss" scope>
@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

#manageproject {
  margin: 20px;
}

</style>

