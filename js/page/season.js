/**
 * @author Robert
 */
//SEASON GENERAL //

//SEASON LIST EXPAND //
var borderToggle = false;
var rahmenToggle = false;
$('#Rahmen ul').hide();
$('#Rahmen2 ul').hide();
$('.seasonSeasons, .seasonMonths, .clickPlate').click(function() {
	if (rahmenToggle == false) {
		$("#Rahmen").find('ul').slideToggle();
		$("#Rahmen2").find('ul').slideToggle();
		$(".clickPlate").show();
		rahmenToggle = true;
		borderFunction();
	} else {
		$("#Rahmen").find('ul').slideToggle();
		$("#Rahmen2").find('ul').slideToggle();
		$(".clickPlate").hide();
		rahmenToggle = false;
		borderFunction();
	}
});

$('#Summer').click(function() {
	season = 2;
	month = 14;
	summerAll();
	$("#Summer").css("list-style", "disc");
	$("#Spring").css("list-style", "circle");
	$("#Autumn").css("list-style", "circle");
	$("#Winter").css("list-style", "circle");
	$("#monthAll").css("list-style", "disc");
	$("#month1").css("list-style", "circle");
	$("#month2").css("list-style", "circle");
	$("#month3").css("list-style", "circle");
	document.getElementById("seasonSeasonsName").innerHTML = "SUMMER";
	document.getElementById("month1").innerHTML = "JUNE";
	document.getElementById("month2").innerHTML = "JULY";
	document.getElementById("month3").innerHTML = "AUGUST";
});
$('#Autumn').click(function() {
	season = 3;
	month = 15;
	autumnAll();
	$("#Summer").css("list-style", "circle");
	$("#Spring").css("list-style", "circle");
	$("#Autumn").css("list-style", "disc");
	$("#Winter").css("list-style", "circle");
	$("#monthAll").css("list-style", "disc");
	$("#month1").css("list-style", "circle");
	$("#month2").css("list-style", "circle");
	$("#month3").css("list-style", "circle");
	document.getElementById("seasonSeasonsName").innerHTML = "AUTUMN";
	document.getElementById("month1").innerHTML = "SEPTEMBER";
	document.getElementById("month2").innerHTML = "OCTOBER";
	document.getElementById("month3").innerHTML = "NOVEMBER";
});
$('#Winter').click(function() {
	season = 4;
	month = 16;
	winterAll();
	$("#Summer").css("list-style", "circle");
	$("#Spring").css("list-style", "circle");
	$("#Autumn").css("list-style", "circle");
	$("#Winter").css("list-style", "disc");
	$("#monthAll").css("list-style", "disc");
	$("#month1").css("list-style", "circle");
	$("#month2").css("list-style", "circle");
	$("#month3").css("list-style", "circle");
	document.getElementById("seasonSeasonsName").innerHTML = "WINTER";
	document.getElementById("month1").innerHTML = "DECEMBER";
	document.getElementById("month2").innerHTML = "JANUARY";
	document.getElementById("month3").innerHTML = "FEBRUARY";
});
$('#Spring').click(function() {
	season = 1;
	month = 13;
	springAll();
	$("#Summer").css("list-style", "circle");
	$("#Spring").css("list-style", "disc");
	$("#Autumn").css("list-style", "circle");
	$("#Winter").css("list-style", "circle");
	$("#monthAll").css("list-style", "disc");
	$("#month1").css("list-style", "circle");
	$("#month2").css("list-style", "circle");
	$("#month3").css("list-style", "circle");
	document.getElementById("seasonSeasonsName").innerHTML = "SPRING";
	document.getElementById("month1").innerHTML = "MARCH";
	document.getElementById("month2").innerHTML = "APRIL";
	document.getElementById("month3").innerHTML = "MAY";
});

function borderFunction() {
	if (borderToggle == false) {
		$("#Rahmen").css("border", "1px white solid");
		$("#Rahmen2").css("border", "1px white solid");
		borderToggle = true;
	} else {
		$("#Rahmen").css("border", "none");
		$("#Rahmen2").css("border", "none");
		borderToggle = false;
	}
}


