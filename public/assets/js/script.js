$(document).ready(function () {

    $(function () {
        $('[data-trigger="hover"]').popover()
    })

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

});

