<template>
  <div>
    <b-nav class="mt-3" id="menu">
        <b-button id="add-user" class="my-2">เพิ่มสมาชิก</b-button>

        <b-form inline class="p-2 mx-3" >          
          <b-form-select v-model="selectedPermissin" :options="optionsPermissin" 
          size="sm" id="selectPer">
        </b-form-select>
        </b-form>        
        <b-navbar-nav class="mt-2 ml-auto">
          <b-nav-form>
            <b-input-group >
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
        tableData: [
          {name: 'Teste', mail: 'asd@gmail.com',branch:'วิศวกรรมคอมพิวเตอร์',permission:'ผู้บริหาร'},
          {name: 'ABC', mail: 'cds@gmail.com',branch:'วิศวกรรมไฟฟ้า',permission:'สาขาวิชา'},
           {name: 'eghf', mail: 'cds@gmail.com',branch:'วิศวกรรมไฟฟ้า',permission:'ส่วนกลาง'},      
      
      ], //data for table to display
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
    var printDelIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        return '<a class="btn btn-secondary" target="_self">ลบ</a>'
    };
    //instantiate Tabulator when element is mounted
    var table = new Tabulator('#table', {
      data: this.tableData, //link data to table
      addRowPos:"bottom",
      columns: [
        {title:"ชื่อ - นามสกุล", field:"name", width:300, editor:"input",headerHozAlign:"center",validator:"required"},
        {title:"E-mail", field:"mail", headerSort:false, headerHozAlign:"center", width:350, editor:"input" ,validator:"required"},
        {title:"ฝ่าย / สาขาวิชา", field:"branch", width:200,validator:"required", editor:"select", editorParams:{values:{"วิศวกรรมคอมพิวเตอร์":"วิศวกรรมคอมพิวเตอร์", "วิศวกรรมโยธา":"วิศวกรรมโยธา", "วิศวกรรมไฟฟ้า":"วิศวกรรมไฟฟ้า"}}},
        {title:"สิทธิ์การใช้งาน", field:"permission", width:200,validator:"required", editor:"select", editorParams:{values:{"ผู้บริหาร":"ผู้บริหาร", "ส่วนกลาง":"ส่วนกลาง", "สาขาวิชา":"สาขาวิชา"}}},
        {formatter:printDelIcon, hozAlign:"left", cellClick:function(e, cell){if(confirm("ต้องการลบ " + cell.getRow().getData().name + " ใช่หรือไม่?")== true){
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
        table.setFilter('name','like', valueEl.value);  
      })
      var selectEl = document.getElementById("selectPer");
      selectEl.addEventListener("change", function(){
        table.setFilter('permission','like', selectEl.options[selectEl.selectedIndex].text);
          
      })
   

  },
  //template: '<div ref="table"></div>', //create table holder element
  
 methods: {

    // addRow() {
    //   this.tabulator.addRow({});
    // }, // add row table
    

       
  },
  
};

</script>

<style lang="scss">
@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

#menu {
    padding: 10px;
    padding-right: 50px;
}
#add-user{
    background-color: #84a856;
    margin-left: 30px;
    
}
.table-sty{
  padding: 30px;
  padding-top: 10px;
}

</style>