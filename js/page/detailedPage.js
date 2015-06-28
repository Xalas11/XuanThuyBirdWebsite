/**
 * @author Robert
 */
var bsa;
var toggleDetailedView = false;
var birdImgPosition = 1;
var number;

function grabID(e) {
	number = 1;
	var birdSelector = e.getAttribute("data-id");
	birdInformation.some(function(entry, i) {
		if (entry.birdSerialnumber == birdSelector) {
			bsa = i;
			return true;
		}
	});
	/** BIRD GALLERY **/
	var bip = birdInformation[bsa].birdImgPath;
	var bip1 = birdInformation[bsa].birdImgPath1;
	var bip2 = birdInformation[bsa].birdImgPath2;
	var bip3 = birdInformation[bsa].birdImgPath3;
	var bip4 = birdInformation[bsa].birdImgPath4;
	var bip5 = birdInformation[bsa].birdImgPath5;
	var bip6 = birdInformation[bsa].birdImgPath6;

	if (bip1 != 0) {
		$('<img />').attr('src', pathImg + bip1).appendTo('body').css('display','none');
		number++;
		if (bip2 != 0) {
			$('<img />').attr('src', pathImg + bip2).appendTo('body').css('display','none');
			number++;
			if (bip3 != 0) {
				$('<img />').attr('src', pathImg + bip3).appendTo('body').css('display','none');
				number++;
				if (bip4 != 0) {
					$('<img />').attr('src', pathImg + bip4).appendTo('body').css('display','none');
					number++;
					if (bip5 != 0) {
						$('<img />').attr('src', pathImg + bip5).appendTo('body').css('display','none');
						number++;
						if (bip6 != 0) {
							$('<img />').attr('src', pathImg + bip6).appendTo('body').css('display','none');
							number++;
						}
					}
				}
			}
		}
	}
	setTimeout(copyRighter, 1);	
}

// Mobile Hover
var clicker = false;
$('#detailedShower').on('click', '#nImage', function() {
	if (isTouchDevice == true) {
		if(clicker == true) {
			nextImg();
			clicker = false;
			return;
		}
		clicker = true;
	} else {
		nextImg();
	}
});
$('#detailedShower').on('click', '#pImage', function() {
	if (isTouchDevice == true) {
		if(clicker == true) {
			prevImg();
			clicker = false;
			return;
		}
		clicker = true;
	} else {
		prevImg();
	}
});
// Mobile Hover

