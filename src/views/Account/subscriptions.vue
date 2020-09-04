<template>
  <div class="container">
    <div class="row my-5">
      <div class="col">
        <h3>Your Subscriptions</h3>
        <p>
          Manage the content and the frequency of the mails that we send you
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-12">
        <div class="row">
          <div class="col-10">
            <h5>Message</h5>
            <p>Receive messages from buyers or sellers</p>
          </div>
          <div class="col">
            <input type="checkbox" class="radioCheckBox" />
          </div>
        </div>
        <div class="row">
          <div class="col-10">
            <h5>Reminders</h5>
            <p>
              Receive reminders for steps in the process that you might have missed
            </p>
          </div>
          <div class="col">
            <input type="checkbox" class="radioCheckBox" />
          </div>
        </div>
        <div class="row">
          <div class="col-10">
            <h5>Promotions and tips</h5>
            <p>
              Receive coupons, promotions, surveys, product updates, and
              inspiration from TBD
            </p>
          </div>
          <div class="col">
            <input type="checkbox" class="radioCheckBox" />
          </div>
        </div>
        <div class="row">
          <div class="col-10">
            <h5>Policy and community</h5>
            <p >Receive updates on home regulations</p>
            <b>Account support</b>
          </div>
          <div class="col">
            <input type="checkbox" class="radioCheckBox" />
          </div>
        </div>
        <div class="row">
          <div class="col-10">
            <p>
              Receive messages about your account, your trips, legal
              <br />notifications, security and privacy matters, and <br />customer
              support requests. For your security, you <br />cannot disable email
              notifications and we may contact <br />you by phone or other means if
              needed.
            </p>
          </div>
          <div class="col">
            <input type="checkbox" class="radioCheckBox" />
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-5"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Subscriptions",
  components: {},
};
</script>

<style lang="scss" scoped>
  
</style>
