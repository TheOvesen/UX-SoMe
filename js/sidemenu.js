var overskrifter = $(".sidemenu_tekst:odd");
var knap = $(".burger_knap");
var menu = $(".sidemenu_mobil");

overskrifter.css(
{
    "color": "#f5a40f",
});

knap.click(function()
{
    if (menu.width() == 0)
    {
        menu.animate(
            {
                width: "100%"
            }
        )
    }
    else
    {
        menu.animate(
            {
                width: "0"
            }
        )
    }
});

$(window).resize(function()
{
    $(".sidemenu_mobil:hidden").width(0);
})