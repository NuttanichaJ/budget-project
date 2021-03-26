<template>
  <div class="transfer">
        <h1>บันทึกการโอนเงินเข้า-ออก</h1>
    <div class="top">
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
    </div>
    <div class="income"> 
      <b-nav class="mt-3">
        <b-navbar-nav class="mb-2 mr-sm-2 mb-sm-0 mr-auto">
          <b-nav-form>
            <b-input-group>
              <label class="mr-sm-2 ml-2" for="inline-form-custom-select-pref">โอนเข้า: </label>
              <b-form-select id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-5 mb-sm-0" v-model="selectedProject" :options="optionsProject"></b-form-select>   
                <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-form-input id="inline-form-input-username" placeholder="5000" readonly></b-form-input>
                </b-input-group>
              <label class="mr-sm-2" for="inline-form-custom-select-pref">บาท</label>
            </b-input-group>
          </b-nav-form>
        </b-navbar-nav>
      </b-nav>
    </div>
     <div>
       <b-nav class="mt-3">
        <b-navbar-nav class="mb-2 mr-sm-0 mb-sm-0 mr-auto">
                <b-nav-form>
                    <b-input-group >
                        <b-button id="add-subproject" class="mb-2 ml-sm-2 mb-sm-2">เพิ่มการโอน</b-button>      
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
import TransferDataService from '../services/transfer.datasevice'

var table, countDb;
var listEdit, undoDatas, listAdd = [];

export default {
  name: "Transfer",

  data() {
    return {
        selectedProject: null,
        optionsProject: [
            { value: 'โครงการหลัก1', text: 'โครงการหลัก1' },
            { value: 'โครงการหลัก2', text: 'โครงการหลัก2' },
            { value: 'โครงการย่อย1', text: 'โครงการย่อย1' },
            { value: 'โครงการย่อย2', text: 'โครงการย่อย2' },      
        ],
    
        tableData: [],
      }
  },

  mounted(){
    this.retrieveTransfer()
  
    var printDelIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        return '<a class="btn btn-secondary" target="_self">ลบ</a>'
    };

    //instantiate Tabulator when element is mounted
    table = new Tabulator("#table", {
      history: true,
      addRowPos:"bottom",
      columns: [
        {title:"โอนจาก", field:"outcome", editor:"select", editorParams:{values:{"โครงการหลัก 1":"โครงการหลัก 1", "โครงการหลัก 2":"โครงการหลัก 2", "โครงการย่อย 1":"โครงการย่อย 1", "โครงการย่อย 2":"โครงการย่อย 2" }, hozAlign:"right",},  width:400},  
        {title:"จำนวน", field:"amount", width:150, editor:"number", hozAlign:"right", formatter:"money", formatterParams:{
          decimal:".",
          thousand:",",
        }},
        {formatter:printDelIcon, width:100, hozAlign:"left", cellClick:function(e, cell){if(confirm("ต้องการลบ " + cell.getRow().getData().name + " ใช่หรือไม่?")== true){
          cell.getRow().delete()}}, },
         ], //define table columns
    });

      // search name
      var valueEl = document.getElementById("search");
      valueEl.addEventListener("keyup", function(){
        table.setFilter('SP_NAME','like', valueEl.value);       
      })

      //add row
      document.getElementById("add-subproject").addEventListener("click", function(){
        table.addRow({});
      });

      //undo button
      document.getElementById("history-undo").addEventListener("click", function(){
        var status = table.undo();
        if(status) {
          var undoData = listEdit.pop();
          undoDatas.push(undoData)
          console.log(listEdit)
        }
      });
      
      //redo button
      document.getElementById("history-redo").addEventListener("click", function(){
        var status = table.redo();
        if(status) {
          var redoData = undoDatas.pop();
          listEdit.push(redoData)
          console.log(listEdit)
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
        console.log(listEdit)
        var i;
        for (i in listEdit) {
          var action = listEdit[i].Action
          var edit_ID = listEdit[i].TRANSFER_ID
          if (action == 'edit') {
            this.updateTransfer(edit_ID, listEdit[i])
          }
          else if (action == 'del'){
            this.deleteTransfer(edit_ID)
          }
        }
        
        this.checkNewTransfer(table, countDb, listAdd)
        listAdd.reverse()
        if (listAdd.length != 0) {
          var j;
          for (j in listAdd) {
              this.addNewTransfer(listAdd[j])
          }
        }
        
        window.location.reload()
        listEdit, listAdd = [];
        
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
          listEdit, listAdd = [];
          //do something...
        });
    },

    //fetch Main Project data   ////check from D_ID
    retrieveTransfer() {
          TransferDataService.getAll()
            .then(response => {
              this.tableData = response.data;
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
    
    checkNewTransfer(table, countDb, listAdd) {
      var rowCount = table.getDataCount();
      var data = table.getData();
      
      if (countDb <= rowCount) {
        var i;
        var countNewTransfer = rowCount - countDb;
        for (i = 0; i < countNewTransfer; i++) {
          listAdd.push(data.pop())
        }
        return listAdd
      }
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
</style>