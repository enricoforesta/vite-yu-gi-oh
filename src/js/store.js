import { reactive } from 'vue';
export const store = reactive({

    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    apiUrlArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    card: [],
    archetype: [],
    searchText: "",
})