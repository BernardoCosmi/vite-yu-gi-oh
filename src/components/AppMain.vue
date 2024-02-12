<template>
    <main class="p-3 mt-2">
        <div class="m-2">
            <select class="form-select form-select-lg" v-model="store.selectValue" @change="handleArchetypeChange">
                <option :value="element.archetype_name" v-for="(element, index) in store.archetypeArray" :key="index">{{ element.archetype_name }}</option>
            </select>
        </div>

        <!-- TODO card container -->
        <div class="container bg-light p-3">
            <CardList :cards="filteredCards"/>
        </div>

    </main>
</template>

<script>
import CardList from "./cards/CardList.vue"
import { store } from "../store"

export default {
    name: "AppMain",
    components: {
        CardList
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        filteredCards() {
            if (!this.store.selectValue) {
                return this.store.cardsArray;
            }
            return this.store.cardsArray.filter(card => card.archetype === this.store.selectValue);
        }
    },
    methods: {
        handleArchetypeChange() {
        }
    }
};
</script>


<style lang="scss" scoped>
select {
    width: 20%;
    max-height: fit-content;
}
</style>