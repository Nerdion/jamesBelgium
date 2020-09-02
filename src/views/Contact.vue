<template>
        <div class="container">
            <h1>Contact</h1>
            <div class="m-5">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="name" placeholder="First Name and Last Name" name="uname"><br>
                    <input type="email" class="form-control" id="email" placeholder="email Address" name="email"><br>
                    <input type="text" class="form-control" id="subject" placeholder="Subject" name="Subject">
                </div>
                <div class="col-md-3">

                </div>
                <div class="col-md-3">
                    <h4>Contact Information</h4>
                    info@TBD.com<br>
                    +32 440 XX XX 54<br>
                    Belgium
                </div>
                <div class="col-md-1">

                </div>
            </div>
            <div class="row">
                <div class="col-md-1">

                </div>
                <div class="col-md-10">
                    <textarea id="Message" name="Message" placeholder="Message" style="height:200px"></textarea>
                </div>
                <div class="col-md-1">

                </div>
            </div>
            <input type="button" class="butt" value="Submit">
        </div>
    </div>

</template>

<script>
export default {
    name:'Contact'
}
</script>

<style>

</style>