<template>
  <div id="home">
      <div id="contents">
          <div class="header">
            <!-- <h1>หน้าหลัก ฝ่าย/สาขา... {{userID.permission}} </h1> -->
            <h3>หน้าหลัก  {{ user.depart_name}}</h3>
          </div>
      </div>

      <!-- <div class="mt-4">
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
      </div> -->

      <div class="mt-5">
        <b-card-group deck>
          <b-card>
            <b-card-text>
              โครงการหลัก1
            </b-card-text>
            <template #footer>
              <small class="text-muted">แก้ไขล่าสุด</small>
            </template>
          </b-card>
          
          <b-card>
            <b-card-text>
              โครงการหลัก2
            </b-card-text>
            <template #footer>
              <small class="text-muted">แก้ไขล่าสุด</small>
            </template>
          </b-card>

          <b-card>
            <b-card-text>
              โครงการหลัก3 เ้่า่กดาว่รไำพบะี่งเวทดกห่ิพกนพยะัวีน่ใมืิทอแิกหอเัีำรพนะยัวีา
            </b-card-text>
            <template #footer>
              <small class="text-muted">แก้ไขล่าสุด</small>
            </template>
          </b-card>

          <b-card>
            <b-card-text>
              โครงการหลัก4
            </b-card-text>
            <template #footer>
              <small class="text-muted">แก้ไขล่าสุด</small>
            </template>
          </b-card>
        </b-card-group>
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
