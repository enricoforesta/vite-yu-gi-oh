<script>
import { store } from '../js/store'
import ComponentFound from './ComponentFound.vue'
export default {
    name: "card",
    components: {
        ComponentFound,
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <div class="container-card">
        <div class="found">
            <ComponentFound />
        </div>
        <div v-for="card in store.card" class="card">
            <div class="img">
                <img :src="card.card_images[0].image_url_small" :alt="card.name">
            </div>
            <div class="text">
                <h5>{{ card.name }}</h5>
                <p>{{ card.archetype }}</p>
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
    padding: 40px;
    background-color: white;

    .found {
        width: 100%;
        background-color: black;
        text-align: start;
        color: white;
        padding: 10px;
    }

    .card {
        width: calc((100% / 5) - 30px);
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 20px;
        align-items: center;
        background-color: $container-bg-color;

        .text h5 {
            color: white;
            padding-bottom: 30px;
        }

        div.img {
            width: 100%;
        }
    }
}
</style>