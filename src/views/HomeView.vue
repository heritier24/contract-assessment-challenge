<template>
  <div>
    <div class="content-wrapper">
      <div class="row">
        <div class="col-xl-6 grid-margin stretch-card flex-column">
          <h5 class="mb-2 text-titlecase mb-4">Status statistics</h5>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div
                class="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4"
              >
                <div>
                  <h3 class="mb-2 text-md-center text-lg-left">
                    Total Contract
                  </h3>
                  <h4 class="mb-0">8742</h4>
                </div>
                <i class="typcn typcn-briefcase icon-xl text-secondary"></i>
              </div>
              <canvas id="expense-chart" height="80"></canvas>
            </div>
          </div>
        </div>
        <div class="col-md-4 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div
                class="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4"
              >
                <div>
                  <h3 class="mb-2 text-md-center text-lg-left">
                    Active Contract
                  </h3>
                  <h4 class="mb-0">47,840</h4>
                </div>
                <i class="typcn typcn-chart-pie icon-xl text-secondary"></i>
              </div>
              <canvas id="budget-chart" height="80"></canvas>
            </div>
          </div>
        </div>
        <div class="col-md-4 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div
                class="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4"
              >
                <div>
                  <h3 class="mb-2 text-md-center text-lg-left">
                    Contract About To End
                  </h3>
                  <h4 class="mb-0">$7,243</h4>
                </div>
                <i class="typcn typcn-clipboard icon-xl text-secondary"></i>
              </div>
              <canvas id="balance-chart" height="80"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- partial -->
  </div>
</template>
