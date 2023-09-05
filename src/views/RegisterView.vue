<template>
  <div class="content-wrapper d-flex align-items-center auth px-0">
    <div class="row w-100 mx-0">
      <div class="col-lg-6 mx-auto">
        <div class="auth-form-light text-left py-5 px-4 px-sm-5">
          <div class="brand-logo">
            <!-- <img src="images/logo-dark.svg" alt="logo" /> -->
            <h3>Contract Demo</h3>
          </div>
          <h4>New here?</h4>
          <h6 class="font-weight-light">
            Signing up is easy. It only takes a few steps
          </h6>
          <form class="pt-3">
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                id="exampleInputUsername1" v-model="name"
                placeholder="Your Names"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control form-control-lg"
                id="exampleInputEmail1" v-model="email"
                placeholder="Your Email"
              />
            </div>
            <div class="form-group">
              <input type="text" class="form-control form-control-lg" placeholder="Entering Company Name" v-model="companyName">
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                id="exampleInputPassword1"
                placeholder="Password" v-model="password"
              />
            </div>
            <div class="mt-3">
              <button type="button"
                class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                href="#" @click="signUp();"
                >SIGN UP</button
              >
            </div>
            <div class="text-center mt-4 font-weight-light">
              Already have an account?
              <a href="/login" class="text-primary">Login</a>
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
      name: '',
      email: '',
      companyName: '',
      password: ''
    }
  },
  methods: {
    async signUp () {
      const data = {
        name: this.name,
        email: this.email,
        companyName: this.companyName,
        password: this.password
      }
      try {
        const response = await axios.post(
          'http://localhost:8000/api/signup', data
        )
        console.log(response.data)
        alert('Company and User registration successful')
        this.$router.push('/login')
        // window.location.href = '/login'
      } catch (error) {
        this.$Progress.fail()
        this.displayUnauthorized(error)
      }
    }
  }
}
</script>
