<template>
  <div id="summary">
    <div>
      <div>
        <h5 class="mb-0">งบประมาณ</h5>
      </div>
      <b-container fluid>
        <b-row class="mt-1 d-flex justify-content-betweet">
          <b-col class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white">
            <p class="mb-0 pl-1 font16">งบประมาณทั้งหมด (ตามแผน)</p>
            <p class="mb-0 text-center font24 mt-2">
              <strong>{{ AllamountData.totalMP_Budget.toLocaleString() }}</strong>
            </p>
            <p class="text-muted mt-0 mb-0 float-right font16">บาท</p>
          </b-col>
          <b-col class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white">
            <p class="mb-0 pl-1 font16">งบประมาณคงเหลือตามแผน</p>
            <p class="mb-0 text-center font24 mt-2">
              <strong>{{ AllamountData.totalMP_Total_Amount.toLocaleString() }}</strong>
            </p>
            <p class="text-muted mt-0 mb-0 float-right font16">บาท</p>
          </b-col>
          <b-col class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white">
            <p class="mb-0 pl-1 font16">งบประมาณคงเหลือจากหลักการ</p>
            <p class="mb-0 text-center font24 mt-2">
              <strong>{{ AllamountData.totalMP_Total_From_Priciple.toLocaleString() }}</strong>
            </p>
            <p class="text-muted mt-0 mb-0 float-right font16">บาท</p>
          </b-col>
          <b-col class="p-2 mb-1 mr-2 border border-dark rounded shadow bg-white">
            <p class="mb-0 pl-1 font16">งบประมาณคงเหลือจากเบิกจ่ายจริง</p>
            <p class="mb-0 text-center font24 mt-2">
              <strong>{{ AllamountData.totalMP_Total_From_Disburse.toLocaleString() }}</strong>
            </p>
            <p class="text-muted mt-0 mb-0 float-right font16">บาท</p>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div>
      <div>
        <h5 class="ml-0 mt-3 mb-0 p-0">จำนวนโครงการ</h5>
      </div>
      <b-container fluid>
        <b-row class="mt-1 d-flex justify-content-betweet">
          <b-col class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white">
            <p class="mb-0 pl-1 font16">จำนวนโครงการทั้งหมด</p>
            <p class="mb-0 text-center font24 mt-2">
              <strong>{{ AllstatusData.All.toLocaleString() }}</strong>
            </p>
            <p class="text-muted mt-0 mb-0 float-right font16">โครงการ</p>
          </b-col>
          <b-col class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white">
            <p class="mb-0 pl-1 font16">โครงการที่ดำเนินการเสร็จสิ้น</p>
            <p class="mb-0 text-center font24 mt-2">
              <strong>{{ AllstatusData.Done.toLocaleString() }}</strong>
            </p>
            <p class="text-muted mt-0 mb-0 float-right font16">โครงการ</p>
          </b-col>
          <b-col class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white">
            <p class="mb-0 pl-1 font16">โครงการที่กำลังดำเนินการ</p>
            <p class="mb-0 text-center font24 mt-2">
              <strong>{{ AllstatusData.Processing.toLocaleString() }}</strong>
            </p>
            <p class="text-muted mt-0 mb-0 float-right font16">โครงการ</p>
          </b-col>
          <b-col class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white">
            <p class="mb-0 pl-1 font16">โครงการที่ยังไม่ดำเนินการ</p>
            <p class="mb-0 text-center font24 mt-2">
              <strong>{{ AllstatusData.No.toLocaleString() }}</strong>
            </p>
            <p class="text-muted mt-0 mb-0 float-right font16">โครงการ</p>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- budget -->
    <div class="mt-3">
      <div class="mt-5 mx-2">
        <b-row class="mr-0 shadow-sm p-3 mb-1 bg-white rounded shadow bg-white">
          <b-col lg="6" md="12" sm="12" class="mt-lg-0 mt-md-3 mt-sm-3">
            <h6 class="mb-3">
              <strong>สรุปงบประมาณของกองบริหารงานคณะ</strong>
            </h6>
            <apexchart
              width="100%"
              type="bar"
              :options="chartBudgetOptions"
              :series="seriesBudgetCentral"
            ></apexchart>
          </b-col>
          <b-col col lg="6" md="12" sm="12" class="mt-lg-0">
            <h6 class="mb-3"><strong>สรุปงบประมาณของสาขาวิชา</strong></h6>
            <apexchart
              width="100%"
              type="bar"
              :options="chartBudgetOptions"
              :series="seriesBudgetBranch"
            ></apexchart>
          </b-col>
        </b-row>
        <b-row
          align-h="center"
          class="mt-3 mr-0 shadow-sm p-3 mb-1 bg-white rounded shadow bg-white">
          <b-col lg="6" md="12" sm="12" class="mt-lg-0 mt-md-3 mt-sm-3">
            <h6 class="mb-3 p-3">
              <strong>สรุปจำนวนโครงการของกองบริหารงานคณะ</strong>
            </h6>
            <apexchart
              width="80%"
              type="donut"
              :options="projectOption"
              :series="dataStatusProjectCenter"
            ></apexchart>
          </b-col>
          <b-col
            lg="6"
            md="12"
            sm="12"
            class="mt-lg-0 justify-content-md-center"
          >
            <h6 class="mb-3 p-3">
              <strong>สรุปจำนวนโครงการของสาขาวิชา</strong>
            </h6>
            <apexchart
              width="80%"
              type="donut"
              :options="projectOption"
              :series="dataStatusProjectBranch"
            ></apexchart>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="mt-5 shadow p-3 mb-1 bg-white rounded">
      <h6 class="ml-0 mt-2 mb-0 p-0 font18"><strong>รายละเอียดโครงการของ</strong></h6>
      <div class="mt-3">
        <b-tabs card content-class="mt-3 text-dark" active-nav-item-class="font-weight-bold text-dark" fill>
            <b-tab title="กองบริหารงานคณะ" @click="setFilterDataTable(seletedCenterD_IDNow)">
            <div>
              <b-tabs content-class="mt-3" fill>
                <b-tab
                  v-for="item in Department"
                  :key="item.D_ID"
                  :title="item.D_Name"
                  @click.prevent="setFilterDataTable(item.D_ID)"
                >
                  <div>
                    <div>
                      <h4 class="mb-3">{{ item.D_Name }}</h4>
                    </div>

                    <div>
                      <div>
                        <h6 class="ml-0 mt-2 mb-0 p-0">สรุปงบประมาณ</h6>
                      </div>
                      <b-container fluid>
                        <b-row class="mt-1 d-flex justify-content-betweet">
                          <b-col
                            class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white"
                          >
                            <p class="mb-0 pl-1 font14">
                              งบประมาณทั้งหมด (ตามแผน)
                            </p>
                            <p class="mb-0 text-center font24 mt-2">
                              <strong>{{
                                amountData[item.D_ID].totalMP_Budget.toLocaleString()
                              }}</strong>
                            </p>
                            <p class="text-muted mt-0 mb-0 float-right font14">
                              บาท
                            </p>
                          </b-col>
                          <b-col
                            class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white"
                          >
                            <p class="mb-0 pl-1 font14">
                              งบประมาณคงเหลือตามแผน
                            </p>
                            <p class="mb-0 text-center font24 mt-2">
                              <strong>{{
                                amountData[item.D_ID].totalMP_Total_Amount.toLocaleString()
                              }}</strong>
                            </p>
                            <p class="text-muted mt-0 mb-0 float-right font14">
                              บาท
                            </p>
                          </b-col>
                          <b-col
                            class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white"
                          >
                            <p class="mb-0 pl-1 font14">
                              งบประมาณคงเหลือจากหลักการ
                            </p>
                            <p class="mb-0 text-center font24 mt-2">
                              <strong>{{
                                amountData[item.D_ID]
                                  .totalMP_Total_From_Priciple.toLocaleString()
                              }}</strong>
                            </p>
                            <p class="text-muted mt-0 mb-0 float-right font14">
                              บาท
                            </p>
                          </b-col>
                          <b-col
                            class="p-2 mb-1 mr-2 border border-dark rounded shadow bg-white"
                          >
                            <p class="mb-0 pl-1 font14">
                              งบประมาณคงเหลือจากเบิกจ่ายจริง
                            </p>
                            <p class="mb-0 text-center font24 mt-2">
                              <strong>{{
                                amountData[item.D_ID]
                                  .totalMP_Total_From_Disburse.toLocaleString()
                              }}</strong>
                            </p>
                            <p class="text-muted mt-0 mb-0 float-right font14">
                              บาท
                            </p>
                          </b-col>
                        </b-row>
                      </b-container>
                    </div>
                    <div>
                      <div>
                        <h6 class="ml-0 mt-2 mb-0 p-0">จำนวนโครงการ</h6>
                      </div>
                      <b-container fluid>
                        <b-row class="mt-1 d-flex justify-content-betweet">
                          <b-col
                            class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white"
                          >
                            <p class="mb-0 pl-1 font14">จำนวนโครงการทั้งหมด</p>
                            <p class="mb-0 text-center font24 mt-2">
                              <strong>{{ statusData[item.D_ID].All.toLocaleString() }}</strong>
                            </p>
                            <p class="text-muted mt-0 mb-0 float-right font14">
                              โครงการ
                            </p>
                          </b-col>
                          <b-col
                            class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white"
                          >
                            <p class="mb-0 pl-1 font14">
                              โครงการที่ดำเนินการเสร็จสิ้น
                            </p>
                            <p class="mb-0 text-center font24 mt-2">
                              <strong>{{ statusData[item.D_ID].Done.toLocaleString() }}</strong>
                            </p>
                            <p class="text-muted mt-0 mb-0 float-right font14">
                              โครงการ
                            </p>
                          </b-col>
                          <b-col
                            class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white"
                          >
                            <p class="mb-0 pl-1 font14">
                              โครงการที่กำลังดำเนินการ
                            </p>
                            <p class="mb-0 text-center font24 mt-2">
                              <strong>{{
                                statusData[item.D_ID].Processing.toLocaleString()
                              }}</strong>
                            </p>
                            <p class="text-muted mt-0 mb-0 float-right font14">
                              โครงการ
                            </p>
                          </b-col>
                          <b-col
                            class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white"
                          >
                            <p class="mb-0 pl-1 font14">
                              โครงการที่ยังไม่ดำเนินการ
                            </p>
                            <p class="mb-0 text-center font24 mt-2">
                              <strong>{{ statusData[item.D_ID].No.toLocaleString() }}</strong>
                            </p>
                            <p class="text-muted mt-0 mb-0 float-right font14">
                              โครงการ
                            </p>
                          </b-col>
                        </b-row>
                      </b-container>
                    </div>
                    
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </b-tab>

          <b-tab title="สาขาวิชา" @click.prevent="setFilterDataTable(seletedBranchD_IDNow)">
            <div >
              <b-tabs content-class="mt-3 " fill>
                <b-tab
                  v-for="item in BranchDepartment"
                  :key="item.D_ID"
                  :title="item.D_Name"
                  @click.prevent="setFilterDataTable(item.D_ID)"
                >
                  <div>
                    <div>
                      <h4 class="mb-3">{{ item.D_Name }}</h4>
                    </div>

                    <div>
                      <div>
                        <h6 class="ml-0 mt-2 mb-0 p-0">สรุปงบประมาณ</h6>
                      </div>
                      <b-container fluid>
                        <b-row class="mt-1 d-flex justify-content-betweet">
                          <b-col
                            class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white"
                          >
                            <p class="mb-0 pl-1 font14">
                              งบประมาณทั้งหมด (ตามแผน)
                            </p>
                            <p class="mb-0 text-center font24 mt-2">
                              <strong>{{
                                amountData[item.D_ID].totalMP_Budget.toLocaleString()
                              }}</strong>
                            </p>
                            <p class="text-muted mt-0 mb-0 float-right font14">
                              บาท
                            </p>
                          </b-col>
                          <b-col
                            class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white"
                          >
                            <p class="mb-0 pl-1 font14">
                              งบประมาณคงเหลือตามแผน
                            </p>
                            <p class="mb-0 text-center font24 mt-2">
                              <strong>{{
                                amountData[item.D_ID].totalMP_Total_Amount.toLocaleString()
                              }}</strong>
                            </p>
                            <p class="text-muted mt-0 mb-0 float-right font14">
                              บาท
                            </p>
                          </b-col>
                          <b-col
                            class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white"
                          >
                            <p class="mb-0 pl-1 font14">
                              งบประมาณคงเหลือจากหลักการ
                            </p>
                            <p class="mb-0 text-center font24 mt-2">
                              <strong>{{
                                amountData[item.D_ID]
                                  .totalMP_Total_From_Priciple.toLocaleString()
                              }}</strong>
                            </p>
                            <p class="text-muted mt-0 mb-0 float-right font14">
                              บาท
                            </p>
                          </b-col>
                          <b-col
                            class="p-2 mb-1 mr-2 border border-dark rounded shadow bg-white"
                          >
                            <p class="mb-0 pl-1 font14">
                              งบประมาณคงเหลือจากเบิกจ่ายจริง
                            </p>
                            <p class="mb-0 text-center font24 mt-2">
                              <strong>{{
                                amountData[item.D_ID]
                                  .totalMP_Total_From_Disburse.toLocaleString()
                              }}</strong>
                            </p>
                            <p class="text-muted mt-0 mb-0 float-right font14">
                              บาท
                            </p>
                          </b-col>
                        </b-row>
                      </b-container>
                    </div>
                    <div>
                      <div>
                        <h6 class="ml-0 mt-2 mb-0 p-0">จำนวนโครงการ</h6>
                      </div>
                      <b-container fluid>
                        <b-row class="mt-1 d-flex justify-content-betweet">
                          <b-col class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white">
                            <p class="mb-0 pl-1 font14">จำนวนโครงการทั้งหมด</p>
                            <p class="mb-0 text-center font24 mt-2"><strong>{{ statusData[item.D_ID].All.toLocaleString() }}</strong></p>
                            <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                          </b-col>
                          <b-col class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white">
                            <p class="mb-0 pl-1 font14">โครงการที่ดำเนินการเสร็จสิ้น</p>
                            <p class="mb-0 text-center font24 mt-2"><strong>{{ statusData[item.D_ID].Done.toLocaleString() }}</strong></p>
                            <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                          </b-col>
                          <b-col class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white">
                            <p class="mb-0 pl-1 font14">โครงการที่กำลังดำเนินการ</p>
                            <p class="mb-0 text-center font24 mt-2"><strong>{{ statusData[item.D_ID].Processing.toLocaleString() }}</strong></p>
                            <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                          </b-col>
                          <b-col class="p-2 mr-2 mb-1 border border-dark rounded shadow bg-white">
                            <p class="mb-0 pl-1 font14"> โครงการที่ยังไม่ดำเนินการ</p>
                            <p class="mb-0 text-center font24 mt-2"><strong>{{ statusData[item.D_ID].No.toLocaleString() }}</strong></p>
                            <p class="text-muted mt-0 mb-0 float-right font14">โครงการ</p>
                          </b-col>
                        </b-row>
                      </b-container>
                    </div>
                    
                  </div>
                </b-tab>
              </b-tabs>
            </div>
           
          </b-tab> 
          <div class="mt-3">
                      <b-nav class="mt-2">
                        <!-- <b-navbar-nav>
                          <h5>รายละเอียดของโครงการ</h5>
                        </b-navbar-nav> -->
                        <b-navbar-nav class="ml-auto">
                          <b-button
                            class="ml-auto px-3 my-2"
                            style="background-color: #1d6f42"
                            id="download-xlsx"
                            @click="onExport(exportD_ID)"
                          >
                            <font-awesome-icon
                              :icon="['fas', 'file-excel']"
                              class="mr-2"
                            />พิมพ์</b-button
                          >
                        </b-navbar-nav>
                      </b-nav>
                    </div>
            <div id="table" class="sty-table shadow bg-white rounded"></div>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import MainprojectDataservice from "../services/mainproject.dataservice.js";
