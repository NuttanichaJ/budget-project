<template>
    <div id="history">
      <b-nav class="mt-3" id="menu">
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
  name: "History",

  data () {
    return {
      tabulator: null, //variable to hold your table
        tableData: [
          {date:"18/02/21",username:"userA"},
          {date:"1/03/21",username:"userB"}
        ],
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
      //instantiate Tabulator when element is mounted
      this.tabulator = new Tabulator(this.$refs.table, {
        data: this.tableData, //link data to table
        layout:"fitDataStretch",
        responsiveLayout:"hide",
        columns: [
          {title: "วัน-เวลา", field:"date", align:"center", width: 300, },
          {title: "username", field:"username", align:"center", width: 300 },
          {title: "รายการแก้ไข", field:"listedit", align:"center", headerSort:false}
          
          ], //define table columns
      });
     
    },
  template: '<div ref="table"></div>', //create table holder element
    

};


</script>

<style scoped>
#menu {
    padding: 10px;
    padding-right: 50px;
    margin-left: 30px;
}
.table-sty{
  padding: 30px;
  padding-top: 10px;

}


</style>