console.log("Hello");
var audio = new Audio('Audio/notify.mp3');
var last;
var count = 0;
var liveFeed = ["YoungCheezy", "This site is such a good idea. I hope the donation quota is reached", 
				"Thomas Paine", "Wow, Really? The javits center for laborday? YES PLZ",
				"Cheif Zitti" , "I don't think this is a good idea. the parraide should stay in Flatbush" ,
				"DJ Khalid" , "Oh snap! this is a Major Key",
				"Mr.Carter11203" , "Yeeeeerrrrrrrrr!!!!",
				"HungryHuffle Puff" , "Whos performing next year? Can i see that on here?",
				"Kevin Banks" , "@HungryHuffle_Puff, yeah. just click on the Performaces Tag on the top of the pg",
				"HungryHuffle Puff" , "@Kevin Banks, Thanks Man",
				"DrakeFanOVXO" , "Running through the javits center with my Woes!!!!!" ,
				"Admin101" , "Can we take this seriously guys? Whos donating?" ,
				"YoungCheezy" , "Me!!!",
				"Thomas Paine" , "Me!" ,
				"Cheif Zitti" , "thats a dub" ,
				"Mr.Carter11203" , "i'll come but idk about donations. how do we know where the mony is going?",
				"DrakeFanOVXO" , "Count me in!!" ,
				"Dj Drizzle" , " Heard my Mix yet? https://soundcloud.com/djnonstophh/big-pun-tribute-extended",
				"Dj Drizzle" , " Heard my Mix yet? https://soundcloud.com/djnonstophh/big-pun-tribute-extended",
				"Dj Drizzle" , " Heard my Mix yet? https://soundcloud.com/djnonstophh/big-pun-tribute-extended",
				"Dj Drizzle" , " Heard my Mix yet? https://soundcloud.com/djnonstophh/big-pun-tribute-extended",
				"Admin101" , "Please refrain from Spaming or else i'll be forced to take action" ,
				"Dj Drizzle" , " Heard my Mix yet? https://soundcloud.com/djnonstophh/big-pun-tribute-extended",
				"Dj Drizzle" , " Heard my Mix yet? https://soundcloud.com/djnonstophh/big-pun-tribute-extended",
				"Admin101" , "Final Warning!",
				"Kevin Banks" , "Just Block Him",
				"ZDragon" , "I second that motion",
				"Kathy" , "This isn't a court room guys",
				"Dj Drizzle" , " Heard my Mix yet? https://soundcloud.com/djnonstophh/big-pun-tribute-extended",
				"Kevin Banks" , "Block",
				"ZDragon" , "Block",
				"HungryHuffle" , "Block",
				"Cheif Zitti" , "BLOCK! BLOCK! BLOCK!!!",
				"Dj Drizzle" , " Heard my Mix yet? https://soundcloud.com/djnonstophh/big-pun-tribute-extended",
				"Admin101" , "Dj Drizzle HAS BEEN BLOCKED",
				"DrakeFanOVXO", "Thank you, i was getting a headache",
				"Mr.Carter11203", "Dude was just trying to shoot his shot :D",
				"Thomas Paine", "We still talking about this guy?",
				"TeaLover", "XD",
				"TheHunchBackOfNo", "I just listened to his soundcloud. its actually pretty good",
				"Cheif Zitti", "iite, we're gonna have to block @TheHunchBackOfNo too for endoresing this",
				"TheHunchBackOfNo" , "XD XD XD",
				"Admin101" , "TheHunchBackOfNo HAS BEEN BLOCKED",
				"Cheif Zitti", " Wow, thats crazy. i was just joking",
				"Admin2", "We've offically raised $200. Thank You to our backers",
				"TeaLover", "*claps*",
				"Waldo", "Where am I?",
				"FlatbushKings" , "Hey you guys",
				"Thomas Pink", "Whats up!",
				"Brandon", "Wow, this is just like a discord server",
				"TwitterThommy", "Thats what i was thinking",
				"Kelly", "Wish we had emoji's on this",
				"Kevin Banks", "You could probably still use emojis if youre on a phone",
				"Admin2", "We've offically raised $250. Thank You to our backers",
				"Admin2", "We've offically raised $300. Thank You to our backers",
				"Admin2", "We've offically raised $320. Thank You to our backers",
				"Kevin Banks" , "Nice",
				"ZDragon" , "Oh, this is exciting",
				"Kathy" , "isn't the goal like 200,000?",
				"Dj Drizzle" , " Heard my Mix yet? https://soundcloud.com/djnonstophh/big-pun-tribute-extended",
				"Kevin Banks" , "How'd he get back here",
				"ZDragon" , "Block",
				"HungryHuffle" , "Block",
				"Cheif Zitti" , "BLOCK! BLOCK! BLOCK!!!",
				"Dj Drizzle" , " Heard my Mix yet? https://soundcloud.com/djnonstophh/big-pun-tribute-extended",
				"Admin101" , "Dj Drizzle HAS BEEN reBLOCKED",
				"DrakeFanOVXO", "Why was he ever unblocked",
				"Mr.Carter11203", "LMAO",
				"Thomas Paine", "Thats what i call presistance",
				"YoungCheezy", "Probably a bot or something", 
				"Thomas Paine", "Most likly",
				"Cheif Zitti" , "Im craving Baked Ziti" ,
				"DJ Khalid" , "Major Key",
				"Mr.Carter11203" , "Yeeeeerrrrrrrrr!!!!",
				"HungryHuffle Puff" , "Magic is cool",
				"Kevin Banks" , "Face Palm",
				"HungryHuffle Puff" , "I wonder if the presentation is still going on now",
				"DrakeFanOVXO" , "I hope not. im running out of comment ideas" ,
				"Admin101" , "ikr. Its not really easy to have a fake conversation with yourself" ,
				"YoungCheezy" , "Thats exactly what i was thinking... but you're me so i guess thats expected",
				"Thomas Paine" , "Idk if this is funny or just sad" ,
				"Cheif Zitti" , "hummm.... its like a middle ground between funny and sad" ,
				"Mr.Carter11203" , "I'm gonna start randomly pressing keys for comments",
				"DrakeFanOVXO" , "Good idea Carter",


];

