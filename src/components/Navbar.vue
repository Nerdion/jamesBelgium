<template>
	<div id="menuBar">
		<div class="py-4"></div>
		<ul class="text-center">
			<li>
				<a href="/myaccount">Your TDB Account</a>
			</li>
			<li>
				<a href="#">Lorem ipsum dolor sit amet</a>
			</li>
			<li>
				<a href="#">Our AI System</a>
			</li>
			<li>
				<a href="#">Why Selling with us?</a>
			</li>
			<li>
				<a href="/about" @click="toggleNav()">About</a>
			</li>
			<li>
				<a href="/contact" @click="toggleNav()">Contact</a>
			</li>
		</ul>
	</div>
	<nav class="navbar navbar-light">
		<div class="row" style="flex-grow:1;text-align:center">
			<div class="col">
				<!-- Collapse button -->
				<button id="menuBarButton" class="btn" @click="toggleNav()">
					<i class="fa fa-bars fa-2x"></i>
				</button>
			</div>
			<div class="col">
				<router-link to="/">
					<h3 id="pageTitle">TBD</h3>
				</router-link>
			</div>
			<div class="col">
				<div class="row justify-content-right">
					<div class="col-5"></div>
					<div class="col-6">
						<div class="row">
							<div class="col">
								<a class="btn h3" href="/login">Sign In</a>
							</div>
							<div class="col d-none d-sm-block ">
								<button class="btn btn-light h3" onclick="window.location='/register'">Register</button>
							</div>
						</div>
					</div>
					<div class="col-1"></div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "mainNavbar",
	mounted() {
		document.querySelector("#menuBar").style.display = "none";
	},
	methods: {
		toggleNav() {
			let menuBox = document.querySelector("#menuBar");
			menuBox.style.display === "none"
				? (menuBox.style.display = "block")
				: (menuBox.style.display = "none");
		},
	},
};
</script>

<style lang="scss">

$primary-color : #F1CFCF;
$secondary-color: #c4c4c4;
$blue-color:blue;

#pageTitle {
	text-decoration: none !important;
	color:black;
	&:hover {
		text-decoration: none !important;
		text-emphasis: none;
	}
}

.btn:focus {
	outline: none;
}

.navbar {
	background-color: $secondary-color;
}

#menuBar {
	margin-top: 4rem;
	background-color: rgba(white,0.8);
	backdrop-filter: blur(5px);
	z-index: 99;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90vh;
	width: 100%;
	ul {
		padding-left: 0;
		li {
			list-style-type: none;
			a {
				text-decoration: none;
				color: black;
				&:hover {
					color: $blue-color;
				}
			}
		}
	}
}

@media (min-width: 20em) {
	#menuBar {
		li {
			margin: 1rem 0;
			a {
				font-size: 1.35rem;
			}
		}
	}
}

@media (min-width: 43em) {
	#menuBar {
		li {
			margin: 2.5rem 0;
			a {
				font-size: 2rem;
			}
		}
	}
}

@media (min-width: 62em) {
	#menuBar {
		li {
			margin: 1.5rem 0;
			a {
				font-size: 2.75rem;
			}
		}
	}
}
</style>