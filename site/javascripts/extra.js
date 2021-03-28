/* Adding the script tag to the head as suggested before */

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";

// Then bind the event to the callback function.
// There are several events for cross browser compatibility.
script.onreadystatechange = handler;
script.onload = handler;

// Fire the loading
head.appendChild(script);

function handler() {
    console.log('jquery added :)');
    $(function () {
        var iframes = $('iframe');
        var i = 0;

        (function next() {
            var iframe = iframes.eq(i++);
            if (iframe.length) {
                setTimeout(function () {

                    iframe.attr('src', iframe.data('src')).load(next(iframe));
                }, 4000);

            }
        })();
    });
}