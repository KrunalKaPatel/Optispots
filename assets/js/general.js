$(document).ready(function(){

	/* JS For mobile view menu */
	$( ".fa-times" ).hide();
    $( ".nav-menu" ).hide();
    jQuery('.fa-bars').click(function(){
        jQuery('.nav-menu').slideToggle(function() {
            $( ".fa-bars" ).hide();
            $( ".fa-times" ).show();        
          });
    });

    jQuery(".fa-times" ).click(function() {
        jQuery( ".nav-menu" ).slideToggle(function() {
            $( ".fa-times" ).hide();
            $( ".fa-bars" ).show();
          });
    });

    $(".fa-bars").click(function(){
        $("body").addClass("stop-scroll");
    });
    $(".fa-times").click(function(){
    	$("body").removeClass("stop-scroll");
	});


	/* Slider for Section*/
	$('.card-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrow: false,
		dots: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});