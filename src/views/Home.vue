<template>
  <div class="home">
    <div class="container bg-dark text-white">
      <div class="checkBoxes">
        <div class="checkboxesList" v-for="item in chekboxesItems" :key="item.id">
          <input type="checkbox"  :value="item.subitems" v-model="itemInfos"/>
          <label class="ml-2"><b-icon :icon="item.icon"></b-icon></label>
        </div>
      </div>
      <hr>
      <div class="display-subItems mt-3 mr-5">
          <div v-for="itemInfo in itemInfos" :key="itemInfo.id">
            <ul>
            <li style="list-style:none;" class="mt-3" v-for="element in itemInfo" :key="element.id">{{element}}</li>
            </ul>
          </div>
      </div>
    </div>
  </div>  
</template>

<script>


export default {
  data(){
    return{
     itemInfos :[]
    }
  },
  computed:{
    chekboxesItems(){
      let result = this.$store.state.chekboxesItems;
      console.log(result);
      return result;
    },
  }
 
  }
</script>
<style scoped>
.container {
  width:30%;
  border: black solid 2px;
}
.checkBoxes{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
li:hover{
  background-color: gray;
}



</style>