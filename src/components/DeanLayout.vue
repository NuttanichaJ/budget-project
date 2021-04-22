<template>
    <div id="adminlayout">
        <DeanHeader/>
        <router-view/>
    </div>
</template>

<script>
import DeanHeader from "./Deanheader"

export default {
    name: "DeanLayout",
    components: {
       DeanHeader
    }
}
</script>