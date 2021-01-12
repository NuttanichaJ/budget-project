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
              <h4>4,332</h4>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h2>+830</h2><p class="text-muted mb-0 mr"><small>Logins</small></p>
              </div>
              <div class="mt">
                <h2>0.5%</h2><p class="text-muted mb-0"><small>Sign Out</small></p>
              </div>
              <div class="mt">
                <h2>4.5%</h2><p class="text-muted mb-0 mr"><small>Rate</small></p>
              </div>
              <div class="mt">
                <h2>4.5%</h2><p class="text-muted mb-0 mr"><small>Rate</small></p>
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
              <h4>4,332</h4>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h2>+830</h2><p class="text-muted mb-0 mr"><small>Logins</small></p>
              </div>
              <div class="mt">
                <h2>0.5%</h2><p class="text-muted mb-0"><small>Sign Out</small></p>
              </div>
              <div class="mt">
                <h2>4.5%</h2><p class="text-muted mb-0 mr"><small>Rate</small></p>
              </div>
              <div class="mt">
                <h2>4.5%</h2><p class="text-muted mb-0 mr"><small>Rate</small></p>
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
