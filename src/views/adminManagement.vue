<template>
  <div>
    <b-nav class="mt-3" id="menu">
      <b-button class="" id="add-user" size="sm" @click="addRow">เพิ่มสมาชิก</b-button>
      <b-form inline class="ml-3" >
        <b-form-select v-model="selectedPermissin" :options="optionsPermissin" 
          size="sm" id="selectPer">
        </b-form-select>
      </b-form>        
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-input-group>
            <b-form-input placeholder="ค้นหา" id="search"></b-form-input>
            <b-input-group-append>
              <b-button><font-awesome-icon icon="search" /></b-button>
            </b-input-group-append>
          </b-input-group>
        </b-nav-form>
      </b-navbar-nav>
    </b-nav>
    <div id="table" class="table-sty"></div>
  </div>
</template>

<script>
import Tabulator from 'tabulator-tables'; 
import AdminDataSevice from "../services/AdminManagement.DataSevice";

export default {
  name: "ManageUser",
  data() {
      return {
        selectedPermissin: null,
        optionsPermissin: [
          {value: null, text: 'สิทธ์ผู้ใช้งาน', disabled: true},
          { value: 'dean', text: 'ผู้บริหาร' },
          { value: 'center', text: 'ส่วนกลาง' },
          { value: 'branch', text: 'สาขาวิชา' },
        ],

        modalShow: false,
        tabulator: null, //variable to hold your table
        tableData: [], //data for table to display
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
    this.retrieveUser();

    var printDelIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        return '<a class="btn btn-secondary" target="_self">ลบ</a>'
    };
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator('#table', {
      data: this.tableData, //link data to table
      addRowPos:"bottom",
      columns: [
        {title:"ชื่อ - นามสกุล", field:"USER_FNAME", width:300, editor:"input",headerHozAlign:"center",validator:"required"},
        {title:"E-mail", field:"EMAIL", headerSort:false, headerHozAlign:"center", width:350, editor:"input" ,validator:"required"},
        {title:"ฝ่าย / สาขาวิชา", field:"D_ID", width:200,validator:"required", editor:"select", editorParams:{values:{"วิศวกรรมคอมพิวเตอร์":"วิศวกรรมคอมพิวเตอร์", "วิศวกรรมโยธา":"วิศวกรรมโยธา", "วิศวกรรมไฟฟ้า":"วิศวกรรมไฟฟ้า"}}},
        {title:"สิทธิ์การใช้งาน", field:"PERMISSION", width:200,validator:"required", editor:"select", editorParams:{values:{"ผู้บริหาร":"ผู้บริหาร", "ส่วนกลาง":"ส่วนกลาง", "สาขาวิชา":"สาขาวิชา"}}},
        {formatter:printDelIcon, hozAlign:"left",width:100, cellClick:function(e, cell){if(confirm("ต้องการลบ " + cell.getRow().getData().USER_FNAME + " ใช่หรือไม่?")== true){
          cell.getRow().delete()}}, frozen:true, headerSort:false,},
      ], //define table columns
    });

     //add row
      // document.getElementById("add-user").addEventListener("click", function(){
      //   this.tabulator.addRow({});
      // });

      // search
      var valueEl = document.getElementById("search");
      valueEl.addEventListener("keyup", function(){
        //table.setFilter('name','like', valueEl.value);  
      })
      var selectEl = document.getElementById("selectPer");
      selectEl.addEventListener("change", function(){
        //table.setFilter('permission','like', selectEl.options[selectEl.selectedIndex].text);
      })
   

  },
  template: '<div ref="table"></div>', //create table holder element
  
 methods: {

    addRow() {
      this.tabulator.addRow({});
    }, // add row table

    retrieveUser() {
          AdminDataSevice.getAll()
            .then(response => {
              this.tableData = response.data;
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
    },
       
  },
  
};

</script>

<style lang="scss" scope>
@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";


#menu{
  padding-top: 20px;
}
#add-user{
  font-size: 16px;
  background-color: #84a856;
}



</style>