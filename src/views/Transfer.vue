<template>
  <div class="transfer">
        <h1>บันทึกการโอนเงินเข้า-ออก</h1>
    <div class="top">
      <b-nav class="mt-3">
        <b-navbar-nav class="mt-2 mb-2 mr-sm-2 mb-sm-0 mr-auto">
          <b-nav-form>
            <b-input-group>
                <b-button class="mb-2 ml-sm-2 mb-sm-0 mr-1" variant="primary" id='history-undo' v-b-tooltip.hover title="เลิกทำ">
                  <font-awesome-icon :icon="['fas', 'undo']"/></b-button>
                <b-button class="mb-2 ml-sm-2 mb-sm-0" variant="primary" id='history-redo' v-b-tooltip.hover title="ทำซ้ำ">
                  <font-awesome-icon :icon="['fas', 'redo']"/></b-button>
            </b-input-group>
          </b-nav-form>
        </b-navbar-nav>
        <b-navbar-nav class="mb-2 mr-sm-2 mb-sm-0 ml-auto">
              <b-nav-form>
                  <b-input-group>
                    <!-- <b-form-input placeholder="ค้นหาชื่อโครงการ" id='search'></b-form-input>
                      <b-input-group-append>
                          <b-button class="mb-2 mr-sm-2 mb-sm-0 mr-1 rounded-right"><font-awesome-icon icon="search" /></b-button>
                      </b-input-group-append> -->
                          <b-button class="mb-2 mr-sm-2 mb-sm-0 mr-1" variant="success" @click='save'>บันทึก</b-button>
                          <b-button class="mb-2 mr-sm-0 mb-sm-0" variant="danger" @click='cancel'>ยกเลิก</b-button> 
                      </b-input-group>
                  </b-nav-form>
          </b-navbar-nav>
      </b-nav>
    </div>
    <div class="income"> 
      <b-nav class="mt-3">
        <b-navbar-nav class="mb-2 mr-sm-2 mb-sm-0 mr-auto">
          <b-form inline class="nav-text">
            <label class="mb-2 ml-sm-2 mb-sm-0 mr-4" for="form-custom-select-pref">โอนเงินเข้า</label>
            <b-form-select class="font-18 rounded-2 mb-2 mr-sm-5 mb-sm-0" id="select-ProjectIn" 
              @change="retrieveTransfer()" v-model="selectedProjectIn" :options="optionsProject">
            </b-form-select>
            
            <!-- <label for="text-money">ยอดเงิน<strong class="mx-4 mr-sm-3 money-text">5000</strong>บาท</label> -->
          </b-form>
        </b-navbar-nav>
      </b-nav>
    </div>
     <div>
       <b-nav class="mt-3">
        <b-navbar-nav class="mb-2 mr-sm-0 mb-sm-0 mr-auto">
          <b-nav-form>
            <b-button :disabled='!isDisabled' id="add-subproject" class="mb-2 ml-sm-2 mb-sm-2" variant="dark">เพิ่มการโอน</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-nav>
    </div>

    <!-- tabulator -->
    <div id="table" class="sty-table"></div>
  </div>
</template>

<script>
import Tabulator from 'tabulator-tables'; 
import TransferDataService from '../services/transfer.dataservice'
import MainprojectDataService from '../services/mainproject.dataservice'
import SubprojectDataService from '../services/subproject.dataservice'


var table;
var listEdit = [];
var selectedProjectIn;

