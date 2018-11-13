var div1 = document.getElementsByClassName("fade");
for(var i = 0; i < div1.length; i ++){
	div = div1[i];
	div.style.background = "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(assets/pictures/img"+ (i + 1) +".jpg)";
	div.style.backgroundSize = "1250px";
	div.style.position = "relative";
	div.style.backgroundPosition = "0px, -250px";
	div.style.backgroundRepeat = "no-repeat";

	var caption = div.getElementsByClassName("caption");

	caption[0].innerHTML = tags[i];
}