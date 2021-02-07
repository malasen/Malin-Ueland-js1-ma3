//Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultscontainer = document.querySelector(".container");

async function api() {
    try {
        const response = await fetch(url);

        const result = await response.json();

        const games = result.results ;

        resultscontainer.innerHTML ="";

        //console.log(result.results);

        for(let i = 0; i < games.length; i++) {
            //console.log(games[i].name);

            if (i === 8) {
                break;
            }

            resultscontainer.innerHTML += `<h2>${games[i].name}</h2> <p> Rating: ${games[i].rating} Tags:${games[i].tags.length}</p>`;

        }
    }
    catch (error) {
        console.log(error);
        resultscontainer.innerHTML = error
    }
}
api();