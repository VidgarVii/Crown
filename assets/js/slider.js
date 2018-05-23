$(document).ready(function(){
   
    $(".navbar a").mPageScroll2id();
    $("a").mPageScroll2id();
    
    $( document ).on( 'mousemove', function( e ) {
            var amountMovedX = 30 * ( (e.pageX + 1) / $( document ).width() ) - 60;
            var amountMovedY = 30 * ( (e.pageY + 1) / $( window ).height() ) - 100;

            $( '.opacity' ).css( 'background-position', amountMovedX + 'px ' + amountMovedY + 'px' );
} );   
});
