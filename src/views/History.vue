<template>
    <div id="history">
      <b-nav class="mt-3" id="menu">
        <b-form inline class="p-2 mx-3" >          
          <b-form-select v-model="selectedBranch" :options="optionsBranch" 
          id="select-branch" size="sm" >
        </b-form-select>
        </b-form>       
        
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

      <div ref="table" class="table-sty tabulator tabulator-header tabulator-col"></div>
      

    </div>
</template>

<script>
import Tabulator from 'tabulator-tables';
export default {
  name: "History",

  data () {
    return {
      // selected Permissin
      selectedBranch: null,
        optionsBranch: [
          {value: null, text: 'ฝ่าย/สาขาวิชา', disabled: true},
          { value: 'center', text: 'ส่วนกลาง' },
          { value: 'coe', text: 'สาขาวิชาวิศวกรรมคอมพิวเตอร์' },
          { value: 'ee', text: 'สาขาวิชาวิศวกรรมไฟฟ้า' },
          { value: 'ce', text: 'สาขาวิชาวิศวกรรมโยธา' },
        ],
      tabulator: null, //variable to hold your table
        tableData: [
          {date:"18/02/21",username:"userA",branch:'สาขาวิชาวิศวกรรมโยธา'},
          {date:"1/03/21",username:"userB",branch:'สาขาวิชาวิศวกรรมคอมพิวเตอร์'},
          {date:"1/03/21",username:"userB",branch:'สาขาวิชาวิศวกรรมโยธา'}
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
          {title: "วัน-เวลา", field:"date", align:"center", width: 300,headerHozAlign:"center" },
          {title: "username", field:"username", align:"center", width: 300 ,headerHozAlign:"center"},
          {title: "ฝ่าย/สาขา", field:"branch", align:"center", width: 300, headerHozAlign:"center"},
          {title: "รายการแก้ไข", field:"listedit", align:"center", headerHozAlign:"center",headerSort:false}
          
        ], //define table columns


      
      });

      //select
      var selectBr = document.getElementById("select-branch")
      document.addEventListener("click", function(){
        this.tabulator.options[selectBr.selectedIndex].value;
        return this.date.branch ;
      
      })
   
     
    },
  template: '<div ref="table"></div>', //create table holder element
  
};


</script>

<style lang="scss">

@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
#menu {
    padding: 10px;
    padding-right: 50px;
    margin-left: 30px;
}
.table-sty{
  padding: 30px;
  padding-top: 10px;

}

.tabulator .tabulator-header .tabulator-col-group>.tabulator-col-content {
    text-align:center;
}


</style>