import DepartmentDataservice from "../services/department.dataservice";
import Tabulator from "tabulator-tables";
import XLSX from 'xlsx' // import xlsx


var table;

export default {
  name: "Summary",
//   components: {
//       SummaryBranch
//   },
  data() {
    return {
      user: this.$store.state.user,
      seletedCenterD_IDNow: 0,
      seletedBranchD_IDNow: -1,
      exportD_ID: 0,
      tableData: [],
      exportData: [],

      BranchDepartment: [],
      Department: [],
      amountData: [],
      statusData: [],
      AllamountData: [],
      AllstatusData: [],

      chartBudgetOptions: {
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: [
            "#F3B415",
            "#F27036",
            "#663F59",
            "#6A6E94",
            "#4E88B4",
            "#00A7C6",
            "#18D8D8",
            "#A9D794",
            "#46AF78",
            "#A93F55",
            "#8C5E58",
            "#2176FF",
            "#33A1FD",
            "#7A918D",
            "#BAFF29"
        ],
        xaxis: {
          categories: [
            ["งบประมาณทั้งหมด", "(ตามแผน)"],
            ["ยอดเงินคงเหลือ", "(ตามแผน)"],
            ["ยอดเงินคงเหลือ", "(หลักการ)"],
            ["ยอดเงินคงเหลือ", "(เบิกจ่ายจริง)"],
          ],
          colors: ["#775DD0"]
        },
        yaxis: {
          title: {
            text: "จำนวนเงิน (บาท)",
            style: {
              fontSize: "14px",
            },
          },
        },
      },

      seriesBudgetBranch: [],
      seriesBudgetCentral: [],

      projectOption: {
        legend: {
          position: "bottom",
        },
        labels: [
          "โครงการย่อยที่เสร็จสิ้น",
          "โครงการย่อยที่กำลังดำเนินการ",
          "โครงการที่ยังไม่ได้ดำเนินการ",
        ],
        colors: ["#7ebc59", "#F1B24A", "#E62739"],
      },
      
      dataStatusProjectCenter: [], // series data
      dataStatusProjectBranch: [], // series data

      selectedStrategic: "all",
      optionsStrategic: [
        { value: "all", text: "ทั้งหมด" },
        { value: "1", text: "1" },
        { value: "2", text: "2" },
        { value: "3", text: "3" },
      ],
    };
  },

  mounted() {
    this.getDepartmentTabs();
    this.getProjects();
    
    //instantiate Tabulator when element is mounted
    table = new Tabulator("#table", {
      layout: "fitDataStretch",
      dataTreeStartExpanded: true,
      dataTree: true,
      dataTreeFilter: false, //disable child row filtering
      printAsHtml: true, //enable html table printing
      columns: [
        {
          title: "ชื่อโครงการ",
          field: "Name",
          width: 250,
          hozAlign: "left",
          formatter: "textarea",
          frozen: true,
        },
        {
          title: "ประเด็นยุทธศาสตร์",
          field: "Strategic_Issue_ID",
          width: 100,
          hozAlign: "right",
        },
        {
          title: "ยุทธศาสตร์",
          field: "Strategic_ID",
          width: 100,
          hozAlign: "right",
        },
        {
          title: "กลยุทธ์",
          field: "Strategy_ID",
          width: 100,
          hozAlign: "right",
        },
        { title: "ผู้รับผิดชอบ", field: "Owner", width: 140, hozAlign: "left" },
        {
          title: "ตัวชี้วัด",
          field: "Indicator",
          width: 140,
          hozAlign: "left",
        },
        {
          title: "ค่าเป้าหมาย",
          field: "Target_Value",
          width: 140,
          hozAlign: "left",
        },
        {
          title: "งบประมาณตามแผน",
          field: "Budget",
          width: 140,
          hozAlign: "right",
          formatter: "money",
        },
        {
          title: "โอนเข้า",
          field: "Income",
          width: 140,
          hozAlign: "right",
          formatter: "money",
        },
        {
          title: "โอนออก",
          field: "Outcome",
          width: 140,
          hozAlign: "right",
          formatter: "money",
        },
        {
          title: "คงเหลือตามแผน",
          field: "Total_Amount",
          width: 140,
          hozAlign: "right",
          formatter: "money",
        },
        {
          title: "ขออนุมัติใช้",
          field: "Approve_Use",
          width: 140,
          hozAlign: "right",
          formatter: "money",
        },
        {
          title: "เบิกจ่าย",
          field: "Disburse",
          width: 140,
          hozAlign: "right",
          formatter: "money",
        },
        {
          title: "คงเหลือตามหลักการ",
          field: "Total_From_Priciple",
          width: 140,
          hozAlign: "right",
          formatter: "money",
        },
        {
          title: "คงเหลือจากเบิกจ่ายจริง",
          field: "Total_From_Disburse",
          width: 160,
          hozAlign: "right",
          formatter: "money",
        },
        {
          title: "ผลการดำเนินงาน",
          field: "Performance_Result",
          width: 160,
          hozAlign: "left",
        },
        {
          title: "ปัญหาและอุปสรรค",
          field: "Problem",
          width: 160,
          hozAlign: "left",
        },
        {
          title: "รายละเอียดผลการดำเนินงาน",
          field: "Detail_Result",
          width: 160,
          hozAlign: "left",
        },
        {
          title: "หมายเหตุ",
          field: "Annotation",
          width: 160,
          hozAlign: "left",
        },
        {
          title: "สถานะโครงการ",
          field: "Status",
          editorParams: {
            values: {
              ยังไม่ดำเนินการ: "ยังไม่ดำเนินการ",
              กำลังดำเนินการ: "กำลังดำเนินการ",
              เสร็จสิ้น: "เสร็จสิ้น",
            },
          },
          width: 160,
          formatter: function (cell) {
            var value = cell.getValue();
            var color;
            if (value == "ยังไม่ดำเนินการ") {
              color = "#EA3546";
            } else if (value == "กำลังดำเนินการ") {
              color = "#F9CE1D";
            } else if (value == "เสร็จสิ้น") {
              color = "#4CAF50";
            }
            return (
              "<button style='color: white; background-color:" +
              color +
              "; display: inline-block; border: none; outline: none; text-align: center; text-decoration: none; padding: .4em .4em .55em; border-radius: .4em;'>" +
              value +
              "</button>"
            );
          },
        },
      ],
    });

  },

  template: '<div id="table" class="sty-table"></div>', //create table holder element

  

  methods: {
    getDepartmentTabs() {
      DepartmentDataservice.getAll().then((response) => {
        for (var i in response.data) {
          if (response.data[i].D_Name != "แอดมิน") {
            if (response.data[i].D_Name.includes("สาขา")) {
              this.BranchDepartment.push({
                D_ID: response.data[i].D_ID,
                D_Name: response.data[i].D_Name,
              });
            } else {
              if (!response.data[i].D_Name.includes("ผู้บริหาร")) {
                this.Department.push({
                  D_ID: response.data[i].D_ID,
                  D_Name: response.data[i].D_Name,
                });
                

              }
            }
          }
          this.statusData[response.data[i].D_ID] = {
                All: 0,
                Done: 0,
                Processing: 0,
                No: 0,
            };
          this.amountData[response.data[i].D_ID] = {
            totalMP_Budget: 0,
            totalMP_Total_Amount: 0,
            totalMP_Total_From_Disburse: 0,
            totalMP_Total_From_Priciple: 0,
          };
        }
       this.exportD_ID = this.Department[0].D_ID
      });
    },

    getProjects() {
      MainprojectDataservice.getAll()
        .then((response) => {
          var totalMP_Budget = 0;
          var totalMP_Total_Amount = 0;
          var totalMP_Total_From_Disburse = 0;
          var totalMP_Total_From_Priciple = 0;

          var statusDone = 0;
          var statusProcessing = 0;
          var statusNo = 0;

          for (var i in response.data) {
            //if(response.data[i].D_ID == this.Department[k].D_ID){
            totalMP_Budget += response.data[i].MP_Budget;
            totalMP_Total_Amount += response.data[i].MP_Total_Amount;
            totalMP_Total_From_Disburse +=
              response.data[i].MP_Total_From_Disburse;
            totalMP_Total_From_Priciple +=
              response.data[i].MP_Total_From_Priciple;

            this.tableData.push({
              Name: response.data[i].MP_Name,
              Strategic_Issue_ID: response.data[i].Strategic_Issue_ID,
              Strategic_ID: response.data[i].Strategic_ID,
              Strategy_ID: response.data[i].Strategy_ID,
              Owner: response.data[i].MP_Owner,
              Indicator: response.data[i].MP_Indicator,
              Target_Value: response.data[i].MP_Target_Value,
              Budget: response.data[i].MP_Budget,
              Income: response.data[i].MP_Income,
              Outcome: response.data[i].MP_Outcome,
              Total_Amount: response.data[i].MP_Total_Amount,
              Approve_Use: response.data[i].MP_Approve_Use,
              Disburse: response.data[i].MP_Disburse,
              Total_From_Priciple: response.data[i].MP_Total_From_Priciple,
              Total_From_Disburse: response.data[i].MP_Total_From_Disburse,
              Performance_Result: response.data[i].Performance_Result,
              Problem: response.data[i].Problem,
              Detail_Result: response.data[i].Detail_Result,
              Annotation: response.data[i].Annotation,
              Status: response.data[i].MP_Status,
              D_ID: response.data[i].D_ID,
            });

            var childrens = [];
            for (var j in response.data[i].subprojects) {
              if (response.data[i].subprojects[j].SP_Status == "เสร็จสิ้น") {
                statusDone += 1;
                Done = 1;
                Processing = 0;
                No = 0;
              } else if (
                response.data[i].subprojects[j].SP_Status == "กำลังดำเนินการ"
              ) {
                statusProcessing += 1;
                Done = 0;
                Processing = 1;
                No = 0;
              } else if (
                response.data[i].subprojects[j].SP_Status == "ยังไม่ดำเนินการ"
              ) {
                statusNo += 1;
                Done = 0;
                Processing = 0;
                No = 1;
              }

              childrens.push({
                Name: response.data[i].subprojects[j].SP_Name,
                Owner: response.data[i].subprojects[j].SP_Owner,
                Indicator: response.data[i].subprojects[j].SP_Indicator,
                Target_Value: response.data[i].subprojects[j].SP_Target_Value,
                Budget: response.data[i].subprojects[j].SP_Budget,
                Income: response.data[i].subprojects[j].SP_Income,
                Outcome: response.data[i].subprojects[j].SP_Outcome,
                Total_Amount: response.data[i].subprojects[j].SP_Total_Amount,
                Approve_Use: response.data[i].subprojects[j].SP_Approve_Use,
                Disburse: response.data[i].subprojects[j].SP_Disburse,
                Total_From_Priciple:
                  response.data[i].subprojects[j].SP_Total_From_Priciple,
                Total_From_Disburse:
                  response.data[i].subprojects[j].SP_Total_From_Disburse,
                Performance_Result:
                  response.data[i].subprojects[j].Performance_Result,
                Problem: response.data[i].subprojects[j].Problem,
                Detail_Result: response.data[i].subprojects[j].Detail_Result,
                Annotation: response.data[i].subprojects[j].Annotation,
                Status: response.data[i].subprojects[j].SP_Status,
              });
            }
            if (childrens.length > 0) {
              this.tableData[i]._children = childrens;
            }
          }
          //}
          this.AllamountData = {
            totalMP_Budget: totalMP_Budget,
            totalMP_Total_Amount: totalMP_Total_Amount,
            totalMP_Total_From_Disburse: totalMP_Total_From_Disburse,
            totalMP_Total_From_Priciple: totalMP_Total_From_Priciple,
          };
          this.AllstatusData = {
            All: statusDone + statusProcessing + statusNo,
            Done: statusDone,
            Processing: statusProcessing,
            No: statusNo,
          };

          var AllDepartment = this.Department.concat(this.BranchDepartment);

          for(var c in AllDepartment) {
            var MP_Budget = 0
            var MP_Total_Amount = 0
            var MP_Total_From_Disburse = 0
            var MP_Total_From_Priciple = 0
            
            var Done = 0;
            var Processing = 0;
            var No = 0;
              for(var k in this.tableData) {
                if(AllDepartment[c].D_ID == this.tableData[k].D_ID) {
                    MP_Budget += this.tableData[k].Budget
                    MP_Total_Amount += this.tableData[k].Total_Amount
                    MP_Total_From_Disburse += this.tableData[k].Total_From_Disburse
                    MP_Total_From_Priciple += this.tableData[k].Total_From_Priciple
                }
                this.amountData[AllDepartment[c].D_ID] = {
                    totalMP_Budget:MP_Budget,
                    totalMP_Total_Amount:MP_Total_Amount,
                    totalMP_Total_From_Disburse:MP_Total_From_Disburse,
                    totalMP_Total_From_Priciple:MP_Total_From_Priciple,    
                };

                for(var n in this.tableData[k]._children) {
                    if(AllDepartment[c].D_ID == this.tableData[k].D_ID) {
                        if (this.tableData[k]._children[n].Status == "เสร็จสิ้น") {
                            Done += 1;
                            
                        } else if (
                            this.tableData[k]._children[n].Status == "กำลังดำเนินการ"
                        ) {
                            Processing += 1;
                        } else if (
                            this.tableData[k]._children[n].Status == "ยังไม่ดำเนินการ"
                        ) {
                            No += 1;
                        }

                        this.statusData[this.tableData[k].D_ID] = {
                            All: Done + Processing + No,
                            Done: Done,
                            Processing: Processing,
                            No: No,
                        };
                    }
              }
            }  
          }
          
          this.getStatusData(this.amountData);

          table.setData(this.tableData);
          table.setFilter("D_ID", "=", this.Department[0].D_ID);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    setFilterDataTable(dapartmentID) {
      if(dapartmentID == -1) {
        this.exportD_ID = this.BranchDepartment[0].D_ID
        table.setFilter("D_ID", "=", this.BranchDepartment[0].D_ID);
      }
      else if(dapartmentID == 0) {
        this.exportD_ID = this.Department[0].D_ID
        table.setFilter("D_ID", "=", this.Department[0].D_ID);
      } else {
        table.setFilter("D_ID", "=", dapartmentID);
        for(var i in this.Department) {
          if(this.Department[i].D_ID == dapartmentID) {
            this.seletedCenterD_IDNow = dapartmentID
            this.exportD_ID = dapartmentID
          }
        }
        for(var j in this.BranchDepartment) {
          if(this.BranchDepartment[j].D_ID == dapartmentID) {
            this.seletedBranchD_IDNow = dapartmentID
            this.exportD_ID = dapartmentID
          }
        }
        
      }
      
    },


    getStatusData() {
        var Done1 = 0;
        var Processing1 = 0;
        var No1 = 0;

        for(var i in this.Department) {
            Done1 += this.statusData[this.Department[i].D_ID].Done
            Processing1 += this.statusData[this.Department[i].D_ID].Processing
            No1 += this.statusData[this.Department[i].D_ID].No 

            var totalMP_Budget1 = this.amountData[this.Department[i].D_ID].totalMP_Budget
            var totalMP_Total_Amount1 = this.amountData[this.Department[i].D_ID].totalMP_Total_Amount
            var totalMP_Total_From_Priciple1 = this.amountData[this.Department[i].D_ID].totalMP_Total_From_Priciple
            var totalMP_Total_From_Disburse1 = this.amountData[this.Department[i].D_ID].totalMP_Total_From_Disburse
            var dapart_name = this.Department[i].D_Name
            
            this.seriesBudgetCentral.push({
                name: dapart_name,
                data: [totalMP_Budget1, totalMP_Total_Amount1, totalMP_Total_From_Priciple1, totalMP_Total_From_Disburse1],
                })
        }
        this.dataStatusProjectCenter = [Done1, Processing1, No1]
 

        var Done2 = 0;
        var Processing2 = 0;
        var No2 = 0;

        for(var k in this.BranchDepartment) {
                Done2 += this.statusData[this.BranchDepartment[k].D_ID].Done
                Processing2 += this.statusData[this.BranchDepartment[k].D_ID].Processing
                No2 += this.statusData[this.BranchDepartment[k].D_ID].No 

                var totalMP_Budget2 = this.amountData[this.BranchDepartment[k].D_ID].totalMP_Budget
                var totalMP_Total_Amount2 = this.amountData[this.BranchDepartment[k].D_ID].totalMP_Total_Amount
                var totalMP_Total_From_Priciple2 = this.amountData[this.BranchDepartment[k].D_ID].totalMP_Total_From_Priciple
                var totalMP_Total_From_Disburse2 = this.amountData[this.BranchDepartment[k].D_ID].totalMP_Total_From_Disburse
                var dapart_name2 = this.BranchDepartment[k].D_Name
                
                this.seriesBudgetBranch.push({
                    name: dapart_name2,
                    data: [totalMP_Budget2, totalMP_Total_Amount2, totalMP_Total_From_Priciple2, totalMP_Total_From_Disburse2],
                    })
                
        }  
        this.dataStatusProjectBranch = [Done2, Processing2, No2]
    },
    
    onExport(exportD_ID) {
      //console.log(this.tableData)
      this.exportData = []
      for(var i in this.tableData) {
        if(exportD_ID == this.tableData[i].D_ID) {
          this.exportData.push({
            "ชื่อโครงการ" : this.tableData[i].Name,
            "ประเด็นยุทธศาสตร์" : this.tableData[i].Strategic_Issue_ID,
            "ยุทธศาสตร์" : this.tableData[i].Strategic_ID,
            "กลยุทธ์" : this.tableData[i].Strategy_ID,
            "ผู้รับผิดชอบ": this.tableData[i].Owner,
            "ตัวชี้วัด": this.tableData[i].Indicator,
            "ค่าเป้าหมาย": this.tableData[i].Target_Value,
            "งบประมาณตามแผน": this.tableData[i].Budget,
            "โอนเข้า": this.tableData[i].Income,
            "โอนออก": this.tableData[i].Outcome,
            "คงเหลือตามแผน": this.tableData[i].Total_Amount,
            "ขออนุมัติใช้": this.tableData[i].Approve_Use,
            "เบิกจ่าย": this.tableData[i].Disburse,
            "คงเหลือตามหลักการ": this.tableData[i].Total_From_Priciple,
            "คงเหลือจากเบิกจ่ายจริง": this.tableData[i].Total_From_Disburse,
            "ผลการดำเนินงาน": this.tableData[i].Performance_Result,
            "ปัญหาและอุปสรรค": this.tableData[i].Problem,
            "รายละเอียดผลการดำเนินงาน": this.tableData[i].Detail_Result,
            "หมายเหตุ": this.tableData[i].Annotation,
            })

          if(this.tableData[i]._children != undefined) {
            if(this.tableData[i]._children.length > 0){
              for(var j in this.tableData[i]._children) {
                this.exportData.push({
                  "ชื่อโครงการ" : this.tableData[i]._children[j].Name,
                  "ประเด็นยุทธศาสตร์" : this.tableData[i]._children[j].Strategic_Issue_ID,
                  "ยุทธศาสตร์" : this.tableData[i]._children[j].Strategic_ID,
                  "กลยุทธ์" : this.tableData[i]._children[j].Strategy_ID,
                  "ผู้รับผิดชอบ": this.tableData[i]._children[j].Owner,
                  "ตัวชี้วัด": this.tableData[i]._children[j].Indicator,
                  "ค่าเป้าหมาย": this.tableData[i]._children[j].Target_Value,
                  "งบประมาณตามแผน": this.tableData[i]._children[j].Budget,
                  "โอนเข้า": this.tableData[i]._children[j].Income,
                  "โอนออก": this.tableData[i]._children[j].Outcome,
                  "คงเหลือตามแผน": this.tableData[i]._children[j].Total_Amount,
                  "ขออนุมัติใช้": this.tableData[i]._children[j].Approve_Use,
                  "เบิกจ่าย": this.tableData[i]._children[j].Disburse,
                  "คงเหลือตามหลักการ": this.tableData[i]._children[j].Total_From_Priciple,
                  "คงเหลือจากเบิกจ่ายจริง": this.tableData[i]._children[j].Total_From_Disburse,
                  "ผลการดำเนินงาน": this.tableData[i]._children[j].Performance_Result,
                  "ปัญหาและอุปสรรค": this.tableData[i]._children[j].Problem,
                  "รายละเอียดผลการดำเนินงาน": this.tableData[i]._children[j].Detail_Result,
                  "หมายเหตุ": this.tableData[i]._children[j].Annotation,
                  })
              }
            }
            
          }
          
        }
      }
      
      const dataWS = XLSX.utils.json_to_sheet(this.exportData)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, dataWS)
      XLSX.writeFile(wb,'export.xlsx')
    },
  },
};
</script>

<style lang="scss" scope>
#summary {
  margin: 30px;
}

.font14 {
  font-size: 14px;
}

small {
  font-size: 16px;
}
.font18 {
  font-size: 18px;
}
.font24 {
  font-size: 24px;
}
li {
  font-size: 16px;
}
#detail:hover,
#detail:active {
  color:green;
}
.tabs{
  color: black;
  background-color: rgb(247 247 247);
}


</style>