/*
comingsoon.js
Handlers for the splash page
*/

function reset(a,b){
	$(a).css('background-color','#FFFFFF');
	$(a).css('color','#000000');

	$(b).css('background-color','#FFFFFF');
	$(b).css('color','#000000');
}

$(document).ready(function(){

	$('#btn-1').click(function() {
		console.log("btn-1 clicked");

		//Purple Body, Yellow Text, Yellow Button
		$('body').css('background-color', '#7D3C98');
		$('body').css('color', '#F9E79F');
		$('#btn-1').css('background-color', '#F9E79F');
		reset('#btn-2','#btn-3');

		//Fire tracking
		dataLayer.push({
			'page_color' : 'purple',
			'event' : 'ButtonPushed_Btn1'
		});

	});

	$('#btn-2').click(function() {
		console.log("btn-2 clicked");

		//Green Body, Red Text, Red Button
		$('body').css('background-color', '#196F3D');
		$('body').css('color', '#D98880');
		$('#btn-2').css('background-color', '#D98880');
		reset('#btn-1','#btn-3');

		//Fire tracking
		dataLayer.push({
			'page_color' : 'green',
			'event' : 'ButtonPushed_Btn2'
		});

	});

	$('#btn-3').click(function() {
		console.log("btn-3 clicked");

		//Orange Body, Blue Text, Blue Button
		$('body').css('background-color', '#F39C12');
		$('body').css('color', '#154360');
		$(this).css('background-color', '#154360');
		$(this).css('color', '#F39C12');

		reset('#btn-1','#btn-2');

		//Fire tracking
		dataLayer.push({
			'page_color' : 'orange',
			'event' : 'ButtonPushed_Btn3'

		});
	});

});