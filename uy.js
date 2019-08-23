$(document).ready(function () {
    $('#preloaderDiv').delay(1000).fadeTo(1000, 0, function () {
       $(this).css('display', 'none');
   }); $('#startDiv').css('cursor', 'pointer').click(function () {
       $(this).delay(10).fadeTo(1000, 0, function () {
           $(this).css('display', 'none');
       });
       init();
   });
   function init() {
       var settings = {
           image: './img/ori.jpg',//image path
           rippleRadius: 3,//radius of the ripple
           width: 480,//width
           height: 480,//height
           delay: 1,//if auto param === true. 1 === 1 second delay for animation
       };
       //init
       var waterRippleEffect = new WaterRippleEffect(document.getElementById('holder'), settings);
       document.getElementById('holder').style.cursor = 'pointer';
       document.getElementById('holder').addEventListener('click', function (e) {
           var mouseX = e.layerX;
           var mouseY = e.layerY;
           waterRippleEffect.disturb(mouseX, mouseY);
       });
       document.getElementById('holder').addEventListener('mousemove', function (e) {
           var mouseX = e.layerX;
           var mouseY = e.layerY;
           waterRippleEffect.disturb(mouseX, mouseY);
       });
       //jQuery
       //init
       /*
       $( '#holder' ).waterRippleEffect( settings );
       $( '#holder' ).css( 'cursor', 'pointer' );
       $( '#holder' ).click( function( e ) {

           var mouseX = e.pageX - $( this ).offset().left;
           var mouseY = e.pageY - $( this ).offset().top;
           $( '#holder' ).waterRippleEffect( "disturb", mouseX, mouseY );

       } );
       $( '#holder' ).mousemove( function( e ) {

           var mouseX = e.pageX - $( this ).offset().left;
           var mouseY = e.pageY - $( this ).offset().top;

           $( '#holder' ).waterRippleEffect( "disturb", mouseX, mouseY );

       } );
       */
   };
});