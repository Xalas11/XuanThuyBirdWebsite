/**
 * @author Robert
 */
var i = localStorage.getItem("seasonID"); // storage of the Season to select
var lang = localStorage.getItem("language");

if (lang == 1) {

	$(function() {
			console.log(lang);
			document.getElementById("changeButtonTextLanguage").innerHTML = "ENG";
		if (i == 1) {			
			
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.january == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 2) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.febuary == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 3) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.march == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 4) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.april == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 5) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.may == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 6) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.june == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 7) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.july == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 8) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.august == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 9) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.september == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 10) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.october == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 11) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.november == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 12) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.december == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 13) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.may == 1) || (val.april == 1) || (val.march == 1)) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 14) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.august == 1) || (val.july == 1) || (val.june == 1)) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 15) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.november == 1) || (val.october == 1) || (val.september == 1)) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.december == 1) || (val.january == 1) || (val.febuary == 1)) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		}
	});

} else {

	$(function() {
		document.getElementById("changeButtonTextLanguage").innerHTML = "VIET";
		if (i == 1) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.january == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 2) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.febuary == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 3) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.march == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 4) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.april == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 5) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.may == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 6) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.june == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 7) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.july == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 8) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.august == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 9) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.september == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 10) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.october == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 11) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.november == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 12) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if (val.december == 1) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 13) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.may == 1) || (val.april == 1) || (val.march == 1)) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 14) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.august == 1) || (val.july == 1) || (val.june == 1)) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else if (i == 15) {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.november == 1) || (val.october == 1) || (val.september == 1)) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		} else {
			$(function() {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.december == 1) || (val.january == 1) || (val.febuary == 1)) {
						out += '<div class="birdContainer">';
						out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
						out += '<div class="birdName">';
						out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
						out += '</div>';
						out += '</div>';
					}
				});
				$("#birdsBox").html(out);
			});
		}
	});
};
var hits = lang;
console.log(hits);
function changeLanguage() {

	if (hits == 0) {
		document.getElementById("changeButtonTextLanguage").innerHTML = "ENG";
		$(function() {

			if (i == 1) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.january == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 2) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.febuary == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 3) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.march == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 4) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.april == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 5) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.may == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 6) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.june == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 7) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.july == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 8) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.august == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 9) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.september == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 10) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.october == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 11) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.november == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 12) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.december == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 13) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if ((val.may == 1) || (val.april == 1) || (val.march == 1)) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 14) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if ((val.august == 1) || (val.july == 1) || (val.june == 1)) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 15) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if ((val.november == 1) || (val.october == 1) || (val.september == 1)) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if ((val.december == 1) || (val.january == 1) || (val.febuary == 1)) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitelViet + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			}
		});
		hits = 1;
		localStorage.setItem("language", 1);
	} else {
		document.getElementById("changeButtonTextLanguage").innerHTML = "VIET";
		$(function() {

			if (i == 1) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.january == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 2) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.febuary == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 3) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.march == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 4) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.april == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 5) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.may == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 6) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.june == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 7) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.july == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 8) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.august == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 9) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.september == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 10) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.october == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 11) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.november == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 12) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if (val.december == 1) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 13) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if ((val.may == 1) || (val.april == 1) || (val.march == 1)) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 14) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if ((val.august == 1) || (val.july == 1) || (val.june == 1)) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else if (i == 15) {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if ((val.november == 1) || (val.october == 1) || (val.september == 1)) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			} else {
				$(function() {
					var out = "";
					$.each(birdInformation, function(key, val) {
						if ((val.december == 1) || (val.january == 1) || (val.febuary == 1)) {
							out += '<div class="birdContainer">';
							out += '<a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html"> <img class="birdThumbnail" src="' + val.birdImgPath + '"href="index.html"></img> </a>';
							out += '<div class="birdName">';
							out += '<div class="birdNameText"><a data-id="' + val.birdSerialnumber + '" onclick="myFunction(this)" rel="external" href="BirdDetailEng.html">' + val.birdTitel + '</a> </div>';
							out += '</div>';
							out += '</div>';
						}
					});
					$("#birdsBox").html(out);
				});
			}
		});
		hits = 0;
		localStorage.setItem("language", 0);
	}
}