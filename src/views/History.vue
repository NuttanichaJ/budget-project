<template>
  <div id="history">
    <b-nav class="mt-3 mb-3">
      <b-navbar-nav class="mt-2 mb-2 mr-sm-2 mb-sm-0 ml-2 mr-auto">
        <b-nav-form>
          <b-form-select class="font-18 rounded-2" id="select-branch" 
            v-model="selectedDepartment" :options="optionsDepartment" size="sm">
          </b-form-select>
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav class="mt-2 mb-2 mr-sm-2 mb-sm-0 ml-auto">
        <b-nav-form>
          <b-input-group>
            <b-form-input class="" placeholder="ค้นหาจากชื่อ-นามสกุล" id='search-his'></b-form-input>
            <b-input-group-append>
              <b-button class="mb-2 mr-sm-2 mb-sm-0 mr-1 rounded-right"><font-awesome-icon icon="search" /></b-button>
            </b-input-group-append>
          </b-input-group>
        </b-nav-form>
      </b-navbar-nav>
    </b-nav>
    
    <!-- tabulator -->
    <div id="table" class="sty-table"></div>
  </div>
  
</template>

<script>
import Tabulator from 'tabulator-tables';

// import  HistoryDataservice from '../services/history.dataservice.js'

import HistoryDataservice from '../services/history.dataservice';
import DepartmentDataservice from '../services/department.dataservice';

var table;

export default {
  name: "History",
  data () {
    return {
      // user: this.$store.state.user,
      // tabulator: null
      // tableData: [],

      // selected Permissin
      selectedDepartment: null,
      optionsDepartment: [{value: 'refresh', text: 'ทั้งหมด'}],
      tabulator: null, //variable to hold your table
      tableData: [],
      Department: [],
    }
  },
  
    mounted(){

      //retrieve Main Project
      // this.getSubProject(this.$route.params.id);

      // this.getHistoryDataservice()

      this.getDepartmentOptions()
      this.retrieveHistory()

      //instantiate Tabulator when element is mounted
      table = new Tabulator("#table", {
        //data: this.tableData, //link data to table
        layout:"fitDataStretch",
        //responsiveLayout:"hide",
        columns: [
          {title: "วัน-เวลา", field:"updatedAt", hozAlign:"center", width: 300, headerHozAlign:"center", editor: false,},
          {title: "ชื่อ-นามสกุล", field:"Username", hozAlign:"center", width: 300 ,headerHozAlign:"center", editor: false,},
          {title: "ฝ่าย/สาขาวิชา", field:"Department_name", hozAlign:"center", width: 300, headerHozAlign:"center", },
          {title: "รายการแก้ไข", field:"Message", hozAlign:"center", headerHozAlign:"center",headerSort:false,},  
        ], //define table columns
      
      });
  
      var valueEl = document.getElementById("search-his");
      valueEl.addEventListener("keyup", function(){
        table.setFilter('Username','like', valueEl.value);
      })
      var selectEl = document.getElementById("select-branch");
      selectEl.addEventListener("change", function(){
        
        var value = selectEl.options[selectEl.selectedIndex].value
        if(value != null){
            table.setFilter('Department_name','like', value);
        }
        if (value =='refresh'){
            table.clearFilter();
        }
      })

      //undo button
      document.getElementById("history-undo").addEventListener("click", function(){
        table.undo();
      });

      //redo button
      document.getElementById("history-redo").addEventListener("click", function(){
        table.redo();
      });
      
         
  },
  //template: '<div ref="table"></div>', //create table holder element
  methods: {

    // getHistoryDataservice(Edited_User_ID) {
    //   HistoryDataservice.getAll()
    //   .then( response => {
    //     var i;
    //     for(i in response.data) {
    //       if(Edited_User_ID == response.data[i]) {

    //       }
    //     }
      
    //   })
    // }

    // getHistoryDataservice(id) {
    //   HistoryDataservice.get(id)
    //     .then((response) => {
    //       this.historyid = response.data;
    //       console.log(response.data);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },


    //fetch History data
    retrieveHistory() {
          HistoryDataservice.getAll()
            .then(response => {
              this.tableData = response.data
              for( var i in response.data) {
                if(response.data[i].user.User_FName == null) {
                  response.data[i].user.User_FName = ''
                }
                if(response.data[i].user.User_LName == null) {
                  response.data[i].user.User_LName = ''
                }
                this.tableData[i].Username = response.data[i].user.User_FName + ' ' + response.data[i].user.User_LName
                var UserD_ID = response.data[i].user.D_ID
                for(var j in this.Department){
                  if(UserD_ID == this.Department[j].D_ID){
                    this.tableData[i].Department_name = this.Department[j].D_Name
                  }
                }
              }
              this.tableData.reverse()
              table.setData(this.tableData);
            })
            .catch(e => {
              console.log(e);
            });
    },

    getDepartmentOptions() {
      DepartmentDataservice.getAll()
      .then(response => {
        for(var i in response.data){
          if(response.data[i].D_Name != 'Admin') {
            this.optionsDepartment.push({value: response.data[i].D_Name, text: response.data[i].D_Name})
            this.Department.push({D_ID: response.data[i].D_ID, D_Name: response.data[i].D_Name})
          }
            

        }
      })
    }
  },
};

</script>

<style lang="scss" scope>

@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

#history{
  margin: 20px;
}
.table-sty{
  padding: 30px;
  padding-top: 10px;

}
.font-18{
  font-size: 18px;
  color: black;
}

</style>