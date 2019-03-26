var upArrows = $("#pilOp");
var downArrows = $("#pilNed");
var leftArrows = $("#pilVenstre");
var rightArrows = $("#pilHøjre");
var images = $(".skole_navigator img");
var container = $(".skole_navigator");

var mapX = 0;
var mapY = 0;
var targetX = 0;
var targetY = 0;
var clicked = 0;

upArrows.each(function()
{
    addEventListener("click", function() 
    {
        targetY -= 1;
        
        clickArrow();
    })
});

downArrows.each(function()
{
    addEventListener("click", function() 
    {
        targetY += 1;
        
        clickArrow();
    })
});

leftArrows.each(function()
{
    addEventListener("click", function() 
    {
        targetX -= 1;
        
        clickArrow();
    })
});

rightArrows.each(function()
{
    addEventListener("click", function() 
    {
        targetX += 1;
        
        clickArrow();
    })
});

function clickArrow()
{
    $("#test").text(targetX + "," + targetY);

    //images.animate(
    $("#test").animate(
        {
            left: container.width() * targetX + "px",
            top: container.height() * targetY + "px"
        }
    )
}