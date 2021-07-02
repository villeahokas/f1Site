import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drivers: [
      { id: 1, name: 'Mika Häkkinen', team: 'McLaren', srcAvatar: 'hakkinen.jpg', srcBackground: 'hakkinenAuto.jpg'} ,
      { id: 2, name: 'Michael Schumacher', team: 'Ferrari', srcAvatar: 'schumacher.jpg', srcBackground: 'schumacherAuto.jpg'},
      { id: 3, name: 'David Coulthard', team: 'McLaren', srcAvatar: 'coulthard.jpg', srcBackground: 'coulthardAuto.jpg'}
    ],
    teams: [
      { id: 1, teamName: 'Ferrari', team: 'McLaren', src: 'ferrari.jpg'} ,
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