$('#detailedShower').on('click', '#bullet1', function() {
	$('#img1').fadeOut(300, function() {
		$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath).bind('onreadystatechange load', function() {
			if (this.complete)
				$(this).fadeIn(300);
		});
	});
	birdImgPosition = 1;
	copyRighter();
	$("#bullet2, #bullet3, #bullet4, #bullet5, #bullet6, #bullet7").css("background-size", "20%");
	$("#bullet1").css("background-size", "50%");
});
$('#detailedShower').on('click', '#bullet2', function() {
	$('#img1').fadeOut(300, function() {
		$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath1).bind('onreadystatechange load', function() {
			if (this.complete)
				$(this).fadeIn(300);
		});
	});
	birdImgPosition = 2;
	copyRighter();
	$("#bullet1, #bullet3, #bullet4, #bullet5, #bullet6, #bullet7").css("background-size", "20%");
	$("#bullet2").css("background-size", "50%");
});
$('#detailedShower').on('click', '#bullet3', function() {
	$('#img1').fadeOut(300, function() {
		$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath2).bind('onreadystatechange load', function() {
			if (this.complete)
				$(this).fadeIn(300);
		});
	});
	birdImgPosition = 3;
	copyRighter();
	$("#bullet1, #bullet2, #bullet4, #bullet5, #bullet6, #bullet7").css("background-size", "20%");
	$("#bullet3").css("background-size", "50%");
});
$('#detailedShower').on('click', '#bullet4', function() {
	$('#img1').fadeOut(300, function() {
		$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath3).bind('onreadystatechange load', function() {
			if (this.complete)
				$(this).fadeIn(300);
		});
	});
	birdImgPosition = 4;
	copyRighter();
	$("#bullet1, #bullet2, #bullet3, #bullet5, #bullet6, #bullet7").css("background-size", "20%");
	$("#bullet4").css("background-size", "50%");
});
$('#detailedShower').on('click', '#bullet5', function() {
	$('#img1').fadeOut(300, function() {
		$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath4).bind('onreadystatechange load', function() {
			if (this.complete)
				$(this).fadeIn(300);
		});
	});
	birdImgPosition = 5;
	copyRighter();
	$("#bullet1, #bullet2, #bullet3, #bullet4, #bullet6, #bullet7").css("background-size", "20%");
	$("#bullet5").css("background-size", "50%");
});
$('#detailedShower').on('click', '#bullet6', function() {
	$('#img1').fadeOut(300, function() {
		$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath5).bind('onreadystatechange load', function() {
			if (this.complete)
				$(this).fadeIn(300);
		});
	});
	birdImgPosition = 6;
	copyRighter();
	$("#bullet1, #bullet2, #bullet3, #bullet4, #bullet5, #bullet7").css("background-size", "20%");
	$("#bullet6").css("background-size", "50%");
});
$('#detailedShower').on('click', '#bullet7', function() {
	$('#img1').fadeOut(300, function() {
		$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath6).bind('onreadystatechange load', function() {
			if (this.complete)
				$(this).fadeIn(300);
		});
	});
	birdImgPosition = 7;
	copyRighter();
	$("#bullet1, #bullet2, #bullet3, #bullet4, #bullet5, #bullet6").css("background-size", "20%");
	$("#bullet7").css("background-size", "50%");
});

