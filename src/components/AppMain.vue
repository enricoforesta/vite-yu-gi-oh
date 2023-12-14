<script>
import ComponentSearch from './ComponentSearch.vue';
import ComponentCards from './ComponentCards.vue';
import { store } from '../js/store'
import axios from 'axios'
export default {
    name: "appMain",
    components: {
        ComponentSearch,
        ComponentCards
    },
    data() {
        return {
            store
        }

    },
    methods: {
        cards() {
            console.log(this.store.searchText);
            if (this.store.searchText !== "") {
                const myUrl = `${this.store.apiUrl}&archetype=${this.store.searchText}`
                console.log(myUrl)

                axios.get(myUrl).then((response) => {
                    this.store.card = response.data.data
                    console.log(response.data.data)
                })
            } else {
                const myUrl = `${this.store.apiUrl}`
                console.log(myUrl)

                axios.get(myUrl).then((response) => {
                    this.store.card = response.data.data
                    console.log(response.data.data)
                })
            }


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
            <ComponentSearch @search="cards()" />
            <ComponentCards />
        </div>
    </main>
</template>
<style scoped lang="scss">
@use'../assets/scss/partial/variables' as *;

main {
    background-color: $container-bg-color;
}
</style>