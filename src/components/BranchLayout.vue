<template>
    <div id="layout">
        <BranchHeader/>
        <router-view />
    </div>
</template>

<script>
import BranchHeader from "./BranchHeader.vue"

export default {
    name: "BranchLayout",
    components: {
        BranchHeader
    }
}
</script>
