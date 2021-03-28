function start() {
	var gallery = document.getElementById("gallery");
		for(var i=0;i<6;i++) {
			var img = document.createElement("img");
			img.setAttribute("src","img/img"+i+".jpg");
			img.setAttribute("onclick","onchange_bg("+i+")");
			gallery.appendChild(img);
		}
		
}
function onchange_bg(id) {
			document.body.style.backgroundImage = "url('img/img"+id+".jpg')";
		}