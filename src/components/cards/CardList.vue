<template>
    <div class="bg-dark text-light text-center p-2 m-3">
        <h3>
            Found {{ filteredCards.length }} cards
        </h3>
    </div>
    <div class="row m-3">
        <SingleCard v-for="(card, index) in filteredCards" :key="index" :propsElement="card" />
    </div>
</template>

<script>
import SingleCard from "../../components/cards/SingleCard.vue"

export default {
    name: "CardList",
    components: {
        SingleCard
    },
    props: ['cards'],
    data() {
        return {
        }
    },
    computed: {
        filteredCards() {
            return this.cards;
        }
    }
};
</script>


<style lang="scss" scoped>

</style>