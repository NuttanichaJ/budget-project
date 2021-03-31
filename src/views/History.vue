<template>
  <div id="history">
    <b-nav class="mt-3 mb-3">
      <b-navbar-nav class="mt-2 mb-2 mr-sm-2 mb-sm-0 ml-2 mr-auto">
        <b-nav-form>
          <b-form-select class="font-18 rounded-2" id="select-branch" 
            v-model="selectedBranch" :options="optionsBranch" size="sm">
          </b-form-select>
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav class="mt-2 mb-2 mr-sm-2 mb-sm-0 ml-auto">
        <b-nav-form>
          <b-input-group>
            <b-form-input class="" placeholder="ค้นหา" id='search-his'></b-form-input>
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
var table;

export default {
  name: "History",
  data () {
    return {
      // selected Permissin
      selectedBranch: null,
      optionsBranch: [
        { value: null, text: 'ฝ่าย/สาขาวิชา', disabled: true},
        { value: 'center', text: 'ส่วนกลาง' },
        { value: 'coe', text: 'สาขาวิชาวิศวกรรมคอมพิวเตอร์' },
        { value: 'ee', text: 'สาขาวิชาวิศวกรรมไฟฟ้า' },
        { value: 'ce', text: 'สาขาวิชาวิศวกรรมโยธา' },
      ],

      tabulator: null, //variable to hold your table
      tableData: [
        {date:"18/02/21 - 11:30 AM",username:"theui",branch:'สาขาวิชาวิศวกรรมโยธา'},
        {date:"1/03/21 - 15:13 PM",username:"jaehyun",branch:'สาขาวิชาวิศวกรรมคอมพิวเตอร์'},
        {date:"1/03/21 - 10:00 AM",username:"ABC",branch:'ส่วนกลาง'},
        {date:"1/03/21 - 14:20 PM",username:"sdf-kku",branch:'สาขาวิชาวิศวกรรมคอมพิวเตอร์'},
        {date:"1/03/21 - 12:10 PM",username:"sdfff",branch:'สาขาวิชาวิศวกรรมไฟฟ้า'},
        
      ],
    }
  },
  
    mounted(){
      //instantiate Tabulator when element is mounted
      table = new Tabulator("#table", {
        data: this.tableData, //link data to table
        history: true,
        layout:"fitDataStretch",
        //responsiveLayout:"hide",
        columns: [
          {title: "วัน-เวลา", field:"date", align:"center", width: 300,headerHozAlign:"center", editor: false,},
          {title: "username", field:"username", align:"center", width: 300 ,headerHozAlign:"center", editor: false,},
          {title: "ฝ่าย/สาขา", field:"branch", align:"center", width: 300, headerHozAlign:"center", },
          {title: "รายการแก้ไข", field:"listedit", align:"center", headerHozAlign:"center",headerSort:false,},  
          
        ], //define table columns
      
      });
  
      var valueEl = document.getElementById("search-his");
      valueEl.addEventListener("keyup", function(){
        table.setFilter('username','like', valueEl.value);
        
      })
      var selectEl = document.getElementById("select-branch");
      selectEl.addEventListener("change", function(){
        //table.setFilter("branch",'regex', selectEl.value);
        table.setFilter('branch','like', selectEl.options[selectEl.selectedIndex].text);  
      })

      //undo button
      document.getElementById("history-undo").addEventListener("click", function(){
        console.log(this.tableData)
        table.undo();
      });

      //redo button
      document.getElementById("history-redo").addEventListener("click", function(){
        table.redo();
      });
      
     
  },
  //template: '<div ref="table"></div>', //create table holder element
  methods: {
     
  },
};


</script>

<style lang="scss">

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