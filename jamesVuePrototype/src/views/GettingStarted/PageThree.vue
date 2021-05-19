    <template>
    <div class="container">
        <div class="m-5"></div>
        <div class="row">
            <div class="col-md-6">
                <div class="halfContainerBox"></div>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col-md-6 ">

                    </div>
                    <div class="col-md-6">
                        <div class="mediumBox"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="mediumBox"></div>
                    </div>
                    <div class="col-md-6">
                        <div class="mediumBox"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-5 row bgPanel">
            <div class="col">
                <div class="row bgPanelChild">
                    <div class="col-md-4">
                        <b>cupidatat <br>
                        Duis aute irure</b>
                        <p>Excepteur sint 
                        Excepteur sint </p>
                        <small>Views:1,000</small>
                    </div>
                    <div class="col-md-4">
                        <p> Excepteur sint <br>
                        occaecat cupidatat</p>
                    </div>
                    <div class="col-md-4">
                        <p>occaecat cupidatat</p><br>
                        <input class="btn btn-default" type="button" value="Submit">
                    </div>
                </div>
            </div>
        </div>
        <div class="row bgPanel">
            <div class="col">
                <div class="row bgPanelChild">
                    <div class="col-md-4">
                        <b>cupidatat <br>
                        Duis aute irure</b>
                        <p>Excepteur sint<br>
                        Excepteur sint </p>
                    </div> 
                    <div class="col-md-4">

                    </div>
                    <div class="col-md-4">

                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button class="btn btn-lg btn-default">Edit</button>
            </div>
            <div class="m-5"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'PageThree'
}
</script>

<style lang="scss" scoped>
    $back-color : #C4C4C4;
    .mediumBox {
        margin:10px 0 15px 0;
        background-color:$back-color;
        height:175px;
    }

    .halfContainerBox {
        background-color:$back-color;
        height:375px;
        margin:10px 0 10px 0;
    }

    .bgPanel {
        background-color: $back-color;
        margin:1rem 0px 1rem 0px;
        .bgPanelChild {
            margin:1rem;
        }
    }

    button { 
        border: 1px solid black;
        padding: 0 4rem;
    }

</style>
