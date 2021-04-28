<template>
  <div id="managesubproject">
    <h1 class="ml-2">จัดการโครงการย่อย</h1>
    <div>
      <div class="header mt-4">
        <div class="pb-xlg h-100">
           <div class=" ml-sm-2 d-flex">
              <h2>{{mainprojectData.MP_Name}}</h2>
              
            </div>
        </div>
        <div>
          <b-button class="ml-sm-2 border" variant="white" v-b-toggle.collapseInfoSP>ข้อมูลโครงการหลัก <font-awesome-icon :icon="['fas', 'caret-down']"/></b-button>
          <b-collapse id="collapseInfoSP" class="mt-2">
          <b-card>
            <div id="collapseInfoSP"> 
            <b-container fluid>
              <b-row>
                <b-col cols="6" class="ml-auto">
                    <div class="d-flex flex-wrap justify-content-between">
                        <div>
                          <div class="d-flex flex-row mb-1">
                            <p class="mb-0"><small><strong>ประเด็นยุทธศาสตร์ :</strong></small></p>
                            <span class="mb-0 ml-3">{{mainprojectData.Strategic_Issue_ID}}</span>
                          </div>
                          <div class="d-flex flex-row mb-1">
                            <p class="mb-0"><small><strong>ยุทธศาสตร์ :</strong></small></p>
                            <span class="mb-0 ml-3">{{mainprojectData.Strategic_ID}}</span>
                          </div>
                          <div class="d-flex flex-row mb-1">
                            <p class="mb-0"><small><strong>กลยุทธ์ :</strong></small></p>
                            <span class="mb-0 ml-3">{{mainprojectData.Strategy_ID}}</span>
                          </div>
                          <div class="d-flex flex-row mb-1">
                            <p class="mb-0"><small><strong>ผู้รับผิดชอบ :</strong></small></p>
                            <span class="mb-0 ml-3">{{mainprojectData.MP_Owner}}</span>
                          </div>
                          <div class="d-flex flex-row mb-1">
                            <p class="mb-0"><small><strong>ตัวชี้วัด :</strong></small></p>
                            <span class="mb-0 ml-3">{{mainprojectData.MP_Indicator}}</span>
                          </div>
                          <div class="d-flex flex-row mb-3">
                            <p class="mb-0"><small><strong>ค่าเป้าหมาย :</strong></small></p>
                            <span class="mb-0 ml-3">{{mainprojectData.MP_Target_Value}}</span>
                          </div>
                        </div>
                    </div>
                </b-col>
                <b-col cols="6" class="mr-auto">
                    <div class="d-flex flex-wrap justify-content-between">
                      <div>
                        <div class="d-flex flex-row mb-1">
                            <p class="mb-0"><small><strong>ผลการดำเนินงาน :</strong></small></p>
                            <span class="mb-0 ml-3">{{mainprojectData.Performance_Result}}</span>
                          </div>
                          <div class="d-flex flex-row mb-1">
                            <p class="mb-0"><small><strong>ปัญหาและอุปสรรค :</strong></small></p>
                            <span class="mb-0 ml-3">{{mainprojectData.Problem}}</span>
                          </div>
                          <div class="d-flex flex-row mb-1">
                            <p class="mb-0"><small><strong>รายละเอียดผลการดำเนินงาน :</strong></small></p>
                            <span class="mb-0 ml-3">{{mainprojectData.Detail_Result}}</span>
                          </div>
                          <div class="d-flex flex-row">
                            <p class="mb-0"><small><strong>หมายเหตุ :</strong></small></p>
                            <span class="mb-0 ml-3">{{mainprojectData.Annotation}}</span>
                          </div>
                      </div>
                    </div>
                </b-col>
              </b-row>
              
             <b-row class="mt-1 d-flex justify-content-betweet">
                    <!-- <div class="d-flex flex-wrap"> -->
                    <b-col class="p-2 mr-2 mb-1 border border-dark shadow p-3 bg-white rounded" id="border">
                      
                          <p><small><strong>งบประมาณตามแผน</strong></small></p>
                          <h5 class="text-center">{{mainprojectData.MP_Budget}}</h5>
                          <input type="hidden" id='budget' :value="mainprojectData.MP_Budget">
                          <p class="text-muted float-right"><small>บาท</small></p>
              
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark shadow p-3 bg-white rounded" id="border">
                          <p><small><strong>โอนเข้า</strong></small></p>
                          <h5 class="text-center">{{mainprojectData.MP_Income}}</h5>
                          <p class="text-muted float-right"><small>บาท</small></p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark shadow p-3 bg-white rounded" id="border">
                          <p><small><strong>โอนออก</strong></small></p>
                          <h5 class="text-center">{{mainprojectData.MP_Outcome}}</h5>
                          <p class="text-muted float-right"><small>บาท</small></p>
                    </b-col>
                    <b-col class="p-2 mb-1 border border-dark shadow p-3 bg-white rounded" id="border">
                          <p><small><strong>คงเหลือตามแผน</strong></small></p>
                          <h5 class="text-center">{{mainprojectData.MP_Total_Amount}}</h5>
                          <p class="text-muted float-right"><small>บาท</small></p>
                    </b-col>
                    <!-- </div> -->
                </b-row>
             <b-row class="d-flex justify-content-betweet" >
                    <!-- <div class="d-flex flex-wrap"> -->
                    <b-col class="p-2 mr-2 mb-1 border border-dark shadow p-3 bg-white rounded" id="border">
                          <p><small><strong>ขออนุมัติใช้</strong></small></p>
                          <h5 class="text-center">{{mainprojectData.MP_Approve_Use}}</h5>
                          <p class="text-muted float-right"><small>บาท</small></p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark shadow p-3 bg-white rounded" id="border">
                            <p><small><strong>เบิกจ่าย</strong></small></p>
                            <h5 class="text-center ">{{mainprojectData.MP_Disburse}}</h5>
                            <p class="text-muted float-right"><small>บาท</small></p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark shadow p-3 bg-white rounded" id="border">
                            <p><small><strong>คงเหลือตามหลักการ</strong></small></p>
                            <h5 class="text-center">{{mainprojectData.MP_Total_From_Priciple}}</h5>
                            <p class="text-muted float-right"><small>บาท</small></p>
                    </b-col>
                    <b-col class="p-2 mb-1 border border-dark shadow p-3 bg-white rounded" id="border">
                            <p><small><strong>คงเหลือจากเบิกจ่ายจริง</strong></small></p>
                            <h5 class="text-center">{{mainprojectData.MP_Total_From_Disburse}}</h5>
                            <p class="text-muted float-right"><small>บาท</small></p>
                    </b-col>
                    <!-- </div> -->
                </b-row>
              </b-container>
            </div>  
          </b-card>
          </b-collapse>
        </div>
      </div>
      <b-nav class="mt-3">
        <b-navbar-nav class="mb-2 mr-sm-2 mb-sm-0 mr-auto">
          <b-nav-form>
            <b-input-group>
                <b-button class="mb-2 ml-sm-2 mb-sm-0" style="font-size: 14px" id='history-undo' v-b-tooltip.hover title="เลิกทำ">
                  <font-awesome-icon :icon="['fas', 'undo']"/></b-button>
                <b-button class="mb-2 ml-sm-2 mb-sm-0" style="font-size: 14px" id='history-redo' v-b-tooltip.hover title="ทำซ้ำ">
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
                          <b-button id="add-project" class="mb-2 ml-sm-2 mb-sm-0" variant="primary"><font-awesome-icon :icon="['fas', 'plus-circle']"/> เพิ่มโครงการย่อย</b-button>      
                          <b-button class="mb-2 ml-sm-2 mb-sm-0" v-if="this.user.permission == 'สาขาวิชา' " to="/transfer" variant="primary">โอนเงินเข้า-ออก</b-button>
                          <b-button class="mb-2 ml-sm-2 mb-sm-0" v-if="this.user.permission == 'ส่วนกลาง' " to="/transfercenter" variant="primary">โอนเงินเข้า-ออก</b-button>
                      </b-input-group>
                  </b-nav-form>        
          </b-navbar-nav>
        </b-nav>
      </div>
    </div>
    <div id="table" class="sty-table shadow bg-white rounded"></div>
  </div>

