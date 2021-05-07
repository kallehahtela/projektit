document.getElementById('pelaamaan').addEventListener('click');

function lataaOikeaSivu()
{

    alert(document.getElementById('pelit').value);

    switch (juttu)
    {
        case 0:
            window.open = "4x4.html";
            break;
        case 1:
            window.open = "4x6.html";
            break;
        case 2:
            window.open = "6x6.html";
            break;
        
    }
    
}
lataaOikeaSivu()