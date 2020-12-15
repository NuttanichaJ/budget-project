<template>
    <div class="vm-tabulator">
     <!-- <h1>tabulator test</h1> -->
     <Tabulator/>
     <div ref="table"></div>
    </div>
</template>

<script>
const Tabulator = require("tabulator-tables");
export  default  { 
  data ()  { 
    return  { 
      // Mounted are prepared to store instance 
      tabulator :  null , 
     // Table 1 Line 
      TableColumn :  [ 
        { title : " site " ,  field : " name " ,  width : 150 }, 
        { title : " When it started to itch " ,  field : " from " ,  align : " center", width:150},
        { title:"痒み具合", field:"kayumi", align:"left", formatter:"star", formatterParams:{
            stars: 10
        }},
      ],
      //テーブルデータ
      tableData: [
        {id:1, name:"肩", from:"12/15", kayumi:4},
        {id:2, name:"肘", from:"12/15", kayumi:6},
        {id:3, name:"背中", from:"12/11", kayumi:3},
        {id:4, name:"腰", from:"", kayumi:0},
        {id:5, name:"腹", from:"12/18", kayumi:1},
        {id:6, name:"腿", from:"12/10", kayumi:10},
      ]
    }
  },
  Mounted () { 
    // Data to create an instance in tabulaor prepared for 
    this.Tabulator  =  new  Tabulator ( this.$refs.table ,  { 
      Data :  this.TableData , 
      Columns :  this.TableColumn , 
      // this neighborhood option 
      Height : 205 , 
      layout : " fitColumns " , 
    }); 
  },
  template: '<div ref="table"></div>' //create table holder element 
}

</script>

<style>
@import '~tabulator-tables/dist/css/tabulator.min.css';
</style>
