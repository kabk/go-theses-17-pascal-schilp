var dict = []; 

var test = [

		["revolution","<h1>Introduction</h1><br><br><i>'The revolution will not be televised'<sup>1</sup></i><br><br> As a design student I have always had an interest in the role of the graphic designer and the development of the field. What is our role in society? Are we relevant? Can we contribute? How can we contribute? Are we important? Why are we important? How can we improve? These are questions that have always been in the back of my mind for these past five years. "],
		["Research","In the second year of my studies at the Royal Academy of Art, the Hague, I happened upon an essay by Daniel van der Velden titled <i> Research & Destroy</i><sup>1</sup>, which completely changed the way I saw design, and made me realize how relevant graphic design can be. Design is often seen as aestheticizing, and designers as ‘logo makers’, completely disregarding the social and political effect that design can have, and has had through the short existence of our field. The reason behind our relevancy is that we as graphic designers have a platform or discourse that we can use to challenge a wide variety of topics, shed a light on problematic themes, or provide transparancy and insight. We have the skills to convey a message. This field of politically activistic design was also unknown to me, until I came to study at the Royal Academy of Art."],
		["technology","Graphic design has always been largely dependent on technology or specific media. Think of the printing press, posters, zines, photography, photoshop, and has always adapted beautifully to these new technologies and media. We move ourselves past our official mandate, and appropriate the new technologies in order to further develop the field. However, it seems like there is a new technology and a new medium that we haven’t quite adapted to yet, and it’s largely occupying the politically activistic field; The meme and participatory media."],
		["Web2.0","At the beginnings of the internet, the Web1.0 was invented to allow physicists to share research papers. Web2.0 was created to allow people to share pictures of cute cats (metaphorically used as ‘memes’), leisure activities and pornography. Ethan Zuckerman argues that these cute cats, or memes, are of great political importance<sup>2</sup>. His Cute Cat Theory of Digital Activism posits that most people are not interested in activism; rather, they want to use the web for mundane activities such as surfing pornography and lolcats. The tools that were developed for sharing these cute cats, participatory media such as Facebook, Flickr and Twitter, to name a few, proved to be very useful for activists who may lack resources to develop dedicated tools themselves. This, in turn, makes the activists more immune to reprisals by governments than if they were using a dedicated activistic platform, because shutting down a popular public platform provokes a larger public outcry than shutting down an obscure one. Take away peoples ability to look at porn and cute cats, and they will riot. "],
		["Impact","But what then, of graphic design? A meme needs little designing; a funny low quality image of a cat, with 2 lines of text in the Impact typeface might get more views than a thoroughly, well designed poster. Are we still relevant? Can we contribute? How can we contribute?"],

		["censorship","<h1>Understanding Terms</h1><br><br><h2>Memes</h2><br>One of the main sources of inspiration for writing this thesis is Ethan Zuckerman’s Cute Cat Theory of Digital Activism<sup>3</sup>. I first got familiar with the theory in the second year of my studies, and it has since been stuck in the back of my mind. The theory concerns digital activism, censorship, and cute cats, in this case used as a synonym for ‘memes’. "],
		["joke","To completely understand the ‘cute cats’ (or memes), we should first establish what a ‘meme’ (not to be confused with a ‘viral’) exactly is. The act of defining memetics is often seen as similar to explaining your own joke, but unfortunately necessary for the sake of clarity and the point of this thesis. The term ‘meme’ was coined long before the internet existed, in Richard Dawkins’ ‘The Selfish Gene’, a 1976 book on evolution theory. He posits that memes have three basic properties<sup>4</sup>: Longevity, fecundity, and copy fidelity. All three of these properties are enhanced by the internet. Online meme transmission through the internet allows for higher copy fidelity, which in result allow for greater fecundity (the amount of copies made in a time frame), which in turn results in a greater longevity as multiple copies can be stored in indefinitely numerous archives."],
		["cultural","In Web 2.0 culture memes are often best understood as pieces of cultural information<sup>5</sup>, that spread from peer-to-peer, and gradually scale into a shared social phenomenon. Although the spreading of the meme happens on a micro basis, their impact is on a macro level, where memes are able to shape mindsets, forms of behaviour and actions of social groups. "],
		["viral","<h2>Virals</h2><br>People often use the term meme and viral interchangeably, but there’s a very distinctive difference between the two. Jeff Hemsley and Robert Mason suggested the definition of a viral as 'a word-of-mouth-like cascade diffusion process wherein a message is actively forwarded from one person to the other, within and between multiple weakly linked personal networks, resulting in a rapid increase in the number of people who are exposed to the message'<sup>6</sup>. They proposed three key attributes of virality, those being (1) a person-to-person mode of diffusion; (2) great speed, which is enhanced by social media platforms; and (3) broad reach, often achieved by bridging multiple networks."],
		["meme","The main difference between a meme and a viral is that: a viral exists of a single cultural unit (a video, photo, joke, behaviour, gesture). A good example of this is the Harlem Shake. The original song 'Harlem Shake' is the title of a 2012 instrumental track produced by Baauer. On January 30th, 2013, youtuber Filthy_Frank uploaded a video that opens with four people dressed in latex suits dancing to Baauer’s 'Harlem Shake'<sup>7</sup>. Due to Filthy_Franks popularity and the funny nature of the dance, the video was widely spread from person to person through participatory media platforms such as Youtube, Facebook, Tumblr, etc. On February 2nd Youtube users TheSunnyCoastSkate and PHL_On_NAN uploaded a parody video of this 'Harlem Shake'. On February 7th, Youtube user hiimrawn uploaded a version titled 'Harlem Shake v3 (office edition)' featuring the staff of online video production company Maker Studios. The video received 7.4 million views in the first week, and inspired a notable subset of contributions from the masses, as well as well-known internet companies, such as BuzzFeed, CollegeHumor, Vimeo and Facebook. "],
		["harlem","Now in this case, the viral video is the video by user hiimrawn, inspired by Filthy_Frank. It is one single cultural unit, namely a video. The 'Harlem Shake' as a meme is the silly dance it featured. Thus we can say: A viral is a single cultural unit (formulated in words, image or video), that is spread by multiple agents and is viewed by many millions. A meme on the other hand is: spawned by a specific (often viral) text, video, or photo. The ‘founding’ unit, the viral, is often followed by many versions, each viewed by fewer people. Throughout this thesis, I will be using the terms ‘memes’ and ‘cute cats’ interchangeably."],
		["share","<h2>Cute Cats</h2><br>At the beginnings of the internet, the Web 1.0 was invented to allow physicists to share research papers. Web 2.0 was created to allow people to share pictures of cute cats, and overall mundane leisure activities. Ethan Zuckerman’s Cute Cat Theory of Digital Activism posits that most people are not interested in activism; rather, they want to use the web for mundane activities, surfing pornography and lolcats. He states: <i>	'Sufficiently usable read/write platforms will attract porn and activists.	If there’s no porn, the tool doesn’t work.	If there are no activists, it doesn’t work well.'</i>"],
		["porn","Porn is a weak test for the success of participatory media, or web 2.0, it’s like tapping a microphone and asking 'Is it on?'<sup>8</sup>. If you’re not getting porn in your system, it doesn’t work. Activism is an ever better test, if activists are using your tools, it’s a pretty good indication that the tools are useful and usable. Some examples of platforms that are succesful according to Zuckerman’s theory:	<i>Youtube: cute videos of your cats, videos of 	protests	Flickr: cute photos of your cats, subversive 	photos unblocked by firewalls			Twitter: realtime updates on your cat being cute, realtime updates on whether activists are free or imprisoned</i>"],
		["political","Suddenly, the image macros of cute cats, had attained a political importance. People used cute cats as a form of activism, because the environments originally created for leasurely browsing those cute cats, were incredibly convenient to use for activism. If a government were to disagree with the political cats, and would censor platforms such as Facebook, Tumblr, etc, it would hurt people’s ability to look at cute cats online, spreading dissent and encourage the activists’ cause."],
		["participatory","<h2>Participatory Media</h2><br>Participatory media is defined as media where the audience can play an active role in the process of collecting, reporting, analyzing and disseminating content. Some examples of participatory media include blogs, wikis, RSS, and social networks. Participatory media is the umbrella name for social media/networks; all social media are participatory media, but not all participatory media are social media. Although throughout this thesis participatory media will be often referred to in relation to social networks it is important to know that there is a difference between the two terms."],

		["discourse","<h1>Memes and Activism</h1><br><br><h2>Memes as Activism</h2><br>Over the course of the last few decades, the line between memes and activism has blurred. Politically engaged memes started appearing and opened up a new discourse for activism. Memes are often simply viewed as a funny images with little significance, which is mostly true, but people seem to forget that memes are inherently activistic; If Donald Trump has made a controversial statement, the first and usually quickest reaction to this are the creation of hundreds, if not thousands of memes. This means that Trumps statement has moved something in people, and the people respond to this with the quickest and easiest tools at hand; humor. And this is exactly what makes the meme so powerful; they’re jokes, they’re free, they’re fast, and they’re contagious. Any individual with an internet connection is able to join the discourse, and voice their opinion. George Orwell stated in a 1945 newspaper article that: 'Every joke is a tiny revolution'<sup>9</sup>, and as such, the meme is an open source weapon of the public."],
		["Orwell","As a followup to George Orwell’s quote I’d like to citate Saul Alinsky, one of Barack Obama’s political mentors, who said 'Ridicule is a man’s best weapon'<sup>10</sup>, in his book Rules for Radicals. There is no defense against ridicule, because it is irrational. Ridicule works as a pressure point to force the enemy to act defensively and into concessions. And most of all, ridicule is a necessity. It is once we get censored in our ability to ridicule, we find ourselves in scary situations not unlike the attack on Charlie Hebdo. As much as I declare ridicule and humor a weapon, it’s a peaceful one at that. It’s bullets aim at questions and opening discourse, and are not meant to physically harm humans. One of the best examples of this I can provide is the tv animation series South Park, the show became infamous for its profanity and ridiculing a wide range of topics. Not coincidentally, the show is responsible for the creation of many, many memes."],
		["silly","Now that we’ve established what memes are and how they function on the platforms that carry them, we can take a closer look at some examples of the actual impact memes can have. In this chapter I will be highlighting a couple of case studies that all started out with a silly meme. Memes play an important role in these case studies. Shared slogans that travel easily across large and diverse populations are essential to stimulating thousands or millions of people to take up a cause. "],
		["Occupy","<h2>Occupy Wall Street</h2><br>The prevalent role played by memes as ‘connective action’ was strongly manifested in Occupy Wall Street, a protest movement criticizing social and economic injustices in the United States. The strong connection between this movement and memetic activity is rooted in the identity of its initiators, the editors of the Canadian magazine Adbusters. "],
		["Bull","Given the identity of Occupy’s founders, it is not surprising that the very conception of the movement in September 2011 was intertwined with memetic activity. The initial email sent out by Adbusters to its mailing list about the forthcoming protests was accompanied by a poster of a graceful ballerina pirouetting on top of Wall Street’s iconic charging bull statue<sup>11</sup>. It adhered to the familiar Adbusters aesthetic of taking a famous corporate icon and subversively repositioning it, thus calling for further interrogation and criticism of taken for-granted symbols."],
		["ballerina","And indeed, the ballerina on the charging bull was the first in a surge of memes that accompanied the protests. Ryan Milner, who provides an extensive analysis of the Occupy memes, asserts that such forms of amateur participation made a perfect fit with the movement’s egalitarian and nonauthoritative ethos<sup>12</sup>. To a large extent, the protests were energized and backed by the Web’s prominent meme hubs, particularly Reddit and Tumblr. However, the memetic activity surrounding Occupy was not one-sided. As the protests evolved, a rich variety of opininions were exposed through the posting of memes and countermemes. While numerous voices supported the protests, many others were opposed to it. This rich, multifaceted discussion is framed by Milner as a polyvocal quality of meme-based discourse, through which diverse opinions and identities are expressed and negotiaited. He demonstrates this quality through a detailed analysis of the flagship meme of the protest, ‘We Are the 99 Percent’. The ‘We Are the 99 Percent’ meme came with a clear set of instructions of how to participate and coincidentally used the same memetic qualities as the Rietveld Preservation Society campaign."],
		["american","The slogan, referring to the argument that 1 percent of the American population controls almost all the country’s financial wealth, was molded into a meme with particular aesthetics: a person holding a handwritten text depicting her or his gloomy story, leading to the shared motto 'I am the 99 percent'<sup>13</sup>. This meme’s power stems from the way its three memetic dimensions of form, content and stance re-enforce each other."],
		["countermeme","Its message about the agonies of ordinary Americans is conveyed by average-looking people with serious facial expressions holding simiar amateurisch-looking signs. The popularity of the '99 percent' meme soon generated a countermeme, in which the aesthetics and rhetoric of the original meme were played against it: the '53 percent' meme<sup>14</sup>. Created by conservative activists, it referred to the premise that only 53 percent of American people pay income tax. In this countermeme, personal stories of hard-working people who pay taexes and refrain from complaints portray Occupy protesters as the 47 percent of the country who do not actually work. According to this meme, the 99 percent protesters have failed to take personal responsibility for their actions. This dialogue between the '99' and '53', alongside their numerous offspring (e.g., the '1 percent'), constituted, according to Ryan Milner, a rich sphere of multivoiced meme-based discussion."],
		["Boston","<h2>Witch Hunt for the Boston Bombers</h2><br>A good example of participatory media and memes having a disastrous effect on society is the story of Sunil Tripathi and the Boston Marathon Bombing. The Boston Marathon Bombing was a terrorist attack where two pressure cooker bombs exploded during the Boston Marathon on April 15, 2013. Due to the close proximity of the detonations to the finish line, the moment of the blasts and the immediate aftermath were captured by many, and were quickly spread through participatory media. "],
		["killing","The two bombs exploded at approximately 2:50 pm on Boylston Street, killing three people and injuring at least 176 others. Later that day, law enforcement officials said that the bombs appeared to have been homemade, with at least one of them identified as a pressure cooker filled with schrapnel<sup>15</sup>. Photographs and video footage of the explosions and aftermath started appearing on participatory media such as Twitter and YouTube, minutes after the explosion. Other online platforms like Reddit and 4Chan started real-time discussion threads, with Redditors updating each other with the latest developments. "],
		["Twitter","Immediately after the attack, people turned to Twitter to share photos, information, and show respect to those who were directly affected by the bombs. The subreddit ‘Random Acts of Pizza’ garnered a lot of traffic from people offering to help by sending pizzas, and housing stranded runners of the marathon. Local pizza delivery places called in their entire staff to send pizzas to the hospitals, however, four local hospitals eventually had to stop accepting deliveries, and encouraged Redditors to donate to other places in need."],
		["wholesome","While this sounds like a very useful and wholesome functionality of participatory media with people using Twitter to share information about the attacks, people selflessly buying pizza for those in need, people offering stranded runners a roof, it also spawned the so called Witchhunt for the Boston Bomber. Perhaps not unlike how a witchhunt might have taken place in history. Except with less pitchforks and torches, but with participatory media and memes."],
		["subreddit","The day after the attacks, Reddit user ‘oops777’ launched a subreddit called ‘/r/FindBostonBombers’ as a hub for the online community to collect and analyze photos and video footage that were captured on the scene. The subreddit gained a lot of traction, and soon there were thousands of people trying to find and identify the Boston Bombers. The Reddit community worked together as a real life online CSI team, and managed to find several leads; some examples of the findings are the so called ‘Mystery Man on the Roof’<sup>16</sup> meme and the ‘Red Shirt Guy’ meme. The Mystery Man on the Roof meme originated from a photo that Suffolk University student Dan Lampariello shared, showing the second explosion on Twitter two hours after the event, which showed a mysterious man on the roof seemingly watching the explosion. The image was retweeted 5000 times within only a few hours. The subreddit even managed to correctly identify which brand of pressure cooker was used to make the bomb."],
		["FBI","On April 18th, the FBI shared the first surveillance photos<sup>17</sup> and videos of the lead suspects in order to find the Boston Bombers. The suspects were described wearing black jackets, khaki pants, a hat, and black backpacks. Online communities jumped at the chance to identify these suspects, cross checking the FBI footage with footage that was already posted online. Redditor ‘SPAtreatment’ managed to find an image of the described suspect, and was able to identify the hat as being a Bridgestone golf cap. This was considered a great victory for the subreddit; they had succesfully identified a man fitting the description of the FBI."],
		["harass","The next day, April 19th, a Redditor submitted a link to a Huffington Post article<sup>18</sup>, about Brown University student Sunil Tripathi who had been missing since March. The top comment of this thread, titled ‘Is missing student Sunil Tripathi Marathon Bomber #2?’, was posted by user ‘honestbleeps’ who claimed that: ‘According to Boston police scanner (via twitter) - the answer may be yes’. Tripathi, who vaguely resembled the suspect in the unclear, low quality surveillance footage released by the FBI, was soon to be declared guilty by the internet as a collective. The internet had succesfully identified suspect #2, and had solved the case, based on cross referencing low quality images with low quality footage of the FBI, judging his seemingly Middle-Eastern appearance, and a misheard, unconfirmed audio fragment of a Boston police radio scanner. The subreddit prided itself with its achievement, quickly followed by the ‘We did it Reddit!’ meme. The witchhunt was succesful, and the angry mob started pointing their pitchforks and torches at the family of Tripathi, harassing them online with tweets such as 'Sunil Tripathi is guilty. We need to find this guy and beat him repeatedly for the massacres he caused. Dirty terrorist scum. #NewBinLaden'<sup>19</sup>. "],
		["justice","The internet had done its job, solved the case of the Boston Bomber, and were now spreading their justice throughout the internet. Except they were wrong. Sunil Tripathi had indeed been missing, and disappeared on March 16, 2013, after suspending his studies due to depression. His body was found on april 23rd, floating in the Seekonk River. Tripathi had commited suicide before the attacks even happened, and had exactly nothing to do with the attack."],
		["tsarnaev","The real Boston Bombers were found and apprehended on april 19th, and were identified as brothers Dzhokhar Tsarnaev and Tamerlan Tsarnaev. They were charged on April 22 for using and conspiring to use a weapon of mass destruction resulting in death and with malicious destruction of property resulting in death."],
		["apology","After the discovery of the real Boston Bombers, people quickly started deleting tweets and posts on the subreddit, due to embarrassment of being wrong. Reddit even issued a public apology<sup>20</sup> stating: '[...] redditors did everything from donating to relief funds, having pizzas delivered to area police and hospitals, to arranging for people with dogs to bring them to a park so people could escape a bit with some cute animal therapy, and even arranging housing and transportaion for out-of-towners who were stranded in Boston because of the bombing. "],
		["witchhunt","We are all incredibly proud that the reddit platform enabled this help. However, though started with noble intentions, some of the activity on reddit fueled online witch hunts and dangerous speculation which spiraled into very negative consequences for innocent parties. The reddit staff and the millions of people on reddit around the world deeply regret that this happened. We have apologized privately to the family of missing college student Sunil Tripathi, as have various users and moderators. We want to take this opportunity to apologize publicly for the pain they have had to endure. We hope that this painful event will be channeled into something positive and the increased awareness will lead to Sunil’s quick and safe return home. We encourage everyone to join and show your support to the Tripathi family and their search.'"],
		["Arab","<h2>The Arab Spring</h2><br>In this third and last case study, I would like to showcase the Arab Spring. While this example focusses less on memes itself, participatory media were the foundation these series of revolutions were built on. Since I can not do justice to all the events that transpired during the Arab Spring in this case study alone, I will focus on the role of participatory media in organizing a revolution."],
		["spring","The Arab Spring, also known as ‘The Twitter Revolution’<sup>21</sup>, was a series of uprisings in the Arab World that started around december 17th, 2010 caused by political dissatisfaction. The initial waves of protest started in Tunisia, but demonstrations quickly spread through the rest of the Arab World resulting with civil uprisings in Iraq, Libya, Egypt, Syria, and many more. It was commonly dubbed the Arab Spring in reference to the Prague Spring of 1968, a series of uprisings against the communist rule in Czechoslovakia. Others say it was titled ‘Spring’ because the demonstrations started in December, and with the revolutions also came first signs of hope. "],
		["Bouazizi","The story of the Arab Spring starts in Sidi Bouzid, a small, poor village in the center of Tunisia where corruption ruled, and the people struggled to make a living. Mohammed Bouazizi was one of those people. Bouazizi worked as a street merchant selling fruits and vegetables barely being able to financially support his uncle, mother and younger sisters. As if this wasn’t difficult enough, the highly corrupt local authorities didn’t make things much easier. Bribes were common practice, and if there wasn’t enough money to pay the bribe, the police would declare disrupt of public order, and take away your goods<sup>22</sup>."],
		["mosque","The same happened to Bouazizi. One day when setting up near a mosque to sell his produce, a police woman came up to him to collect her bribe, but Bouazizi wasn’t able to pay her. The police woman took all of his goods, and subjected him to humiliation by slapping him in the face and spitting on him. Other police officers joined in and started severely beating him."],
		["complaint","Humiliated and defeated, Mohammed went to file a complaint at the local governors office building, but he would not be heard. The governor was not available for criticism, and didn’t even open the door for him. In an act of desperation, Mohammed bought a gallon of fuel, returned to the office building, poored the fuel over his body, and set himself on fire. Mohammed had lost everything; he had no job, no money, no prospects, and his goods were just taken from him. This was his final call for help. Mohammed was brought to the hospital for treatment, but didn’t survive."],
		["governor","Word of Bouazizi’s actions spread quickly, and not only throughout the small village of Sidi Bouzid. The people of Sidi Bouzid demanded answers, and took to the streets. Due to the high corruption, demonstrations weren’t very common, but hundreds of people showed up to join the demonstration, and recorded the events with their phone. But, the governor wouldn’t budge, and television and newspapers refused to report on the event in order to silence the people."],
		["record","More demonstrations followed, and small groups of people made it a point to record these events, while police actively looked for those who were filming to arrest them. Since television and newspapers refused to report, there was only one way to show the images that were recorded during these events: Participatory Media, or in specific: Facebook."],
		["criticize","'Ben Ali was so stupid and arrogant that he wouldnt have anyone let a laugh at him, when you can’t criticize, cant have a view, and cant have your own personality'"],
		["censored","The regime had blocked and censored political sites, but mistakenly saw no harm in Facebook, and regarded it as a platform for leasure and recreation, to discuss insignificant topics such as football games. Information quickly started spreading through blogs, and in turn the bloggers got arrested and tortured. No matter how hard the regime might try to suppress and censor the footage by arresting bloggers, and shutting down blogs, the footage spread like lightning on Facebook, and could not be stopped. Finally, Al Jazeera got hold of the footage and started reporting on the events, causing more and more demonstrations in surrounding villages. "],
		["Tunisia","Tunisia was in open revolt with uprisings throughout the whole country, except for Tunis, the capital city and the heart of tunisian politics. The people of Tunisia worked together on Twitter to help kickstart the demonstrations in Tunis, but the police would set up road blocks in order to stop this from happening. The activists in their turn would turn to Twitter to warn the people of these road blocks. Try as they might, the number of people joining the protest and the amount of demonstrations kept growing and growing, and they were unable to peacefully shut the activists down and started responding with violence."],
		["protests","The demonstrations kept going, and activists would livestream the protests, so that in the case they were arrested, the footage would be out in the public anyway. Activists kept protesting, the police kept fighting and soon at least 150 people would have died fighting for their rights. Finally, Zine El Abidine Ben Ali, former president of Tunisia, fled to Saudi Arabia. Ben Ali had ruled the country for 24 years, but it took 28 days from the first small protest in Sidi Bouzid to the fall of the regime<sup>23</sup>. "],
		["Tahrir","<h2>Tahrir Square</h2><br>Like fire, the events of Tunisia quickly spread more political unease in neighbouring countries, with demonstrations in Egypt, Algeria, and eventually Syria among others. Egyptian activists shortly followed their Tunisian predecessors, and organised the people to occupy Tahrir Square and take a stand against the regime. In order to keep the regime from finding out in which square the demonstrations would take place, the activists would use code names, or names of other squares to put the police on the wrong track."],
		["square","The strategy of the Egyptian activists was different from their Tunisian counterparts, however. Since Egypts internet infrastructure wasn’t as good as Tunisia’s, the activists started by handing out flyers, and spreading rumors about a protest happening on a square. They would also go in taxis and spread the rumor to the drivers, who regularly talked to other taxi drivers, who talked to hundreds of people a day. In order to prevent political discussions with the taxi drivers, the activists would not simply tell them there would be a demonstration. They would act like they were receiving a phone call, talk secretively about the demonstration in the square, and make the taxi drivers feel like they had just overheard a secret. This would fuel the desire to spread the rumor amongst taxi drivers<sup>24</sup>. The activists also went into the poorer regions of the city to mobilize the poor, who would have no access or knowledge of the internet."],
		["force","The preparations for the taking of Tahrir Square were in full force, but of course, the regime got intelligence on the activists plan. This is where they made the biggest mistake they could have the day before the planned protest, and proved Ethan Zuckermann’s theory of Cute Cats and Digital Activism."],
		["internet","The regime shut down the internet."],
		["confused","The Egyptian regime shut down the internet and television in attempt to stop the demonstration from happening, but the plans had already been made, and had already recruited the people who had no access to the internet anyways. Exactly as Ethan Zuckermann predicts, by censoring the common people’s ability to watch videos of cute cats, you will only provoke a larger public outcry. And this is exactly what happened. Confused about the censorship of the internet and television, people took to the streets to find out why they had been disconnected, and marched straight into the already planned demonstration of Tahrir Square."],
		["mubarak","The demonstrations and battle for Tahrir Square went on for 18 days, with many casualties, and even more wounded, but the people of egypt, supported by the Egyptian Armed Forces, managed to remove president Hosni Mubarak from power on Friday, 11 February 2011."],
		["hub","Tahrir Square subsequently became a meme itself, as a place, as an idea, a central hub held for as long as possible. Spreading tactics and symbols of protests memetically.<sup>25</sup>"],
		["examples","It is important to note that these are just a few examples of the gruesome events of the Arab Spring, that demonstrate the power of Participatory Media."],


		["logos","<h1>Graphic Design and Activism</h1><br><br><h2>Graphic Design as Activism</h2><br>We’ve taken an extensive look at how memes and participatory help fuel a revolution, but what exactly is the role of graphic design in all this? Political activism has always been a part of graphic design, this should come as no surprise. As designers, we can employ the use of images and symbols to communicate our statement or message on protest posters. The reason, not unlike the memes of today, being the technologies and tools to make these posters were low-cast, low-tech and relatively easy to circulate. Ofcourse this doesn’t limit itself to only posters, but also book covers, comics, murals, flyers, stencils stickers and logos. Graphic designers know how to communicate, and carry a responsibility of what is communicated."],
		["shocking","In Tony Kushner’s essay Design and Dissent<sup>26</sup> he speaks of three characteristic of succesful graphic dissent, namely: Shocking, clever, and funny (humor rears its ugly head again). The meaning and importance of protest images needs to be immediately understood. When looking back at some examples of such images, some context might be required, but more often than not context was not necessary because the topic at hand was largely discussed in the news. An example of this is the 'Got Oil?' Bush protest poster, by Nenad Cizl and Toni Tomasek<sup>27</sup>. The power of the poster depends on the observers knowledge of the 'Got Milk?' campaign, that always shows a person with a milk mustache. In this parody of the campaign, Bush is represented not with a milk mustache, but an oil mustache, giving him an evil appearance, and commenting on his thirst for oil."],
		["sarajevo","Another good example is the Sarajevo Postcard Collection, a series of postcards by various Sarajevo artists to show the suffering in Sarajevo<sup>28</sup>. In this example the artists made use of pop-culture references to shock, be clever, and ironic. Once again, the medium of the postcards are easily producable and cheap to make."],
		["gorilla","A more contemporary example of the usage of the three characteristics of dissent is De Designpolitie’s visual column ‘Gorilla’<sup>29</sup>. Gorilla is a visual column that reacts on current affairs through words and images. 'In our capacity as designers, we find it important to become involved in social debate. That brings with it a certain responsibility and opportunity we eagerly take to be able to share reports on social topics with the rest of the world.' In this chapter we’ll be taking a look at a few other examples of the role that graphic design has played in political activism. "],
		["criticism","<h2>Critical of Critical Design?</h2><br>I would like to begin this chapter by making a distinction between the terms ‘criticality’, ‘critique’ and ‘criticism’, based on the 2003 text ‘From Criticism to Critique to Criticality’ by Irit Rogoff<sup>30</sup>."],
		["critique","Irit Rogoff proposes the distinction of the terms to be the following; Criticism simply means to judge a clearly defined object, whether an artwork, sports game or a meal, whereas critique consists of the study and analysis of the premises, values and ways of thinking that underpin the truth claims and paradigms of an era or knowledge domain. She continues to propose for an attitude of ‘criticality’ which means ‘an emphasis on the present, of living out of a situation, of understanding culture as a series of effects rather than causes, of the possibilities of actualising some of its potential rather than revealing its faults.’ When I mention the word ‘critical’ in this chapter, I will be referring mainly to Rogoff’s proposed ‘critique’, the study and analysis of premises, values, and ways of thinking. It is important to define these terms as such, as we’ll be looking into a recently developed movement in graphic design called ‘Critical Graphic Design’. It should also be mentioned that criticism is not necessarily negativism."],
		["critical","Over the last decade or so, a new movement has formed in the graphic design scene called ‘Critical Graphic Design’, the term got popularized by the exhibition Forms of Inquiry: The Architecture of Critical Graphic Design and design studio Metahaven. What exactly is critical graphic design, and where did it come from? According to Fancisco Laranjo, critical graphic design emerged at a time when the discipline was in a generally uncritical state, providing a necessary distinction from routine practice and designers praised themselves for deviating from the norm<sup>31</sup>. Critical designers pride themselves by researching political or social thematics, and visualising said research, supposedly being critical about said research. However, the term ‘critical’ in this context is still a vague and subjective one. In Laranjo’s article ‘Critical Design: Critical of What?’ he suggests that we be critical of critical graphic design, however the critique in the critical design movement is nowhere to be found. He states that the problem with the movement is the shallow and predictable stylistic approaches (often also referred to as the ‘post-internet’ aesthetic, as popularized by design studios such as Pinar & Viola, Metahaven, among others) used to address critical issues. It appears that critical designers only praise themselves with the term critical for deviating from the norm, and assuming a certain aesthetic. And as such, are missing the mark of actually providing a critique for pressing matters. Is this to say designers should not be critical? No. But we should be conscious of the critique that is being given to the issues at stake. "],
		["intentions","'Design work is not instantly critical just because of the intentions of the designer, or the pressing issue being researched.'<sup>32</sup>"],
		["kalopsia","As such, critical graphic design seems to be suffering from kalopsia, a state of mind wherein things seem more beautiful than they are. The danger of this condition, is that when we stop critiqueing the quality of critical graphic design projects, and simply keep celebrating the aesthetic by liking and sharing images on participatory media, we run the risk of losing our relevancy and become irrelevant to society. We can even go as far as to say that critical design itself has already become a meme."],
		["reflect"," 'Critical design should reflect on its own history and practice.'<sup>33</sup>"],


		["televised","<h1>Conclusion</h1><br><br>I started this thesis with a quote from a song by Gil Scott-Heron, 'The revolution will not be televised'<sup>34</sup>. The song was originally intended to mean that the media would not portray any of the problems Scott-Heron sings about. I used this quote, because as we have learned from the case studies of Occupy Wall Street and especially the Arab Spring, it’s meaning has changed and the revolution no longer needs to be televised in order to be succesful. Memes and participatory media quite figuratively are the new pitchforks and torches, and seem to even fight their way through physical violence and censorship from governments. They are the open source weapon of the public."],
		["simplicity","But what then of graphic design? What is the role of the graphic designer in this, if there is one at all? Are we still relevant, or should we redirect our attention? As we’ve concluded earlier, the role of the designer is in peril. It seems there is no more middle ground; The notion of the politcal activist graphic designer is an outdated one as the graphics no longer need designing; all the tools for creating a meme, or an activist image are largely available online, and the critical designers who occupy the space of political activist design appear to be wrong for all the right reasons. Their niche consists of doing research about pressing and important matters, yet seem to be creating visual output not for the masses, but an incrowd of other critical designers. Perhaps we can learn from the simplicity and success of the meme, take a step back and reconsider exactly what we’re being critical about and who we should be communicating this to."],
		["pastebin","Throughout this thesis I have showcased several examples of participatory media platforms and their effect on a revolution. These platforms were not made for activist purposes at all, yet were appropriated for the cause. During my studies, this is what I found to be true design: The exploration of technologies, trying to see how far we can bend these technologies or even break them, and then appropriating them. If the graphic designer does not keep developing himself alongside new technologies, we run the risk of becoming outdated and irrelevant. Pastebin was not made for activism, Facebook was not made for activism, Twitter was not made for activism, yet these all sparked the greatest revolutions of our time, what else is there to bend?"],
		["king","For one last time, I would like to quote Daniel van der Velden, who is ironically enough considered to be the king of critical design among the incrowd, and has been a great source of inspiration throughout my thesis:"],
		["tools","'Designers may sometimes be creating such tools and spaces: not so much designing their content, as making room for others to invent a new use, a new message, a new meaning within.'<sup>35</sup>"],
		["systems","In conclusion, if the graphics no longer need designing, perhaps the title of political graphic design is due for a reformulation, and designers should redirect their attention to tools and systems instead. Lastly, I would like to propose for an attitude of Post-Criticality, or Meta-Criticality, an attitude where the designer is critical of the critique that he provides with his projects."],

];

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

		var clientId = "0392cec1cd49283";

		async_request.push($.ajax({
		    url: "https://api.imgur.com/3/gallery/search?q="+wordArray[i][0],
		    type: "GET",
		    async: false,
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

			results.push(JSON.stringify(foundImg || "https://files.graphiq.com/stories/t2/tiny_cat_12573_8950.jpg"));
		}
	}

	$.when.apply(null, async_request).done( function(){

		for(var i=0; i<wordArray.length; i++){
			dict.push({key:wordArray[i][0]});
		}

		for(var i=0; i<results.length; i++){
			dict[i].value = results[i];
		}

		for(var i=0; i<dict.length; i++){

			var printKeyDiv = document.getElementById("keywordz");
			var printMemeDiv = document.getElementById("memez");
			var printTextDiv = document.getElementById("textz");

			printMemeDiv.innerHTML += "<div class='printobj'><img src="+dict[i]['value']+"/></div>";
			printKeyDiv.innerHTML += "<div class='printobj'> "+dict[i]['key'].toUpperCase()+" </div>";

			var newLeftDiv = document.createElement('div');
			var leftDiv = document.getElementById("left");

			var memediv = document.createElement('div');
			var mainMemesDiv = document.getElementById("right");

			memediv.setAttribute('class', 'imgur');
			memediv.setAttribute('id', dict[i]['key']);
			memediv.setAttribute('onmouseover','change(this.id)');
			memediv.setAttribute('onmouseout','resetit(this.id)');

			memediv.style.textAlign = "center";
			memediv.innerHTML = "<img src="+dict[i]['value']+"/>";

			newLeftDiv.setAttribute('class', 'imgur2 '+dict[i]['key']);
			newLeftDiv.innerHTML = "<span class='match "+dict[i]['key']+" Span'> "+dict[i]['key'].toUpperCase()+"</span>";

			leftDiv.appendChild(newLeftDiv);
			mainMemesDiv.appendChild(memediv);
		}

		for(var i = 0; i < wordArray.length; i++){
			printTextDiv.innerHTML += "<div id='print"+i+"'>"+test[i][1].replace(test[i][0], "<span id='highlight'>"+test[i][0]+"</span>");
+"<br><br></div>";

		}

		for(var i = 0; i < 5; i++){
			//pass wordArray[i][0] and the image somehow to the function
			getAndMakeDiv("print"+i);
		}

	});
	fillTemp();
}

