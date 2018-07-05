// NEWSLETTER START ------------------------------------------------------------

;( function( $, window, document, undefined ) {
    'use strict';

    var form        = '.newsletter',
        className   = 'newsletter-active',
        email       = 'input[type="email"]';

    $( form ).each( function()
    {
        var $form   = $( this ),
            $email  = $form.find( email ),
            val     = '';

        $email.on( 'keyup.addClassWhenEmail', function()
        {
            val = $email.val();
            $form.toggleClass( className, val != '' && /^([\w-\.]+@([\w-]+\.)+[\w-]{2,12})?$/.test( val ) );
        });
    });
})( jQuery, window, document );

;( function( window, document, undefined )
{
    'use strict';

    var form        = '.newsletter',
        className   = 'newsletter-active',
        email       = 'input[type="email"]',

        addEventListener = function( element, event, handler )
        {
            element.addEventListener ? element.addEventListener( event, handler ) : element.attachEvent( 'on' + event, function(){ handler.call( element ); });
        },
        forEach = function( elements, fn )
        {
            for( var i = 0; i < elements.length; i++ ) fn( elements[ i ], i );
        },
        addClass = function( element, className )
        {
            element.classList ? element.classList.add( className ) : element.className += ' ' + className;
        },
        removeClass = function( element, className )
        {
            element.classList ? element.classList.remove( className ) : element.className += element.className.replace( new RegExp( '(^|\\b)' + className.split( ' ' ).join( '|' ) + '(\\b|$)', 'gi' ), ' ' );
        };

    forEach( document.querySelectorAll( form ), function( $form )
    {
        var $email = $form.querySelectorAll( email );

        if( $email.length )
        {
            $email = $email[ 0 ];
            addEventListener( $email, 'keyup', function()
            {
                $email.value != '' && /^([\w-\.]+@([\w-]+\.)+[\w-]{2,12})?$/.test( $email.value ) ? addClass( $form, className ) : removeClass( $form, className );
            });
        }
    });
})( window, document );

// NEWSLETTER END --------------------------------------------------------------

/* AUTO SLIDE */

onload  = start;

function start(){
var i = 1;
function Move(){
	i = (i%4)+1; // 4 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,3000); //change img in 3 sec
}

/* AUTO SLIDE */
