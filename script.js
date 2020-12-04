"use strict";

let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    }

}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};




function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {

        const yourGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = yourGenres;
    }
}

writeYourGenres();

function rememberMyFilms() {
    let i = 0;
    do {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');


        if (a != '' && b != '' && a.length < 50 && b.length < 50 && a != null && b != null) {

            personalMovieDB.movies[a] = b;
            console.log('Done!');
            i++;
        } else {
            console.log('error!');
            i--;
        }
    } while (i < 2);
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {

        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);