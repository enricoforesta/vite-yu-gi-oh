<script>
import { store } from '../js/store'
import axios from 'axios'
export default {
    name: "search",
    components: {
    },
    data() {
        return {
            store
        }

    },
    computed: {
        search() {
            return axios.get(this.store.apiUrlArchetype).then((response) => {
                this.store.archetype = response.data
                console.log(response.data[0].archetype_name)
            })
        }


    },
    created() {
        this.search
    }
}
</script>

<template>
    <select v-model="store.searchText" name="search" id="search" @click="$emit('search')">
        <option selected value="">Select archetype</option>
        <option v-for="item in store.archetype">{{ item.archetype_name }}</option>
    </select>
</template>

<style scoped lang="scss">
select {
    margin: 15px 20px;
    width: 160px;
    height: 25px;
    border: none;
}
</style>