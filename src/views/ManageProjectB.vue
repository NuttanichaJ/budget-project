<template>
  <div id="manageproject">
    <h1 class="ml-2">จัดการโครงการ</h1>
    <b-nav class="mt-3">
      <b-navbar-nav class="mt-2 mb-2 mr-sm-2 mb-sm-4 ml-auto">
            <b-nav-form>
                <b-input-group>
                  <b-form-input placeholder="ค้นหาชื่อโครงการ" id='search'></b-form-input>
                    <b-input-group-append>
                        <b-button class="mb-2 mr-sm-2 mb-sm-0 mr-1 rounded-right"><font-awesome-icon icon="search" /></b-button>
                    </b-input-group-append>
                    </b-input-group>
                </b-nav-form>        
        </b-navbar-nav>
    </b-nav>


    <div id="table" class="sty-table shadow bg-white rounded"></div>
  </div>
      

</template>

<script>
import Tabulator from 'tabulator-tables';
import MainprojectDataservice from "../services/mainproject.dataservice.js";

var table;

export default {
  name: "ManageProject",
  data() {
      return {
        user: this.$store.state.user,
        modalShow: false,
        tabulator: null, //variable to hold your table
        tableData: [],
    }
  },
  
    mounted(){  
    //retrieve Main Project
    this.retrieveMainProject(this.user.depart_id);
   
    //Edit Sub-Project button
    var printSPIcon = function(cell, formatterParams, onRendered){ //plain text value
        cell, formatterParams, onRendered;
        var MP_ID = cell.getRow().getData().MP_ID
        if(cell.getRow().getData().MP_Name != undefined) {
          return '<a class="btn btn-secondary" href="/managesubproject/' + MP_ID + '"' + 'target="_self">แก้ไขโครงการย่อย</a>'
        }
    };
  
    //instantiate Tabulator when element is mounted
    table = new Tabulator("#table", {
      history: true,
      layout:"fitDataStretch",
      addRowPos: "bottom",
      columns: [
        // {title:"ผลการดำเนินงาน", field:"performance_result", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        // {title:"ปัญหาและอุปสรรค", field:"problem", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        // {title:"รายละเอียดผลการดำเนินงาน", field:"detail_result", editor:"input",  width:160, hozAlign:"left",}, //define table columns
        // {title:"หมายเหตุ", field:"annotation", editor:"input",  width:160, hozAlign:"left",}, //define table columns

        {title:"ชื่อโครงการ", field:"MP_Name", width:400, hozAlign:"left", formatter:"textarea", frozen:true, responsive:0, },
        {title:"งบประมาณตามแผน", field:"MP_Budget",  width:250, hozAlign:"right", formatter:"money", formatterParams:{decimal:".", thousand:",",}, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"คงเหลือตามแผน", field:"MP_Total_Amount", width:250, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".",thousand:",",}, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"คงเหลือตามหลักการ", field:"MP_Total_From_Priciple", width:250, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".",thousand:",",}, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"คงเหลือจากเบิกจ่ายจริง", field:"MP_Total_From_Disburse", width:250, hozAlign:"right",  formatter:"money", formatterParams:{decimal:".",thousand:",",}, bottomCalc:"sum", bottomCalcParams:{precision:2,},}, //define table columns
        {title:"สถานะโครงการ", field:"MP_Status", width:160,
          formatter:function(cell){
              var value = cell.getValue();
              var color;
                if(value == "ยังไม่ดำเนินการ"){
                    color = '#EA3546'
                    
                } else if(value == "กำลังดำเนินการ"){
                    color = '#F9CE1D'
                    
                } else if(value == "เสร็จสิ้น"){
                    color = '#4CAF50'
                }
                return "<button style='color: white; background-color:"+ color +"; display: inline-block; border: none; outline: none; text-align: center; text-decoration: none; padding: .4em .4em .55em; border-radius: .4em;'>" + value + "</button>";
          }
        },
        {formatter:printSPIcon, hozAlign:"left",headerSort:false, },
        ], //define table columns
    });   

      // search name
      var valueEl = document.getElementById("search");
      valueEl.addEventListener("keyup", function(){
        table.setFilter('MP_Name','like', valueEl.value);   
      });

  },

  template: '<div id="table" class="sty-table"></div>', //create table holder element

  methods: {

    //fetch Main Project data
    retrieveMainProject(D_ID) {
          MainprojectDataservice.getAll({where: {D_ID: D_ID}})
            .then(response => {
              //this.tableData = response.data
              for( var i in response.data) {
                if(D_ID == response.data[i].D_ID)
                this.tableData.push(response.data[i]);
              }
              table.setData(this.tableData);
              console.log(this.tableData);
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

#manageproject {
  margin: 20px;
}

</style>

