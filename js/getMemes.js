var wordArray = ["essay","research", "destroy","design","french","typography", "level","flower", "exhibition", "beautiful", "letter","dog","cat","meme","lol","4chan","reddit","cute"];


for(var i=0; i<wordArray.length; i++){
	// var regex = new RegExp("\\b" + wordArray[i] + "\\b", "g");

	// $("#mainText").html(function(i, html) {
	//     return html.replace(regex, "<span>$&</span>");
	// });


	var clientId = "55e86230a27ba2f";





			//get data
			$.ajax({
				//search for tag {research}
			    url: "https://api.imgur.com/3/gallery/t/"+wordArray[i],
			    type: "GET",
			    //to do: try json, parsejson
			    datatype: "text",
			    success: giveData,
			    error: giveData,
			    beforeSend: function (xhr) {
			        xhr.setRequestHeader("Authorization", "Client-ID " + clientId);
			    }
			});

			function giveData(data) {
					var div = document.createElement('div');
					var mainMemesDiv = document.getElementById("mainMemes");

					div.setAttribute('class', "generatedMeme col-sm-3");
// data.data.name
					div.innerHTML = "<span class='match'>"+JSON.stringify(data.data.name)+"</span><br><br><img src="+JSON.stringify(data.data.items[0].link)+"/>";

					mainMemesDiv.appendChild(div);

				console.log(data);
			}
}