import { reactive } from "vue";

export const store = reactive({
  ApiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=300&offset=0',
  cardsArray: [],
  archetypeApiUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  archetypeArray: [],
  selectValue: '',
  searchText: '',
});