export default {
  name: "Transfer",

  data() {
    return {
        selectedProjectIn: '',
        optionsProject: [],
        optionsProjectChild: [],
        tableData: [],
        updateProject: false,
        user: this.$store.state.user,
      }
  },

  computed: {
      isDisabled() {
          return this.selectedProjectIn.length > 0;
      }
  },

  mounted(){
    
    this.getMainAndSubprojectIn()
    
    var optionsProjectOut = []
    var selectEl = document.getElementById("select-ProjectIn");
    var dapartment_id = this.user.depart_id

    selectEl.addEventListener("change", function(){
      this.selectedStatus = true;
      selectedProjectIn = selectEl.options[selectEl.selectedIndex].value.split(":")
      MainprojectDataService.getAll()
            .then(response => {
              
              // optionsProjectOut = []
              // Mainproject
              var i, j;
              var index = 0;
              for (i in response.data) {
                
                if(dapartment_id == response.data[i].D_ID){
                  //Subproject
                  if (selectedProjectIn[1] == 'SP_ID') {
                      //console.log(response.data[i].MP_ID)
                      // console.log(selectedProjectIn)
                      if (selectedProjectIn[0] == response.data[i].MP_ID) {
                        // optionsProjectOut[index] = 'M' + response.data[i].MP_ID + ': ' + response.data[i].MP_Name;
                        // index++;
                        for (j in response.data[i].subprojects) {
                          if (selectedProjectIn[2] != response.data[i].subprojects[j].SP_ID) {
                            //console.log(response.data[i].subprojects[j].SP_ID)
                            optionsProjectOut[index] = 'S' + response.data[i].subprojects[j].SP_ID + ': ' + response.data[i].subprojects[j].SP_Name;
                            index++;
                          }
                        }
                      } 
                  }
                }
                // if (selectedProjectIn[0] == 'MP_ID') {
                //   if(index != optionsProjectOut.length) {
                //       optionsProjectOut.splice(index, optionsProjectOut.length)
                //   }
                //   if (selectedProjectIn[1] != response.data[i].MP_ID) {
                //     //console.log(response.data[i].MP_ID)
                //     optionsProjectOut[index] = 'M' + response.data[i].MP_ID + ': ' +response.data[i].MP_Name;
                //     index++;
                //   }
                //   // for (j in response.data[i].subprojects) {
                //   //   //console.log(response.data[i].subprojects[j].SP_ID)
                //   //   optionsProjectOut[index] = 'S' + response.data[i].subprojects[j].SP_ID + ': ' + response.data[i].subprojects[j].SP_Name;
                //   //   index++;
                //   // }
                // }

              }

            })
            .catch(e => {
              console.log(e);
            });

            TransferDataService.getAll()
                .then(response => {
                  var i;
                  //var index = 0;
                  for (i in response.data) {
                    if(dapartment_id == response.data[i].D_ID){
                      if (selectedProjectIn[1] == 'SP_ID') {
                        if (selectedProjectIn[2] == response.data[i].SP_ID_In) {
                          // if(response.data[i].MPtranfers_Out != null) {
                            
                          //   var index3;
                          //   for (index3 in optionsProjectOut) {
                          //     var getoptionsProjectOut3 = optionsProjectOut[index3].split(': ')
                          //     //console.log(getoptionsProjectOut)
                          //     if(getoptionsProjectOut3[1] == response.data[i].MPtranfers_Out.MP_Name) {
                          //       optionsProjectOut.splice(index3, 1)
                          //       //console.log(response.data[i].MPtranfers_Out.MP_Name)
                          //     }
                          //   }
                          // }
                          if(response.data[i].SPtranfers_Out != null) {
                            var index4;
                            for (index4 in optionsProjectOut) {
                              var getoptionsProjectOut = optionsProjectOut[index4].split(': ')
                              //console.log(getoptionsProjectOut)
                              if(getoptionsProjectOut[1] == response.data[i].SPtranfers_Out.SP_Name) {
                                optionsProjectOut.splice(index4, 1)
                                //console.log(response.data[i].SPtranfers_Out.SP_Name)
                              }
                            }
                          }
                            
                        }
                      }
                    }
                    // if (selectedProjectIn[0] == 'MP_ID') {
                    //   if (selectedProjectIn[1] == response.data[i].MP_ID_In) {
                    //     if(response.data[i].MPtranfers_Out != null) {
                    //       var index1;
                    //       for (index1 in optionsProjectOut) {
                    //         var getoptionsProjectOut1 = optionsProjectOut[index1].split(': ')
                    //         //console.log(getoptionsProjectOut)
                    //         if(getoptionsProjectOut1[1] == response.data[i].MPtranfers_Out.MP_Name) {
                    //           optionsProjectOut.splice(index1, 1)
                    //           //console.log(response.data[i].MPtranfers_Out.MP_Name)
                    //         }
                    //       }
                    //     }
                    //     else if(response.data[i].SPtranfers_Out != null) {
                    //       var index2;
                    //       for (index2 in optionsProjectOut) {
                    //         var getoptionsProjectOut2 = optionsProjectOut[index2].split(': ')
                    //         //console.log(getoptionsProjectOut)
                    //         if(getoptionsProjectOut2[1] == response.data[i].SPtranfers_Out.SP_Name) {
                    //           optionsProjectOut.splice(index2, 1)
                    //           //console.log(response.data[i].SPtranfers_Out.SP_Name)
                    //         }
                    //       }
                    //     }
                    //   }
                    // }
                    
                  }
                  //selectedProjectIn[0] 
                  // response.data
                })

              optionsProjectOut.sort();
              if (selectedProjectIn[0] == 'MP_ID') {
                table.setFilter('MP_ID_In','like', selectedProjectIn[1]); 
              }
              else if (selectedProjectIn[1] == 'SP_ID') {
                table.setFilter('SP_ID_In','like', selectedProjectIn[2]); 
              }
    })

    //this.retrieveTransfer()
    
    var printDelIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        return '<a class="btn btn-secondary" target="_self">ลบ</a>'
    };

    var editCheck = function(cell){
        //cell - the cell component for the editable cell
        //get row data
        var data = cell.getRow().getData();
        
        // console.log(data)
        var Transfer_ID = data.Transfer_ID;
        if (Transfer_ID != undefined) {
          data.Action = 'edit';
          listEdit.push(data)
        }
      return listEdit
    };

    // var validAmount = function(cell, value, parameters){
    //   cell, value, parameters
    //   return value <
    // }

    //instantiate Tabulator when element is mounted
    table = new Tabulator("#table", {
      data: this.tableData,
      rowAdded:function(row){
        //row - row component    
        var data = row.getData();
        data.Action = 'add';
        
        if (selectedProjectIn[0] == 'MP_ID') {
          var MP_ID = selectedProjectIn[1]
          data.MP_ID_In = MP_ID;
          data.SP_ID_In = null;
        }
        else if (selectedProjectIn[1] == 'SP_ID') {
          var SP_ID = selectedProjectIn[2]
          data.SP_ID_In = SP_ID;
          data.MP_ID_In = null;
        }

        listEdit.push(data)
        // console.log(data)
        // console.log(listEdit)
      },
      rowDeleted:function(row) {
        var data = row.getData();
        var Transfer_ID = data.Transfer_ID;
        if (Transfer_ID != undefined) {
          data.Action = 'del';
          listEdit.push(data)
        } 
      },
      // historyUndo:function(action, component, data){
      //   action, component, data
      //   //action - the action that has been undone
      //   //component - the Component object afected by the action (colud be a row or cell component)
      //   console.log(data)

      // },
      // historyRedo:function(action, component, data){
      //   action, component, data
      //   //action - the action that has been undone
      //   //component - the Component object afected by the action (colud be a row or cell component)
      //   console.log(data)

      // },
      history: true,
      addRowPos:"bottom",
      columns: [
        {title:"โอนจาก", field:"ProjectOutcome", editor:"select", editable:editCheck, editorParams: {allowEmpty:false, values: optionsProjectOut}, width:400},  
        {title:"จำนวน", field:"Amount", width:150, editor:"number", editable:editCheck, hozAlign:"right", formatter:"money", topCalc:"sum", topCalcParams:{ precision:2,},formatterParams:{
          decimal:".",
          thousand:",",
        }},
        {formatter:printDelIcon, width:100, hozAlign:"left", cellClick:function(e, cell){if(confirm("ต้องการลบ " + cell.getRow().getData().ProjectOutcome + " ใช่หรือไม่?")== true){
            cell.getRow().delete()
          }}
          },
         ], //define table columns
    });

      //add row
      document.getElementById("add-subproject").addEventListener("click", function(){
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
      "question",
      ).then(() => {
        // check project outcome id
        var project = [];
        for (var i in listEdit) {
          const action = listEdit[i].Action
          if(action == 'add')
          if(listEdit[i].ProjectOutcome != undefined && listEdit[i].ProjectOutcome.includes(':')) {
            project = listEdit[i].ProjectOutcome.split(":")
            if(project[0].includes("M")) {
              var MP_ID = project[0].split("M")
              listEdit[i].MP_ID_Out = MP_ID[1]
              listEdit[i].SP_ID_Out = null
            }
            else if(project[0].includes("S")) {
              var SP_ID = project[0].split("S")
              console.log(SP_ID)
              listEdit[i].SP_ID_Out = SP_ID[1]
              listEdit[i].MP_ID_Out = null
            }
          }
        }

        this.checkRepeatData(listEdit)

        for (i in listEdit) {
          var action = listEdit[i].Action
          var edit_ID = listEdit[i].Transfer_ID
          if (action == 'edit') {
            // var totalAmountIncome = table.getCalcResults().top.Amount;
            // totalAmountIncome = parseFloat(totalAmountIncome)
            // console.log(results)
            // console.log(listEdit[i])
            this.updateTransfer(edit_ID, listEdit[i])
            this.updateTransferToMainAndSubproject(listEdit[i]) 
          }
          else if (action == 'del'){

            // console.log(listEdit[i])
            this.deleteTransfer(edit_ID)
            this.updateTransferToMainAndSubproject(listEdit[i])
            // this.deleteTransferToMainAndSubproject(listEdit[i])
            
          }
          else if (action == 'add'){
            this.addNewTransfer(listEdit[i])
            this.addTransferToMainAndSubproject(listEdit[i])
          }
        }
        
        // window.location.reload()
        listEdit = [];
  
        //do something...
      });
    },

    cancel() {
     this.$confirm(
      "คุณต้องการยกเลิกใช่หรือไม่?",
      " ",
      "error",
      ).then(() => {
          window.location.reload()
          listEdit = [];
          //do something...
        });
    },

    getMainAndSubprojectIn() {
          MainprojectDataService.getAll()
            .then(response => {
              //Mainproject
              var i, j;
              for (i in response.data) {
                if(this.user.depart_id == response.data[i].D_ID){

                  this.optionsProjectChild = []
                  // Subproject
                  for (j in response.data[i].subprojects) {
                    this.optionsProjectChild.push( {'value': response.data[i].MP_ID + ':SP_ID:' + response.data[i].subprojects[j].SP_ID, text: response.data[i].subprojects[j].SP_Name});
                  }
                  this.optionsProject.push({'label': response.data[i].MP_Name, 'options': this.optionsProjectChild});
                }
                
              }
              //console.log(this.optionsProject)
            })
            .catch(e => {
              console.log(e);
            });
    },

    //fetch Transfer data   ////check from D_ID
    retrieveTransfer() {
        TransferDataService.getAll()
            .then(response => {
    
              for(var j in response.data) {
                if(this.user.depart_id == response.data[j].D_ID)
                this.tableData.push(response.data[j]);
              }
              
              var i;
              //var index = 0;
              for (i in response.data) {
                if(response.data[i].MPtranfers_Out != undefined) {
                  this.tableData[i].ProjectOutcome = response.data[i].MPtranfers_Out.MP_Name;
                }
                else if (response.data[i].SPtranfers_Out != undefined) {
                  this.tableData[i].ProjectOutcome = response.data[i].SPtranfers_Out.SP_Name
                } 
              }
              table.setData(this.tableData);
              console.log(this.tableData);
            })
            .catch(e => {
              console.log(e);
            });
      
          
    },
    deleteTransfer(listDel) {
      TransferDataService.delete(listDel)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    },


    addNewTransfer(data) {
        TransferDataService.create(data)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    updateTransfer(TRANSFER_ID, data) {
      TransferDataService.update(TRANSFER_ID, data)
      .then(response => {
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
    },

    updateTransferToMainAndSubproject(data){
        //new value
        // var amount2 = data.Amount;
        // var MP_ID_In2 = data.MP_ID_In;
        // var MP_ID_Out2 = data.MP_ID_Out;
        var SP_ID_In2 = data.SP_ID_In;
        var SP_ID_Out2 = data.SP_ID_Out;

        if([SP_ID_In2, SP_ID_Out2].every(x=>x!== null)){
          SubprojectDataService.get(SP_ID_In2)
          .then(response => {
            var SP_transfers_in = response.data.transfers_in
            //console.log(data)
            var totalAmount = 0;
            // console.log(data)
            // console.log(totalAmount)
            for(var i in SP_transfers_in) {
              
              var transfer = SP_transfers_in[i]
              var amount = transfer.Amount
              totalAmount += amount
              // console.log(transfer)
              // console.log(totalAmount)
            }
            SubprojectDataService.update(SP_ID_In2, {SP_Income: totalAmount})
            // console.log(totalAmount)

            var MP_ID_In = response.data.MP_ID;
            //Update Mainproject
            MainprojectDataService.get(MP_ID_In)
            .then(response => {
              // console.log(response.data)
              var Subprojects = response.data.subprojects
              //console.log(data)
              var totalIncome = 0;
              // console.log(data)
              // console.log(totalIncome)
              for(var i in Subprojects) {
              
              var SP_Income = Subprojects[i].SP_Income
              totalIncome += SP_Income

              //console.log(totalIncome)
              }
            MainprojectDataService.update(MP_ID_In, {MP_Income: totalIncome})
            })
          })

          SubprojectDataService.get(SP_ID_Out2)
          .then(response => {
            var transfers_Out = response.data.transfers_Out
            //console.log(data)
            // console.log(SP_ID_Out2)
            var totalAmount = 0;
            // console.log(transfers_Out)
            // console.log(totalAmount)
            for(var i in transfers_Out) {
              
              var transfer = transfers_Out[i]
              var amount = transfer.Amount
              totalAmount += amount
              // console.log(transfer)
              // console.log(totalAmount)
            }
            SubprojectDataService.update(SP_ID_Out2, {SP_Outcome: totalAmount})
            // console.log(totalAmount)

            var MP_ID_Out = response.data.MP_ID;
            //Update Mainproject
            MainprojectDataService.get(MP_ID_Out)
            .then(response => {
              // console.log(response.data)
              var Subprojects = response.data.subprojects
              //console.log(data)
              var totalOutcome = 0;
              // console.log(data)
              // console.log(totalOutcome)
              for(var i in Subprojects) {
              
              var SP_Outcome = Subprojects[i].SP_Outcome
              totalOutcome += SP_Outcome

              //console.log(totalOutcome)
              }
            MainprojectDataService.update(MP_ID_Out, {MP_Outcome: totalOutcome})

            })
          })
          
        }

        //  TransferDataService.getAll()
        //     .then(response => {
        //       var oldValue = response.data;
        //       for(var i in oldValue) {
        //         //value in database
        //         var amount1 = oldValue[i].Amount;
        //         var MP_ID_In1 = oldValue[i].MP_ID_In
        //         var MP_ID_Out1 = oldValue[i].MP_ID_Out;
        //         var SP_ID_In1 = oldValue[i].SP_ID_In;
        //         var SP_ID_Out1 = oldValue[i].SP_ID_Out;

        //         if([MP_ID_In1, MP_ID_In2, MP_ID_Out1, MP_ID_Out2].every(x=>x!== null)){
        //           if(MP_ID_In1 == MP_ID_In2 && MP_ID_Out1 == MP_ID_Out2) {
        //             if(amount2 < amount1 && amount2 != 0) {
        //               amount2 = amount1 - amount2
        //             }
        //             // console.log(amount2)
        //             // console.log(totalAmountIncome)
                    
        //             MainprojectDataService.update(MP_ID_In2, {MP_Income: totalAmountIncome})
        //               .catch(e => {
        //                 console.log(e);
        //               });

        //             const newOutcome = amount2;
        //             MainprojectDataService.update(MP_ID_Out2, {MP_Outcome: newOutcome})
        //               .catch(e => {
        //                 console.log(e);
        //               });            
        //           }       
        //         }
        //         // else if([MP_ID_Out1, MP_ID_Out2, SP_ID_In1, SP_ID_In2].every(x=>x!== null)){
        //         //   if(MP_ID_Out1 == MP_ID_Out2 && SP_ID_In1 == SP_ID_In2) {
        //         //     if(amount2 < amount1 && amount2 != 0) {
        //         //       amount2 = amount1 - amount2
        //         //     }

        //         //     console.log(amount2)
        //         //     console.log(totalAmountIncome)

        //         //     SubprojectDataService.update(SP_ID_In2, {SP_Income: totalAmountIncome})
        //         //       .catch(e => {
        //         //         console.log(e);
        //         //       });

        //         //     const newOutcome = amount2;
        //         //     MainprojectDataService.update(MP_ID_Out2, {MP_Outcome: newOutcome})
        //         //       .catch(e => {
        //         //         console.log(e);
        //         //       })

        //         //     const newIncome = amount2;
        //         //     MainprojectDataService.update(MP_ID_Out2, {MP_Income: newIncome})
        //         //       .catch(e => {
        //         //         console.log(e);
        //         //       })
        //         //   }       
        //         // }

        //         else if([SP_ID_In1, SP_ID_In2, SP_ID_Out1, SP_ID_Out2].every(x=>x!== null)){
        //           if(SP_ID_In1 == SP_ID_In2 && SP_ID_Out1 == SP_ID_Out2) {
        //             if(amount2 < amount1 && amount2 != 0) {
        //               amount2 = amount1 - amount2
        //             }

        //             // console.log(amount2)
        //             // console.log(totalAmoutIncome)

        //             const MP_ID = oldValue[i].SPtranfers_Out.MP_ID
        //             // SubprojectDataService.update(SP_ID_In2, {SP_Income: totalAmountIncome})
        //             //   .catch(e => {
        //             //     console.log(e);
        //             //   });

        //             // const newOutcome = amount2;
        //             // SubprojectDataService.update(SP_ID_Out2, {MP_Outcome: newOutcome})
        //             //   .catch(e => {
        //             //     console.log(e);
        //             //   });

        //             MainprojectDataService.get(MP_ID)
        //             .then(response => {
        //               const oldMP_Outcome = response.data.MP_Outcome
        //               const oldMP_Income = response.data.MP_Income

        //               console.log(oldMP_Outcome)
        //               console.log(oldMP_Income)

        //               const newMP_Outcome = oldMP_Outcome + totalAmountIncome
        //               const newMP_Income = oldMP_Income + totalAmountIncome

        //               console.log(newMP_Outcome)
        //               console.log(newMP_Income)

        //               // MainprojectDataService.update(MP_ID, {MP_Income: newMP_Income})
        //               //   .catch(e => {
        //               //     console.log(e);
        //               //   });        

        //               // MainprojectDataService.update(MP_ID, {MP_Outcome: newMP_Outcome})
        //               //   .catch(e => {
        //               //     console.log(e);
        //               //   });         
        //             })
                    



                    
        //           }       
        //         }

        //       }
              
        //     })
        //     .catch(e => {
        //       console.log(e);
        //     });
        // return true;
    },

    // deleteTransferToMainAndSubproject(data){
    //     //new value
    //     // var MP_ID_In2 = data.MP_ID_In;
    //     // var MP_ID_Out2 = data.MP_ID_Out;
    //     var SP_ID_In2 = data.SP_ID_In;
    //     var SP_ID_Out2 = data.SP_ID_Out;


    //     // TransferDataService.get(Transfer_ID)
    //     //   .then(response => {
    //     //     amount2 = response.data.Amount
    //     //     if([MP_ID_In2, MP_ID_Out2].every(x=>x!== null)){
    //     //               //update MP_Income
    //     //               //var oldOutcome;
    //     //               //find old MP_Income
    //     //               MainprojectDataService.get(MP_ID_In2)
    //     //                 .then(response => {
    //     //                   //MP_Income in database
    //     //                   const oldIncome = response.data.MP_Income
    //     //                   // console.log(oldIncome)
    //     //                   const newIncome = oldIncome - amount2
    //     //                   console.log(newIncome)
    //     //                   MainprojectDataService.update(MP_ID_In2, {MP_Income: newIncome})
                          
    //     //                   //update MP_Outcome
    //     //                   //find old MP_Outcome
    //     //                   MainprojectDataService.get(MP_ID_Out2)
    //     //                   .then(response => {
    //     //                     //MP_Income in database
    //     //                     const oldOutcome = response.data.MP_Outcome
    //     //                     // console.log(oldIncome)
    //     //                     const newOutcome = oldOutcome - amount2
    //     //                     console.log(newOutcome)
    //     //                     MainprojectDataService.update(MP_ID_Out2, {MP_Outcome: newOutcome})
    //     //                   })
    //     //                 })      
    //     //         }
    //     //         else if([MP_ID_In2, SP_ID_Out2].every(x=>x!== null)){
    //     //               //update MP_Income
    //     //               //var oldOutcome;
    //     //               //find old MP_Income
    //     //               MainprojectDataService.get(MP_ID_In2)
    //     //                 .then(response => {
    //     //                   //MP_Income in database
    //     //                   const oldIncome = response.data.MP_Income
    //     //                   // console.log(oldIncome)
    //     //                   const newIncome = oldIncome - amount2
    //     //                   console.log(newIncome)
    //     //                   MainprojectDataService.update(MP_ID_In2, {MP_Income: newIncome})
    //     //                   //update SP_Outcome
    //     //                   //var oldOutcome;
    //     //                   //find old SP_Outcome
    //     //                   SubprojectDataService.get(SP_ID_Out2)
    //     //                     .then(response => {
    //     //                       //SP_Outcome in database
    //     //                       const SP_oldOutcome = response.data.SP_Outcome
    //     //                       // console.log(oldIncome)
    //     //                       const SP_newOutcome = SP_oldOutcome - amount2
    //     //                       SubprojectDataService.update(SP_ID_Out2, {SP_Outcome: SP_newOutcome})

    //     //                       const MP_ID_Out = response.data.MP_ID
    //     //                       MainprojectDataService.get(MP_ID_Out)
    //     //                         .then(response => {
    //     //                           const MP_oldOutcome = response.data.MP_Outcome
    //     //                           const MP_newOutcome = MP_oldOutcome - amount2
    //     //                           MainprojectDataService.update(MP_ID_Out, {MP_Outcome: MP_newOutcome})
    //     //                       })
                              
    //     //                     })
    //     //                 })      
    //     //         }
    //     //         else if([SP_ID_In2, SP_ID_Out2].every(x=>x!== null)){
    //     //               //update SP_Income
    //     //               //var oldOutcome;
    //     //               //find old SP_Income
    //     //               SubprojectDataService.get(SP_ID_In2)
    //     //                 .then(response => {
    //     //                   //SP_Income in database
    //     //                   const oldIncome = response.data.SP_Income
    //     //                   // console.log(oldIncome)
    //     //                   const newIncome = oldIncome - amount2
    //     //                   console.log(newIncome)
    //     //                   SubprojectDataService.update(SP_ID_In2, {SP_Income: newIncome})

    //     //                   const MP_ID_In = response.data.MP_ID
    //     //                       MainprojectDataService.get(MP_ID_In)
    //     //                         .then(response => {
    //     //                           const MP_oldIncome = response.data.MP_Income
    //     //                           const MP_newIncome = MP_oldIncome - amount2
    //     //                           MainprojectDataService.update(MP_ID_In, {MP_Income: MP_newIncome})
    //     //                       })              
    //     //                   //update SP_Outcome
    //     //                   //var oldOutcome;
    //     //                   //find old SP_Outcome
    //     //                   SubprojectDataService.get(SP_ID_Out2)
    //     //                     .then(response => {
    //     //                       //SP_Income in database
    //     //                       const oldOutcome = response.data.SP_Outcome
    //     //                       // console.log(oldIncome)
    //     //                       const newOutcome = oldOutcome - amount2
    //     //                       console.log(newOutcome)
    //     //                       SubprojectDataService.update(SP_ID_Out2, {SP_Outcome: newOutcome})

    //     //                       const MP_ID_Out = response.data.MP_ID
    //     //                       MainprojectDataService.get(MP_ID_Out)
    //     //                         .then(response => {
    //     //                           const MP_oldOutcome = response.data.MP_Outcome
    //     //                           const MP_newOutcome = MP_oldOutcome - amount2
    //     //                           MainprojectDataService.update(MP_ID_Out, {MP_Outcome: MP_newOutcome})
    //     //                       })
    //     //                     })
    //     //                 })   
    //     //         }
          
    //     //   })
                
    //     return true;
    // },
    
    addTransferToMainAndSubproject(data){
        //new value
        var amount2 = data.Amount;
        var MP_ID_In2 = data.MP_ID_In;
        var MP_ID_Out2 = data.MP_ID_Out;
        var SP_ID_In2 = data.SP_ID_In;
        var SP_ID_Out2 = data.SP_ID_Out;

                if([MP_ID_In2, MP_ID_Out2].every(x=>x!== null)){
                      //update MP_Income
                      //var oldOutcome;
                      //find old MP_Income
                      MainprojectDataService.get(MP_ID_In2)
                        .then(response => {
                          //MP_Income in database
                          const oldIncome = response.data.MP_Income
                          // console.log(oldIncome)
                          const newIncome = oldIncome + amount2
                          console.log(newIncome)
                          MainprojectDataService.update(MP_ID_In2, {MP_Income: newIncome})
                          
                          //update MP_Outcome
                          //find old MP_Outcome
                          MainprojectDataService.get(MP_ID_Out2)
                          .then(response => {
                            //MP_Income in database
                            const oldOutcome = response.data.MP_Outcome
                            // console.log(oldIncome)
                            const newOutcome = oldOutcome + amount2
                            console.log(newOutcome)
                            MainprojectDataService.update(MP_ID_Out2, {MP_Outcome: newOutcome})
                          })
                        })     
                }
                else if([MP_ID_Out2, SP_ID_In2].every(x=>x!== null)){
                      //update MP_Income
                      //var oldOutcome;
                      //find old MP_Income
                      MainprojectDataService.get(MP_ID_Out2)
                        .then(response => {
                          //MP_Income in database
                          const MP_oldOutcome = response.data.MP_Outcome
                          const MP_newOutcome = MP_oldOutcome + amount2
                          console.log(MP_newOutcome)
                          MainprojectDataService.update(MP_ID_Out2, {MP_Outcome: MP_newOutcome})
                          //update SP_Outcome
                          //var oldOutcome;
                          //find old SP_Outcome
                          SubprojectDataService.get(SP_ID_In2)
                            .then(response => {
                              //MP_Income in database
                              const oldIncome = response.data.SP_Income
                              // console.log(oldIncome)
                              const newIncome = oldIncome + amount2
                              console.log(newIncome)
                              SubprojectDataService.update(SP_ID_In2, {SP_Income: newIncome})

                              const MP_ID_In = response.data.MP_ID
                              MainprojectDataService.get(MP_ID_In)
                                .then(response => {
                                  const MP_oldIncome = response.data.MP_Outcome
                                  const MP_newIncome = MP_oldIncome + amount2
                                  MainprojectDataService.update(MP_ID_In, {MP_Income: MP_newIncome})
                              })
                            })
                        })
                }
                else if([SP_ID_In2, SP_ID_Out2].every(x=>x!== null)){
                      //update SP_Income
                      //var oldOutcome;
                      //find old SP_Income
                      SubprojectDataService.get(SP_ID_In2)
                        .then(response => {
                          //SP_Income in database
                          const oldIncome = response.data.SP_Income
                          // console.log(oldIncome)
                          const newIncome = oldIncome + amount2
                          console.log(newIncome)
                          SubprojectDataService.update(SP_ID_In2, {SP_Income: newIncome})

                          const MP_ID_In = response.data.MP_ID
                              MainprojectDataService.get(MP_ID_In)
                                .then(response => {
                                  const MP_oldIncome = response.data.MP_Income
                                  const MP_newIncome = MP_oldIncome + amount2
                                  MainprojectDataService.update(MP_ID_In, {MP_Income: MP_newIncome})
                              })
                          //update SP_Outcome
                          //var oldOutcome;
                          //find old SP_Outcome
                          SubprojectDataService.get(SP_ID_Out2)
                            .then(response => {
                              //SP_Income in database
                              const oldOutcome = response.data.SP_Outcome
                              // console.log(oldIncome)
                              const newOutcome = oldOutcome + amount2
                              console.log(newOutcome)
                              SubprojectDataService.update(SP_ID_Out2, {SP_Outcome: newOutcome})

                              const MP_ID_Out = response.data.MP_ID
                              MainprojectDataService.get(MP_ID_Out)
                                .then(response => {
                                  const MP_oldOutcome = response.data.MP_Outcome
                                  const MP_newOutcome = MP_oldOutcome + amount2
                                  MainprojectDataService.update(MP_ID_Out, {MP_Outcome: MP_newOutcome})
                              })
                            })
                        })
                }
        return true;
    },


    checkRepeatData(listEdit){
        for (var j in listEdit) {
          // Data that want to check
          var MP_ID_In1 = listEdit[j].MP_ID_In;
          var SP_ID_In1 = listEdit[j].SP_ID_In;
          var MP_ID_Out1 = listEdit[j].MP_ID_Out;
          var SP_ID_Out1 = listEdit[j].SP_ID_Out;
          var Amount1 = listEdit[j].Amount;
          // console.log('In:', MP_ID_In1)
          // console.log('In:', SP_ID_In1)
          // console.log('Out:', MP_ID_Out1)
          // console.log('Out:', SP_ID_Out1)
          for (var k in listEdit){
            if(k != j) {

              // OtherData
              var MP_ID_In2 = listEdit[k].MP_ID_In;
              var SP_ID_In2 = listEdit[k].SP_ID_In;
              var MP_ID_Out2 = listEdit[k].MP_ID_Out;
              var SP_ID_Out2 = listEdit[k].SP_ID_Out;
              var Amount2 = listEdit[k].Amount;
              // console.log('In1:', MP_ID_In1 ,'In2:', MP_ID_In2)
              // console.log('In1:', SP_ID_In1, 'In2:', SP_ID_In2)
              // console.log('Out1:', MP_ID_Out1, 'Out2:', MP_ID_Out2)
              // console.log('Out1:', SP_ID_Out1, 'Out2:', SP_ID_Out2)


              if (MP_ID_In1 == MP_ID_In2 && SP_ID_In2 == SP_ID_In1) {
                if([MP_ID_In1, MP_ID_In2].every(x=>x!==null) || [SP_ID_In2, SP_ID_In1].every(x=>x!==null)){
                  // console.log('In1:', MP_ID_In1 ,'In2:', MP_ID_In2)
                  // console.log('In1:', SP_ID_In1, 'In2:', SP_ID_In2)
                  if (MP_ID_Out1 == MP_ID_Out2 && SP_ID_Out1 == SP_ID_Out2) {
                    if([MP_ID_Out1, MP_ID_Out2].every(x=>x!==null) || [SP_ID_Out1, SP_ID_Out2].every(x=>x!==null)){
                      // console.log('Out1:', MP_ID_Out1, 'Out2:', MP_ID_Out2)
                      // console.log('Out1:', SP_ID_Out1, 'Out2:', SP_ID_Out2)
                      // console.log('---------------------------')
                      if (Amount1 != undefined  && Amount2 != undefined){
                        var newAmount = Amount1 + Amount2;
                        listEdit[j].Amount = newAmount;
                      }
                      if(listEdit[k].Action != 'del'){
                        listEdit.splice(k, 1);
                      }
                    }
                  }
                }
              }
            }
          }
        }
    }

    
  },
};

</script>

<style lang="scss" scoped>
.transfer {
    margin: 20px;
}
.top {
  .left {
    float: left;
  }

  .right {
    float: right;
    
  }
}

.nav-text{
  font-size: 18px;
  color: black;
  .money-text{
    font-size: 28px;
  }
}
</style>