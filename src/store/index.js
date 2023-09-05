import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    companyName: '',
    companyID: '',
    contract: '',
    contractID: ''
  },
  getters: {
    getReloadContract (state) {
      return state.contract
    }
  },
  mutations: {
    setUserName (state, userName) {
      state.userName = userName
    },
    setCompanyName (state, companyName) {
      state.companyName = companyName
    },
    setCompanyID (state, companyID) {
      state.companyID = companyID
    },
    setContractCreated (state, contract) {
      state.contract = contract
    },
    setContractID (state, contractID) {
      state.contractID = contractID
    }
  },
  actions: {
  },
  modules: {
  }
})
