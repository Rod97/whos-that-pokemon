var url = 'https://pokeapi.co/api/v2/';

function newPokemon(){
    var imageSpot = document.getElementById("pokemonSprite");
    imageSpot.innerHTML = '';
    imageSpot.style.backgroundColor = "#f7c505"
    var dexNum = Math.floor(Math.random() * 151 ) + 1;
    console.log(dexNum);
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = displayPokemon;

    xhttp.open('GET', `${url}pokemon/${dexNum}`);

    xhttp.send();

    function displayPokemon(){
        
        var sprite = document.createElement("img");
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                var response = xhttp.responseText;
                response = JSON.parse(response);
                
                sprite.src = response.sprites.front_default;
                sprite.height = 250;
                sprite.width = 250;

                imageSpot.setAttribute("name",response.name);
                imageSpot.setAttribute("align", "center");
                imageSpot.appendChild(sprite);
            }
        }
    }
}

function verifyGuess(callBack){
    var guess = document.getElementById("userGuess").value.toLowerCase();
    
    var actual = document.getElementById("pokemonSprite").getAttribute("name").toString().toLowerCase();
    
    if(guess === actual) {
        document.getElementById("pokemonSprite").style.backgroundColor = "green";
        var score = document.getElementById("trackCorrect").innerHTML;
        score = score.split(" ");
        score[1]++;

        document.getElementById("trackCorrect").innerHTML = `${score[0]} ${score[1]}`;

        
        setTimeout(callBack, 3000);
    }else{ 
        document.getElementById("pokemonSprite").style.backgroundColor = "red";
    }

}