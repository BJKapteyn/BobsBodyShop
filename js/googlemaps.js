function initMap() {
	var bobsAuto = {lat: 42.386, lng: -83.769};
	var map = new google.maps.Map(
		document.getElementById('googleMap'), {
			zoom: 9, 
			center: bobsAuto});
	var marker = new google.maps.Marker({position: bobsAuto, map: map});
}