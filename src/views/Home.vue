<template>
  <div id="home">
      <div id="contents">
      
          <div class="header">
            <h1>หน้าหลัก ฝ่าย/สาขา...</h1>
            <b-form inline>
              <label class="mr-sm-2" for="inline-form-custom-select-pref">ปีงบประมาณ: </label>
              <b-form-select id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0" v-model="selectedYear" :options="optionsYear" size="sm"></b-form-select>
            </b-form>
          </div>

        <b-row class="row">
          <b-col xs="12" lg="6" xl="12">
            <Widget class="h-100 mb-0" title="">
              <div class="d-flex justify-content-between align-items-center mb-lg">
              <h4>งบประมาณ</h4>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h2>5,438,020</h2><p class="text-muted mb-0 mr"><small>งบประมาณทั้งหมด (ตามแผน)</small></p>
              </div>
              <div class="mt">
                <h2>78,505</h2><p class="text-muted mb-0"><small>เบิกจ่ายทั้งหมด</small></p>
              </div>
              <div class="mt">
                <h2>5,538,020</h2><p class="text-muted mb-0 mr"><small>งบประมาณทคงเหลือ (ตามแผน)</small></p>
              </div>
              <div class="mt">
                <h2>5,459,515</h2><p class="text-muted mb-0 mr"><small>งบประมาณทคงเหลือ (เบิกจ่ายจริง)</small></p>
              </div>
            </div>
            </Widget>
          </b-col>
          <b-col class="col" xs="12" lg="6" xl="12">
            <Widget class="h-100 mb-0" title="">
              <apexchart type="bar" height="350" :series="cd.apex.column.series" :options="cd.apex.column.options"/>
            </Widget>
          </b-col>
        </b-row>
        <b-row class="row">
          <b-col xs="12" lg="6" xl="12">
            <Widget class="h-100 mb-0" title="">
              <div class="d-flex justify-content-between align-items-center mb-lg">
              <h4>โครงการ</h4>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h2>21</h2><p class="text-muted mb-0 mr"><small>โครงการที่กำลังดำเนินการ</small></p>
              </div>
              <div class="mt">
                <h2>32</h2><p class="text-muted mb-0"><small>โครงการที่เสร็จสิ้น</small></p>
              </div>
              <div class="mt">
                <h2>11</h2><p class="text-muted mb-0 mr"><small>โครงการที่ยังไม่ได้ดำเนินการ</small></p>
              </div>
              <div class="mt">
                <h2>64</h2><p class="text-muted mb-0 mr"><small>โครงการทั้งหมด</small></p>
              </div>
            </div>
            </Widget>
          </b-col>
          <b-col class="col" xs="12" lg="6" xl="12">
            <Widget class="h-100 mb-0" title="">
              <apexchart type="pie" height="300" :series="cd.apex.pie.series" :options="cd.apex.pie.options"/>
            </Widget>
          </b-col>
        </b-row>
      </div>
    </div>
  
</template>

<script>
import Widget from '../components/Widget.vue';
import {chartData} from './chartdata';
export default {
  name: 'Home',
  components: {
    Widget
  },
  data() {
      return {
      cd: chartData,
      selectedYear: '2564',
        optionsYear: [
          { value: '2564', text: '2564' },
          { value: '2563', text: '2563' },
          { value: '2562', text: '2562' },
          { value: '2561', text: '2561' },
          
        ]
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
</style>
