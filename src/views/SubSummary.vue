<template>
    <div>
        <SummaryHead />
        <div class="sumsummary">
            <h5 class="pt-2 ml-4 pb-0">โครงการทั้งหมด</h5>
            <div ref="table" class="table-sty"></div>
        </div>

    </div>
  
</template>

<script>
import SummaryHead from "@/components/SummaryHead.vue"
import Tabulator from 'tabulator-tables'; 

export default {
    name: "SumSummary",
    components :{
        SummaryHead
    },
    data() {
      return {
        modalShow: false,
        tabulator: null, //variable to hold your table
        tableData: [
            {name: 'โครงการหลักA',strategic_issue: "2",strategic: "1",strategy: "1", 
            _children:[
                {name:"โครงการย่อยA1",  strategic_issue: "1",strategic: "2",strategy: "3",},
                {name:"โครงการย่อยA2",  strategic_issue: "1",strategic: "2",strategy: "3",
                serviceHistory:[
                    {date:"01/02/2016", engineer:"Steve Boberson", actions:"Changed oli filter"},
                    {date:"07/02/2017", engineer:"Martin Stevenson", actions:"Break light broken"},
                ],
                }],
             },
            {name: 'โครงการหลักB',strategic_issue: "1",strategic: "3",strategy: "1",
            _children:[
                {name:"โครงการย่อยB1", budged: 1500,},
                {name:"โครงการย่อยB2", strategic_issue: "1", strategic: "2", strategy: "3", budged: 2000,}],
            },
            {name: 'โครงการหลักC',strategic_issue: "4",strategic: "1",strategy: "2",},
 
        ],//data for table to display


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
        dataTree:true,
        dataTreeStartExpanded:true,
        dataTreeChildIndent : 20, //indent child rows
        columns: [
            {title:"ชื่อโครงการ", field:"name", width:200, responsive:0,},
            {title:"ประเด็นยุทธศาสตร์", field:"strategic_issue", width:200, hozAlign:"right"},
            {title:"ยุทธศาสตร์", field:"strategic", width:180,hozAlign:"right",},
            {title:"กลยุทธ", field:"strategy", width:180,hozAlign:"right"},
           
        ],    
        // rowFormatter:function(row){
        //     //create and style holder elements
        //     var holderEl = document.createElement("div");
        //     var tableEl = document.createElement("div");

        //     // holderEl.style.boxSizing = "border-box";
        //     holderEl.style.padding = "10px 30px 10px 10px";
        //     // holderEl.style.borderTop = "1px solid #333";
        //     // holderEl.style.borderBotom = "1px solid #333";
        //     // holderEl.style.background = "#ddd";

        //     // tableEl.style.border = "1px solid #333";

        //     holderEl.appendChild(tableEl);

        //     row.getElement().appendChild(holderEl);

        //     this.tabulator = new Tabulator(tableEl, {
        //         layout:"fitColumns",
        //         //data: this.tableData.serviceHistory,              
        //         columns:[
        //             {title:"Date", field:"date", sorter:"date"},
        //             {title:"Engineer", field:"engineer"},
        //             {title:"Action", field:"actions"},
        //         ]
        //     })
        // },
    });


    },
    template: '<div ref="table"></div>', //create table holder element

}
</script>

<style lang="scss" scope>
@import  "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4.scss";

.summary2{
    margin: 20px;
    margin-left: 40px;
    margin-right: 40px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    
}
.table-sty{
    margin: 10px;
}
h4{
     margin: 10px;
}
</style>