function nextImg() { 
	if (birdImgPosition == 1 && birdImgPosition < number) {
		$('#img1').fadeOut(300, function() {
			$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath1).bind('onreadystatechange load', function() {
				if (this.complete)
					$(this).fadeIn(300);
			});
		});
		birdImgPosition = 2;
		copyRighter();
		$("#bullet1, #bullet3, #bullet4, #bullet5, #bullet6, #bullet7").css("background-size", "20%");
		$("#bullet2").css("background-size", "50%");
	} else if (birdImgPosition == 2 && birdImgPosition < number) {
		$('#img1').fadeOut(300, function() {
			$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath2).bind('onreadystatechange load', function() {
				if (this.complete)
					$(this).fadeIn(300);
			});
		});
		birdImgPosition = 3;
		copyRighter();
		$("#bullet1, #bullet2, #bullet4, #bullet5, #bullet6, #bullet7").css("background-size", "20%");
		$("#bullet3").css("background-size", "50%");
	} else if (birdImgPosition == 3 && birdImgPosition < number) {
		$('#img1').fadeOut(300, function() {
			$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath3).bind('onreadystatechange load', function() {
				if (this.complete)
					$(this).fadeIn(300);
			});
		});
		birdImgPosition = 4;
		copyRighter();
		$("#bullet1, #bullet2, #bullet3, #bullet5, #bullet6, #bullet7").css("background-size", "20%");
		$("#bullet4").css("background-size", "50%");
	} else if (birdImgPosition == 4 && birdImgPosition < number) {
		$('#img1').fadeOut(300, function() {
			$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath4).bind('onreadystatechange load', function() {
				if (this.complete)
					$(this).fadeIn(300);
			});
		});
		birdImgPosition = 5;
		copyRighter();
		$("#bullet1, #bullet2, #bullet3, #bullet4, #bullet6, #bullet7").css("background-size", "20%");
		$("#bullet5").css("background-size", "50%");
	} else if (birdImgPosition == 5 && birdImgPosition < number) {
		$('#img1').fadeOut(300, function() {
			$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath5).bind('onreadystatechange load', function() {
				if (this.complete)
					$(this).fadeIn(300);
			});
		});
		birdImgPosition = 6;
		copyRighter();
		$("#bullet1, #bullet2, #bullet3, #bullet4, #bullet5, #bullet7").css("background-size", "20%");
		$("#bullet6").css("background-size", "50%");
	} else if (birdImgPosition == 6 && birdImgPosition < number) {
		$('#img1').fadeOut(300, function() {
			$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath6).bind('onreadystatechange load', function() {
				if (this.complete)
					$(this).fadeIn(300);
			});
		});
		birdImgPosition = 7;
		copyRighter();
		$("#bullet1, #bullet2, #bullet3, #bullet4, #bullet5, #bullet6").css("background-size", "20%");
		$("#bullet7").css("background-size", "50%");
	}
};
function prevImg() {
	if (birdImgPosition == 2 && birdImgPosition <= number) {
		$('#img1').fadeOut(300, function() {
			$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath).bind('onreadystatechange load', function() {
				if (this.complete)
					$(this).fadeIn(300);
			});
		});
		birdImgPosition = 1;
		copyRighter();
		$("#bullet2, #bullet3, #bullet4, #bullet5, #bullet6, #bullet7").css("background-size", "20%");
		$("#bullet1").css("background-size", "50%");
	} else if (birdImgPosition == 3) {
		$('#img1').fadeOut(300, function() {
			$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath1).bind('onreadystatechange load', function() {
				if (this.complete)
					$(this).fadeIn(300);
			});
		});
		birdImgPosition = 2;
		copyRighter();
		$("#bullet1, #bullet3, #bullet4, #bullet5, #bullet6, #bullet7").css("background-size", "20%");
		$("#bullet2").css("background-size", "50%");
	} else if (birdImgPosition == 4) {
		$('#img1').fadeOut(300, function() {
			$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath2).bind('onreadystatechange load', function() {
				if (this.complete)
					$(this).fadeIn(300);
			});
		});
		birdImgPosition = 3;
		copyRighter();
		$("#bullet1, #bullet2, #bullet4, #bullet5, #bullet6, #bullet7").css("background-size", "20%");
		$("#bullet3").css("background-size", "50%");
	} else if (birdImgPosition == 5) {
		$('#img1').fadeOut(300, function() {
			$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath3).bind('onreadystatechange load', function() {
				if (this.complete)
					$(this).fadeIn(300);
			});
		});
		birdImgPosition = 4;
		copyRighter();
		$("#bullet1, #bullet2, #bullet3, #bullet5, #bullet6, #bullet7").css("background-size", "20%");
		$("#bullet4").css("background-size", "50%");
	} else if (birdImgPosition == 6) {
		$('#img1').fadeOut(300, function() {
			$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath4).bind('onreadystatechange load', function() {
				if (this.complete)
					$(this).fadeIn(300);
			});
		});
		birdImgPosition = 5;
		copyRighter();
		$("#bullet1, #bullet2, #bullet3, #bullet4, #bullet6, #bullet7").css("background-size", "20%");
		$("#bullet5").css("background-size", "50%");
	} else if (birdImgPosition == 7) {
		$('#img1').fadeOut(300, function() {
			$(this).attr('src', pathImg + birdInformation[bsa].birdImgPath5).bind('onreadystatechange load', function() {
				if (this.complete)
					$(this).fadeIn(300);
			});
		});
		birdImgPosition = 6;
		copyRighter();
		$("#bullet1, #bullet2, #bullet3, #bullet4, #bullet5, #bullet7").css("background-size", "20%");
		$("#bullet6").css("background-size", "50%");
	}
};
function copyRighter() {
	copyName = birdImgPosition -1;
	
	document.getElementById("copyRightPicContainer").innerHTML = birdInformation[bsa].birdCopyRight[copyName];
	setTimeout(testa, 320);
}
function testa() {
	var width = $('#img1').width();
	var imgPos = $('#img1').position().left;
	width -= 30;
	imgPos += 4;
	$('#copyRightPicCenter').css({
		'width': width,
		'left' : imgPos
	});
}
/** BIRD GALLERY **/

var tempScrollTop;

