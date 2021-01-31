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
              <b-form-input placeholder="ค้นหา" id="search-his"></b-form-input>
                <b-input-group-append>
                  <b-button ><font-awesome-icon icon="search" /></b-button>                        
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
  name: "History",

  data () {
    return {
      // selected Permissin
      selectedBranch: null,
      optionsBranch: [
        { value: null, text: 'ฝ่าย/สาขาวิชา', disabled: true},
        { value: 'ส่วนกลาง', text: 'ส่วนกลาง' },
        { value: 'coe', text: 'สาขาวิชาวิศวกรรมคอมพิวเตอร์' },
        { value: 'ee', text: 'สาขาวิชาวิศวกรรมไฟฟ้า' },
        { value: 'ce', text: 'สาขาวิชาวิศวกรรมโยธา' },
      ],

      tabulator: null, //variable to hold your table
      tableData: [
        {date:"18/02/21",username:"theui",branch:'สาขาวิชาวิศวกรรมโยธา'},
        {date:"1/03/21",username:"jaehyun",branch:'สาขาวิชาวิศวกรรมคอมพิวเตอร์'},
        {date:"1/03/21",username:"นุ้งนุ้ง",branch:'ส่วนกลาง'},
        {date:"1/03/21",username:"sdf-kku",branch:'สาขาวิชาวิศวกรรมคอมพิวเตอร์'},
        {date:"1/03/21",username:"sdfff",branch:'สาขาวิชาวิศวกรรมไฟฟ้า'},
        
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
      var table = new Tabulator("#table", {
        data: this.tableData, //link data to table
        layout:"fitDataStretch",
        responsiveLayout:"hide",
        columns: [
          {title: "วัน-เวลา", field:"date", align:"center", width: 300,headerHozAlign:"center" },
          {title: "username", field:"username", align:"center", width: 300 ,headerHozAlign:"center"},
          {title: "ฝ่าย/สาขา", field:"branch", align:"center", width: 300, headerHozAlign:"center",},
          {title: "รายการแก้ไข", field:"listedit", align:"center", headerHozAlign:"center",headerSort:false,},
          
          
        ], //define table columns
      
      });
      //////////////////////    


      var valueEl = document.getElementById("search-his");
      valueEl.addEventListener("keyup", function(){
        table.setFilter('username','regex', valueEl.value);
        
      })
      var selectEl = document.getElementById("select-branch");
      selectEl.addEventListener("change", function(){
        //table.setFilter("branch",'regex', selectEl.value);
        table.setFilter('branch','like', selectEl.options[selectEl.selectedIndex].text);  
      })
      
     
  },
  //template: '<div ref="table"></div>', //create table holder element
  methods: {
    search() {
        var valueEl = document.getElementById("search-his");
        if(valueEl != '') {
          this.tabulator.setFilter('username','regex', valueEl.value);
        }
      },

     
  },
  
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



</style>