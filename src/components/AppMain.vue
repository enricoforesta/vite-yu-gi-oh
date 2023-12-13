<script>
import ComponentSearch from './ComponentSearch.vue';
import ComponentCard from './ComponentCard.vue';
export default {
    name: "appMain",
    components: {
        ComponentSearch,
        ComponentCard
    },
    data() {
        return {

        }

    },
}
</script>

<template>
    <main>
        <div class="container">
            <ComponentSearch />
            <ComponentCard />
        </div>
    </main>
</template>
<style scoped lang="scss">
@use'../assets/scss/partial/variables' as *;

main {
    background-color: $container-bg-color;
}
</style>