function getAndMakeDiv(targetdiv){

	var printdiv = document.getElementById("print");

	var onlinediv = document.getElementById("online");
	console.log(onlinediv.offsetHeight);
	//get targetdiv
	var targetdiv = document.getElementById(targetdiv);

	//get height of that div
	console.log("height of div: ");
	console.log(targetdiv.offsetHeight);

	//get top margin of that div
	var targetdivpos = targetdiv.getBoundingClientRect();
	console.log("top margin: ");
	console.log(targetdivpos.top);


	imageDivSize = 150;

	//make new div to place
	var newimageDiv = document.createElement('div');

	newimageDiv.style.position = "absolute";
	newimageDiv.style.height = imageDivSize+"px";
	newimageDiv.style.width = imageDivSize+"px";
	newimageDiv.style.marginLeft = "10px";
	newimageDiv.style.backgroundColor = "pink";
	newimageDiv.innerHTML = "LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL LOL "
						//top pos   + height of div/2       - the new div height/2 = exactly the middle of the targeted div
	newimageDiv.style.top = (targetdivpos.top + (targetdiv.offsetHeight/2) - imageDivSize/2) - onlinediv.offsetHeight-100;

	printdiv.appendChild(newimageDiv);
}

function resetit(id){

	//reset back to regular
	var singlediv = document.getElementById(id);
	var getSpan = document.getElementsByClassName('match '+id+' Span');
	var getWord = document.getElementsByClassName('imgur2 '+id);

	//styling
	getSpan[0].style.color = "blue";
	getWord[0].style.height = "20vh";
	getWord[0].style.lineHeight = "20vh";


	for(var i = 0; i<dict.length; i++){
		if(id == dict[i]['key']){

			singlediv.innerHTML = "<img src="+dict[i]['value']+"/>";
			singlediv.style.backgroundColor = "white";
			singlediv.style.textAlign = "center";
			singlediv.style.height = "20vh";

		}
	}
}


