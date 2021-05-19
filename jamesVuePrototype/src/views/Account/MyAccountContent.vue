<template>
  <div id="myAccount" class="container">
    <div class="row">
		<div class="col">
			<div class="m-5"></div>
			<h2>My TBD Account</h2>
			<div class="m-2"></div>
			<p>Welcome First Name, Last Name . Email Address</p>
			<div class="m-4"></div>
		</div>
    </div>
    <div class="row">
      <div class="col-md-4" onclick="window.location='/myaccount/profile'">
        <div>
          <i class="smallBox"></i>
          <b>Personal Info</b>
          <p>
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
            <br />labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="col-md-4" onclick="window.location='/myaccount/unkown1'">
        <div>
          <i class="smallBox"></i>
          <b>Excepteur sint occaecat</b>
          <p>
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
            <br />labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="col-md-4" onclick="window.location='/myaccount/unkown2'">
        <div>
          <i class="smallBox"></i>
          <b>Duis aute irure dolor in</b>
          <p>
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
            <br />labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="col-md-4" onclick="window.location='/myaccount/unkown3'">
        <div>
          <i class="smallBox"></i>
          <b>Lorem ipsum dolor sit amet</b>
          <p>
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
            <br />labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="col-md-4" onclick="window.location='/myaccount/subscriptions'">
        <div>
          <i class="smallBox"></i>
          <b>Your Subscriptions</b>
          <p>
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
            <br />labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="col-md-4" onclick="window.location='/myaccount/paymentBillings'">
        <div>
          <i class="smallBox"></i>
          <b>Your Payments and Billings</b>
          <p>
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
            <br />labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyAccountContent",
};
</script>

<style lang="scss">
.box {
  width: 80%;
  margin-left:10%;
  margin-bottom: 5%;
  padding-top: 35%;
  padding-bottom: 35%;
  display: block;
  background-color: dimgray;
}

.smallBox {
  height: 24px;
  width: 24px;
  background-color: white;
  display: block;
  border: 1px black solid;
}

#myAccount .row > .col-md-4 > div {
  background: #c4c4c4;
  border-radius: 5px;
  padding:1em;
  margin-bottom:30px;
  cursor: pointer;
}
</style>