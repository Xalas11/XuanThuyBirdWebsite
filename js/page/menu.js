/**
 * @author Robert
 */
// Link Not Scroller //
// $(document).on("click", function(e) {
	// e.preventDefault();
// });
// Link Not Scroller //

// Menu Toggle and Menustuff //
var widthall = window.innerWidth;
var widths = window.innerWidth - document.body.scrollWidth;

console.log(widths);

// Buggy
var toggleAnimate = false;
var windowResize;
var windowSize;
$(document).ready(function() {

	checkSize();
	//checkSize2();

	$(window).resize(checkSize);
	//$(window).resize(checkSize2);
});

function checkSize() {
	windowResize = $(window).width();
	windowSize = windowResize + widths;
	checkSize2();
	checkSize3();
	if (windowSize < 769) {
		$(".searchButtonToggle").hide();
		if (pageSelector == 0) {
			$(".searchButtonToggle2").show();
		}
	} else if (windowSize > 768) {
		if (toggleAnimate == false && pageSelector == 0) {
			$(".searchButtonToggle").show();
		} else if (toggleAnimate == true && pageSelector == 0) {
			$(".searchButtonToggle").hide();
		}
	}
}

function checkSize2() {
	if (windowSize > 1024) {
		$('.siteWrapper').css("opacity", "1");
		$('.siteMenu').hide().show(0);
		if (searchToggle == true && searchToggleXl == true) {
			searchToggleCloseResize();
			$(".searchBarXlScreens").show();
			if (pageSelector == 0) {
				$("#language").css("background", "gray");
			} else if (pageSelector == 1) {
				$("#language").css("background", "gray");
			} else {
				$("#language").css("background", "gray");
			}
		} else if (searchToggle == true) {
			searchToggleCloseResize();
		} else if (searchToggleXl == true) {
			$(".searchBarXlScreens").show();
			if (pageSelector == 0) {
				$("#language").css("background", "gray");
			} else if (pageSelector == 1) {
				$("#language").css("background", "gray");
			} else {
				$("#language").css("background", "gray");
			}
		}
	} else {
		$('#birdFrame').hide().show(0);
		if (searchToggleXl == true) {
			$(".searchBarXlScreens").hide();
			$('.siteMenu').hide().show(0);
			if (pageSelector == 0) {
				$("#language").css("background", "#497463");
			} else if (pageSelector == 1) {
				$("#language").css("background", "#6f253c");
			} else {
				$("#language").css("background", "#c1974d");
			}
		}
	}
}

function checkSize3() {
	if (windowSize < 838) {
		$(".searchBarXlScreens").hide();
		if (pageSelector == 0) {
			$(".languageSwitch").css("background", "#497463");
		} else if (pageSelector == 1) {
			$(".languageSwitch").css("background", "#6f253c");
		} else {
			$(".languageSwitch").css("background", "#c1974d");
		}
	} else if (windowSize > 837) {
		if (pageSelector == 0) {
			$(".languageSwitch").css("background", "none");
		} else if (pageSelector == 1) {
			$(".languageSwitch").css("background", "none");
		} else {
			$(".languageSwitch").css("background", "none");
		}
	}
}


$(document).on("click", ".menuButtonToggle", function() {
	menuToggle();
});
function menuToggle() {
	if (toggleAnimate == false) {
		if (pageSelector == 0) {
			$(".searchButtonToggle").hide();
		}
		$(".impressum").toggleClass("impressum-change");
		$('.siteWrapper').addClass('noScroller');
		$(".siteMenu").toggleClass("siteMenu-change");
		$(".siteWrapper").toggleClass("siteWrapper-change");
		$(".menuButtonToggle").toggleClass("menuButtonToggle-change");
		$(".buttonName").toggleClass("buttonName-change");
		$(".buttonSeason").toggleClass("buttonSeason-change");
		$(".siteMenuTransparenz").toggleClass("siteMenuTransparenz-change");
		toggleAnimate = true;
	} else {
		$(".impressum").toggleClass("impressum-change");
		$('.siteWrapper').removeClass('noScroller');
		setTimeout(searchButtonToggleShow, 250);
		$(".siteMenu").toggleClass("siteMenu-change");
		$(".siteWrapper").toggleClass("siteWrapper-change");
		$(".menuButtonToggle").toggleClass("menuButtonToggle-change");
		$(".buttonName").toggleClass("buttonName-change");
		$(".buttonSeason").toggleClass("buttonSeason-change");
		$(".siteMenuTransparenz").toggleClass("siteMenuTransparenz-change");
		toggleAnimate = false;
	}
}

