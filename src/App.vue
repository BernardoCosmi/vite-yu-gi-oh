<script>
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import axios from 'axios'
import { store } from './store'

  export default{
    components:{
      AppHeader,
      AppMain
    },
    data(){
      return {
        store
      }
    },
    mounted(){
      this.getData()
      this.getArchetype()
    },
    methods: {
    getData(){
        axios.get(store.ApiUrl).then( (res)=> {
          store.cardsArray = res.data.data
        })
    },
    getArchetype(){
        axios.get(store.archetypeApiUrl).then( (res)=> {
          store.archetypeArray = res.data
        })
    }
  }
  };
  
</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>

<style scoped>
main{
  background-color: #C88E4D;
}
</style>