</template>

<script>
import Tabulator from 'tabulator-tables'; 
import SubprojectDataService from "../services/subproject.dataservice";
import MainprojectDataservice from "../services/mainproject.dataservice.js"
import HistoryDataservice from "../services/history.dataservice"

var table;
var listEditSP = [];
var listAddSP = [];
var listHistory = [];

export default {
  name: "ManageSubProject",
  data() {
      return {
        // user: this.$store.state.user,
        tableData: [], //data for table to display
        mainprojectData: [],
        user: this.$store.state.user,
      }
  },

  mounted(){
    //retrieve Main Project
    this.getSubProject(this.$route.params.id);

    //Delete button
    var printDelIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        return '<a class="btn btn-secondary" target="_self">ลบ</a>'
    };

    var Total_Amount = function(value, data){
      //value - original value of the cell
      //data - the data for the row
      return data.SP_Budget + data.SP_Income - data.SP_Outcome; //return the sum of the other two columns.
    }
    var Total_From_Priciple = function(value, data){
      //value - original value of the cell
      //data - the data for the row
      return data.SP_Total_Amount - data.SP_Approve_Use; //return the sum of the other two columns.
    }
    var Total_From_Disburse = function(value, data){
      //value - original value of the cell
      //data - the data for the row
      return data.SP_Total_Amount - data.SP_Disburse; //return the sum of the other two columns.
    }
    
    var checkSP_Budget = function(cell, value){
      // var results = table.getCalcResults().bottom.SP_Budget;
      var budget = document.getElementById("budget").value;
      var totalSP_Budget = parseFloat(table.getCalcResults().bottom.SP_Budget) + value
      // return value <= cell.getRow().getData().MP_Budget
      return totalSP_Budget <= budget
    }
    
    var checkApproveuseAndDisburse = function(cell, value){
      return value <= cell.getRow().getData().SP_Budget
    }

    ///instantiate Tabulator when element is mounted
    table = new Tabulator("#table", {
      rowAdded:function(row){
        //row - row component    
        var data = row.getData();
        listAddSP.push(data)
      },
      rowDeleted:function(row) {
        var data = row.getData();
        var SP_ID = data.SP_ID;
        if (SP_ID != undefined) {
          data.Action = 'del';
          listEditSP.push(data)
        }

        if(listAddSP.length != 0) {      
          for(var i in listAddSP){
            if(listAddSP[i].SP_Name == data.SP_Name) {
              listAddSP.splice(i, 1)
            } 
          }
        }
      },
      cellEdited:function(cell){
        //cell - the cell component for the editable cell
        //get row data
        var data = cell.getRow().getData();
        if (cell.getRow().getData().SP_ID != undefined) {
            data.Action = 'edit';
            listEditSP.push(data)

            //Record history
            var cellValue = cell.getValue(); //new value
            var cellInitialValue = cell.getInitialValue(); //data in database
            var title = cell.getColumn()._column.definition.title; // get column name
            var projectname = data.SP_Name; // get project name
            var message = '';

            if(cellInitialValue == null) {
              cellInitialValue = ''
            }
            if(cellValue == null) {
              cellValue = ''
            }
            message ='แก้ไข ' + projectname + ' : ' + title + ' จาก ' + cellInitialValue + ' เป็น ' + cellValue
            listHistory.push({Message: message, Edited_SP_ID: cell.getRow().getData().SP_ID});
        }
      },
      history: true,
      layout:"fitDataStretch",
      addRowPos: "bottom",
      columns: [
        {title:"ชื่อโครงการ", field:"SP_Name", width:250, editor:"input", hozAlign:"left", formatter:"textarea", frozen:true,},
        {title:"ผู้รับผิดชอบ", field:"SP_Owner", width:140, editor:"input", hozAlign:"left",},
        {title:"ตัวชี้วัด", field:"SP_Indicator",  width:140, editor:"input", hozAlign:"left", },
        {title:"ค่าเป้าหมาย", field:"SP_Target_Value", editor:"input", width:140, hozAlign:"left",}, //define table columns
        {title:"งบประมาณตามแผน", field:"SP_Budget", editor:"number", width:140, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".", thousand:",",}, validator:checkSP_Budget, bottomCalc:"sum", bottomCalcParams:{precision:2,},
          cellEdited: function(cell) {
            //Update คงเหลือตามแผน
            var totalTransfer = cell.getRow().getData().SP_Income - cell.getRow().getData().SP_Outcome
            var Total_Amount = cell.getRow().getData().SP_Budget + totalTransfer
            cell.getRow().getCell("SP_Total_Amount").setValue(Total_Amount);
            //Update คงเหลือตามหลักการ
            var Total_From_Priciple = cell.getRow().getData().SP_Total_Amount - cell.getRow().getData().SP_Approve_Use
            cell.getRow().getCell("SP_Total_From_Priciple").setValue(Total_From_Priciple);
            //Update คงเหลือจากเบิกจ่ายจริง
            var Total_From_Disburse = cell.getRow().getData().SP_Total_Amount - cell.getRow().getData().SP_Disburse
            cell.getRow().getCell("SP_Total_From_Disburse").setValue(Total_From_Disburse);
          } 
        }, //define table columns
        {title:"โอนเข้า", field:"SP_Income", width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"โอนออก", field:"SP_Outcome", width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"คงเหลือตามแผน", field:"SP_Total_Amount", editor:"number",  mutator:Total_Amount, mutatorEdit:Total_Amount, width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"ขออนุมัติใช้", field:"SP_Approve_Use", editor:"number", width:140, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".",thousand:",",}, validator: checkApproveuseAndDisburse, bottomCalc:"sum", bottomCalcParams:{precision:2,},
          cellEdited: function(cell) {
            //Update คงเหลือตามหลักการ
            var Total_From_Priciple = cell.getRow().getData().SP_Total_Amount - cell.getRow().getData().SP_Approve_Use
            cell.getRow().getCell("SP_Total_From_Priciple").setValue(Total_From_Priciple);
          } 
        }, //define table columns
        {title:"เบิกจ่าย", field:"SP_Disburse", editor:"number", width:140, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".",thousand:",",}, validator: checkApproveuseAndDisburse, bottomCalc:"sum", bottomCalcParams:{precision:2,},
          cellEdited: function(cell) {
            //Update คงเหลือจากเบิกจ่ายจริง
            var Total_From_Disburse = cell.getRow().getData().SP_Total_Amount - cell.getRow().getData().SP_Disburse
            cell.getRow().getCell("SP_Total_From_Disburse").setValue(Total_From_Disburse);
          }
        }, //define table columns
        {title:"คงเหลือตามหลักการ", field:"SP_Total_From_Priciple",  mutator:Total_From_Priciple, mutatorEdit:Total_From_Priciple, editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"คงเหลือจากเบิกจ่ายจริง", field:"SP_Total_From_Disburse",  mutator:Total_From_Disburse, mutatorEdit:Total_From_Disburse, editor:"number",  width:160, hozAlign:"right", formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"ผลการดำเนินงาน", field:"Performance_Result", editor:"input", width:160, hozAlign:"left",}, //define table columns
        {title:"ปัญหาและอุปสรรค", field:"Problem", editor:"input", width:160, hozAlign:"left",}, //define table columns
        {title:"รายละเอียดผลการดำเนินงาน", field:"Detail_Result", editor:"input", width:160, hozAlign:"left",}, //define table columns
        {title:"หมายเหตุ", field:"Annotation", editor:"input", width:160, hozAlign:"left",}, //define table columns
        {title:"สถานะโครงการ", field:"SP_Status", editor:"select", editorParams:{values:{"ยังไม่ดำเนินการ":"ยังไม่ดำเนินการ", "กำลังดำเนินการ":"กำลังดำเนินการ", "เสร็จสิ้น":"เสร็จสิ้น" },},  width:160,
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
        {formatter:printDelIcon, hozAlign:"left", cellClick:function(e, cell){
          if(confirm("ต้องการลบ " + cell.getRow().getData().SP_Name + " ใช่หรือไม่?")== true){
            cell.getRow().delete()
          }
          }
        } //cellClick:function(e, cell){alert("Printing row data for: " + cell.getRow().getData().name)}
      ], //define table columns
    });

      // search name
      var valueEl = document.getElementById("search");
      valueEl.addEventListener("keyup", function(){
        table.setFilter('SP_Name','like', valueEl.value);       
      })

      //add row
      document.getElementById("add-project").addEventListener("click", function(){
        table.addRow({SP_Status: 'ยังไม่ดำเนินการ', SP_Approve_Use: 0, SP_Disburse: 0, SP_Total_Amount: 0, SP_Total_From_Priciple: 0, SP_Total_From_Disburse: 0, SP_Income: 0, SP_Outcome: 0, SP_Budget: 0});
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
          warningMassage += invalid[0].getRow().getData().SP_Name + ': ' +invalid[0]._cell.column.definition.title + '\n'
          alert(warningMassage)
        } else {
          if (listAddSP.length != 0) {
            var j;
            for (j in listAddSP) {
              var SP_Name = listAddSP[j].SP_Name
              if(SP_Name == null){
                alert('กรุณาใส่ชื่อโครงการ')
                namenotnull = false;
              } else {
                listAddSP[j].MP_ID = this.$route.params.id
                if(listAddSP[j].SP_Name != undefined){
                  message ='เพิ่ม ' + listAddSP[j].SP_Name;
                  listHistory.push({Message: message});
                }
                this.addNewProject(listAddSP[j])
              }
            }
          }

          if(namenotnull) {
            
            this.checkStatus();
            this.updateMainProject();

            var i;
            for (i in listEditSP) {
              //console.log(listEditSP[i])
              var action = listEditSP[i].Action
              var editSP_ID = listEditSP[i].SP_ID
              var projectname = listEditSP[i].SP_Name; // get project name
              var message = '';
              //console.log(editSP_ID)
              if (action == 'edit') {
                this.updateSubProject(editSP_ID, listEditSP[i])
              }
              else if (action == 'del'){
                //Record history
                message ='ลบ ' + projectname;
                this.deleteSubProject(editSP_ID)
              }
            }

            if (listHistory.length != 0) {
              var k;
              for (k in listHistory) {
                listHistory[k].Edited_User_ID = this.user.userid
                // console.log(listHistory[k])
                this.history(listHistory[k])
              }
            }

            //window.location.reload()
            window.setInterval('window.location.reload()', 2000); 
            listEditSP, listAddSP = [];

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
          listEditSP, listAddSP = [];
          //do something...
        });
    },


    checkStatus(){

      var data = table.getData();
      var numberOfdata = data.length
      var alldoneStatus = false
      var notStartStatus = false
      var numberOfnotStart = 0;
      var numberOfDoneData = 0;

      for(var i in data){
        var status = data[i].SP_Status
        if(status == 'ยังไม่ดำเนินการ'){
          numberOfnotStart += 1;
        } else if(status == 'เสร็จสิ้น'){
          numberOfDoneData += 1;
        }

        if(numberOfDoneData == numberOfdata){
          alldoneStatus = true
        }
        else if(numberOfnotStart == numberOfdata){
          notStartStatus = true
        }
      }

      if(alldoneStatus){
        MainprojectDataservice.update(this.$route.params.id, {MP_Status: 'เสร็จสิ้น'})
      } else if(notStartStatus){
        MainprojectDataservice.update(this.$route.params.id, {MP_Status: 'ยังไม่ดำเนินการ'})
      } else {
        MainprojectDataservice.update(this.$route.params.id, {MP_Status: 'กำลังดำเนินการ'})
      }

      
    },

    //fetch Sub Project data from MP_ID
    getSubProject(MP_ID) {
          MainprojectDataservice.get(MP_ID)
            .then(response => {
              this.mainprojectData = response.data
              this.tableData = response.data.subprojects;
              // for(var i in this.tableData) {
              //   this.tableData[i].MP_Budget = response.data.MP_Budget
              // }
              table.setData(this.tableData);
            })
            .catch(e => {
              console.log(e);
            });
    },

    deleteSubProject(SP_ID) {
      SubprojectDataService.delete(SP_ID)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    },
    
    addNewProject(data) {
        SubprojectDataService.create(data)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    updateSubProject(SP_ID, data) {
      SubprojectDataService.update(SP_ID, data)
      .then(response => {
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
    },

    updateMainProject() {
        var calcValue = table.getCalcResults().bottom
        var MP_ID = this.$route.params.id;
        var MP_Approve_Use = calcValue.SP_Approve_Use

      MainprojectDataservice.update(MP_ID, {
          MP_Approve_Use: MP_Approve_Use, 
          MP_Disburse: calcValue.SP_Disburse, 
          MP_Total_Amount: calcValue.SP_Total_Amount, 
          MP_Total_From_Priciple: calcValue.SP_Total_From_Priciple, 
          MP_Total_From_Disburse: calcValue.SP_Total_From_Disburse
        })
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

  },
};

</script>

<style lang="scss" scoped>
@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

#managesubproject {
  margin: 20px;
}



</style>