function searchButtonToggleShow() {
	if (windowSize <= 1024 && windowSize > 768 && pageSelector == 0) {
		$(".searchButtonToggle").show();
	}
};
// buggy
// bug freie zone //
$(".buttonName").click(function() {
	//Season//
	$("#season").hide();
	if (searchToggle == false) {
		if (windowSize < 768) {
			$(".searchButtonToggle2").show();
			if (windowSize < 481 && windowSize > 320) {
				$("#scrollHide").css("height", "90px");
				$("#birdFrame").css("margin-top", "95px");
			} else if (windowSize < 321) {
				$("#scrollHide").css("height", "65px");
				$("#birdFrame").css("margin-top", "60px");
			}
		} else {
			$("#scrollHide").css("height", "124px");
			$("#birdFrame").css("margin-top", "140px");
		}
	}
	//Season//
	if (windowSize > 1024) {
		$(".searchButtonToggle").show();
	} else {
		menuToggle();
	}
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
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
	}
	$(".buttonName").css("background", "#497463");
	$(".buttonSeason").css("background", "gray");
	$(".impressum").css("background", "#497463");
	if (searchToggle == false) {
		$("#language").css("background", "#497463");
	}
	if ($(window).width() < 820) {
		$(".languageSwitch").css("background", "#497463");
	}
	pageSelector = 0;
});
$(".buttonSeason").click(function() {
	$(".languageSwitch").show();
	if (month == 1) {
		january();
	} else if (month == 2) {
		february();
	} else if (month == 3) {
		march();
	} else if (month == 4) {
		april();
	} else if (month == 5) {
		may();
	} else if (month == 6) {
		june();
	} else if (month == 7) {
		july();
	} else if (month == 8) {
		august();
	} else if (month == 9) {
		september();
	} else if (month == 10) {
		october();
	} else if (month == 11) {
		november();
	} else if (month == 12) {
		december();
	} else if (month == 13) {
		springAll();
	} else if (month == 14) {
		summerAll();
	} else if (month == 15) {
		autumnAll();
	} else {
		winterAll();
	}
	//Name//
	$(".searchButtonToggle").hide();
	$(".searchButtonToggle2").hide();
	if (searchToggle == true) {
		searchToggleCloseResizeSeason();
		searchToggle = false;
	} else if (windowSize < 481) {
		if (windowSize < 481 && windowSize > 320) {
			$("#scrollHide").css("height", "129px");
			$("#birdFrame").css("margin-top", "128px");
		} else if (windowSize < 321) {
			$("#scrollHide").css("height", "92px");
			$("#birdFrame").css("margin-top", "90px");
		}
	} else {
		$("#scrollHide").css("height", "184px");
		$("#birdFrame").css("margin-top", "210px");
	}
	if (searchToggleXl == true) {
		toggleSearch1024();
	}
	$("#season").show();
	//Season//
	$(".buttonName").css("background", "gray");
	$(".buttonSeason").css("background", "#6f253c");
	$(".impressum").css("background", "#6f253c");
	$("#language").css("background", "#6f253c");
	if ($(window).width() < 820) {
		$(".languageSwitch").css("background", "#6f253c");
	}
	
	if (windowSize <= 1024) {
		menuToggle();
	}
	pageSelector = 1;
});

// SEARCH

// search toggle animation //
$('#mainSiteWrap').on("click", ".searchButtonToggle, .searchButtonToggle2", function() {
	toggleSearch1024();
});

$(".searchButtonToggle2").click(function(){
	setTimeout(focusInputMobile, 300);
});

function focusInputMobile () {
	setTimeout(300, $('#line').focus());
}
function searchToggleCloseResize() {
	$("#lineExpand").animate({
		height : "3px"
	}, 250);
	$("#line").hide();
	$("#scrollHide").animate({
		height : "125px"
	}, 250);
	$("#birdFrame").animate({
		marginTop : "140px"
	}, 250);
	searchToggle = false;
	if (pageSelector == 0) {
		$("#language").css("background", "#497463");
	} else if (pageSelector == 1) {
		$("#language").css("background", "#6f253c");
	} else {
		$("#language").css("background", "#c1974d");
	}
}

