var searchFeat = document.getElementById("searchFeat");
var dropDown = document.createElement("select");
	dropDown.style.width = "100%";
	dropDown.style.height = "100%";
	dropDown.style.gridColumnStart = "2";
	dropDown.style.gridRowStart = "2";
	dropDown.style.border = "none";
	dropDown.style.background = "#f2f2f2";
	dropDown.style.borderRadius = "0px";
	dropDown.style.fontSize = "18px";
	dropDown.style.backgroundImage = "linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc)";
 	dropDown.style.backgroundPosition = "calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em";
  	dropDown.style.backgroundSize = "5px 5px, 5px 5px, 1px 1.5em"
 	dropDown.style.backgroundRepeat =  "no-repeat";
 	dropDown.style.color = "#636363";

 var pickerHead = document.createElement("h1");
 	pickerHead.setAttribute("id", "pickerHead");
 	pickerHead.style.gridRowStart = "1";
 	pickerHead.style.gridColumnStart = "2";
 	pickerHead.style.marginBottom = "10px";
 	pickerHead.style.color = "#f2f2f2";
 	pickerHead.style.fontSize = "24px";
 	pickerHead.style.fontFamily = "gothic";
 	pickerHead.innerHTML += "Select an interest"


	dropDown.setAttribute("id", "picker");

	for(var i = 0; i < tags.length; i ++){
		var option = document.createElement("option");
		option.innerHTML = tags[i];
		option.style.fontSize = "18px";
		option.style.border = "none";
		option.style.padding = "5px";
		option.style.fontFamily = "gothic";
		dropDown.appendChild(option);
	}

searchFeat.appendChild(dropDown);
searchFeat.appendChild(pickerHead);