"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {

        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {

            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        }

    },
    writeYourGenres: function() {

        for (let i = 1; i < 2; i++) {

            let yourGenres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();

            if (i == '' || i == null) {
                console.log('Uncorrect data');
                i--;
            } else {
                personalMovieDB.genres = yourGenres.split(', ');
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });

    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {

            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;

        } else {
            personalMovieDB.privat = true;
        }
    }
};