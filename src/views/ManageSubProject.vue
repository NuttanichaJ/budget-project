<template>
  <div id="managesubproject">
    <h1>จัดการโครงการ</h1>
    <div>
      <div class="header">
        <div class="pb-xlg h-100">
           <div class="d-flex justify-content-between align-items-center mb-lg">
              <h3>{{mainprojectData.MP_Name}}</h3>
              <i class="la la-arrow-right text-primary la-lg rotate-315"/>
            </div>
        </div>
        <div>
          <!-- <b-button v-b-toggle.collapse-1>ข้อมูลโครงการ</b-button> -->
          <b-card>
            <div id="collapseInfoSP">
              <b-row>
                <b-col lg="6" sm="10" xs="12" class="ml-2">
                    <h5>ข้อมูลโครงการ</h5>
                    <div class="d-flex flex-wrap justify-content-between">
                        <div class="mt">
                          <p class="text-muted mb-0 mr"><small>ประเด็นยุทธศาสตร์ : {{mainprojectData.Strategic_Issue_ID}}</small></p>
                          <p class="text-muted mb-0 mr"><small>ยุทธศาสตร์ : {{mainprojectData.Strategic_ID}}</small></p>
                          <p class="text-muted mb-0 mr"><small>กลยุทธ์ : {{mainprojectData.Strategy_ID}}</small></p>
                          <p class="text-muted mb-0 mr"><small>ผู้รับผิดชอบ : {{mainprojectData.MP_Owner}}</small></p>
                          <p class="text-muted mb-0 mr"><small>ตัวชี้วัด : {{mainprojectData.MP_Indicator}}</small></p>
                          <p class="text-muted mb-0 mr"><small>ค่าเป้าหมาย : {{mainprojectData.MP_Target_Value}}</small></p>
                        </div>
                        <div class="mt">
                          <p class="text-muted mb-0 mr"><small>ผลการดำเนินงาน : {{mainprojectData.Performance_Result}}</small></p>
                          <p class="text-muted mb-0 mr"><small>ปัญหาและอุปสรรค : {{mainprojectData.Problem}}</small></p>
                          <p class="text-muted mb-0 mr"><small>รายละเอียดผลการดำเนินงาน : {{mainprojectData.Detail_Result}}</small></p>
                          <p class="text-muted mb-0 mr"><small>หมายเหตุ : {{mainprojectData.Annotation}}</small></p>
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
                          <h5 class="mb-0 text-center">{{mainprojectData.MP_Budget}}</h5>
                          <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                        </div>
                        <div class="mr-2 col-sm-2" id="border">
                          <p class="mb-0"><small>โอนเข้า</small></p>
                          <h5 class="mb-0 text-center">{{mainprojectData.MP_Income}}</h5>
                          <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                        </div>
                        <div class="mr-2 col-sm-2" id="border">
                          <p class="mb-0"><small>โอนออก</small></p>
                          <h5 class="mb-0 text-center">{{mainprojectData.MP_Outcome}}</h5>
                          <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                        </div>
                        <div class="mr-2 col-sm-2" id="border">
                          <p class="mb-0"><small>คงเหลือตามแผน</small></p>
                          <h5 class="mb-0 text-center">{{mainprojectData.MP_Total_Amount}}</h5>
                          <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                        </div>
                      </div>  
                    </b-col>
                    <b-col class="mr-0" cols="12">
                      <div class="d-flex flex-wrap justify-content-betweet">
                        <div class="mr-2 col-sm-2" id="border">
                          <p class="mb-0"><small>ขออนุมัติใช้</small></p>
                          <h5 class="mb-0 text-center">{{mainprojectData.MP_Approve_Use}}</h5>
                          <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                        </div>
                        <div class="mr-2 col-sm-2" id="border">
                          <p class="mb-0"><small>เบิกจ่าย</small></p>
                          <h5 class="mb-0 text-center">{{mainprojectData.MP_Disburse}}</h5>
                          <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                        </div>
                        <div class="mr-2 col-sm-2" id="border">
                          <p class="mb-0"><small>คงเหลือตามหลักการ</small></p>
                          <h5 class="mb-0 text-center">{{mainprojectData.MP_Total_From_Priciple}}</h5>
                          <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                        </div>
                        <div class="mr-2 col-sm-2" id="border">
                          <p class="mb-0"><small>คงเหลือจากเบิกจ่ายจริง</small></p>
                          <h5 class="mb-0 text-center">{{mainprojectData.MP_Total_From_Disburse}}</h5>
                          <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                        </div>
                      </div>  
                    </b-col>
                  </b-row>
              </b-container>
            </div>  
          </b-card>
        </div>
      </div>
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
                          <b-button id="add-project" class="mb-2 ml-sm-2 mb-sm-0">เพิ่มโครงการย่อย</b-button>      
                          <b-button class="mb-2 ml-sm-2 mb-sm-0" to="/transfer">โอนเงินเข้า-ออก</b-button>
                      </b-input-group>
                  </b-nav-form>        
          </b-navbar-nav>
        </b-nav>
      </div>
    </div>
    <div id="table" class="sty-table"></div>
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

    var editCheck = function(cell){
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
      return listEditSP
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
      history: true,
      layout:"fitDataStretch",
      addRowPos: "bottom",
      columns: [
        {title:"ชื่อโครงการ", field:"SP_Name", width:140, editor:"input", editable:editCheck, hozAlign:"left", formatter:"textarea", frozen:true,},
        {title:"ผู้รับผิดชอบ", field:"SP_Owner", width:140, editor:"input", editable:editCheck, hozAlign:"left",},
        {title:"ตัวชี้วัด", field:"SP_Indicator",  width:140, editor:"input", editable:editCheck, hozAlign:"left", },
        {title:"ค่าเป้าหมาย", field:"SP_Target_Value", editor:"input",  editable:editCheck, width:140, hozAlign:"left",}, //define table columns
        {title:"งบประมาณตามแผน", field:"SP_Budget", editor:"number",  editable:editCheck, width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"โอนเข้า", field:"SP_Income", width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"โอนออก", field:"SP_Outcome", width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"คงเหลือตามแผน", field:"SP_Total_Amount", editor:"number",  editable:editCheck, width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"ขออนุมัติใช้", field:"SP_Approve_Use", editor:"number",  editable:editCheck, width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"เบิกจ่าย", field:"SP_Disburse", editor:"number",  editable:editCheck, width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"คงเหลือตามหลักการ", field:"SP_Total_From_Priciple", editable:editCheck, editor:"number",  width:140, hozAlign:"right",  formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"คงเหลือจากเบิกจ่ายจริง", field:"SP_Total_From_Disburse", editable:editCheck, editor:"number",  width:160, hozAlign:"right", formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }}, //define table columns
        {title:"ผลการดำเนินงาน", field:"Performance_Result", editor:"input",  editable:editCheck, width:160, hozAlign:"left",}, //define table columns
        {title:"ปัญหาและอุปสรรค", field:"Problem", editor:"input",  editable:editCheck, width:160, hozAlign:"left",}, //define table columns
        {title:"รายละเอียดผลการดำเนินงาน", field:"Detail_Result", editor:"input",  editable:editCheck, width:160, hozAlign:"left",}, //define table columns
        {title:"หมายเหตุ", field:"Annotation", editor:"input",  editable:editCheck, width:160, hozAlign:"left",}, //define table columns
        {title:"สถานะโครงการ", field:"status", editor:"select", editorParams:{values:{"ยังไม่ได้ดำเนินการ":"ยังไม่ได้ดำเนินการ", "กำลังดำเนินการ":"กำลังดำเนินการ", "ดำเนินการเสร็จแล้ว":"ดำเนินการเสร็จแล้ว", }, hozAlign:"left"},  width:160}, 
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
        table.addRow({});
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
        
        var i;
        for (i in listEditSP) {
          var action = listEditSP[i].Action
          var editSP_ID = listEditSP[i].SP_ID
          var projectname = listEditSP[i].SP_Name; // get project name
          var message = '';
          console.log(editSP_ID)
          if (action == 'edit') {
            this.updateProject(editSP_ID, listEditSP[i])
          }
          else if (action == 'del'){
            //Record history
            message ='ลบ ' + projectname;
            this.deleteSubProject(editSP_ID)
            
          }
        }
        
        if (listAddSP.length != 0) {
          var j;
          for (j in listAddSP) {
              listAddSP[j].MP_ID = this.$route.params.id

              if(listAddSP[j].SP_Name != undefined){
                message ='เพิ่ม ' + listAddSP[j].SP_Name;
                listHistory.push({Message: message});
              }
              this.addNewProject(listAddSP[j])

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
        
        // window.location.reload()
        listEditSP, listAddSP = [];
        
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

    //fetch Sub Project data from MP_ID
    getSubProject(MP_ID) {
          MainprojectDataservice.get(MP_ID)
            .then(response => {
              this.mainprojectData = response.data
              this.tableData = response.data.subprojects;
              table.setData(this.tableData);
              console.log(this.tableData);
            })
            .catch(e => {
              console.log(e);
            });
    },

    deleteSubProject(listDelSP) {
      SubprojectDataService.delete(listDelSP)
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

    updateProject(SP_ID, data) {
      SubprojectDataService.update(SP_ID, data)
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

