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
var targetY = 0;
var maxHeight = 0;

$().ready(function()
{
    images.each(function()
    {
        let pos = $(this).offset();
        $(this).startX = pos.left;
        $(this).startY = pos.top;

        if ($(this).height() > maxHeight)
        {
            maxHeight = $(this).height();
        }
    })

    container.height(maxHeight);
})

container.ready(function()
{
    container.height()
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
/*
    images.each(function()
    {
        $(this).animate(
        {
            left: container.width() * targetX + "px",
            top: container.height() * targetY + "px"
        });
    })*/

    images.animate(
        {
            left: container.width() * targetX + "px",
            top: container.height() * targetY + "px"
        }
    )
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