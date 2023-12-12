<script>
export default {
    name: "Logo Yu-gi-oh",
    data() {
        return {
            title: "Yu-Gi-Oh Api"
        }
    }
}
</script>
<template>
    <div class="logo">
        <div class="img">
            <img src="../assets/logo_yu-gi-oh.jpeg" alt="">
        </div>
        <h2 class="title">{{ title }}</h2>
    </div>
</template>
<style scoped lang="scss">
div.logo {
    display: flex;
    align-items: center;

    div.img {
        width: 60px;
        margin: 25px;
    }
}
</style>