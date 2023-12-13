<script>
import ComponentSearch from './ComponentSearch.vue';
import ComponentCard from './ComponentCard.vue';
import { store } from '../js/store'
import axios from 'axios'
export default {
    name: "appMain",
    components: {
        ComponentSearch,
        ComponentCard
    },
    data() {
        return {
            store
        }

    },
    methods: {
        cards() {
            axios.get(store.apiUrl).then((response) => {
                store.card = response.data.data
                console.log(response.data.data)
            })
        }
    },
    created() {
        this.cards()
    }
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