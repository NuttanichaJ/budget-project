<template>
  <div class="transfer">
        <h1>บันทึกการโอนเงินเข้า-ออก</h1>
    <div class="top">
      <div class="left">
        <b-button @click='addrow'>เพิ่มการโอน</b-button>
      </div>
      <div class="right">
        <b-button class="mb-2 mr-sm-2 mb-sm-0" @click='save'>บันทึก</b-button>
        <b-button class="mb-2 mr-sm-2 mb-sm-0" @click='cancel'>ยกเลิก</b-button>
      </div>
    </div>
    <br><br><br>
    <div class="income"> 
        <b-form inline>
          <label class="mr-sm-2" for="inline-form-custom-select-pref">โอนเข้า: </label>
          <b-form-select id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-5 mb-sm-0" v-model="selectedProject" :options="optionsProject"></b-form-select>   
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input id="inline-form-input-username" placeholder="5000" readonly></b-form-input>
            </b-input-group>
          <label class="mr-sm-2" for="inline-form-custom-select-pref">บาท</label>
        </b-form>
    </div>
    <br>
    <div class="outcome">
        <div ref="table"></div>
    </div>
  </div>
</template>

<script>
import Tabulator from 'tabulator-tables'; 

export default {
  name: "Transfer",

  data() {
    return {
    selectedProject: null,
    optionsProject: [
        { value: 'โครงการหลัก1', text: 'โครงการหลัก1' },
        { value: 'โครงการหลัก2', text: 'โครงการหลัก2' },
        { value: 'โครงการย่อย1', text: 'โครงการย่อย1' },
        { value: 'โครงการย่อย2', text: 'โครงการย่อย2' },      
    ],
    
        tabulator: null, //variable to hold your table
        tableData: [],
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
      addRowPos:"bottom",
      columns: [
        {title:"โอนจาก", field:"outcome", editor:"select",headerFilter:"input", headerFilterPlaceholder:"...", editorParams:{values:{"โครงการหลัก 1":"โครงการหลัก 1", "โครงการหลัก 2":"โครงการหลัก 2", "โครงการย่อย 1":"โครงการย่อย 1", "โครงการย่อย 2":"โครงการย่อย 2" }, hozAlign:"right",},  width:400},  
         {title:"จำนวน", field:"amount", width:150, editor:"number", hozAlign:"right", formatter:"money", formatterParams:{
    decimal:".",
    thousand:",", }},
         ], //define table columns
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
    //Add row on "Add Row" button click
    addrow() {
      this.tabulator.addRow({});
    },
  },
};

</script>

<style lang="scss" scoped>
.transfer {
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