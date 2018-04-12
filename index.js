// function _len(str) {
// 	if (typeof str == "object") {
// 		str = str.join('');
// 	} else if (typeof str == "number") {
// 		str = String(str) 
// }
// 	str = str + "@@@";
// 	return str.lastIndexOf("@@@")
// }
// var arr = ["1","1"];
// var arr = "qw";
// var arr = 2;

// console.log(_len(arr));

// document.querySelector(".plus").addEventListener("click", plus)
// document.querySelector(".plus").addEventListener("click", counter)
// document.querySelector(".minus").addEventListener("click", minus)
// document.querySelector(".minus").addEventListener("click", counter)

// function plus() {
// 	counterElement = document.querySelector("h2");
// 	counterElement.innerHTML = + counterElement.innerHTML + 1;
// }
// function minus() {
// 	counterElement = document.querySelector("h2");
// 	counterElement.innerHTML = + counterElement.innerHTML - 1;
// }
// function counter(params) {
// 	document.querySelector(".counter").innerHTML = +document.querySelector(".counter").innerHTML +1
// }

function poss() {
	vWidth = window.innerWidth-50;
	vHeight = window.innerHeight-50;
	circle = document.querySelector(".circle");
	var top = randomInteger(0, vHeight)
	circle.style.top = top+"px";
	var left = randomInteger(0, vWidth)
	circle.style.left = left+"px";
}


function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}

setInterval(poss, 1000);

var circle2 = document.querySelector(".circle2");
var direction = {
	left: 0,
	top: 0,
	right: 0,
	bottom: 0
}



window.addEventListener("keydown", function(event) {
	console.log(event.keyCode);
	key = event.keyCode;
	if (key == 87) {
		direction.top = 1
	} else if (key == 65) {
		direction.left = 1
	} else if (key == 83) {
		direction.bottom = 1
	} else if (key == 68) {
		direction.right = 1
	}
	
})

window.addEventListener("keyup", function(event) {
	console.log(event.keyCode);
	key = event.keyCode;
	if (key == 87) {
		direction.top = 0
	} else if (key == 65) {
		direction.left = 0
	} else if (key == 83) {
		direction.bottom = 0
	} else if (key == 68) {
		direction.right = 0
	}
	
})

function move(x, y) {
	el = document.querySelector(".circle2");
	el.style.left = parseInt(left) + x +"px";
	el.style.top = parseInt(top) + y +"px";
}