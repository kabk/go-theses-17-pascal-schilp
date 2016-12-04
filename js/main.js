
		function getRandomInt(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function changeShit(){
			//automate this with ReactJS
			div = document.getElementById('mainText');
			div.innerHTML = "<br><h1>Participatory Media and Memes as Pitchforks and Torches</h1><br>November 19th, 2016 – By Pascal Schilp<br><br><b>Introduction</b><br><br><i>\"The revolution will not be televised\"</i><br><br>In the second year of my studies at the Royal Academy of Art, the Hague, I read an <span id='highlight'>essay by Daniël van der Velden titled 'Research and Destroy'</span>. This text completely changed the way I see design, and made me realize the effect that design can have.<br><br>\"The French designers who attended praised ‘typography at this level’, as though it were an exhibition of flower arrangements, whereas the entire textual content of the book had been compiled by the designers at Werkplaats Typografie, and there was more to speak about than just the beautiful letter type.\"<br><br>Design is often seen as aestheticizing, and designers as 'logo makers'. A good example of the opposite is the Adbusters Media Foundation. A Canadian non-profit, anti-consumerist and pro-environment organization founded by Kalle Lasn and Bill Schmalz. The Adbusters Media Foundation published the the advertising-free magazine 'Adbusters'2, an activist magazine that uses design as a tool for challenging consumerism. <br><br>This realization has made me change the way I work, and ever since I have always tried to convey some sort of social or political statement with my work. One of the reasons for this is that we as graphic designers have a platform or discourse that we can use to challenge different topics, shed a light on problematic themes, or provide transparancy and insight.<br>This first came to fruition in a (web/)publication that I made about cats. Cute cats, that were able to overthrow a government. ";

			div3 = document.getElementById('references');
			div3.innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>Henley, Patricia. The Hummingbird House. MacMurray, 1999."

			var clientId = "55e86230a27ba2f";

			//get data
			$.ajax({
				//search for tag {research}
			    url: "https://api.imgur.com/3/gallery/t/research",
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
				$("#memes").html("");
				//loop through dogs data
				for(var i = 0; i<getRandomInt(10,20); i++){
				   $("#memes").append("<img src="+JSON.stringify(data.data.items[i].link)+"/><br>By: "+JSON.stringify(data.data.items[i].account_url)+"<br>"+JSON.stringify(data.data.items[i].description)+"<br><br><br>");  
				}  
			}
		}



		function changeShit2(){
			//automate this with ReactJS
			div = document.getElementById('mainText');
			div.innerHTML = "<br><h1>Chapter 1<br>Understanding Terms</h1><br><h2>'Memes'</h2><br><br>One of the main sources of inspiration for writing this thesis is <span id='highlight'>Ethan Zuckerman's Cute Cat Theory of Digital Activism</span>. I first got familiar with the theory in the second year of my studies, and it has since been stuck in the back of my mind. The theory concerns digital activism, censorship, and cute cats, in this case used as a synonym for 'memes'.<br><br> To completely understand the 'cute cats' (or memes), we should first establish what a 'meme' (not to be confused with a 'viral') exactly is. The act of defining memetics is often seen as similar to explaining your own joke, but unfortunately necessary for the sake of clarity and the point of this thesis. The term 'meme' was coined long before the internet existed, in Richard Dawkins' 'The Selfish Gene', a 1976 book on evolution theory. He posits that memes have three basic properties: Longevity, fecundity, and copy fidelity. All three of these properties are enhanced by the internet. Online meme transmission through the internet allows for higher copy fidelity, which in result allow for greater fecundity (the amount of copies made in a time frame), which in turn results in a greater longevity as multiple copies can be stored in indefinitely numerous archives.<br><br>In Web 2.0 culture memes are often best understood as pieces of cultural information, that spread from peer-to-peer, and gradually scale into a shared social phenomenon. Although the spreading of the meme happens on a micro basis, their impact is on a macro level, where memes are able to shape mindsets, forms of behaviour and actions of social groups. ";

			div3 = document.getElementById('references');
			div3.innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>Beyoncé. \"Pray You Catch Me.\" Lemonade, Parkwood Entertainment, 2016, www.beyonce.com/album/lemonade-visual-album/."

			var clientId = "55e86230a27ba2f";

			$.ajax({
			    url: "https://api.imgur.com/3/gallery/t/dogs",
			    type: "GET",
			    datatype: "text",
			    success: giveData,
			    error: giveData,
			    beforeSend: function (xhr) {
			        xhr.setRequestHeader("Authorization", "Client-ID " + clientId);
			    }
			});

			function giveData(data) {
				$("#memes").html("");

				for(var i = 0; i<getRandomInt(10,20); i++){
					   $("#memes").append("<img src="+JSON.stringify(data.data.items[i].link)+"/><br>By: "+JSON.stringify(data.data.items[i].account_url)+"<br>"+JSON.stringify(data.data.items[i].description)+"<br><br><br>");  
				}  
			}
		}