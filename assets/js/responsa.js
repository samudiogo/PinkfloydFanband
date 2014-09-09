
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
            //if the window is greater than 440px wide then turn on jScrollPane..
            $("#destaque").remove();
            $("video").remove();
            $("#spotify-playlist").remove();
        }
        else if (wi <= 767)
        {
            $("video").remove();
            $("#spotify-playlist").remove();
        }

    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

/*
$(window).ready(function ()
{
var wi = $(window).width();

$(window).resize(function ()
{
var wi = $(window).width();

if (wi <= 480)
{
$("#destaque").remove();
$("video").remove();
$("#spotify-playlist").remove();

}
else if (wi <= 767)
{
$("p.testp").text('Screen width is between 481px and 767px. Width is currently: ' + wi + 'px.');
}
else if (wi <= 980)
{
$("p.testp").text('Screen width is between 768px and 980px. Width is currently: ' + wi + 'px.');
}
else if (wi <= 1200)
{
$("p.testp").text('Screen width is between 981px and 1199px. Width is currently: ' + wi + 'px.');
}
else
{
$("p.testp").text('Screen width is greater than 1200px. Width is currently: ' + wi + 'px.');
}
});
});*/