function searchToggleCloseResizeSeason() {
	if (windowSize > 1024) {
		$("#scrollHide").css("height", "184px");
		$("#birdFrame").css("margin-top", "210px");
		$(".searchBarXlScreens").toggleClass("searchBarXlScreens-change");
	} else if (windowSize <= 460 && windowSize > 320) {
		$("#lineExpand").animate({
			height : "3px"
		}, 250);
		$("#line").hide();
		$("#scrollHide").animate({
			height : "129px"
		}, 250);
		$("#birdFrame").animate({
			marginTop : "128px"
		}, 250);
		searchToggle = false;
		if (pageSelector == 0) {
			$("#language").css("background", "#497463");
		} else if (pageSelector == 1) {
			$("#language").css("background", "#6f253c");
		} else {
			$("#language").css("background", "#c1974d");
		}
	} else if (windowSize <= 320) {
		$("#lineExpand").animate({
			height : "3px"
		}, 250);
		$("#line").hide();
		$("#scrollHide").animate({
			height : "92px"
		}, 250);
		$("#birdFrame").animate({
			marginTop : "90px"
		}, 250);
		searchToggle = false;
		if (pageSelector == 0) {
			$("#language").css("background", "#497463");
		} else if (pageSelector == 1) {
			$("#language").css("background", "#6f253c");
		} else {
			$("#language").css("background", "#c1974d");
		}
	} else {
		$("#lineExpand").animate({
			height : "3px"
		}, 250);
		$("#line").hide();
		$("#scrollHide").animate({
			height : "184px"
		}, 250);
		$("#birdFrame").animate({
			marginTop : "210px"
		}, 250);
		searchToggle = false;
		if (pageSelector == 0) {
			$("#language").css("background", "#497463");
		} else if (pageSelector == 1) {
			$("#language").css("background", "#6f253c");
		} else {
			$("#language").css("background", "#c1974d");
		}
	}
}

function toggleSearch1024() {
	if (windowSize > 1024) {
		if (searchToggleXl == false) {
			$(".languageSwitch").hide();
			$("#language").css("background", "gray");
			$(".searchBarXlScreens").show();
			$(".searchBarXlScreens").toggleClass("searchBarXlScreens-change");
			$('#bigSearch').focus();
			searchToggleXl = true;
		} else {
			realoadBirdAfterClose();
			$(".languageSwitch").show();
			$(".searchBarXlScreens").toggleClass("searchBarXlScreens-change");
			if (pageSelector == 0) {
				$("#language").css("background", "#497463");
			} else if (pageSelector == 1) {
				$("#language").css("background", "#6f253c");
			} else {
				$("#language").css("background", "#c1974d");
			}
			searchToggleXl = false;
		}
	} else if (windowSize <= 768 && windowSize > 460) {
		if (searchToggle == false) {
			$("#lineExpand").animate({
				height : "52px"
			}, 250, function() {
				$("#line").show();
			});
			$("#scrollHide").animate({
				height : "167px"
			}, 250);
			$("#birdFrame").animate({
				marginTop : "172px"
			}, 250);
			$("#language").css("background", "gray");
			$(".languageSwitch").hide();
			searchToggle = true;
		} else {
			$("#lineExpand").animate({
				height : "2px"
			}, 250);
			$("#line").hide();
			$("#scrollHide").animate({
				height : "115px"
			}, 250);
			$("#birdFrame").animate({
				marginTop : "120px"
			}, 250);
			$(".languageSwitch").show();
			if (pageSelector == 0) {
				$("#language").css("background", "#497463");
			} else if (pageSelector == 1) {
				$("#language").css("background", "#6f253c");
			} else {
				$("#language").css("background", "#c1974d");
			}
			searchToggle = false;
		}

	} else if (windowSize <= 460 && windowSize > 320) {
		if (searchToggle == false) {
			$("#lineExpand").animate({
				height : "42px"
			}, 250, function() {
				$("#line").show();
			});
			$("#scrollHide").animate({
				height : "142px"
			}, 250);
			$("#birdFrame").animate({
				marginTop : "132px"
			}, 250);
			$(".languageSwitch").hide();
			$("#language").css("background", "gray");
			searchToggle = true;
		} else {
			$("#lineExpand").animate({
				height : "2px"
			}, 250);
			$("#line").hide();
			$("#scrollHide").animate({
				height : "100px"
			}, 250);
			$("#birdFrame").animate({
				marginTop : "95px"
			}, 250);
			$(".languageSwitch").show();
			if (pageSelector == 0) {
				$("#language").css("background", "#497463");
			} else if (pageSelector == 1) {
				$("#language").css("background", "#6f253c");
			} else {
				$("#language").css("background", "#c1974d");
			}
			searchToggle = false;
		}
	} else if (windowSize <= 320) {
		if (searchToggle == false) {
			$("#lineExpand").animate({
				height : "32px"
			}, 250, function() {
				$("#line").show();
			});
			$("#scrollHide").animate({
				height : "102px"
			}, 250);
			$("#birdFrame").animate({
				marginTop : "92px"
			}, 250);
			$(".languageSwitch").hide();
			$("#language").css("background", "gray");
			searchToggle = true;
		} else {
			$("#lineExpand").animate({
				height : "2px"
			}, 250);
			$("#line").hide();
			$("#scrollHide").animate({
				height : "65px"
			}, 250);
			$("#birdFrame").animate({
				marginTop : "60px"
			}, 250);
			$(".languageSwitch").show();
			if (pageSelector == 0) {
				$("#language").css("background", "#497463");
			} else if (pageSelector == 1) {
				$("#language").css("background", "#6f253c");
			} else {
				$("#language").css("background", "#c1974d");
			}
			searchToggle = false;
		}
	} else {
		if (searchToggle == false) {
			$("#lineExpand").animate({
				height : "50px"
			}, 250, function() {
				$("#line").show();
			});
			$("#scrollHide").animate({
				height : "175px"
			}, 250);
			$("#birdFrame").animate({
				marginTop : "200px"
			}, 250);
			$("#language").css("background", "gray");
			$(".languageSwitch").hide();
			searchToggle = true;
		} else {
			$(".languageSwitch").show();
			$("#lineExpand").animate({
				height : "3px"
			}, 250);
			$("#line").hide();
			$("#scrollHide").animate({
				height : "125px"
			}, 250);
			$("#birdFrame").animate({
				marginTop : "140px"
			}, 250);
			searchToggle = false;
			if (pageSelector == 0) {
				$("#language").css("background", "#497463");
			} else if (pageSelector == 1) {
				$("#language").css("background", "#6f253c");
			} else {
				$("#language").css("background", "#c1974d");
			}
		}
	}
}

