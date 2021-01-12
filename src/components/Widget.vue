<template>
    <section :class="{
        widget: true,
        className,
        collapsed: state ==='collapse',
        fullscreened: stae ==='fullscreen',
        loading: fetchingData
        }" ref="widget">
        <div v-if="customControls" v-html="customControls" ref="customControlsRef" class="widgetControls widget-controls"></div>
        <div :class="`widgetBody widget-body ${bodyClass}`" ref="widgetBodyRef"
          :style="{display: state === 'collapse' ? 'none' : ''}"
        >
      <Loader v-if="fetchingData && showLoader" :class="'widget-loader'" :size="40"></Loader>
      <slot v-else></slot>
    </div>
    </section>
</template>

<script>
import Loader from '../components/Loader.vue';
export default {
    name: 'Widget',
    components: {
    Loader
  },
  data: function() {
    return {
      state: this.collapsed ? 'collapse' : 'default'
    }
  }
}
</script>

<style lang="scss" scoped>

.widget {
  display: block;
  position: relative;
  margin: 20px;
  padding: 20px 20px;
  border: 0.3px solid black;
  border-radius: 5px;
  &.loading {
    min-height: 150px;
  }

  [control='collapse'] {
    display: unset;
  }

  [control='expand'] {
    display: none;
  }

  [control='fullscreen'] {
    display: unset;
  }

  [control='restore'] {
    display: none;
  }

  &.collapsed {
    min-height: unset;

    [control='collapse'] {
      display: none;
    }

    [control='expand'] {
      display: unset;
    }
  }

  &.fullscreened {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    z-index: 10000;

    [control='fullscreen'] {
      display: none;
    }

    [control='restore'] {
      display: unset;
    }
  }
}
</style>