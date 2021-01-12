<template>
  <div id="manageproject">
    <h1>จัดการโครงการ</h1>
    <div class="top">
      <div class="left">
        <b-button to="/transfer">โอนเงินเข้า-ออก</b-button>
      </div>
      <div class="right">
        <b-button @click='save'>บันทึก</b-button>
        <b-button @click='cancel'>ยกเลิก</b-button>
      </div>
    </div>
    <br><br>
    <div ref="table"></div>
  </div>

</template>

<script>
import Tabulator from 'tabulator-tables'; 

export default {

  name: "ManageProject",
  data() {
      return {
        tabulator: null, //variable to hold your table
        tableData: [{
            name: 'Teste',
            location: "this place",
            progress: 100,
        },{
            name: 'Nurse',
            location: "this place",
            progress: 12,
        }], //data for table to display
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
      columns: [
        {title:"Name", field:"name", width:150, editor:"input"},
        {title:"Location", field:"location", width:130, editor:"autocomplete", editorParams:{allowEmpty:true, showListOnEmpty:true, values:true}},
        {title:"Progress", field:"progress", sorter:"number", hozAlign:"left", formatter:"progress", width:140, editor:true},
        {title:"Gender", field:"gender", editor:"select", editorParams:{values:{"male":"Male", "female":"Female", "unknown":"Unknown"}}},
        {title:"Rating", field:"rating",  formatter:"star", hozAlign:"center", width:100, editor:true},
        {title:"Driver", field:"car", hozAlign:"center", editor:true, formatter:"tickCross"},], //define table columns
    });
  },
  template: '<div ref="table"></div>', //create table holder element
  methods: {
    save() {
     this.$confirm(
      "คุณต้องการบันทึกใช่หรือไม่?",
      " ",
      "question"
    )
    },
    cancel() {
     this.$confirm(
      "คุณต้องการยกเลิกใช่หรือไม่?",
      " ",
      "error"
    )
    },
  },
};

</script>

<style lang="scss">
@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

#manageproject {
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

