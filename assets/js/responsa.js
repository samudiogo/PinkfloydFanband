
/*
* How to detect browser width
*/


$(document).ready(function ()
{
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth()
    {
        var windowsize = $window.width();
        if (windowsize <= 440)
        {
            $("#destaque").remove();
            $("video").remove();
            $("#spotify-playlist").remove();
            $("#fork-github").remove();
        }
        else if (windowsize <= 767)
        {
            $("video").remove();
            $("#fork-github").remove();
            $("#spotify-playlist").remove();
        }

    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});