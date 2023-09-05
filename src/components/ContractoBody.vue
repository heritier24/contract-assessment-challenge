<template>
  <div @click="displayCardContract();">
    <div :class="row">
      <div :class="colSmRow">
        <div :class="card">
          <div :class="cardBody">
            <div :class="row">
              <div :class="colSmTitle">
                <h4 class="card-title"><span hidden>{{ contractID }}</span>{{ contractTitle }}</h4>
                <p class="card-description">{{ contractEmployeeName }}</p>
              </div>
              <div class="col-sm-5">
                <p style="margin-left: 150px">{{ dateCreatedAndExpired }}</p>
              </div>
            </div>
            <div class="template-demo">
              <p>
                {{ contractDescription }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-2 btn"><i class="mdi mdi-printer"></i>.</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    contractID: {
      type: String,
      default: '',
      required: true
    },
    row: {
      type: String,
      default: 'row',
      required: true
    },
    colSmRow: {
      type: String,
      default: 'col-md-8 grid-margin stretch-card',
      required: true
    },
    card: {
      type: String,
      default: 'card'
    },
    cardBody: {
      type: String,
      default: 'card-body'
    },
    colSmTitle: {
      type: String,
      default: 'col-sm-7',
      required: true
    },
    contractTitle: {
      default: 'Contract Name',
      type: String,
      required: true
    },
    contractEmployeeName: {
      default: 'Employee or Organization Name',
      type: String
    },
    dateCreatedAndExpired: {
      default: 'Date Created-Date Expired',
      type: String
    },
    contractDescription: {
      default: 'contract Description Details Demo',
      type: String
    }
  },
  methods: {
    displayCardContract () {
      this.$router.push('/all-contract/' + this.contractID)
    }
  }
}
</script>
