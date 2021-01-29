import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chekboxesItems :[
      {
      id:1,
      "name" : "First",
      "subitems" : ["first group one", "first group two" , "first group three"],
      "icon" : "folder-plus"
      },
      {
        "id":2,
        "name" : "second",
        "subitems" : ["second group one" , "second group two"],
        "icon": "person-square"
      },
      {
        "id" : 3,
        "name" : "third",
        "subitems" : ["third group one","third group two", "third group three","third group four"],
        "icon":"grid3x3-gap"
      }
  ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
