<template>
  <div class="data-loader">
    <i class="la la-spinner la-spin" v-bind:style="{fontSize: size + 'px'}"></i>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    size: {type: Number, default: 21}
  }
}
</script>
<style lang="scss" scoped>

.data-loader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 21px;
    margin: 0;
  }
}
</style>
