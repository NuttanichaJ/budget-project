<template>
  <div id="home">
      <div id="contents">
          <div class="header">
            <!-- <h1>หน้าหลัก ฝ่าย/สาขา... {{userID.permission}} </h1> -->
            <h3>หน้าหลัก  {{ user.depart_name}}</h3>
            <b-form inline class="mt-3">
              <label class="mr-sm-2 mr-lg-2 font-20" for="inline-form-custom-select-pref">ปีงบประมาณ</label>
              <b-form-select id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0" v-model="selectedYear" :options="optionsYear" size="sm"></b-form-select>
            </b-form>
          </div>

        <!-- <b-row class="row" >
          <b-col xs="12" lg="6" xl="12">
              <div class="d-flex justify-content-between align-items-center mb-lg">
              <h4 class="ml-0 mt-0 mb-3">งบประมาณ</h4>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="d-lg-flex flex-wrap justify-content-between mr-sm-0">
              <div class="mt-sm-3">
                <h2 class="">5,438,020</h2><p class="text-muted mb-0 mr"><small>งบประมาณทั้งหมด (ตามแผน)</small></p>
              </div>
              <div class="mt-sm-3">
                <h2 class="">78,505</h2><p class="text-muted mb-0"><small>เบิกจ่ายทั้งหมด</small></p>
              </div>
              <div class="mt-sm-3">
                <h2 class="">5,538,020</h2><p class="text-muted mb-0 mr"><small>งบประมาณคงเหลือ (ตามแผน)</small></p>
              </div>
              <div class="mt-sm-3">
                <h2 class="">5,459,515</h2><p class="text-muted mb-0 mr"><small>งบประมาณคงเหลือ (เบิกจ่ายจริง)</small></p>
              </div>
            </div>
          </b-col>
          <b-col class="col" xs="12" lg="6" xl="12">
            
          </b-col>
        </b-row> -->
        <!-- จำนวนโครงการ -->
        <!-- <b-row class="row">
          <b-col xs="12" lg="6" xl="12">
              <div class="d-flex justify-content-between align-items-center mb-lg">
                <h4 class="ml-0 mt-0 mb-3">จำนวนโครงการ</h4>
                <i class="la la-arrow-right text-primary la-lg rotate-315" />
              </div>
              <div class="d-flex flex-wrap justify-content-between mt-sm-1">
                <div class="mt">
                  <h2 class="font-cent">21</h2><p class="text-muted mb-0 mr font-cent"><small>โครงการที่กำลังดำเนินการ</small></p>
                </div>
                <div class="mt">
                  <h2 class="font-cent">32</h2><p class="text-muted mb-0 font-cent"><small>โครงการที่เสร็จสิ้น</small></p>
                </div>
                <div class="mt">
                  <h2 class="font-cent">11</h2><p class="text-muted mb-0 mr font-cent"><small>โครงการที่ยังไม่ได้ดำเนินการ</small></p>
                </div>
                <div class="mt">
                  <h2 class="font-cent">64</h2><p class="text-muted mb-0 mr font-cent"><small>โครงการทั้งหมด</small></p>
                </div>
              </div>
            
          </b-col>
          
        </b-row> -->
      </div>

      <div class="mt-4">
        <b-row align-h="center">
          
            <b-col col lg="5" class="mr-3 shadow p-3 mb-1 bg-white rounded">
              <h5>งบประมาณของโครงการทั้งหมด</h5>
              <apexchart width="100%" type="bar" :options="chartBudgetOptions" :series="dataBudget"></apexchart>
            </b-col>

            <b-col lg="5" class="ml-3 shadow p-3 mb-1 bg-white rounded">
              <h5>จำนวนโครงการ</h5>
              <apexchart width="90%" type="donut" :options="projectOption" :series="dataProject"></apexchart>
            </b-col>
        </b-row>
      </div>


    </div>
  
</template>

<script>
// import Widget from '../components/Widget.vue';
// import {chartData} from './chartdata';
export default {
  name: 'Home',
  components: {
    
  },
  data() {
      return {
        user : this.$store.state.user,

      // cd: chartData,
      selectedYear: '2564',
      optionsYear: [
        { value: '2564', text: '2564' },
        { value: '2563', text: '2563' },
        { value: '2562', text: '2562' },
        { value: '2561', text: '2561' },
      ],
        // data dashbord
        chartBudgetOptions: {
          plotOptions: {
            bar: {
              columnWidth: '30%',
            }
          },
          dataLabels: {
            enabled: false
            },
          xaxis: {
            categories: [
              ['งบประมาณทั้งหมด','(ตามแผน)'],
              ['เบิกจ่ายทั้งหมด', ''],
              ['งบประมาณคงเหลือ','(ตามแผน)'], 
              ['งบประมาณคงเหลือ', '(เบิกจ่ายจริง)']
            ]
          },
          yaxis: {
            title: {
              text: "จำนวนเงิน",
              style: {
                fontSize: '14px'
              }
            }
          }
        },
        
        // series data
        dataBudget:[{
          name: 'งบประมาณ',
          data: [54380, 78505, 55380, 54595],
        }],

        // number of project
        projectOption: {
          legend: {
            position: 'bottom'
          },
          plotOptions: {
            pie: {
              size: '65%',
            }
          },
          labels: ['โครงการย่อยที่เสร็จสิ้น', 'โครงการย่อยที่กำลังดำเนินการ', 'โครงการที่ยังไม่ได้ดำเนินการ',],
          colors: ['#4CAF50','#F9CE1D', '#EA3546',],
        }, 
        dataProject: [ 21, 32, 11, ],  // series data
        }
      
    },
   
  
}
</script>

<style lang="scss" scoped>
#home {
  margin: 20px;
}

.row {
  margin-bottom: 20px;
}
.col {
  margin-bottom: 10px;
}
.font{
  font-size: 18px;
  color: black;

}
.font-cent{
  text-align: center;
  font-size: 20pz;
}
small{
  font-size: 16px;
}
.font-20{
  font-size: 20px;
  color: black;
}
#chart {
  max-width: 650px;
  margin: 35px auto;
}
.budgetchart{
  border: black solid 1px;
  background: white;
  width: auto;
  height: auto;
}
.numProjectchart{
  border: black solid 1px;
  background: white;
  width: auto;
  height: auto;
}
</style>
