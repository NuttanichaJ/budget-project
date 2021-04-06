<template>
  <div id="home">
      <div id="contents">
          <div class="header">
            <!-- <h1>หน้าหลัก ฝ่าย/สาขา... {{userID.permission}} </h1> -->
            <h3>หน้าหลัก  {{ user.depart_name}}</h3>
            <!-- <b-form inline class="mt-3">
              <label class="mr-sm-2 mr-lg-2 font-20" for="inline-form-custom-select-pref">ปีงบประมาณ</label>
              <b-form-select id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0" v-model="selectedYear" :options="optionsYear" size="sm"></b-form-select>
            </b-form> -->
          </div>
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
      // selectedYear: '2564',
      // optionsYear: [
      //   { value: '2564', text: '2564' },
      //   { value: '2563', text: '2563' },
      //   { value: '2562', text: '2562' },
      //   { value: '2561', text: '2561' },
      // ],
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
              ['ยอดเงินคงเหลือ', '(ตามแผน)'],
              ['ยอดเงินคงเหลือ','(หลักการ)'], 
              ['ยอดเงินคงเหลือ', '(เบิกจ่ายจริง)']
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
          data: [907900, 907900, 846615, 892023],
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
