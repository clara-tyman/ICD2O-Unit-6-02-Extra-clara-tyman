// Copyright (c) 2024 All rights reserved
//
// Created by: Clara
// Created on: April 2024
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-02-Extra-clara-tyman/sw.js", {
    scope: "/ICD2O-Unit-6-02-Extra-clara-tyman/",
  })
}

/**
 * This function updates the cookie count.
 */
function populateStorage() {
  localStorage.setItem("userAge", document.getElementById("userAge").value);
}

function Save() {
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
