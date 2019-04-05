var overskrifter = $(".sidemenu_tekst:odd");
var knap = $(".burger_knap");
var menu = $(".sidemenu_mobil");

// Gør hver anden knap i menuen gul
overskrifter.css(
{
    "color": "#f5a40f",
});

// Der trykkes på burgermenu-knappen
knap.click(function()
{
    // Hvis bredden er 0, animér bredden op til 100%
    if (menu.width() == 0)
    {
        menu.animate(
            {
                width: "100%"
            }
        )
    }
    else // Ellers, animér den ned til 0
    {
        menu.animate(
            {
                width: "0"
            }
        )
    }
});

// Når vinduet ændrer størrelse, sæt bredden på den skjulte mobilmenu til 0
$(window).resize(function()
{
    $(".sidemenu_mobil:hidden").width(0);
})