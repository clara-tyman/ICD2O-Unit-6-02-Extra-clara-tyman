// Copyright (c) 2024 All rights reserved
//
// Created by: Clara
// Created on: April 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // variable, user input
  const userAge = parseInt(document.getElementById("user-age").value)

  if (userAge >= 17) {
    // output
    document.getElementById("movie-type").innerHTML = "You can see an R rated movie alone."
  } else if (userAge >= 13) {
    // output
    document.getElementById("movie-type").innerHTML = "You can see a PG-13 movie alone."
  } else if (userAge >= 5) {
    // output
    document.getElementById("movie-type").innerHTML = "You can see a G or PG movie alone."
  } else {
    // output
    document.getElementById("movie-type").innerHTML = "Uh. You're too young for most things."
  }
  // output
  document.getElementById("end-sentence").innerHTML = "Thanks for verifying your age!"
}