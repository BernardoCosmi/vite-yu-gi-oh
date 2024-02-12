<template>
    <div class="col-3 mb-4">
        <div class="card text-center">
            <img class="card-img-top p-4" :src="propsElement.card_images[0].image_url" alt="Card Img" />
            <div class="card-body">
                <h4 class="card-title">{{ propsElement.name }}</h4>
                <p class="card-text">{{ propsElement.archetype }}</p>
            </div>
        </div>

    </div>
</template>

<script>
import { store } from "../../store"

export default {
    name: "SingleCard",
    props: [
        'propsElement'
    ],
    data() {
        return {
            store
        }
    }
};
</script>

<style lang="scss" scoped>
.card{
    background-color: #c88e4d;
    min-height: 520px;
}
.card-body{
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4{
        font-weight: bold;
    }
    p{
        margin-bottom: 20px;
    }
}
</style>