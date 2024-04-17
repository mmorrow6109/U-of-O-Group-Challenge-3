const apiurl = 'https://api.themoviedb.org/3/discover/movie?api_key=98004180d78f252683de0c075cf644a1';
const imgpath = 'https://image.tmdb.org/t/p/w1280';
const searchurl = 'https://api.themoviedb.org/3/search/movie?api_key=98004180d78f252683de0c075cf644a1&query="';

const main = document.getElementById('content');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(apiurl);

async function getMovies(url){
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);
    showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML = '';
     movies.forEach(movie => {
        const {poster_path, title, overview, id, vote_average} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${imgpath}${poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class = "overview">
            <h3>Overview</h3>
            ${overview}
            </div>
        `;
        main.appendChild(movieEl);     
        });
    } 
    
    function getClassByRate(vote){
        if(vote >= 8){
            return 'green';
        } else if(vote >= 5){
            return 'orange';
        } else {
            return 'red';
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = search.value;
        if (searchTerm){
            getMovies(searchurl + searchTerm);
            search.value = '';
        }
    });