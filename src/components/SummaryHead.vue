<template>
  <div class="summary">
    <div>
        <b-form inline class="p-2 mx-3 nav">
            <label class="mr-sm-2" for="select-year">ปีงบประมาณ</label>
            <b-form-select id="select-year" class="mb-2 mr-sm-2 mb-sm-0"
              v-model="selectedYear" :options="optionsYear" size="sm" >
            </b-form-select>
            <b-button class="ml-auto px-3 btnprint " variant="primary" @click="$bvModal.show('model-print')">
            <font-awesome-icon :icon="['fas', 'file-excel']" class="mr-2" />พิมพ์</b-button>
        </b-form>
      
    <!-- model พิมพ์ -->
      
      <b-modal id="model-print" hide-footer centered>
        <template #modal-title>
          <font-awesome-icon :icon="['fas', 'file-excel']" class="mr-2" />พิมพ์
        </template>
        <div class="d-block text-center">
          <b-row class="pt-5 pb-5">
            <b-col cols="3">
              <label class="mr-sm-2" for="select-printYear">ปีงบประมาณ</label>
            </b-col>
            <b-col cols="9"> 
              <b-form inline class="p-2 mx-3">
                <vue-multi-select 
                  ref="multiSelect"
                  v-model="valuesPrintYear"
                  search
                  historyButton
                  :options="options"
                  :filters="filters"
                  :btnLabel="btnLabelYear"
                  searchPlaceholder="ค้นหาปีงบประมาณ"
                  position=''
                  @open="open"
                  @close="close"
                  :selectOptions="dataPrintYear">
                  <template v-slot:option="{option}" class="w-25">
                    <input type="checkbox" :checked="option.selected"/>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;{{option.name}}</span>
                  </template>
                </vue-multi-select>
              </b-form>
            </b-col>
          </b-row>

          <b-row class="pt-5 pb-5">
            <b-col cols="3">
              <label class="mr-sm-2" for="select-printBranch">ฝ่าย/สาขา</label>
            </b-col>
            <b-col cols="9"> 
              <b-form inline class="p-2 mx-3">
                <vue-multi-select 
                  ref="multiSelect"
                  v-model="valuesPrintBranch"
                  search
                  historyButton
                  :options="options"
                  :filters="filters"
                  :btnLabel="btnLabelBranch"
                  searchPlaceholder="ค้นหาฝ่าย/สาขาวิชา"
                  position=''
                  @open="open"
                  @close="close"
                  :selectOptions="dataPrintBranch">
                  <template v-slot:option="{option}">
                    <input type="checkbox" :checked="option.selected"/>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;{{option.name}}</span>
                  </template>
                </vue-multi-select>
              </b-form>
            </b-col>
          </b-row>
          
          <b-row class="pt-5 pb-5">
            <b-col cols="3">
              <label class="mr-sm-2 " for="select-printBranch">ผู้รับผิดชอบ</label>
            </b-col>
            <b-col cols="9"> 
              <b-form inline class="p-2 mx-3">
                <vue-multi-select
                  ref="multiSelect"
                  v-model="valuesPrintOwner"
                  search
                  historyButton
                  :options="options"
                  :filters="filters"
                  :btnLabel="btnLabelOwner"
                  searchPlaceholder="ค้นหาชื่อผู้รับผิดชอบ"
                  position=''
                  @open="open"
                  @close="close"
                  :selectOptions="dataPrintOwner">
                  <template v-slot:option="{option}">
                    <input type="checkbox" :checked="option.selected"/>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;{{option.name}}</span>
                  </template>
                </vue-multi-select>
              </b-form>
            </b-col>
          </b-row>

        </div>
        <b-row class="justify-content-md-center"> 
          <b-button class="mt-3 mr-2 px-3 w-25" variant="success" @click="$bvModal.hide('model-print')">พิมพ์</b-button>
          <b-button class="mt-3 ml-2 px-3 w-25" variant="danger" @click="$bvModal.hide('model-print')">ยกเลิก</b-button>
        </b-row> 
        
      </b-modal>
      
    </div>

    <!-- สรุปยอดโครงการ -->
    <div>
      <b-container fluid>
        <b-row class="mt-2 mb-2">
          <b-col class="mr-0" xs="12" lg="12">
            <div class="d-flex justify-content-betweet" >
              <div class="mr-2" id="border">
                <p class="mb-0"><small>โครงการย่อยที่กำลังดำเนินการ</small></p>
                <h2 class="mb-0 text-center">21</h2>
                <p class="text-muted mt-0 mb-0 float-right"><small>โครงการ</small></p>
              </div>
              <div class="" id="border">
                <p class="mb-0"><small>โครงการย่อยที่เสร็จสิ้น</small></p>
                <h2 class="mb-0 text-center">32</h2>
                <p class="text-muted mt-0 mb-0 float-right"><small>โครงการ</small></p>
              </div>
            </div>  
          </b-col>
        </b-row>
        <b-row>
          <b-col class="" xs="12" lg="12">
            <div class="d-flex flex-wrap">
              <div class="mr-2 mb-1" id="border">
                <p class="mb-0"><small>งบประมาณทั้งหมด (ตามแผน)</small></p>
                <h2 class="mb-0 text-center">5,438,020</h2>
                <p class="text-muted mt-0 mb-0 float-right" ><small>บาท</small></p>
              </div>
              <div class="mr-2 mb-1" id="border">
                <p class="mb-0"><small>เบิกจ่ายทั้งหมด</small></p>
                <h2 class="mb-0 text-center">78,505</h2>
                <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
              </div>
              <div class="mr-2 mb-1" id="border">
                <p class="mb-0"><small>งบประมาณคงเหลือ (ตามแผน)</small></p>
                <h2 class="mb-0 text-center">5,538,020</h2>
                <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
              </div>
              <div class="" id="border">
                <p class="mb-0"><small>งบประมาณคงเหลือ (เบิกจ่ายจริง)</small></p>
                <h2 class="mb-0 text-center">5,459,515</h2>
                <p class="text-muted mt-0 mb-0 float-right"><small>บาท</small></p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>     
    </div>

  </div>
