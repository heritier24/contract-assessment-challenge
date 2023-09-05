<template>
  <div class="content-wrapper d-flex align-items-center auth px-0">
    <div class="row w-100 mx-0">
      <div class="col-lg-4 mx-auto">
        <div class="auth-form-light text-left py-5 px-4 px-sm-5">
          <div class="brand-logo">
            <!-- <img src="images/logo-dark.svg" alt="logo" /> -->
            <h3></h3>
          </div>
          <h4>Hello! let's get started</h4>
          <h6 class="font-weight-light">Sign in to continue.</h6>
          <form class="pt-3">
            <div class="form-group">
              <input
                type="email"
                class="form-control form-control-lg" v-model="email"
                placeholder="Email address"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Password" v-model="password"
              />
            </div>
            <div class="mt-3">
              <a
                class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                href="#" @click="login();"
                >SIGN IN</a
              >
            </div>
            <div class="text-center mt-4 font-weight-light">
              Don't have an account?
              <a href="/register" class="text-primary">Create</a>
            </div>
          </form>
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
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const data = {
        email: this.email,
        password: this.password
      }
      try {
        const response = await axios.post(
          'http://localhost:8000/api/login', data
        )
        console.log(response.data)
        alert('Login Successfull done')
        const userName = response.data.names
        const companyName = response.data.companyName
        const companyID = response.data.company_id
        this.$store.commit('setUserName', userName)
        this.$store.commit('setCompanyName', companyName)
        this.$store.commit('setCompanyID', companyID)
        this.$router.push('/')
      } catch (error) {
        this.$Progress.fail()
        this.displayUnauthorized(error)
      }
    }
  }
}
</script>
