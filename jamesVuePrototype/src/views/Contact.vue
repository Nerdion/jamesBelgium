<template>
  <div class="container">
    <div class="m-5"></div>
    <h2>Contact</h2>
    <div class="m-4"></div>
    <div class="row">
      <div class="col-md-4 col-12">
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="First Name and Last Name"
          name="uname"
        />
        <br />
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Email Address"
          name="email"
        />
        <br />
        <input
          type="text"
          class="form-control"
          id="subject"
          placeholder="Subject"
          name="Subject"
        />
      </div>
      <div class="col-md-4 col-12"></div>
      <div class="col-md-3 mt-5 mb-2">
        <h4 class="font-weight-bold">Contact Information</h4>
        info@TBD.com <br />+32 440 XX XX 54 <br />Belgium
      </div>
      <div class="col-md-1"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-12">
        <textarea
          class="form-control"
          id="Message"
          name="Message"
          placeholder="Message"
          style="height:200px"
        ></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col my-5">
        <input
          id="submitContact"
          type="button"
          class="btn btn-lg btn-dark"
          value="Submit"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style type="scss">
#submitContact {
  padding-left: 4rem;
  padding-right: 4rem;
  font-size: 1.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
input,
textarea {
  border: 1px black solid !important;
}
</style>