</template>

<script>
import vueMultiSelect from 'vue-multi-select';
import 'vue-multi-select/dist/lib/vue-multi-select.css';

export default {
    name: "SummaryHead",
    components: {
      vueMultiSelect,
    },
    data() {
      return {
        selectedYear: "2564",
        optionsYear: [
          { value: '2564', text: '2564' },
          { value: '2563', text: '2563' },
          { value: '2562', text: '2562' },
          { value: '2561', text: '2561' }
        ],
        
        btnLabelYear: values => `เลือกปีงบประมาณ (${values.length})`,
        valuesPrintYear: [],
        dataPrintYear: [{
          list: [
            { name: '2564' },
            { name: '2563' },
            { name: '2562' },
            { name: '2561' },
            { name: '2560' },
          ],
        }],
        btnLabelOwner: values => `เลือกผู้รับผิดชอบ (${values.length})`,
        valuesPrintOwner: [],
        dataPrintOwner:[{
          list: [
            {name: 'ผู้ใช้งานคนที่1'},
            {name: 'ผู้ใช้งานคนที่2'},
            {name: 'ผู้ใช้งานคนที่3'},
            {name: 'ผู้ใช้งานคนที่4'},
            {name: 'ผู้ใช้งานคนที่5'},
          ]
        }],
        btnLabelBranch: values => `เลือกฝ่าย/สาขาวิชา (${values.length})`,
        valuesPrintBranch: [],
        dataPrintBranch:[{
          list: [
            {name: 'CoE'},
            {name: 'EE'},
            {name: 'CE'},
            {name: 'ฝ่ายวิชาการ'},
          ]
        }],
        filters: [{
          nameAll: 'เลือกทั้งหมด',
          nameNotAll: 'ยกเลิกเลือกทั้งหมด',
          func() {
            return true;
          },      
        }],
        options: {
          multi: true,
          groups: true,
        },
    };
  }
}
    

</script>

<style lang="scss" scoped>

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
  width: 250px;
  background-color: white;

}
.show{
  display: none;
}
.nav .btnprint{
  font-size: 18px;
}
small{
  font-size: 16px;
}

</style>