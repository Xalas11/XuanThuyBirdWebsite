/**
 * @author Robert
 */

$('.languageSwitch').on('click', '.languageViet-change', function() {
	if (searchToggle == false) {
		if (lang == false) {
			$(".languageViet-change").toggleClass("languageViet-scale");
			$(".languageEng-change").toggleClass("languageEng-scale");
			lang = true;
			if (pageSelector == 0) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
					out += '<div class="birdText">';
					out += '<p id="' + val.birdSerialnumber + '">';
					out += '' + val.birdTitelViet + '';
					out += '</p>';
					out += '</div>';
					out += '</div>';
				});
				out += "";
				$('#birdFrame').html(out);
			} else if (pageSelector == 1 && month == 1) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.january == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="'+ pathImg + val.birdImgPath + '" />';
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
			} else if (pageSelector == 1 && month == 2) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.february == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 3) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.march == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 4) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.april == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 5) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.may == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 6) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.june == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 7) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.july == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 8) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.august == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 9) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.september == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 10) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.october == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 11) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.november == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 12) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.december == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 13) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.may == 1) || (val.april == 1) || (val.march == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 14) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.august == 1) || (val.july == 1) || (val.june == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 15) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.november == 1) || (val.october == 1) || (val.september == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 16) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.december == 1) || (val.january == 1) || (val.febuary == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			}
		}
	}
});
$('.languageSwitch').on('click', '.languageEng-change', function() {
	if (searchToggle == false) {
		if (lang == true) {
			$(".languageEng-change").toggleClass("languageEng-scale");
			$(".languageViet-change").toggleClass("languageViet-scale");
			lang = false;
			if (pageSelector == 0) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
					out += '<img class="birdImg" src="' + pathImg + val.birdImgPath + '" />';
					out += '<div class="birdText">';
					out += '<p id="' + val.birdSerialnumber + '">';
					out += '' + val.birdTitel + '';
					out += '</p>';
					out += '</div>';
					out += '</div>';
				});
				out += "";
				$('#birdFrame').html(out);
			} else if (pageSelector == 1 && month == 1) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.january == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 2) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.february == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 3) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.march == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 4) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.april == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 5) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.may == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 6) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.june == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 7) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.july == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 8) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.august == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 9) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.september == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 10) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.october == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 11) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.november == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 12) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.december == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 13) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.may == 1) || (val.april == 1) || (val.march == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 14) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.august == 1) || (val.july == 1) || (val.june == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 15) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.november == 1) || (val.october == 1) || (val.september == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
			} else if (pageSelector == 1 && month == 16) {
				var out = "";
				$.each(birdInformation, function(key, val) {
					if ((val.december == 1) || (val.january == 1) || (val.febuary == 1)) {
					out += '<div class="birdBox" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
	}
});
// LANGUAGE

var toggleAnimateLanguage = false;
$("#language").click(function() {

	if (toggleAnimateLanguage == false) {
		$(".languageSwitch").toggleClass("languageSwitch-change");
		$(".languageEng").toggleClass("languageEng-change");
		$(".languageViet").toggleClass("languageViet-change");
		toggleAnimateLanguage = true;
	} else {
		$(".languageSwitch").toggleClass("languageSwitch-change");
		$(".languageEng").toggleClass("languageEng-change");
		$(".languageViet").toggleClass("languageViet-change");
		toggleAnimateLanguage = false;
	}
});

function laguageAnimate() {
	$(".languageEng").toggleClass("languageEng-change");
	$(".languageViet").toggleClass("languageViet-change");
}

function laguageAnimateBack() {
	$(".languageEng").toggleClass("languageEng-change");
	$(".languageViet").toggleClass("languageViet-change");
}