function realoadBirdAfterClose() {
	if (lang == true) {
		var out = "";
		$.each(birdInformation, function(key, val) {
			out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
			out += '<img class="lazy birdImg" src="' + pathImg + val.birdImgPath + '" />';
			out += '<div class="birdText">';
			out += '<p id="' + val.birdSerialnumber + '">';
			out += '' + val.birdTitelViet + '';
			out += '</p>';
			out += '</div>';
			out += '</div>';
		});
		out += "";
		$('#birdFrame').html(out);
	} else {
		var out = "";
		$.each(birdInformation, function(key, val) {
			out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
			out += '<img class="lazy birdImg" src="' + pathImg + val.birdImgPath + '" />';
			out += '<div class="birdText">';
			out += '<p id="' + val.birdSerialnumber + '">';
			out += '' + val.birdTitel + '';
			out += '</p>';
			out += '</div>';
			out += '</div>';
		});
		out += "";
		$('#birdFrame').html(out);
	}
}

// disable Language during search //

$('#line').keyup(function() {

	if (lang == true) {
		searchTerm = $('#line').val();

		var myExp = new RegExp(searchTerm, "i");

		var out = "";
		$.each(birdInformation, function(key, val) {
			if (val.birdTitelViet.search(myExp) != -1) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="lazy birdImg" src="' + pathImg + val.birdImgPath + '" />';
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
		searchTerm = $('#line').val();

		var myExp = new RegExp(searchTerm, "i");

		var out = "";
		$.each(birdInformation, function(key, val) {
			if (val.birdTitel.search(myExp) != -1) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="lazy birdImg" src="' + pathImg + val.birdImgPath + '" />';
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
});

$('.searchBarXlScreens').keyup(function() {

	if (lang == true) {
		searchTerm = $('.searchBarXlScreens').val();

		var myExp = new RegExp(searchTerm, "i");

		var out = "";
		$.each(birdInformation, function(key, val) {
			if (val.birdTitelViet.search(myExp) != -1) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="lazy birdImg" src="' + pathImg + val.birdImgPath + '" />';
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
		searchTerm = $('.searchBarXlScreens').val();

		var myExp = new RegExp(searchTerm, "i");

		var out = "";
		$.each(birdInformation, function(key, val) {
			if (val.birdTitel.search(myExp) != -1) {
				out += '<div class="birdBox ' + val.birdTitel[0] +'" data-id="' + val.birdSerialnumber + '"  onclick="grabID(this)">';
				out += '<img class="lazy birdImg" src="' + pathImg + val.birdImgPath + '" />';
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
});

// Menu Toggle and Menustuff //

