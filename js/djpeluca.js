$(document).ready(function() {
    var visible;
    //tipsy tooltip
    $('#djpeluca').tipsy({html: true, gravity: 'w' });
    
    //title and subtitle hover changes
    $('#subtitle').hover(function() { 
        $('#subtitle').text('Pr0bl3m S0lv3r!');
    },function(){ 
        $('#subtitle').text('Comunicate & compute');
    });
    $('#title').hover(function() { 
        $('#title').text('Adrian Barrera Servan');
    },function(){ 
        $('#title').text('DJ Peluca');
    });
    //tipsy tooltip and hover changes
	
	//check query for tab
		var visible;
		var querystring = window.location.search;
		if (querystring != ""){
			var splited = new Array();
			splitted = querystring.split('=');
			visible = splitted[1];
			$("html, body").animate({ scrollTop: $("#divmenu").position().top }, 1000);
		}
	//check query for tab  
    
    //menu tabs
    $('ul#menu li.'+visible).addClass('select');
		$('#' + visible).removeClass('none');
    
    $('ul#menufilmmaking li.'+visible).addClass('select');
		$('#' + visible).removeClass('none');
    
    $('ul#menu li').click(function(){
        var Classes = $(this).attr('class').split(" ");
        $('ul#menu li.'+visible).removeClass('select');
        $(this).addClass('select');
        if( visible!= Classes[0])
        {
            $('#' + Classes[0]).removeClass('none');
            $('#' +  visible).addClass('none');
            visible = Classes[0];
			var query = "?tab="+visible;
			window.history.pushState("object or string", "DJ PELUCA", query);
        }
    });
    
    $('ul#menufilmmaking li').click(function(){
        var Classes = $(this).attr('class').split(" ");
        $('ul#menufilmmaking li.'+visible).removeClass('select');
        $(this).addClass('select');
        if( visible!= Classes[0])
        {
            $('#' + Classes[0]).removeClass('none');
            $('#' +  visible).addClass('none');
            visible = Classes[0];
			var query = "?tab="+visible;
			window.history.pushState("object or string", "DJ PELUCA", query);
        }
    });
    //menu tabs
    
    //scroll on tab click
    $('.tab').click(function(){
        $("html, body").animate({ scrollTop: $("#divmenu").position().top }, 1000);
    });
    //scroll on tab click
	
	 
});