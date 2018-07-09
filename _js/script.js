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

onload = function() {

            var e, i = 0;
            e = document.getElementById('slide-img').getElementsByTagName ('div');
                while (e[i++]) {
                 e.onmouseover = function () {
                 clearTimeout(t);
                 }

                 e.onmouseout = function () {
                 t=setTimeout("timedCount()",timeOut);
                 }
         }
}

c=0;
timeOut = 5000;
var t;
t=setTimeout("timedCount()",timeOut);

function timedCount() {
        var getImage = document.getElementById('slide-img').getElementsByTagName('div');
        img = getImage.length-1;
             for (var a=0; a<getImage.length; a++) {
                 if (getImage[a].className.indexOf("active") == 0) {
                     getImage[a].className = 'inactive';
                     c = a;
                 }
            }
         c++;
         if (c>img) {c=0;}
         getImage[c].className = 'active';
         t=setTimeout("timedCount()",timeOut);
}



/* AUTO SLIDE */
