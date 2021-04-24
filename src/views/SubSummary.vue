<template>
    <div>
        <div class=" mt-3">
            <b-tabs content-class="mt-5 dark" fill>
                <b-tab title="กองบริหารงานคณะ">
                    <div class="">
                        <b-tabs content-class="mt-3" fill>
                            <b-tab title="ฝ่ายแผนยุทธศาสตร์">
                                <p>ฝ่ายแผนยุทธศาสตร์</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="ฝ่ายเหรัญญิก">
                                <p>ฝ่ายเหรัญญิก</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="ฝ่ายวิชาการ">
                                <p>ฝ่ายวิชาการ</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="ฝ่ายวิจัย" >
                                <p>ฝ่ายวิจัย</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="ฝ่ายปฏิบัติการ">
                                <p>ฝ่ายปฏิบัติการ</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="หน่วยวิเทศ">
                                <p>หน่วยวิเทศ</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="หน่วยพัฒนานักศึกษา">
                                <p>หน่วยพัฒนานักศึกษา</p>
                                <SummaryBranch1 />
                            </b-tab>
                        </b-tabs>
                    </div>
                    
                </b-tab>

                <b-tab title="สาขาวิชา">
                    <div class="mt-0">
                        <b-tabs content-class="mt-3" fill>
                            <b-tab title="วิศวกรรมโยธา">
                                <p class="font16">วิศวกรรมโยธา</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมไฟฟ้า">
                                <p>วิศวกรรมไฟฟ้า</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมเกษตร">
                                <p>วิศวกรรมเกษตร</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมอุตสาหการ">
                                <p>วิศวกรรมอุตสาหการ</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมเครื่องกล">
                                <p>วิศวกรรมเครื่องกล</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมสิ่งแวดล้อม">
                                <p>วิศวกรรมสิ่งแวดล้อม</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมเคมี">
                                <p>วิศวกรรมเคมี</p>
                                <SummaryBranch1 />
                            </b-tab>
                            <b-tab title="วิศวกรรมคออมพิวเตอร์" >
                                <p>วิศวกรรมคออมพิวเตอร์</p>
                                <SummaryBranch1 />
                            </b-tab>
                        </b-tabs>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
        
        

    </div>
  
</template>

<script>
import SummaryBranch1 from '../views/SummaryBranch1.vue'
export default {
    name: "SubSummary",
    components :{
       SummaryBranch1
    },
    data() {
      return {

           
      }
    },
}
    
</script>

<style lang="scss" scope>

.font16{
    font-size: 16px;
}

</style>