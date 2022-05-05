// Created by: Katie
// Created on: May 2022
// This file contains the JS functions for index.html

//this function will check which movies the user can see alone based on their age
function movieAgeClicked() {
  //input, collects user's age and assigns constants of movie ages
  let userAge = document.getElementById('user-age').value
  const PG13MOVIE = 13;
  const RMOVIE = 18;
  const GMOVIE = 10;
  //calculation, checks the user's age in relation to the constants
  if (userAge >= RMOVIE) {
    document.getElementById('available-movies').innerHTML = 'You can see R rated movies alone.';
  }
  else if (userAge >= PG13MOVIE) {
    document.getElementById('available-movies').innerHTML = 'You can see PG-13 rated movies alone.';
  }
  else if (userAge >= GMOVIE) {
    document.getElementById('available-movies').innerHTML = 'You can see G rated movies alone';
  }
  else {
    document.getElementById('available-movies').innerHTML = 'You cannot see any movies alone.'
  }
}