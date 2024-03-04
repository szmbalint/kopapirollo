


function random()
{
    let eredmeny = Math.floor(Math.random() * 3);
    var vissza = "semmi";
    switch(eredmeny)
    {
        case 0:
            vissza = "ko";
            break;
        case 1:
            vissza = "papir";
            break;
        case 2:
            vissza = "ollo";
            break;
        default:    
            break;
    }
    return vissza;
}

var eredmeny = random();
console.log(eredmeny);

    
