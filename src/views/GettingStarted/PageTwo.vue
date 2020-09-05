<template>
    <div class="container">
        <div class="m-5"></div>
        <div class="row">
            <div class="col" style="border-bottom: 1px solid black;">
                <b style="font-size: xx-large;">Let’s get you started</b> <br><br>
                <p>Welcome First Name, Last Name . Email Address</p>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-7">
                <input type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet,"><br>
                <input type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet,"><br>
                <input type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet,"><br>
                <input type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet,"><br>
                <input type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet,"><br>
                <input type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet,"><br>
                <input type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet,"><br>
                <input type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet,"><br>
                <input  onclick="window.location='/gettingStarted/three'" type="button" class="btn btn-dark form-control" value="Submit">
                <small class="text-center">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </small>
                <div class="m-5"></div>
            </div>
            <div class="col-md-5">
                <div class="row">
                    <div class="col bigBox"></div>
                </div>
                <div class="row smallBoxes">
                    <div class="col"><div></div></div>
                    <div class="col"><div></div></div>
                    <div class="col"><div></div></div>
                </div>
                <div class="row">
                    <div class="col">
                        <p>Ut enim ad minim veniam, </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <input type="button" class="btn btn-dark form-control" value="Lorem ipsum dolor ">
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name:'PageTwo'
}
</script>

<style lang="scss" scoped>
.smallBoxes > .col {
    height:80px;
    width:100px;    
    background-color: dimgray;
    margin:20px;
}

.bigBox {
    height:300px;
    width:330px;
    margin:0 20px 10px 20px;
    background-color: dimgray;
}
</style>

