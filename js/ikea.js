$(document).ready(function(){

	bold();

	function bold(){
		$('.answer').each(function(){
			var paragraph = $(this).text();
			paragraph = paragraph.replace("Iza: ", "<br><b>Iza:&nbsp;</b>");
			paragraph = paragraph.replace("Radek: ", "<br><b>Radek:&nbsp;</b>");
			paragraph = paragraph.replace("Iza: ", "<br><b>Iza: </b>");
			paragraph = paragraph.replace("Radek: ", "<br><b>Radek: </b>");
			$(this).html(paragraph);
		});
	}


	function throwImg(){
		$('img').each(function(){
			$(this).add(parent).addClass("img-contener");
			$(this).parent().after().html("<img src=../img/ico/plus.png> class='plus'>");
		});	  	
	}

});
