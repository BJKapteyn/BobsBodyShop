function pictures() {
	var pics = ['./pics/bobpictures_front.jpeg', './pics/bob2.jpeg', './pics/bob3.jpeg', './pics/bob4.jpeg', './pics/bob5.jpeg', './pics/bob6.jpeg'];
	return pics;
}



function sliderR() {
	var pics = pictures();
	var picElement = document.getElementById('pictures');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var i = 0;
	if (i < 0) {
		i = pics.length;
	}
	function move() {
		if (i >= pics.length-1) {
			i = 0;
		} else if (i < 0) {
			i = pics.length;
		} else {
			i++;
		}
		picElement.src = pics[i];
	}
	left.addEventListener('click', function() {
		if (i <= 0) {
			i = pics.length-1;
		} else {
			i--;
		}
		picElement.src = pics[i];
	});
	right.addEventListener('click', function() {
		if (i >= pics.length-1) {
			i = 0;
		} else {
			i++;
		}
		picElement.src = pics[i];
	})
	setInterval(move, 10000);
}

sliderR();
