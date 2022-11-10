// JavaScript Document


// TOBEY //

// Variabel aanmaken
var tobeyButton = document.querySelector('li:nth-of-type(1) button');
var spinWeb = document.querySelector('li:nth-of-type(1) > img');
var tobeyInfoBlok = document.querySelector('li:nth-of-type(1) section');

// EventListener aanmaken
tobeyButton.addEventListener('click', showTobeyDetails)

// Functie maken
function showTobeyDetails(){
    spinWeb.classList.toggle('webSchiet');
    
    setTimeout(() => {
        tobeyInfoBlok.classList.toggle('tobeyDetailsShow');
      }, "800")
}




// GARFIELD //

// Variabel aanmaken
var garfieldButton = document.querySelector('li:nth-of-type(2) button');
var garfieldInfoBlok = document.querySelector('li:nth-of-type(2) section')

// EventListener aanmaken
garfieldButton.addEventListener('click', showGarfieldDetails)

// Functie maken
function showGarfieldDetails(){
    garfieldButton.classList.toggle('drop');
    garfieldInfoBlok.classList.toggle('GarfieldDetailsShow')
}




// TOM HOLLAND //

// Variabel aanmaken
var tomButton = document.querySelector('li:nth-of-type(3) button');
var holoGram = document.querySelector('li:nth-of-type(3) section');

// EventListener aanmaken
tomButton.addEventListener('click', showTomDetails)

// Functie maken
function showTomDetails(){
    holoGram.classList.toggle('holoGramKlaptUit');
}