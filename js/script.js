jQuery(document).ready(function(){
	$('.prise_tabs .prise_tabs_button').on('click',function(e){
  		e.preventDefault();
	    $('.prise_tabs .prise_tabs_button').removeClass('active');
	    $(this).addClass('active');
	    var index=$(this).index();
	    $(".prise_blocks_wrap .prise_blocks").removeClass("active");
	    $(".prise_blocks_wrap .prise_blocks").eq(index).addClass("active");
	  })

	$('.faq_block').on('click',function(){
		  $(this).toggleClass('active');
		  })

	$('.reviews_block_button_important_1').on('click', function() {
          $('.overlay_1').show();
        });

        $('.popup-close').on('click', function( ) {
          $('.overlay_1').hide();
        });

    $('.reviews_block_button_important_2').on('click', function() {
          $('.overlay_2').show();
        });

        $('.popup-close').on('click', function( ) {
          $('.overlay_2').hide();
        });

    $('.reviews_block_button_important_3').on('click', function() {
          $('.overlay_3').show();
        });

        $('.popup-close').on('click', function( ) {
          $('.overlay_3').hide();
        });

    $('.reviews_block_button_important_4').on('click', function() {
          $('.overlay_4').show();
        });

        $('.popup-close').on('click', function( ) {
          $('.overlay_4').hide();
        });

    $('.reviews_block_button_important_5').on('click', function() {
          $('.overlay_5').show();
        });

        $('.popup-close').on('click', function( ) {
          $('.overlay_5').hide();
        });

    $('.reviews_block_button_important_6').on('click', function() {
          $('.overlay_6').show();
        });

        $('.popup-close').on('click', function( ) {
          $('.overlay_6').hide();
        });

    $('.reviews_block_button_important_7').on('click', function() {
          $('.overlay_7').show();
        });

        $('.popup-close').on('click', function( ) {
          $('.overlay_7').hide();
        });

    $('.reviews_block_button_important_8').on('click', function() {
          $('.overlay_8').show();
        });

        $('.popup-close').on('click', function( ) {
          $('.overlay_8').hide();
        });

    $('.reviews_block_button_important_9').on('click', function() {
          $('.overlay_9').show();
        });

        $('.popup-close').on('click', function( ) {
          $('.overlay_9').hide();
        });

})