$(document).ready;


function EnterComment() {
    var user = document.getElementById("User").value;
    var comment = document.getElementById("Comment").value;

    document.getElementById("User").value = null;
    document.getElementById("Comment").value = null;
    //document.getElementById("testWrite").value = user + " " + comment;
    //console.log(user + " " + comment);
    
    //last = last + " User Name: " + user + " Comment: " + comment;
    //document.getElementById("testWrite").innerHTML = last;
    

    if (user.length !== 0){
    $(".T4").prepend('<div class="box">' + '<h1>' + '&nbsp;' + user + '</h1>' +  '<p>' + '&nbsp;' + comment + '</p>' + '</div>');
	}else{
		$(".T4").prepend('<div class="error">' + '<h1>' + "Error" + '</h1>' +  '<p>' + "No Such User Found" + '</p>' + '</div>');}

    //$(".T4").prepend("<div class="box"><h1> HelloLove </h1> <p> Hello To all mate</p> </div>");

    //$(".T4").prepend("<h1> HelloLove2 </h1>");

}

function LiveFeed(){

	$(".T4").prepend('<div class="box">' + '<h1>' + '&nbsp;' + liveFeed[count] + '</h1>' +  '<p>' + '&nbsp;' + liveFeed[++count] + '</p>' + '</div>');
	count++;
	
}


setInterval(function() {
    LiveFeed();
    audio.play();
}, 5 * 1000);

//while(count < 30){
//window.setInterval(LiveFeed(), 2000000000000);
//}

$("T5").prepend("<b>Prepended text</b>");