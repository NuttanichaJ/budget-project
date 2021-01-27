<template>
  <div >
    <SummaryHead/>
    
    <div class="summary">    
        <b-container fluid>
        
          <!-- สาขาวิชา -->
          <div class="mt-5 mx-3" id="branch" to="/src/views/Summary2.vue">
            <b-row class="mt-3 d-flex align-items-center">              
              <b-col cols="4" class="border border-dark rounded-left p-2">
                  <div class="d-flex flex-wrap justify-content-around">  
                    <div class="d-flex align-items-center">
                      <h4 class="border border-dark rounded p-2">CoE</h4>
                    </div>
                    <div class="">
                      <p class="mb-0"><small>โครงการย่อยที่กำลังดำเนินการ</small></p>
                      <h2 class="mb-0 text-center">23</h2>
                      <p class="text-muted mt-0 mb-0 float-right"><small>โครงการ</small></p>
                    </div>
                    <div class="">
                      <p class="mb-0"><small>โครงการย่อยที่เสร็จสิ้น</small></p>
                      <h2 class="mb-0 text-center">23</h2>
                      <p class="text-muted mt-0 mb-0 float-right"><small>โครงการ</small></p>
                    </div>
                    
                  </div>  
              </b-col> 
                        
              <b-col cols="8" class="border border-dark rounded-right p-2 ">
                <div class="d-flex flex-wrap justify-content-around">                  
                   <div class="">
                    <p class="mb-0"><small>งบประมาณทั้งหมด (ตามแผน)</small></p>
                    <h2 class="mb-0 text-center">8300</h2>
                    <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                  </div>
                  <div class="">
                    <p class="mb-0"><small>เบิกจ่ายทั้งหมด</small></p>
                    <h2 class="mb-0 text-center">5000</h2>
                    <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                  </div>
                  <div class="">
                    <p class="mb-0 "><small>งบประมาณทคงเหลือ (ตามแผน)</small></p>
                    <h2 class="mb-0 text-center">4500</h2>
                    <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                  </div>
                  <div class="">
                    <p class="mb-0"><small>งบประมาณทคงเหลือ (เบิกจ่ายจริง)</small></p>
                    <h2 class="mb-0 text-center">4500</h2>
                    <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                  </div>
                </div> 
              </b-col>
            </b-row>
          </div>

          <div class="mt-5 mx-3" id="branch">
            <b-row class="mt-3 d-flex align-items-center">              
              <b-col cols="4" class="border border-dark rounded-left p-2">
                  <div class="d-flex flex-wrap justify-content-around">  
                    <div class="d-flex align-items-center">
                      <h4 class="border border-dark rounded p-2">EE</h4>
                    </div>
                    <div class="">
                      <p class="mb-0"><small>โครงการย่อยที่กำลังดำเนินการ</small></p>
                      <h2 class="mb-0 text-center">23</h2>
                      <p class="text-muted mt-0 mb-0 float-right"><small>โครงการ</small></p>
                    </div>
                    <div class="">
                      <p class="mb-0"><small>โครงการย่อยที่เสร็จสิ้น</small></p>
                      <h2 class="mb-0 text-center">23</h2>
                      <p class="text-muted mt-0 mb-0 float-right"><small>โครงการ</small></p>
                    </div>
                    
                  </div>  
              </b-col> 
                        
              <b-col cols="8" class="border border-dark rounded-right p-2 ">
                <div class="d-flex flex-wrap justify-content-around">                  
                   <div class="">
                    <p class="mb-0"><small>งบประมาณทั้งหมด (ตามแผน)</small></p>
                    <h2 class="mb-0 text-center">8300</h2>
                    <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                  </div>
                  <div class="">
                    <p class="mb-0"><small>เบิกจ่ายทั้งหมด</small></p>
                    <h2 class="mb-0 text-center">5000</h2>
                    <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                  </div>
                  <div class="">
                    <p class="mb-0 "><small>งบประมาณทคงเหลือ (ตามแผน)</small></p>
                    <h2 class="mb-0 text-center">4500</h2>
                    <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                  </div>
                  <div class="">
                    <p class="mb-0"><small>งบประมาณทคงเหลือ (เบิกจ่ายจริง)</small></p>
                    <h2 class="mb-0 text-center">4500</h2>
                    <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                  </div>
                </div> 
              </b-col>
            </b-row>
          </div>

          <div class="mt-5 mx-3" id="branch">
            <b-row class="mt-3 d-flex align-items-center">              
              <b-col cols="4" class="border border-dark rounded-left p-2">
                  <div class="d-flex flex-wrap justify-content-around">  
                    <div class="d-flex align-items-center">
                      <h4 class="border border-dark rounded p-2">EE</h4>
                    </div>
                    <div class="">
                      <p class="mb-0"><small>โครงการย่อยที่กำลังดำเนินการ</small></p>
                      <h2 class="mb-0 text-center">23</h2>
                      <p class="text-muted mt-0 mb-0 float-right"><small>โครงการ</small></p>
                    </div>
                    <div class="">
                      <p class="mb-0"><small>โครงการย่อยที่เสร็จสิ้น</small></p>
                      <h2 class="mb-0 text-center">23</h2>
                      <p class="text-muted mt-0 mb-0 float-right"><small>โครงการ</small></p>
                    </div>
                    
                  </div>  
              </b-col> 
                        
              <b-col cols="8" class="border border-dark rounded-right p-2 ">
                <div class="d-flex flex-wrap justify-content-around">                  
                   <div class="">
                    <p class="mb-0"><small>งบประมาณทั้งหมด (ตามแผน)</small></p>
                    <h2 class="mb-0 text-center">8300</h2>
                    <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                  </div>
                  <div class="">
                    <p class="mb-0"><small>เบิกจ่ายทั้งหมด</small></p>
                    <h2 class="mb-0 text-center">5000</h2>
                    <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                  </div>
                  <div class="">
                    <p class="mb-0 "><small>งบประมาณทคงเหลือ (ตามแผน)</small></p>
                    <h2 class="mb-0 text-center">4500</h2>
                    <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                  </div>
                  <div class="">
                    <p class="mb-0"><small>งบประมาณทคงเหลือ (เบิกจ่ายจริง)</small></p>
                    <h2 class="mb-0 text-center">4500</h2>
                    <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                  </div>
                </div> 
              </b-col>
            </b-row>
          </div>

        </b-container>     
      </div>

  </div>
</template>

<script>
import SummaryHead from "@/components/SummaryHead.vue"

export default {
  name: "summary2",
    components :{
        SummaryHead
    },
    data() {
      return {
        selectedYear: "2564",
        optionsYear: [
          { value: '2564', text: '2564' },
          { value: '2563', text: '2563' },
          { value: '2562', text: '2562' },
          { value: '2561', text: '2561' }
        ]
      }
    },

}

</script>

<style>

.summary{
  margin: 20px;
  margin-left: 30px;
  margin-right: 30px;
  
}
.baht{
  float: right;
  margin-bottom: 0px;
  margin-top: 0px;

}
#border{
  display: block;
  padding: 10px;  
  border: 0.3px solid black;
  border-radius: 5px;
  width: 210px;

}


</style>