$('#monthAll').click(function() {
	console.log("klappt der Month all kilck");
	$("#monthAll").css("list-style", "disc");
	$("#month1").css("list-style", "circle");
	$("#month2").css("list-style", "circle");
	$("#month3").css("list-style", "circle");
	if (season == 2) {
		month = 14;
		summerAll();
	} else if (season == 3) {
		month = 15;
		autumnAll();
	} else if (season == 4) {
		month = 16;
		winterAll();
	} else {
		month = 13;
		springAll();
	}
});
$('#month1').click(function() {
	$("#monthAll").css("list-style", "circle");
	$("#month1").css("list-style", "disc");
	$("#month2").css("list-style", "circle");
	$("#month3").css("list-style", "circle");
	if (season == 2) {
		month = 6;
		june();
	} else if (season == 3) {
		month = 9;
		september();
	} else if (season == 4) {
		month = 12;
		december();
	} else {
		month = 3;
		march();
	}
});
$('#month2').click(function() {
	$("#monthAll").css("list-style", "circle");
	$("#month1").css("list-style", "circle");
	$("#month2").css("list-style", "disc");
	$("#month3").css("list-style", "circle");
	if (season == 2) {
		month = 7;
		july();
	} else if (season == 3) {
		month = 10;
		october();
	} else if (season == 4) {
		month = 1;
		january();
	} else {
		month = 4;
		april();
	}
});
$('#month3').click(function() {
	$("#monthAll").css("list-style", "circle");
	$("#month1").css("list-style", "circle");
	$("#month2").css("list-style", "circle");
	$("#month3").css("list-style", "disc");
	if (season == 2) {
		month = 8;
		august();
	} else if (season == 3) {
		month = 11;
		november();
	} else if (season == 4) {
		month = 2;
		february();
	} else {
		month = 5;
		may();
	}
});

function springAll() {
	document.getElementById("seasonMonthName").innerHTML = "ALL";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.may == 1) || (val.april == 1) || (val.march == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.may == 1) || (val.april == 1) || (val.march == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function summerAll() {
	document.getElementById("seasonMonthName").innerHTML = "ALL";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.august == 1) || (val.july == 1) || (val.june == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.august == 1) || (val.july == 1) || (val.june == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function autumnAll() {
	document.getElementById("seasonMonthName").innerHTML = "ALL";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.november == 1) || (val.october == 1) || (val.september == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.november == 1) || (val.october == 1) || (val.september == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function winterAll() {
	document.getElementById("seasonMonthName").innerHTML = "ALL";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.december == 1) || (val.january == 1) || (val.febuary == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.december == 1) || (val.january == 1) || (val.febuary == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function january() {
	document.getElementById("seasonMonthName").innerHTML = "JANUARY";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.january == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.january == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function february() {
	document.getElementById("seasonMonthName").innerHTML = "FEBRUARY";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.febuary == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.febuary == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function march() {
	document.getElementById("seasonMonthName").innerHTML = "MARCH";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.march == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.march == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function april() {
	document.getElementById("seasonMonthName").innerHTML = "APRIL";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.april == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.april == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function may() {
	document.getElementById("seasonMonthName").innerHTML = "MAY";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.may == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.may == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function june() {
	document.getElementById("seasonMonthName").innerHTML = "JUNE";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.june == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.june == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function july() {
	document.getElementById("seasonMonthName").innerHTML = "JULY";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.july == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.july == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function august() {
	document.getElementById("seasonMonthName").innerHTML = "AUGUST";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.august == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.august == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function september() {
	document.getElementById("seasonMonthName").innerHTML = "SEPTEMBER";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.september == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.september == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function october() {
	document.getElementById("seasonMonthName").innerHTML = "OCTOBER";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.october == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.october == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function november() {
	document.getElementById("seasonMonthName").innerHTML = "NOVEMBER";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.november == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.november == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

function december() {
	document.getElementById("seasonMonthName").innerHTML = "DECEMBER";
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.december == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitelViet + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			if ((val.december == 1)) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
				out += '<div class="birdText">';
				out += '<p id="' + val.birdSerialnumber + '">';
				out += '' + val.birdTitel + '';
				out += '</p>';
				out += '</div>';
				out += '</div>';
			}
		});
		out += "";
		$('#birdFrame').html(out);
	}
}