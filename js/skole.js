var upArrows = $("#pilOp");
var downArrows = $("#pilNed");
var leftArrows = $("#pilVenstre");
var rightArrows = $("#pilHøjre");
var images = $(".mapimg");
//var images = $("#test");
var container = $(".skole_navigator");

var startX = 0;
var startY = 0;
var targetX = 0;
var targetY = -1;
var maxHeight = $(".mapimg:first").height();

$().ready(function()
{
    images.each(function()
    {
        if ($(this).height() > maxHeight)
        {
            maxHeight = $(this).height();
        }
    })

    container.innerHeight(maxHeight);

    images.css(
        {
            left: container.outerWidth() * targetX + "px",
            top: container.outerHeight() * targetY + "px"
        }
    )
})

upArrows.click(function() 
{
    targetY += 1;
        
    clickArrow();
});

downArrows.click(function() 
{
    targetY -= 1;
        
    clickArrow();
});

leftArrows.click(function() 
{
    targetX += 1;
        
    clickArrow();
});

rightArrows.click(function() 
{
    targetX -= 1;
        
    clickArrow();
});

function clickArrow()
{
    $("#test").text($("#test").offset().left + "," + $("#test").offset().top + " ; " + targetX + "," + targetY);

    images.each(function()
    {
        $(this).animate(
        {
            left: container.width() * targetX + "px",
            top: container.height() * targetY + "px"
        });
    })
/*
    images.animate(
        {
            left: container.width() * targetX + "px",
            top: container.height() * targetY + "px"
        }
    )*/
}

$(window).resize(function()
{
    maxHeight = 0;
    images.each(function()
    {
        $(this).css(
        {
            left: container.width() * targetX + "px",
            top: container.height() * targetY + "px"
        });

        if ($(this).height() > maxHeight)
        {
            maxHeight = $(this).height();
        }
    })

    container.height(maxHeight);
});