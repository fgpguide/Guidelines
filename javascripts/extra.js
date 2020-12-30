$(function () {
    var iframes = $('iframe');
    var i = 0;
    (function next() {
        var iframe = iframes.eq(i++);
        if (iframe.length) {
            iframe.attr('src', iframe.data('src')).load(next);
        }
    })();
});