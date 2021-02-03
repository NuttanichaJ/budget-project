<template>
  <div class="summary">
      <div>
        <b-form inline class="p-2 mx-3">
          <label class="mr-sm-2" for="select-year">ปีงบประมาณ:</label>
          <b-form-select id="select-year"
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="selectedYear" :options="optionsYear" size="sm">
          </b-form-select>
          <b-button class="ml-auto px-3" variant="primary" @click="$bvModal.show('model-print')">
            <font-awesome-icon :icon="['fas', 'file-excel']" />&nbsp;พิมพ์</b-button>
        </b-form>

        <b-container fluid>
          <b-row class="mt-5 mb-2">
            <b-col class="mr-0" cols="4" >
              <div class="d-flex flex-wrap justify-content-betweet" >
                <div class="mr-2" id="border">
                  <p class="mb-0"><small>โครงการย่อยที่กำลังดำเนินการ</small></p>
                  <h2 class="mb-0 text-center">23</h2>
                  <p class="text-muted mt-0 mb-0 float-right"><small>โครงการ</small></p>
                </div>
                <div class="mr-2" id="border">
                  <p class="mb-0"><small>โครงการย่อยที่เสร็จสิ้น</small></p>
                  <h2 class="mb-0 text-center">50</h2>
                  <p class="text-muted mt-0 mb-0 float-right"><small>โครงการ</small></p>
                </div>
              </div>  
            </b-col>
            <b-col class="ml-auto" cols="7">              
              <div class="d-flex flex-wrap justify-content-around">
                <div class="mr-1" id="border">
                  <p class="mb-0"><small>งบประมาณทั้งหมด (ตามแผน)</small></p>
                  <h2 class="mb-0 text-center">8300</h2>
                  <p class="text-muted mt-0 mb-0 float-right" ><small>บาท</small></p>
                </div>
                <div class="mr-1" id="border">
                  <p class="mb-0"><small>เบิกจ่ายทั้งหมด</small></p>
                  <h2 class="mb-0 text-center">5000</h2>
                  <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                </div>
                <div class="mr-1" id="border">
                  <p class="mb-0"><small>งบประมาณทคงเหลือ (ตามแผน)</small></p>
                  <h2 class="mb-0 text-center">4500</h2>
                  <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                </div>
                <div class="" id="border">
                  <p class="mb-0"><small>งบประมาณทคงเหลือ (เบิกจ่ายจริง)</small></p>
                  <h2 class="mb-0 text-center">4500</h2>
                  <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
                </div>
              </div>            

            </b-col>
          </b-row>

        </b-container>     
      </div>



      <!-- model พิมพ์ -->
      <b-modal id="model-print" hide-footer centered>
        <template #modal-title>
          <font-awesome-icon :icon="['fas', 'file-excel']" />&nbsp;&nbsp;พิมพ์
        </template>
        <div class="d-block text-center">
          <b-row>
            <b-col cols="3">
              <label class="mr-sm-2" for="select-printYear">ปีงบประมาณ:</label>
            </b-col>
            <b-col cols="9"> 
              <b-form inline class="p-2 mx-3">
                <b-form-select id="select-printYear" class="mb-2 mr-sm-2 mb-sm-0" 
                  v-model="selectedPrintYear" :options="optionsPrintYear"
                  multiple :select-size="4" size="sm" value-field="text">
                </b-form-select>
              </b-form>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="3">
              <label class="mr-sm-2" for="select-printBranch">ฝ่าย/สาขา:</label>
            </b-col>
            <b-col cols="9"> 
              <b-form inline class="p-2 mx-3">
                <b-form-select id="select-printBranch" class="mb-2 mr-sm-2 mb-sm-0"            
                  v-model="selectedPrintBranch" :options="optionsPrintBranch" 
                  multiple :select-size="4" size="sm" value-field="text">
                </b-form-select>
              </b-form>
            </b-col>
          </b-row>
          
          <b-row>
            <b-col cols="3">
              <label class="mr-sm-2" for="select-printBranch">ผู้รับผิดชอบ:</label>
            </b-col>
            <b-col cols="9"> 
              <b-form inline class="p-2 mx-3">
                <b-form-select id="select-printOwner" class="mb-2 mr-sm-2 mb-sm-0"            
                  v-model="selectedPrintOwner" :options="optionsPrintOwner" 
                  multiple :select-size="4" size="sm" value-field="text">
                </b-form-select>
              </b-form>
            </b-col>
          </b-row>          
          
          <div class="mt-3">ผู้รับผิดชอบ: {{ selectedPrintOwner }}</div>

        </div>
        <b-row class="justify-content-md-center"> 
          <b-button class="mt-3 mr-2 px-3 w-25" variant="success" @click="$bvModal.hide('model-print')">พิมพ์</b-button>
          <b-button class="mt-3 ml-2 px-3 w-25" variant="danger" @click="$bvModal.hide('model-print')">ยกเลิก</b-button>
        </b-row> 
        
      </b-modal>
          
      

  </div>
</template>

<script>
export default {
    name: "SummaryHead",
    data() {
      return {
        selectedYear: "2564",
        optionsYear: [
          { value: '2564', text: '2564' },
          { value: '2563', text: '2563' },
          { value: '2562', text: '2562' },
          { value: '2561', text: '2561' }
        ],
        selectedPrintYear: "ทั้งหมด",
        optionsPrintYear: [
          { value: 'all', text: 'ทั้งหมด' },
          { value: '2564', text: '2564' },
          { value: '2563', text: '2563' },
          { value: '2562', text: '2562' },
          { value: '2561', text: '2561' }
          
        ],
        selectedPrintBranch: "branchAll",
        optionsPrintBranch: [
          { value: 'branchAll', text: 'ทั้งหมด' },
          { value: 'CoE', text: 'CoE' },
          { value: 'EE', text: 'EE' },
          { value: 'ฝ่ายวิชาการ', text: 'ฝ่ายวิชาการ' }
        ],
        selectedPrintOwner: 'userAll',
        optionsPrintOwner: [          
          { value: 'userAll', text: 'ทั้งหมด' },
          { value: 'user1', text: 'ผู้รับผิดชอบคนที่1' },
          { value: 'user2', text: 'ผู้รับผิดชอบคนที่2' },
          { value: 'user3', text: 'ผู้รับผิดชอบคนที่3' },
          { value: 'user4', text: 'ผู้รับผิดชอบคนที่4' }
        ],
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
  background-color: white;

}


</style>