var templateDetailedPage = $.trim($('#templateDetailedPage').html());
$('#birdFrame').on('click', '.birdBox', function() {
	tempScrollTop = $(document).scrollTop();
	$('#detailedShower').show();
	$('.siteWrapper').addClass('noScroller');
	$("#detailedShower").css("z-index", "50");
	if (lang == true) {
		var tempdet = templateDetailedPage.replace(/{{birdImgPath}}/ig,pathImg + birdInformation[bsa].birdImgPath).replace(/{{birdTitel}}/ig, birdInformation[bsa].birdTitelViet).replace(/{{audioPath}}/ig, "audio/" + birdInformation[bsa].birdSerialnumber + ".mp3").replace(/{{Description}}/ig, "Mô tả").replace(/{{DescriptionText}}/ig, birdInformation[bsa].birdDescriptionViet).replace(/{{Habitat}}/ig, "Sinh cảnh sống").replace(/{{HabitatText}}/ig, birdInformation[bsa].birdHabitatViet).replace(/{{Observation}}/ig, "Quan sát").replace(/{{ObservationText}}/ig, birdInformation[bsa].birdObservationViet).replace(/{{Conversation}}/ig, "Tình trạng").replace(/{{ConversationText}}/ig, birdInformation[bsa].birdConversationViet);
	} else {
		var tempdet = templateDetailedPage.replace(/{{birdImgPath}}/ig,pathImg + birdInformation[bsa].birdImgPath).replace(/{{birdTitel}}/ig, birdInformation[bsa].birdTitel).replace(/{{audioPath}}/ig, "audio/" + birdInformation[bsa].birdSerialnumber + ".mp3").replace(/{{Description}}/ig, "Description").replace(/{{DescriptionText}}/ig, birdInformation[bsa].birdDescription).replace(/{{Habitat}}/ig, "Habitat").replace(/{{HabitatText}}/ig, birdInformation[bsa].birdHabitat).replace(/{{Observation}}/ig, "Observation").replace(/{{ObservationText}}/ig, birdInformation[bsa].birdObservation).replace(/{{Conversation}}/ig, "Conservation").replace(/{{ConversationText}}/ig, birdInformation[bsa].birdConversation);
	}
	$('#detailedShower').html(tempdet);
	$("#mainSiteWrap").animate({
		opacity : 0.3
	}, 250);
	setTimeout(detailedAnimate, 1);
	var k = 1;
	$(document).ready(function() {
		for (var i = number; i > 0; i--) {
			var bulletADD = "";
			bulletADD += '<a href="#"><div id="bullet' + k + '"></div></a>';
			$('#bulletContainer').append(bulletADD);
			k++;
		};
	});
});

function detailedAnimate() {
	$(".birdDetailedTextWindow").toggleClass("birdDetailedTextWindow-change");
	$(".detailLine").toggleClass("detailLine-change");

	toggleDetailedView = true;
}

// close Details //
$('#detailedShower').on('click', '#backDetailed, #backDetailed2', function() {
	if (toggleDetailedView == true) {
		$('.clickPlateDetail').hide();
		$("#mainSiteWrap").animate({
			opacity : 1
		}, 50);
		birdImgPosition = 1;
		setTimeout(detailedAnimateDelay, 10);
	}
	clicker = false;
});
$('#detailedShower').click(function(e) {
	if (e.target == this) {
		if (toggleDetailedView == true) {
			$("#mainSiteWrap").animate({
				opacity : 1
			}, 50);
			birdImgPosition = 1;
			setTimeout(detailedAnimateDelay, 10);
		}
	}
});
$('#detailedShower').on('click', '#birdImgContainer, #textContainer', function(e) {
	if (e.target == this) {
		if (toggleDetailedView == true) {
			$('.clickPlateDetail').hide();
			$("#mainSiteWrap").animate({
				opacity : 1
			}, 50);
			birdImgPosition = 1;
			setTimeout(detailedAnimateDelay, 10);
		}
	}
});
function detailedAnimateDelay() {
	$("#detailedShower").css("z-index", "0");
	$('.siteWrapper').removeClass('noScroller');
	$('#detailedShower').empty();
	$('#detailedShower').hide();
	$(document).scrollTop(tempScrollTop);
	toggleDetailedView = false;
}

// Detailed Page //