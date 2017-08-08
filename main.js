function preloader() {
    var $preloader = $('.loadLine');

    $preloader.css('width', 0);
}

function hidePicture() {
    var deferred = $.Deferred();

    deferred
        .resolve()
        .then(function() {
            return $('article img').slideUp(1000);
        })
        .then(function () {
            return $('article p').slideUp(1000);
        })
        .then(function () {
            return $('article').slideUp(1000);
        })
}
setTimeout(preloader,2000)
setTimeout(hidePicture, 5000);