function change(id){

	//change the div on hover
	var singlediv = document.getElementById(id);
	var getSpan = document.getElementsByClassName('match '+id+' Span');

	getSpan[0].style.color = "black";

	var getWord = document.getElementsByClassName('imgur2 '+id);
	getWord[0].style.height = "40vh";
	getWord[0].style.lineHeight = "40vh";

	//fill in the text in the div
	for(var i = 0; i < test.length; i++){
		if(test[i][0] == id){

				singlediv.innerHTML = "";
				singlediv.innerHTML = test[i][1].replace(test[i][0] || test[i][1].replace(capitalizeFirstLetter(test[i][0])), "<span id='highlight'>"+test[i][0]+"</span>");

		}
	}

	//additional styling
	singlediv.style.height = "40vh";

	singlediv.style.lineHeight = "23px";
	singlediv.style.textAlign = "left";
	singlediv.style.color = "black";
	singlediv.style.paddingLeft = "23px";
	singlediv.style.paddingTop = "23px";

	singlediv.style.overflow = "scroll";
	singlediv.style.backgroundColor = "white";
	singlediv.style.fontFamily = "caslon";
	singlediv.style.fontSize = "23px";
	singlediv.style.cursor = "crosshair";
	singlediv.style.verticalAlign = "middle";

}

function fillTemp(){
	//fill in header and footer
	var footDiv = document.getElementById("foot");
	footDiv.innerHTML = "as Pitchforks<br>and Torches";

	var headerDiv = document.getElementById("header");
	headerDiv.innerHTML = "Participatory<br>Media and Memes";

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

run(test);
