/**
 * @author Robert
 */
// sorting Birds ABC load Birds into DOM //
var templateBirdBox = $.trim($('#templateBirdBox').html());
birdInformation.sort(function(a, b) {
	if (a.birdTitel < b.birdTitel)
		return -1;
	if (a.birdTitel > b.birdTitel)
		return 1;
	return 0;
});
$.each(birdInformation, function(index, obj) {
	var temp =   templateBirdBox.replace(/{{birdImgPath}}/ig, pathImg+obj.birdImgPath)
								.replace(/{{birdTitel}}/ig, obj.birdTitel)
								.replace(/{{birdID}}/ig, obj.birdSerialnumber)
								.replace(/{{birdABC}}/ig, obj.birdTitel[0]);
	$('#birdFrame').append(temp);
});
setTimeout(abcGimikSetter, 10);
// sorting Birds ABC load Birds into DOM //