var upArrows = $("#pilOp");
var downArrows = $("#pilNed");
var leftArrows = $("#pilVenstre");
var rightArrows = $("#pilHøjre");
var allArrows = $("#pilOp, #pilNed, #pilVenstre, #pilHøjre");
var images = $(".mapimg");
//var images = $("#test");
var container = $(".skole_navigator");
var imgList = new Array();
var posList = new Array();

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

    container.height(maxHeight);

    images.css(
        {
            left: 100 * (startX + targetX) + "%",
            top: 100 * (startX + targetY) + "%"
        }
    )

    clickArrow();
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
    //$("#test").text($("#test").offset().left + "," + $("#test").offset().top + " ; " + targetX + "," + targetY);

    allArrows.hide();

    if (targetY == 0)
    {
        downArrows.css({top: "70%", left: "50%"});

        downArrows.show();
    }

    if (targetY == -1)
    {
        if (targetX == 0)
        {
            downArrows.css({top: "55%", left: "70%"});
            rightArrows.css({top: "50%", left: "90%"});
            upArrows.css({top: "35%", left: "45%"});
    
            downArrows.show();
            rightArrows.show();
            upArrows.show();
        }
        else
        {
            leftArrows.css({top: "50%", left: "10%"});
            leftArrows.show();
        }
    }

    if (targetY == -2)
    {
        downArrows.css({top: "35%", left: "70%"});
        upArrows.css({top: "75%", left: "65%"});

        upArrows.show();
        downArrows.show();
    }

    if (targetY == -3)
    {
        if (targetX == 0)
        {
            upArrows.css({top: "50%", left: "10%"});
            rightArrows.css({top: "50%", left: "90%"});

            upArrows.show();
            rightArrows.show();
        }
        else
        {
            leftArrows.css({top: "50%", left: "10%"});

            leftArrows.show();
        }
    }

    images.each(function()
    {
        $(this).animate(
        {
            left: 100 * (startX + targetX) + "%",
            top: 100 * (startX + targetY) + "%"
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
            left: 100 * (startX + targetX) + "%",
            top: 100 * (startX + targetY) + "%"
        });

        if ($(this).height() > maxHeight)
        {
            maxHeight = $(this).height();
        }
    })

    container.height(maxHeight);
});