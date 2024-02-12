<template>
    <main class="p-3 mt-2">
        <div class="m-2">
            <select
                class="form-select form-select-lg"
                name=""
                id=""
                v-model="store.selectValue"
            >
                <option :value="element.archetype_name" v-for="(element, index) in store.archetypeArray" :key="index">{{ element.archetype_name }}</option>
            </select>
        </div>

        <!-- TODO card container -->
        <div class="container bg-light p-3">
            <CardList/>
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
  data (){
    return{
        store
    }
  }
};
</script>


<style lang="scss" scoped>
select{
    width: 20%;
    max-height: fit-content;
}
</style>