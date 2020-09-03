<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="m-5"></div>
        <h2>Personal Info</h2>
        <div class="m-2"></div>
        <p>TBD only releases contact information for buyers and seller after a house visit or offer is in place.</p>
        <div class="my-5"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-12">
        <b>Legal Name</b>
        <p>Lorem ipsum dolor sit amet,</p>
        <b>User Name</b>
        <p>Lorem ipsum dolor sit amet,</p>
        <b>Password</b>
        <p>************* .Edit</p>
        <b>Gender</b>
        <P>Lorem ipsum dolor sit amet,</P>
        <b>Date of Birth</b>
        <P>Lorem ipsum dolor sit amet,</P>
      </div>
      <div id="sidePanel" class="col-md-6 col-12">
        <b>Email Address</b>
        <p>Lorem ipsum dolor sit amet,</p>
        <b>Phone Number</b>
        <p>+32 470 XXXXX . Edit</p>
        <b>Government ID</b>
        <p>Not Defined . Edit</p>
        <b>IBAN</b>
        <P>Lorem ipsum dolor sit amet,</P>
        <b>Address</b>
        <P>Lorem ipsum dolor sit amet,</P>
        <b>Deactivate Your Account</b>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "PersonalInfo",
  components: {},
};
</script>

<style lang="scss" scoped>
	#sidePanel {
		border-left: 2px black solid;
		padding-left:4%;
		padding-bottom:10%;
	}
</style>