<script>
import ComponentLogo from './ComponentLogo.vue'
export default {
    name: "appHeader",
    components: {
        ComponentLogo,
    },
    data() {
        return {

        }
    },
}
</script>
<template>
    <header>
        <ComponentLogo />
    </header>
</template>
<style scoped lang="scss"></style>