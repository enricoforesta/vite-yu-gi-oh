<script>
import { store } from '../js/store'
export default {
    components: {
    },
    data() {
        return {
            store,
        }

    }
}
</script>

<template>
    <h3>Ho trovato {{ store.card.length }} carte</h3>
</template>
<style scoped lang="scss"></style>