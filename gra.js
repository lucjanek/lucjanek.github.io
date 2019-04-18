var xo = "X"
document.getElementById("log").innerText = "Tura gracza "+xo

var wygrana = 
[[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]]

function pisz(etykieta) 
{

    if (etykieta.innerText == "" && !czy_wygrana(xo))
    {
        etykieta.innerText = xo;
        if (czy_wygrana(xo))
        {
            document.getElementById("log").innerText = "Gracz "+xo+" wygrał!!!";
            return;
        }
        if (xo == "X")
        {
            xo = "O"
            document.getElementById("log").innerText = "Tura gracza "+xo
        }
        else
        {
            xo = "X"
            document.getElementById("log").innerText = "Tura gracza "+xo
        }
    }

    if (czy_remis() && !czy_wygrana(xo))
    {
        document.getElementById("log").innerText = "Remis";
    }
    
}

function czy_wygrana(xo)
{
    var czywygrana = false;
    wygrana.forEach(element => {
        if(getXO(element[0])==xo && getXO(element[1])==xo && getXO(element[2])==xo)
        {  
            czywygrana = true;
        }
    });
    return czywygrana;
}

function getXO(pozycja)
{
    return document.getElementById("p"+pozycja).innerText;
}

function reset()
{
    for(var i = 1; i < 10; i++)
    {
        document.getElementById("p"+i).innerText = ""
    }
    xo = "X"
    document.getElementById("log").innerText = "Tura gracza "+xo
}

function czy_remis()
{
    var czyremis = true;
    for(var i = 1; i < 10; i++)
    {
        if (document.getElementById("p"+i).innerText == "")
        {
            czyremis=false;
        }
    }
    return czyremis;
}