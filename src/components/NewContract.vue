<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <br /><br><br><br>
        <div class="card">
          <div class="card-header">
            <h5>Record New Contract of Employees</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <!-- <div class="col-sm-1"></div> -->
              <div class="col-sm-10">
                  <div class="row">
                    <div class="col-sm-3">
                      <label for="">Employee Names:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="employeeName"
                        placeholder="Employee Name"
                      />
                    </div>
                    <div class="col-sm-3">
                      <label for="">Contract Type Name:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="contractType"
                        placeholder="Contract Type Name"
                      />
                    </div>
                    <div class="col-sm-3">
                      <label for="">Contract Start Date:</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="startDate"
                      />
                    </div>
                    <div class="col-sm-3">
                      <label for="">Contract End Date:</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="endDate"
                      />
                    </div>
                    <div class="col-sm-6">
                      <label for="">Contract Description:</label>
                      <textarea
                        type="text"
                        class="form-control"
                        placeholder="Contract Description"
                        v-model="description"
                      ></textarea>
                    </div>
                    <div class="col-sm-2">
                      <br />
                      <button type="button" class="btn btn-success active" @click="createContract();">Create</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      employeeName: '',
      contractType: '',
      startDate: '',
      endDate: '',
      description: ''
    }
  },
  methods: {
    async createContract () {
      const data = {
        names: this.employeeName,
        company_id: this.$store.state.companyID,
        contractType: this.contractType,
        startDate: this.startDate,
        endDate: this.endDate,
        description: this.description
      }
      try {
        const response = await axios.post(
          'http://localhost:8000/api/contract', data
        )
        alert('Employee Contract Created successfully')
        // const contract = 'contract creatted'
        // this.$store.commit('setContractCreated', contract)
        this.$router.push('/all-contract')
        console.log(response.data)
      } catch (error) {
        // this.$Progress.fail()
        // this.displayUnauthorized(error)
      }
    }
  }
}
</script>
