<template>
    <div id="adminlayout">
        <Deanheader/>
        <router-view/>
    </div>
</template>

<script>
import Deanheader from "./Deanheader"

export default {
    name: "DeanLayout",
    components: {
       Deanheader
    }
}
</script>