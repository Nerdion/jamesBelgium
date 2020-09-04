<template>
    <div class="m-2"></div>
    <div class="container-fluid authBox">
        <div class="row d-flex justify-content-center text-center align-items-center h-100">
            <div class="col-md-4 col-12">
                <p>Log In . <b>Register</b></p><hr/><br>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"><br>
                <input type="password" class="form-control" id="password" placeholder="Password" name="password"><br>
                <button type="button" class="btn btn-danger btn-block">Sign In</button><br>
                <small>By submitting, I accept TBD’s terms of use.</small><hr>
                <p>You want to move faster?</p><br>
                <button type="button" class="btn btn-dark btn-block">Continue with Apple</button>
                <button type="button" class="btn btn-primary btn-block">Continue with Facebook</button>
                <button type="button" class="btn btn-light btn-block">Continue with Google</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Register'
}
</script>

<style>

</style>