<template>
  <div class="container">
		<div id="filterNavigation" class="my-5 row">
            <button class="btn btn-light col-md-1 col-3">Ipsum</button>
            <button class="btn btn-light col-md-1 col-3">consec</button>
            <!-- <button class="btn btn-light col-md-1 col-3">totam</button> -->
			<select class="btn btn-light col-md-1 col-3">
				<option value="totam">totam</option>
				<option value="">Excepteur</option>
				<option value="">sint occaecat</option>
				<option value="">cupidatat</option>
				<option value="">non proident,</option>
				<option value="">sunt in culpa</option>
				<option value="">qui officia</option>
				<option value="">in voluptate</option>
			</select>
            <button class="btn btn-light col-md-2 col-3">rem</button>
            <button class="btn btn-light col-md-1 col-3">aperiam</button>
            <button class="btn btn-light col-md-1 col-3">Ipsum</button>
            <button class="btn btn-light col-md-1 col-3">more</button>
            <div class="col-1 col-md-1"></div>
            <div class="col-md-2 col-4 mt-2">
                <label for="radioButton">Turn Map on</label>
				<button @click=turnMapOn() class="roundButton"></button>
            </div>
		</div>
		<div class="my-5"></div>
		<div class="row justify-content-center">
			<div class="col-md-3" onclick="window.location='/otherPageTwo'">
				<div class="box"></div>
				<p>
					Ut enim ad minim veniam,
					quis nostrud exercitation
				</p>
			</div>
			<div class="col-md-3">
				<div class="box"></div>
				<p>
				Ut enim ad minim veniam,
				quis nostrud exercitation</p>
			</div>
			<div class="col-md-3">
				<div class="box"></div>
				<p>
				Ut enim ad minim veniam,
				quis nostrud exercitation</p>
			</div>
			<div class="col-md-3">
				<div class="box"></div>
				<p>
				Ut enim ad minim veniam,
				quis nostrud exercitation</p>
			</div>
			<div class="col-md-3">
				<div class="box"></div>
				<p>
					Ut enim ad minim veniam,
					quis nostrud exercitation
				</p>
			</div>
			<div class="col-md-3">
				<div class="box"></div>
				<p>
				Ut enim ad minim veniam,
				quis nostrud exercitation</p>
			</div>
			<div class="col-md-3">
				<div class="box"></div>
				<p>
				Ut enim ad minim veniam,
				quis nostrud exercitation</p>
			</div>
			<div class="col-md-3">
				<div class="box"></div>
				<p>
				Ut enim ad minim veniam,
				quis nostrud exercitation</p>
			</div>
		</div>
		<div>
			<div id="mapBox"></div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'OtherPageOne',
  components: {
  },
  mounted () {
	document.querySelector('#mapBox').hide()
  },
  methods: {
	turnMapOn () {
		let menuBox = document.querySelector('#mapBox')
		menuBox.style.display === "none" ? (menuBox.style.display = "block") : (menuBox.style.display = "none");
	}
  }
}
</script>

<style lang="scss" scoped>
	$back-color : #C4C4C4;

    #filterNavigation > .btn {
        margin:5px 5px;
    }

	.roundButton {
		height:20px;
		width:20px;
		background-color: red;
		text-decoration: none;
		border-radius:50%;
		margin-left:20px;
		::selection {
			border:0;
		}
	}

	#mapBox {
		position: absolute;
		z-index: 50;
		background-color: $back-color;
		box-shadow: 4px 4px 15px black;
	}

	@media (min-width: 20em) {
		#mapBox {
			top:40%;
			height:50%;
			width: 80%;
			left:10%;
			right:10%;
		}
	}

	@media (min-width: 43em) {
		#mapBox {
			top:25%;
			height:50%;
			width: 90%;
			left:5%;
			right:5%;
		}
	}

	@media (min-width: 62em) {
		#mapBox {
			left:50%;
			top:25%;
			height:70%;
			width: 40%;
			right:10%;
		}
	}

</style>