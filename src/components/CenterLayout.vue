<template>
    <div id="centerlayout">
        <CenterHeader/>
        <router-view />
    </div>
</template>

<script>
import CenterHeader from "./CenterHeader.vue"

export default {
    name: "Layout",
    components: {
        CenterHeader
    }
}
</script>