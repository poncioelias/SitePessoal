
//Progress bar and go top
$(window).scroll(function(){
	hgt = $(document).height() - $(window).height();
	scroll = $(window).scrollTop();
	pbarval = (100*scroll)/hgt;
	$("#pgbar").val(pbarval);
	$('#pgbar').attr('aria-valuenow', pbarval).css('width',pbarval+"%");
	//go top
	/*if (pbarval>3) {
		$(".gotop").css("display", "initial");
	}
	else{
		$(".gotop").css("display", "none");

	}

	if (pbarval > 35 &&  pbarval < 65) {
		$("#gotopa").css("color", "#000");
	}
	else{
		$("#gotopa").css("color", "#fff");
	}*/



});

$(window).scroll(function(){
	var x = $("body").scrollTop();
	$("#debugger").text(x + " ");
});
//Progress bar and go top

//Smooth scroll
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 50
          }, 1000);
          return false;
        }
      }
    });
});
//Smooth scroll

var waypoint = new Waypoint({
  element: document.getElementById('wp1'),
  handler: function(direction) {
  	if (direction=="down") {
  		$(".gotop").css("display", "initial");
  	}
  	else{
  		$(".gotop").css("display", "none");
  	} 
  }
})


var waypoint1 = new Waypoint({
  element: document.getElementById('portfolio'),
  handler: function(direction) {
  	if (direction=="down") {
  		$("#gotopa").css("color", "#000");
  	}
  	else{
  		$("#gotopa").css("color", "#fff");
  	}
    
  },
  offset: $(window).height() - 50
})

var waypoint1 = new Waypoint({
  element: document.getElementById('contact'),
  handler: function(direction) {
  	if (direction=="down") {
  		$("#gotopa").css("color", "#fff");
  	}
  	else{
  		$("#gotopa").css("color", "#000");
  	}
    
  },
  offset: $(window).height() - 50
})