<template>
  <div
    class="navbar-menu-wrapper d-flex align-items-center justify-content-end"
  >
    <ul class="navbar-nav mr-lg-2">
      <li class="nav-item ml-0">
        <h4 class="mb-0">{{ companyName }}</h4>
      </li>
      <li class="nav-item">
        <div class="d-flex align-items-baseline">
          <p class="mb-0">Home</p>
          <i class="typcn typcn-chevron-right"></i>
          <p class="mb-0">Main Dahboard</p>
        </div>
      </li>
    </ul>
    <ul class="navbar-nav navbar-nav-right">
      <li class="nav-item nav-search d-none d-md-block mr-0">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            aria-label="search"
            aria-describedby="search"
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="search">
              <i class="typcn typcn-zoom"></i>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    companyName: {
      type: String,
      default: 'Company Name'
    }
  }
}
</script>
