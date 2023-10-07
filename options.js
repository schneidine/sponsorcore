//scroll through options
function nextDress()
{
    i = 0;
    console.log("inside function nextDress");
    console.log(state.i);
    var dress = document.getElementById("clothes");
    if(state.i===0) {
        dress.setAtrribute("class", "dress1");
        state.i++;
        console.log(state.i);
    }
    else if (state.i === 1) {
        dress.setAttribute("class", "dress2");
        state.i++;
        console.log(state.i);
    } 
    else if(state.i === 2)
    {
        dress.setAttribute("class", "dress3");
        state.i = 0;
    }
}

function nextHair()
{
    i = 0;
    console.log("inside function nextHair");
    console.log(state.i);
    var hair = document.getElementById("hair");
    if(state.i===0) {
        hair.setAtrribute("class", "hair1");
        state.i++;
        console.log(state.i);
    }
    else if (state.i === 1) {
        hair.setAttribute("class", "hair2");
        state.i++;
        console.log(state.i);
    } 
    else if(state.i === 2)
    {
        hair.setAttribute("class", "hair3");
        state.i = 0;
    }
}

function nextAccessories()
{
    i = 0;
    console.log("inside function nextAccessories");
    console.log(state.i);
    var accessories = document.getElementById("accessories");
    if(state.i===0) {
        accessories.setAtrribute("class", "accessories1");
        state.i++;
        console.log(state.i);
    }
    else if (state.i === 1) {
        accessories.setAttribute("class", "accessories2");
        state.i++;
        console.log(state.i);
    } 
    else if(state.i === 2)
    {
        accessories.setAttribute("class", "accessories3");
        state.i = 0;
    }
}