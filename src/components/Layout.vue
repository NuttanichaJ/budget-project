<template>
    <div id="layout">
        <Header/>
        <router-view />
    </div>
</template>

<script>
import Header from "./Header.vue"

export default {
    name: "Layout",
    components: {
        Header
    }
}
</script>