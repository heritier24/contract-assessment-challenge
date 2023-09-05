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
      <div class="row">
        <div class="col-sm-5">
            <ContractBodyDetails
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
      :dateCreatedAndExpired="contract.dateCreatedAndExpired"
      @getDetailsUpdate="getDetailsUpdate"/>
        </div>
        <div class="col-sm-7">
             <div class="card">
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col-sm-9">
                            <h4 class="card-title">You Can Update Contract Details of Employee</h4>
                            <p class="card-description">
                              Update Information
                            </p>
                        </div>
                        <div class="col-sm-3">
                            <button type="button" class="btn btn-info">Export</button>
                        </div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Employee Names</label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" placeholder="Employee Names" v-model="employeeNames">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputEmail2" class="col-sm-3 col-form-label">Contract Type</label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" placeholder="Contract type" v-model="contractType">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputMobile" class="col-sm-3 col-form-label">Contract StartDate</label>
                      <div class="col-sm-9">
                        <input type="date" class="form-control" id="exampleInputMobile" v-model="startDate">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputPassword2" class="col-sm-3 col-form-label">Contract EndDate</label>
                      <div class="col-sm-9">
                        <input type="date" class="form-control" id="exampleInputPassword2" v-model="endDate">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputConfirmPassword2" class="col-sm-3 col-form-label">Contract Description</label>
                      <div class="col-sm-9">
                        <textarea class="form-control" id="exampleInputConfirmPassword2" placeholder="Contract Description" v-model="description"></textarea>
                      </div>
                    </div>
                    <button type="button" class="btn btn-primary mr-2" rows="6" @click="updateContract();">Update Contract</button>
                    <!-- <button class="btn btn-light">Cancel</button> -->
                </div>
              </div>
        </div>
      </div>
    </div>
    <!-- partial -->
  </div>
</template>
<script>
import ContractBodyDetails from '../components/ContractoBodyDetails.vue'
import axios from 'axios'
// import NewContract from '../components/NewContract.vue'
export default {
  components: {
    ContractBodyDetails
  },
  data () {
    return {
      contracts: [],
      employeeNames: '',
      contractType: '',
      startDate: '',
      endDate: '',
      description: ''
    }
  },
  methods: {
    newContract () {
    //   this.$modal.show(
    //     NewContract,
    //     { width: 500 },
    //     { shiftX: 0.5, shiftY: 0, width: 1000, height: 400 }
    //   )
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
    },
    async singleContract () {
      const contractID = this.$route.params.id
      try {
        const response = await axios.get(
          'http://localhost:8000/api/contract/' + contractID
        )
        this.employeeNames = response.data.employeeNames
        this.contractType = response.data.contractType
        this.startDate = response.data.startDate
        this.endDate = response.data.endDate
        this.description = response.data.description
      } catch (error) {
        // this.$Progress.fail()
        // this.displayUnauthorized(error)
      }
    },
    async getDetailsUpdate () {
      const contractID = this.$store.state.contractID
      try {
        const response = await axios.get(
          'http://localhost:8000/api/contract/' + contractID
        )
        this.employeeNames = response.data.employeeNames
        this.contractType = response.data.contractType
        this.startDate = response.data.startDate
        this.endDate = response.data.endDate
        this.description = response.data.description
      } catch (error) {
        // this.$Progress.fail()
        // this.displayUnauthorized(error)
      }
    },
    updateContract () {
      alert('update Contract')
    }
  },
  mounted () {
    this.allContracts()
    this.singleContract()
  }
}
</script>
