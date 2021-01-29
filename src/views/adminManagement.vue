<template>
  <div>
    <b-nav class="mt-3" id="menu">
        <b-button id="add-user" class="my-2" @click='addRow'>เพิ่มสมาชิก</b-button>

        <b-dropdown id="dropdown-left" text="สิทธิ์การใช้งาน" class="m-2">
            <b-dropdown-item>ผู้บริหาร</b-dropdown-item>
            <b-dropdown-item>ส่วนกลาง</b-dropdown-item>
            <b-dropdown-item>สาขาวิชา</b-dropdown-item>        
        </b-dropdown>        
        
            <b-navbar-nav class="mt-2 ml-auto">
                <b-nav-form>
                    <b-input-group >
                        <b-form-input placeholder="ค้นหา"></b-form-input>
                        <b-input-group-append>
                            <b-button><font-awesome-icon icon="search" /></b-button>                        
                        </b-input-group-append>
                    </b-input-group>
                </b-nav-form>        
            </b-navbar-nav>
        
    </b-nav>
    <div ref="table" class="table-sty"></div>

  </div>
</template>

<script>
import Tabulator from 'tabulator-tables'; 
export default {
  name: "ManageUser",
  data() {
      return {
        modalShow: false,
        tabulator: null, //variable to hold your table
        tableData: [
          {name: 'Teste', mail: 'asd@gmail.com',branch:'วิศวกรรมคอมพิวเตอร์',permission:'ผู้บริหาร'},
          {name: 'ABC', mail: 'cds@gmail.com',branch:'วิศวกรรมไฟฟ้า',permission:'สาขาวิชา'},      
      
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
    this.tabulator = new Tabulator(this.$refs.table, {
      data: this.tableData, //link data to table
      addRowPos:"bottom",
      columns: [
        {title:"ชื่อ - นามสกุล", field:"name", width:200, editor:"input"},
        {title:"E-mail", field:"mail", headerSort:false, width:250, editor:"input"},
        {title:"ฝ่าย / สาขาวิชา", field:"branch", width:180, editor:"select", editorParams:{values:{"วิศวกรรมคอมพิวเตอร์":"วิศวกรรมคอมพิวเตอร์", "วิศวกรรมโยธา":"วิศวกรรมโยธา", "วิศวกรรมไฟฟ้า":"วิศวกรรมไฟฟ้า"}}},
        {title:"สิทธิ์การใช้งาน", field:"permission", width:180, editor:"select", editorParams:{values:{"ผู้บริหาร":"ผู้บริหาร", "ส่วนกลาง":"ส่วนกลาง", "สาขาวิชา":"สาขาวิชา"}}},
        {formatter:printDelIcon, hozAlign:"left", cellClick:function(e, cell){if(confirm("ต้องการลบ " + cell.getRow().getData().name + " ใช่หรือไม่?")== true){
          cell.getRow().delete()}}, frozen:true }
          ,], //define table columns
    });
   

  },
  template: '<div ref="table"></div>', //create table holder element
  
 methods: {
    

    addRow() {
      this.tabulator.addRow({});
    }, // add row table
    

       
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