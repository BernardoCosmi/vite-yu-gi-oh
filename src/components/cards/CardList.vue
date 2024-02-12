<template>
    <div class="bg-dark text-light text-center p-2 my-3">
        <h3>
            Found {{ store.cardsArray.length }} cards
        </h3>
    </div>
    <div class="row">
        <SingleCard v-for="(element, index) in store.cardsArray" :key="index" :propsElement="element" />
    </div>
</template>

<script>
    import SingleCard from "../../components/cards/SingleCard.vue"
    import { store } from "../../store"

    export default {
        name: "CardList",
        components: {
            SingleCard
        },
        data() {
            return {
                store
            }
        }
    };
</script>


<style lang="scss" scoped>

</style>