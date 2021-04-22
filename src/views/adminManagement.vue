<template>
  <div class="admin">
    <b-nav class="mt-3">
      <b-navbar-nav class="mt-2 mb-2 mr-sm-2 mb-sm-0 ml-0 mr-auto">
        <b-nav-form>
          <b-form inline class="mb-2 ml-sm-2 mb-sm-0 mr-1" >
            <label class="mr-2 font16" for="selecPer">สิทธิ์การใช้งาน</label>
            <b-form-select v-model="selectedPermission" :options="optionsPermisson" 
              size="sm" id="selectPer">
            </b-form-select>
          </b-form> 
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav class="mt-2 mb-2 mr-sm-2 mb-sm-0 ml-auto">
            <b-nav-form>
                <b-input-group>
                  <b-form-input placeholder="ค้นหาชื่อ" id='search'></b-form-input>
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
              <b-button class="mb-2 ml-sm-2 mb-sm-0 mr-1" id="add-user" size="sm" @click="addRow">เพิ่มสมาชิก</b-button>
            </b-input-group>
          </b-nav-form>
        </b-navbar-nav>
      </b-nav>
      <div id="table" class="table-sty shadow bg-white rounded"></div>

    </div>
  </div>
</template>

<script>
import Tabulator from 'tabulator-tables'; 
import UserDataService from "../services/user.dataservice";
import DepartmentDataservice from "../services/department.dataservice";

var table;
var listEdit = [];

export default {
  name: "ManageUser",
  data() {
      return {
        user: this.$store.state.user,
        selectedPermisson: null,
        optionsPermisson: [
          { value: 'refresh', text: 'ทั้งหมด'},
          { value: 'ผู้บริหาร', text: 'ผู้บริหาร' },
          { value: 'ส่วนกลาง', text: 'ส่วนกลาง' },
          { value: 'สาขาวิชา', text: 'สาขาวิชา' },
        ],

        modalShow: false,
        tabulator: null, //variable to hold your table
        tableData: [], //data for table to display
        optionsDepartment: [],
        Department: [],
      }
  },

  mounted(){
    this.getDepartmentOptions()
    this.retrieveUser();

    var printDelIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        return '<a class="btn btn-secondary" target="_self">ลบ</a>'
    };

    var editCheck = function(cell){
        //cell - the cell component for the editable cell
        //get row data
        var data = cell.getRow().getData();
        
        // console.log(data)
        var User_ID = data.User_ID;
        if (User_ID != undefined) {
          data.Action = 'edit';
          listEdit.push(data)
        }
      return listEdit
    };
    //instantiate Tabulator when element is mounted
    table = new Tabulator('#table', {
      //data: this.tableData, //link data to table
      rowAdded:function(row){
        //row - row component
        var data = row.getData();
        data.Action = 'add';
        listEdit.push(data)
      },

      rowDeleted:function(row) {
        var data = row.getData();
        var User_ID = data.User_ID;
        if (User_ID != undefined) {
          data.Action = 'del';
          listEdit.push(data)
        } 
      },
      addRowPos:"bottom",
      columns: [
        {title:"ชื่อ", field:"User_FName", width:250, editor:"input", editable:editCheck, headerHozAlign:"center"},
        {title:"นามสกุล", field:"User_LName", width:250, editor:"input", editable:editCheck, headerHozAlign:"center"},
        {title:"E-mail", field:"Email", headerHozAlign:"center", editable:editCheck, width:350, editor:"input" },
        {title:"ฝ่าย / สาขาวิชา", field:"Department_name", width:200, editor:"select", editable:editCheck, editorParams:{allowEmpty:false, values: this.optionsDepartment}},
        {title:"สิทธิ์การใช้งาน", field:"Permission", width:200, editor:"select", editable:editCheck, editorParams:{values:{"ผู้บริหาร":"ผู้บริหาร", "ส่วนกลาง":"ส่วนกลาง", "สาขาวิชา":"สาขาวิชา"}}},
        {formatter:printDelIcon, hozAlign:"left", cellClick:function(e, cell){if(confirm("ต้องการลบ " + cell.getRow().getData().User_FName + ' ' + cell.getRow().getData().User_LName + " ใช่หรือไม่?")== true){
          cell.getRow().delete()}}, frozen:true, headerSort:false,},
      ], //define table columns
    });

     //add row
      document.getElementById("add-user").addEventListener("click", function(){
        table.addRow({});
      });

      // search
      var valueEl = document.getElementById("search");
      valueEl.addEventListener("keyup", function(){
        table.setFilter('User_FName','like', valueEl.value);  
      })
      var selectEl = document.getElementById("selectPer");
      selectEl.addEventListener("change", function(){
        var value = selectEl.options[selectEl.selectedIndex].value
        if(value != null){
            table.setFilter('Permission','like', value);
        }
        if (value =='refresh'){
            table.clearFilter();
        }
      })
  },
  // template: '<div ref="table"></div>', //create table holder element
  
 methods: {

   save() {
     this.$confirm(
      "คุณต้องการบันทึกใช่หรือไม่?",
      " ",
      "question",
      ).then(() => {

        for (var i in listEdit) {
          var action = listEdit[i].Action
          var edit_ID = listEdit[i].User_ID
          var depament_name = listEdit[i].Department_name
          for(var j in this.Department){
            if(depament_name == this.Department[j].D_Name){
              listEdit[i].D_ID = this.Department[j].D_ID
            }
          }
          if (action == 'edit') {
            console.log(listEdit[i])
            this.updateUser(edit_ID, listEdit[i])
          }
          else if (action == 'del'){
            this.deleteUser(edit_ID)
          }
          else if (action == 'add'){
            this.addNewUser(listEdit[i])
          }
        }
        
        window.location.reload()
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

    retrieveUser() {
      UserDataService.getAll()
        .then(response => {
          this.tableData = response.data;
          for(var i in this.tableData) {
            var UserD_ID = this.tableData[i].D_ID
            for(var j in this.Department){
              if(UserD_ID == this.Department[j].D_ID){
                this.tableData[i].Department_name = this.Department[j].D_Name
              }
            }
          }
          table.setData(this.tableData)
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteUser(User_ID) {
      UserDataService.delete(User_ID)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    },

    addNewUser(data) {
        UserDataService.create(data)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    updateUser(MP_ID, data) {
      UserDataService.update(MP_ID, data)
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
          this.optionsDepartment.push(response.data[i].D_Name)
          this.Department.push({D_ID: response.data[i].D_ID, D_Name: response.data[i].D_Name})
        }
      })
    }
    
       
  },
  
};

</script>

<style lang="scss" scope>
@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

.admin {
    margin: 20px;
}
#menu{
  padding-top: 20px;
}
#add-user{
  font-size: 16px;
  background-color: #84a856;
}
#selectPer{
  font-size: 16px;
}
#table {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
.font16{
  font-size: 16px;
}

#table .tabulator-header {
  border-bottom: 3px solid;
  border-color:#AFB2BF;
}

// #table .tabulator-calcs-bottom {
//   border-top: 3px solid;
//   border-color:#333;
// }

#table .tabulator-frozen {
    background-color:#fff;
}




</style>