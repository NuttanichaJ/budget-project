<template>
    <div id="subSummary">
        
        <div>
            <div>
                <h4 class="mb-3 ">สาขาวิชา ....</h4>
                <SummaryHead />
            </div>
            <div>
                 <b-row class="mt-1 d-flex justify-content-betweet " >
                    <!-- <div class="d-flex flex-wrap"> -->
                    <!-- <b-col class="p-2 mr-2 mb-1 border border-dark rounded" id="border">
                        <p class="mb-0 pl-1 font16 "><small>งบประมาณทั้งหมด (ตามแผน)</small></p>
                        <p class="mb-0 text-center font28 mt-2"><strong>907900</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right" ><small>บาท</small></p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded" id="border">
                        <p class="mb-0 pl-1 font16"><small>งบประมาณคงเหลือตามแผน</small></p>
                        <p class="mb-0 text-center font28 mt-2"><strong>907900</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                    </b-col>
                    <b-col class="p-2 mr-2 mb-1 border border-dark rounded" id="border">
                        <p class="mb-0 pl-1 font16"><small>งบประมาณคงเหลือจากหลักการ</small></p>
                        <p class="mb-0 text-center font28 mt-2"><strong>846615</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                    </b-col>
                    <b-col class="p-2 mb-1 border border-dark rounded" id="border">
                        <p class="mb-0 pl-1 font16"><small>งบประมาณคงเหลือจากเบิกจ่ายจริง</small></p>
                        <p class="mb-0 text-center font28 mt-2"><strong>892023</strong></p>
                        <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                    </b-col> -->
                    <!-- </div> -->
                </b-row>
            </div>

            <div>
                <b-row class="border mt-3" >
                    <b-col lg="5" align-self="center" class="">
                        <p class="font18">จำนวนโครงการทั้งหมด [] โครงการ</p>
                        <p class="font18">โครงการที่ยังไม่ดำเนินการ [] โครงการ</p>
                        <p class="font18">โครงการที่กำลังดำเนินการ [] โครงการ</p>
                        <p class="font18">โครงการที่ดำเนินการเสร็จสิ้น [] โครงการ</p>
                    </b-col>
                    <b-col lg="6" align-self="center" class="p-3 m-2 shadow bg-white rounded">
                        <apexchart width="100%" type="pie" :options="projectOption" :series="dataProject"></apexchart>
                    </b-col>
                </b-row>
                <!-- <b-row>
                    <b-col class="mt-3">
                        <p>งบประมาณของโครงการทั้งหมด [] บาท</p>
                        <p>ยอดเงินคงเหลือทั้งหมดตามแผน [] บาท</p>
                        <p>ยอดเงินคงเหลือจากหลักการทั้งหมด [] บาท</p>
                        <p>ยอดเงินคงเหลือจากเบิกจ่ายทั้งหมด [] บาท</p>
                    </b-col>
                </b-row> -->
            </div>
            
        </div>

    </div>
</template>
<script>
import SummaryHead from "@/components/SummaryHead.vue"
export default {
    name: "SummaryBranch",
    components :{
        SummaryHead
    },
    data() {
        return {
            projectOption: {
                plotOptions: {
                    pie: {
                        size: '10%',
                        fontSize: '24px',
                    }
                },
                legend: {
                    // position: 'bottom',
                    horizontalAlign: 'left'
                },
                labels: ['โครงการย่อยที่เสร็จสิ้น', 'โครงการย่อยที่กำลังดำเนินการ', 'โครงการที่ยังไม่ได้ดำเนินการ',],
                colors: ['#4CAF50','#F9CE1D','#EA3546',],
            }, 
            dataProject: [ 21, 32, 11, ],  // series data
        }
        
        
    }
}

</script>
<style lang="scss" scoped>
#subSummary {
  margin: 30px;
}
.font16{
    font-size: 16px;
}

small{
  font-size: 14px;
}
.font18{
    font-size: 18px;
}
.font28{
    font-size: 28px;
}

</style>
