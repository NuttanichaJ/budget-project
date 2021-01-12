<template>
  <div class="transfer">
        <h1>บันทึกการโอนเงินเข้า-ออก</h1>
    <div class="top">
      <div class="left">
        <b-button>เพิ่มการโอน</b-button>
      </div>
      <div class="right">
        <b-button @click='save'>บันทึก</b-button>
        <b-button @click='cancel'>ยกเลิก</b-button>
      </div>
    </div>
    <br><br>
    <div class="income"> 
        <b-form inline>
          <label class="mr-sm-2" for="inline-form-custom-select-pref">โอนเข้า: </label>
          <b-form-select id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-5 mb-sm-0" v-model="selected" :options="options"></b-form-select>   
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input id="inline-form-input-username" placeholder="0" readonly></b-form-input>
            </b-input-group>
          <label class="mr-sm-2" for="inline-form-custom-select-pref">บาท</label>
        </b-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "Transfer",

  data() {
    return {
    selected: null,
    options: [
        { value: 'โครงการหลัก1', text: 'โครงการหลัก1' },
        { value: 'โครงการหลัก2', text: 'โครงการหลัก2' },
        { value: 'โครงการย่อย1', text: 'โครงการย่อย1' },
        { value: 'โครงการย่อย2', text: 'โครงการย่อย2' },      
    ]
    }
},
  methods: {
    save() {
     this.$confirm(
      "คุณต้องการบันทึกใช่หรือไม่?",
      " ",
      "question"
    )
    },
    cancel() {
     this.$confirm(
      "คุณต้องการยกเลิกใช่หรือไม่?",
      " ",
      "error"
    )
    }
  },
};

</script>

<style lang="scss" scoped>
.transfer {
    margin: 20px;
}
.top {
  .left {
    float: left;
  }

  .right {
    float: right;
    
  }
}
</style>