var createCells = "<td>" + element.nomor +"</td><td>" + element.nama +"</td><td>" + element.video +"</td><td>" + element.link +"</td>";
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var data=JSON.parse(xhttp.responseText);
		data.forEach(function(element) {
			document.getElementById("data").innerHTML += createCells;
		});
	}
};

xhttp.open("GET", "db_video.json", true);
xhttp.send();