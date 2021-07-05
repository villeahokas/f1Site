import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drivers: [
      { name: 'Mika Häkkinen', team: 'McLaren', srcAvatar: 'hakkinen.jpg', srcBackground: 'hakkinenAuto.jpg'} ,
      { name: 'Michael Schumacher', team: 'Ferrari', srcAvatar: 'schumacher.jpg', srcBackground: 'schumacherAuto.jpg'},
      { name: 'David Coulthard', team: 'McLaren', srcAvatar: 'coulthard.jpg', srcBackground: 'coulthardAuto.jpg'}
    ],
    teams: [
      { teamName: 'Ferrari', src: 'ferrari.jpg'} ,
    ],
    showAddSelect: false,
    showAddDriverForm: false,
    showAddTeamForm: false
  },
  mutations: {
    toggleAddSelect (state) {
      state.showAddSelect = !state.showAddSelect
    },
    toggleAddDriverForm (state) {
      state.showAddDriverForm = !state.showAddDriverForm
    },
    toggleAddTeamForm (state) {
      state.showAddTeamForm = !state.showAddTeamForm
    },
    addDriver (state, payload) {
      state.drivers.push(payload) 
    },
    addTeam (state, payload) {
      state.teams.push(payload) 
    }
  },
  actions: {
  },
  modules: {
  }
})
