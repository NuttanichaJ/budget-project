<template>
  <div id="manageproject">
    <h3 class="ml-2">จัดการโครงการหลักของสาขา</h3>
    <b-nav class="mt-3">
      <b-navbar-nav class="mt-2 mb-2 mr-sm-2 mb-sm-0 ml-0 mr-auto">
        <b-nav-form>
          <b-input-group>
              <b-button class="mb-2 ml-sm-2 mb-sm-0 mr-1" style="font-size: 14px" id='history-undo' v-b-tooltip.hover title="เลิกทำ">
                <font-awesome-icon :icon="['fas', 'undo']"/></b-button>
              <b-button class="mb-2 ml-sm-2 mb-sm-0" style="font-size: 14px" id='history-redo' v-b-tooltip.hover title="ทำซ้ำ">
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
                        <b-button id="add-project" class="mb-2 ml-sm-2 mb-sm-0 mr-1" variant="primary"><font-awesome-icon :icon="['fas', 'plus-circle']"/> เพิ่มโครงการหลักของสาขา</b-button>
                    </b-input-group>
                </b-nav-form>        
        </b-navbar-nav>
      </b-nav>
    </div>

    <div id="table" class="sty-table shadow bg-white rounded"></div>
  </div>
      

</template>

<script>
import Tabulator from 'tabulator-tables';
import MainprojectDataservice from "../services/mainproject.dataservice.js";
import HistoryDataservice from "../services/history.dataservice"
import DepartmentDataservice from "../services/department.dataservice"
import StrategicDataservice from "../services/strategic.dataservice"

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
        optionsStategic: [],
        optionsStategicIssue: [],
        optionsStategy: [],
    }
  },
  
    mounted(){  

    this.getOptionsDepartment();
    this.getOptionsStrat_(null);

    //retrieve Main Project
    this.retrieveMainProject(this.user.userid, this.user.depart_id);
  

    //Delete button
    var printDelIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        return '<a class="btn btn-secondary" target="_self">ลบ</a>'
    };


    var checkApproveuseAndDisburse = function(cell, value){
      return value <= cell.getRow().getData().MP_Budget
    }

    var optionsStategicIssue = this.optionsStategicIssue;
    var optionsStategic = this.optionsStategic;
    var optionsStategy = this.optionsStategy;
  
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
        {title:"ประเด็นยุทธศาสตร์", field:"Strategic_Issue_ID", width:100, editor:"select", editorParams:{values: optionsStategicIssue}, hozAlign:"right", },
        {title:"ยุทธศาสตร์", field:"Strategic_ID", width:100, editor:"select", editorParams:{values: optionsStategic}, hozAlign:"right",},
        {title:"กลยุทธ์", field:"Strategy_ID", width:100, editor:"select", editorParams:{values: optionsStategy}, hozAlign:"right",},
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
        {title:"คงเหลือตามแผน", field:"MP_Total_Amount", width:140, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".",thousand:",",}, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
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
        {title:"คงเหลือตามหลักการ", field:"MP_Total_From_Priciple", width:140, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".",thousand:",",}, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"คงเหลือจากเบิกจ่ายจริง", field:"MP_Total_From_Disburse", width:160, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".",thousand:",",}, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"ผลการดำเนินงาน", field:"Performance_Result", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"ปัญหาและอุปสรรค", field:"Problem", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"รายละเอียดผลการดำเนินงาน", field:"Detail_Result", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"หมายเหตุ", field:"Annotation", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        {title:"สาขาวิชา", field:"D_Name", editor:"select", editorParams:{values: this.optionsDepartment},  width:160},
        {title:"สถานะโครงการ", field:"MP_Status", width:160,
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
              return "<button style='color: white; background-color:"+ color +"; display: inline-block; border: none; outline: none; text-align: center; text-decoration: none; padding: .4em .4em .55em; border-radius: .4em;'>" + value + "</button>";
          }
        },
        // {formatter:printSPIcon, hozAlign:"left",headerSort:false, },
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
        table.addRow({MP_Status: 'ยังไม่ดำเนินการ', MP_Approve_Use: 0, MP_Disburse: 0, MP_Total_Amount: 0, MP_Total_From_Priciple: 0, MP_Total_From_Disburse: 0, MP_Income: 0, MP_Outcome: 0, MP_Budget: 0});
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
        var namenotnull = true;
        var invalid = table.getInvalidCells();
        var warningMassage = 'กรุณาตรวจสอบข้อมูลอีกครั้ง\n'
        if(invalid.length != 0){
          warningMassage += invalid[0].getRow().getData().MP_Name + ': ' +invalid[0]._cell.column.definition.title + '\n'
          alert(warningMassage)
        } else {

          //console.log(listEditMP)
          if (listAddMP.length != 0) {
            var j;
            for (j in listAddMP) {
              var MP_Name = listAddMP[j].MP_Name
              if(MP_Name == null){
                alert('กรุณาใส่ชื่อโครงการ')
                namenotnull = false
              } else {
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
          }

          if(namenotnull) {
            var i;
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
                console.log(listEditMP[i])
                this.updateProject(editMP_ID, listEditMP[i])
              }
              else if (action == 'del'){
                //Record history
                message ='ลบ ' + projectname;
                listHistory.push({Message: message});
                this.deleteMainProject(editMP_ID)
              }
            }
            if (listHistory.length != 0) {
              var k;
              for (k in listHistory) {
                
                listHistory[k].Edited_User_ID = this.user.userid
                this.history(listHistory[k])
              }
            }

            window.location.reload()
            listEditMP, listAddMP, listHistory = [];
          }

        }
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
              for(var i in response.data) {
                if(User_ID == response.data[i].MP_Create_User_ID) {
                  if(response.data[i].D_ID === null || D_ID != response.data[i].D_ID){
                    for(var j in Department){
                        // console.log(this.Department)
                        if(response.data[i].D_ID == Department[j].D_ID){
                            response.data[i].D_Name = Department[j].D_Name
                        }
                        this.tableData[i] = response.data[i];
                    }
                  }
                    
                    
                }
                 
              }
              table.setData(this.tableData);
              //console.log(this.tableData);
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

    getOptionsDepartment() {
      DepartmentDataservice.getAll()
      .then(response => {
        for(var i in response.data){
          if(response.data[i].D_Name.includes('สาขา')) {
            this.optionsDepartment.push(response.data[i].D_Name)
            Department.push({D_ID: response.data[i].D_ID, D_Name: response.data[i].D_Name})
          }
        }
      })
    },

    getOptionsStrat_() {
      StrategicDataservice.getAll()
      .then(response => {
        response.data
        var i;
          for(i in response.data){
            this.optionsStategic[response.data[i].Strategic_ID - 1] = response.data[i].Strategic_ID
            this.optionsStategicIssue[response.data[i].strategicissue.Strategic_Issue_ID - 1] = response.data[i].strategicissue.Strategic_Issue_ID
            for(var k in response.data[i].strategies){
              this.optionsStategy[response.data[i].strategies[k].Strategy_ID - 1] = response.data[i].strategies[k].Strategy_ID
            }
          }
      })
    },

  },

};

</script>

<style lang="scss" scope>
@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

#manageproject {
  margin: 20px;
}

</style>

