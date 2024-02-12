<template>
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