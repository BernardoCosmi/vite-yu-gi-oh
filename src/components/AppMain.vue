<template>
    <main class="p-3 mt-2">
        <div class="m-2">
            <select
                class="form-select form-select-lg"
                name=""
                id=""
            >
                <option value="">Alien</option>
                <option value="">Istanbul</option>
                <option value="">Jakarta</option>
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

export default {
  name: "AppMain",
  components: {
    CardList
  },
  data (){
    return{
        
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