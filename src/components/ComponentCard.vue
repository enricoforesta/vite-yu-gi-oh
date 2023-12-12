<script>
import { store } from '../js/store'
import axios from 'axios'
export default {
    components: {
    },
    data() {
        return {
            store
        }
    },
    created() {
        axios.get(store.apiUrl).then((response) => {
            store.card = response.data.data
            console.log(response.data.data)
        })
    }
}
</script>

<template>
    <div class="container-card">
        <div v-for="card in store.card" class="card">
            <div class="img">
                <img :src="card.card_images[0].image_url_small" alt="">
            </div>
            <div class="text">
                <h5>{{ card.name }}</h5>
                <p>{{ card.type }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use'../assets/scss/partial/variables' as *;

.container-card {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    gap: 15px;
    padding: 40px;
    background-color: white;

    .card {
        width: calc((100% / 5) - 40px);
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        background-color: $container-bg-color;

        .text h5 {
            color: white;
            padding-bottom: 30px;
        }

        div.img {
            width: 180px;
        }
    }
}
</style>