<template>
    <div id="adminlayout">
        <Adminheader/>
        <router-view/>
    </div>
</template>

<script>
import Adminheader from "./Adminheader"

export default {
    name: "AdminLayout",
    components: {
        Adminheader
    }
}
</script>