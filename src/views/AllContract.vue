<template>
  <div>
    <div class="content-wrapper">
      <div class="row">
        <div class="col-xl-6 grid-margin stretch-card flex-column">
          <h5 class="mb-2 text-titlecase mb-4">Contracts of The Employees</h5>
        </div>
        <div class="col-xl-2"></div>
        <div class="col-xl-2 grid-margin stretch-card flex-column">
            <button type="button" class="btn btn-success" @click="newContract();">New Contract</button>
        </div>
      </div>
      <ContractBody
      v-for="(contract, key) in contracts"
      :key="key"
      :contractID="contract.contractID"
      :row="contract.row"
      :card="contract.card"
      :cardBody="contract.cardBody"
      :colSmRow="contract.colSmRow"
      :colSmTitle="contract.colSmTitle"
      :contractTitle="contract.contractTitle"
      :contractEmployeeName="contract.contractEmployeeName"
      :contractDescription="contract.contractDescription"
      :dateCreatedAndExpired="contract.dateCreatedAndExpired"/>
    </div>
    <!-- partial -->
  </div>
</template>
<script>
import ContractBody from '../components/ContractoBody.vue'
// import NewContract from '../components/NewContract.vue'
import axios from 'axios'
// import { mapGetters } from 'vuex'
export default {
  components: {
    ContractBody
  },
  data () {
    return {
      contracts: []
    }
  },
  methods: {
    newContract () {
      this.$router.push('/new-contract')
    },
    async allContracts () {
      const companyID = this.$store.state.companyID
      try {
        const response = await axios.get(
          'http://localhost:8000/api/contract-company/' + companyID
        )
        this.contracts = response.data
        const contract = ''
        this.$store.commit('setContractCreated', contract)
      } catch (error) {
        // this.$Progress.fail()
        // this.displayUnauthorized(error)
      }
    }
  },
  mounted () {
    this.allContracts()
  }
}
</script>
