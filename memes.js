var dict = []; 
var intro = ["essay","research", "destroy","design","french","typography", "level","flower", "exhibition", "beautiful" ];
var chap1 = ["dog","cat" ];
var chap2 = ["arab","spring","activism" ];
var chap3 = ["graphic","design" ];




var conclusion = ["critical","shite" ];


function run(list){

	var async_request=[];
	var results = [];
	var wordArray = list;

	dict = [];

	var mainMemesDiv = document.getElementById("right");
	mainMemesDiv.innerHTML = "";

	var keywordDiv = document.getElementById("left");
	keywordDiv.innerHTML = "";

	for(var i=0; i<wordArray.length; i++){

		var keywordDiv = document.getElementById("left");
		keywordDiv.innerHTML += "<span id='keymatch' class='match "+wordArray[i]+"Span'>"+wordArray[i].toUpperCase()+"</span><br>";

		var clientId = "0392cec1cd49283";

		async_request.push($.ajax({
		    url: "https://api.imgur.com/3/gallery/search?q="+wordArray[i],
		    type: "GET",
		    datatype: "text",
		    success: giveData,
		    error: giveData,
		    beforeSend: function (xhr) {
		        xhr.setRequestHeader("Authorization", "Client-ID " + clientId);
		    }
		}));

		function giveData(data) {
			var foundImg;
			for(var i=0; i<data.data.length; i++){
				if(data.data[i].link.includes("jpg") || data.data[i].link.includes("jpeg") || data.data[i].link.includes("gif") || data.data[i].link.includes("png")){
					
					foundImg = data.data[i].link;
					break;

				} 
			}
			//push the thing
			results.push(JSON.stringify(foundImg || "errorimg.png"));
		}
	}

	$.when.apply(null, async_request).done( function(){

		for(var i=0; i<wordArray.length; i++){
			dict.push({key:wordArray[i]});
		}


		for(var i=0; i<results.length; i++){
			dict[i].value = results[i];
		}

		for(var i=0; i<dict.length; i++){

			var div = document.createElement('div');
			var mainMemesDiv = document.getElementById("right");

			div.setAttribute('class', 'imgur');
			div.setAttribute('id', dict[i]['key']);
			div.setAttribute('onmouseover','change(this.id)');
			div.setAttribute('onmouseout','resetit(this.id)');

			div.style.textAlign = "center";

			div.innerHTML = "<img src="+dict[i]['value']+"/>";
			mainMemesDiv.appendChild(div);
		}
	});
	fillTemp();
}


function resetit(id){
	var singlediv = document.getElementById(id);
	var getSpan = document.getElementsByClassName('match '+id+'Span');

	getSpan[0].style.color = "blue";

	for(var i = 0; i<dict.length; i++){
		if(id.includes(dict[i]['key'])){

			singlediv.innerHTML = "<img src="+dict[i]['value']+"/>";
			singlediv.style.backgroundColor = "white";
			singlediv.style.textAlign = "center";

		}
	}
}

function change(id){
	var singlediv = document.getElementById(id);
	var getSpan = document.getElementsByClassName('match '+id+'Span');

	getSpan[0].style.color = "black";

	singlediv.innerHTML = "";
	singlediv.innerHTML = id.toUpperCase();

	singlediv.style.lineHeight = "40vh";
	singlediv.style.textAlign = "center";
	singlediv.style.color = "white";
	singlediv.style.backgroundColor = "blue";
	singlediv.style.fontFamily = "atlas";
	singlediv.style.fontSize = "20px";
	singlediv.style.cursor = "crosshair";
	singlediv.style.verticalAlign = "middle";

}

function fillTemp(){

	var navDiv = document.getElementById("navigation");
	navDiv.innerHTML = "<a onclick='run(intro)'>[INTRO]</a><a onclick='run(chap1)'>[CHAPTER 1 UNDERSTANDING TERMS]</a><a onclick='run(chap2)'>[CHAPTER 2 MEMES AND ACTIVISM]</a><a onclick='run(chap3)'>[CHAPTER 3 GRAPHIC DESIGN AND ACTIVISM]</a><a onclick='run(conclusion)'>[CONCLUSION]</a>";

	var navDiv2 = document.getElementById("navigation2");
	navDiv2.innerHTML = "By Pascal Schilp";

	var footerDiv = document.getElementById("footer");
	footerDiv.innerHTML = "On Digital Activism, Memes<br>and Graphic Design";

	var headerDiv = document.getElementById("header");
	headerDiv.innerHTML = "Participatory Media and Memes<br>as Pitchforks and Torches";

}

run(intro);

