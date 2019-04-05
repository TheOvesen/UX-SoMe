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
var infoBox = $(".info_box");
var infoButton = $(".info_symbol");
var infoText = "<h1>Forhallen</h1><p>Dette er synet der møder dig når du træder ind i Guldtanden. Til venstre er der reception og lærerværelse, oppe ad trapperne ligger de fleste klasseværelser, nedad ligger atriummet og kantinen, til højre et par klasseværelser, og bag dig er der borde, stole og sofaer til fri afbenyttelse.<p>";

var startX = 0;
var startY = 0;
var targetX = 0;
var targetY = -1;
var maxHeight = $(".mapimg:first").height();

$().ready(function()
{
    // Find højden af det højeste billede
    images.each(function()
    {
        if ($(this).height() > maxHeight)
        {
            maxHeight = $(this).height();
        }
    })

    // Sæt navigationskassens højde til at være lig med højden af det første billede
    container.height(maxHeight);

    // Indstil billedernes startposition
    images.css(
        {
            left: 100 * (startX + targetX) + "%",
            top: 100 * (startX + targetY) + "%"
        }
    )

    clickArrow();
})

// Pil op klikkes
upArrows.click(function() 
{
    // Incrementér positionsvariablen; angives i "hele bredder" af navigationsvinduet
    targetY += 1;
    
    // Kør clickArrow funktionen
    clickArrow();
});

// Pil ned klikkes
downArrows.click(function() 
{
    targetY -= 1;
        
    clickArrow();
});

// Pil venstre klikkes
leftArrows.click(function() 
{
    targetX += 1;
        
    clickArrow();
});

// Pil højre klikkes
rightArrows.click(function() 
{
    targetX -= 1;
        
    clickArrow();
});

// Generel funktion til når en pil klikkes
function clickArrow()
{
    // Debug ting til at vise information visuelt
    //$("#test").text($("#test").offset().left + "," + $("#test").offset().top + " ; " + targetX + "," + targetY);

    // Reset alle pilene så vi ikke hele tiden skal gøre det manuelt
    allArrows.hide();
    allArrows.css("transform", "translateX(-50%) translateY(-50%) rotate(0deg)");

    // Første sal
    if (targetY == 0)
    {
        // Sæt teksten af infoboksen
        var infoText = "<h1>Første sal</h1><p>Skolen tilbyder flere områder for de studerende at kunne arbejde i grupper. Heraf ser vi sofaer, gruppeborde og generelle områder så er sat op, som optimale forhold for de studerende. Disse studieområder er sat nær klasseværelserne.</p>";

        // Sæt pilen(es) position
        downArrows.css({top: "70%", left: "50%"});

        // Vis de relevante pile
        downArrows.show();
    }

    // Stueetage
    if (targetY == -1)
    {
        // Der er flere horisontale billeder her, som rykkes med targetX
        if (targetX == 0)   // Forhal
        {
            var infoText = "<h1>Forhallen</h1><p>Dette er synet der møder dig når du træder ind i Guldtanden. Til venstre er der reception og lærerværelse, oppe ad trapperne ligger de fleste klasseværelser, nedad ligger atriummet og kantinen, til højre et par klasseværelser, og bag dig er der borde, stole og sofaer til fri afbenyttelse.<p>";

            downArrows.css({top: "55%", left: "70%"});
            rightArrows.css({top: "50%", left: "90%"});
            upArrows.css({top: "35%", left: "45%"});
    
            downArrows.show();
            rightArrows.show();
            upArrows.show();
        }
        else    // Bag forhallen
        {
            var infoText = "<h1>Bag forhallen</h1><p>Bag forhallen findes et område med borde, stole og sofaer. Her kan man bruge tid på at lave lektier, skrive projekter eller bare slappe af. Her vil studievejlederen også være to gange om ugen, henholdsvis mandag og onsdag. Man kan bestille en tid, men man kan også bare møde op og få en snak omkring uddannelsen.</p>";

            leftArrows.css({top: "50%", left: "10%"});
            leftArrows.show();
        }
    }

    // Atriummet
    if (targetY == -2)
    {
        var infoText = "<h1>Atriummet</h1><p>I atriummet er der mulighed for at sidde i grupper og arbejde, spise frokost eller bare holde en pause efter undervisningen. Om torsdagen spilles der Kahoot som alle kan deltage i med gevinst til vinderen. Ind imellem afholdes der også oplæg og små messer med gæster udefra i atriummet.</p>";

        // Rotér pile for mere intuitivt udseende
        downArrows.css("transform", "translateX(-50%) translateY(-50%) rotate(180deg)");
        upArrows.css("transform", "translateX(-50%) translateY(-50%) rotate(180deg)");

        downArrows.css({top: "35%", left: "70%"});
        upArrows.css({top: "75%", left: "65%"});

        upArrows.show();
        downArrows.show();
    }

    // Kælderetagen
    if (targetY == -3)
    {
        if (targetX == 0)   // Kantinen
        {
            var infoText = "<h1>Kantinen</h1><p>I vores kantine tilbydes et bred udvalg af både varme og lune retter. Heraf finder du en lækker bland-selv salat buffet bestående af friske råvarer, forskellige slags sandwich og flere forskellige slags varme retter, som ændres fra dag til dag.</p>";

            upArrows.css({top: "50%", left: "10%"});
            rightArrows.css({top: "50%", left: "90%"});

            upArrows.show();
            rightArrows.show();
        }
        else    // Spisesalen
        {
            var infoText = "<h1>Spisesalen</h1><p>I spisesalen kan du nyde et måltid, enten ved at tage det købte måltid fra kantinen eller din egen medbragte madpakke. I kantinen finder du også studerende, som enten arbejder i gruppe eller have en god tid.<br>Ved specielle lejligheder afholdes messer og oplæg her.</p>";

            leftArrows.css({top: "50%", left: "10%"});

            leftArrows.show();
        }
    }

    // Animér alle billederne til deres nye position
    images.each(function()
    {
        $(this).animate(
        {
            left: 100 * (startX + targetX) + "%",
            top: 100 * (startX + targetY) + "%"
        });
    })

    // Put den nye info tekst ind i informationsboksen
    infoBox.html(infoText);
}

// Der klikkes på spørsmålstegnet, og informationsboksen vises eller skjules
infoButton.click(function()
{
    infoBox.toggle("fast");
});

// Kaldes når vinduet ændrer størrelse, for at navigationsboksen skal fungere ordenligt på alle størrelser
$(window).resize(function()
{
    // Nulstil variablen for højeste billede
    maxHeight = 0;

    // Flyt alle billeder til den rigtige position, og find højden af det største billede igen
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

    // Indstil højden på navigationselementet
    container.height(maxHeight);
});