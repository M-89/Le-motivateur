"use strict";

const h1 = document.querySelector("h1");

const blockquote = document.querySelector("#paragraph-quote");

const figcaption = document.querySelector("figcaption");

const englishCheckbox = document.querySelector("#anglais");

const frenchCheckbox = document.querySelector("#français");

// On crée un tableau avec les citations françaises, un autre avec les anglaises

const englishQuotes = quotes.filter(quote => quote.language == "English");

const frenchQuotes = quotes.filter(quote => quote.language == "Français");

let randomNumber;

let randomQuote;

// Faire un effet de flou sur la citation

function blurQuote(blockquote) {
  blockquote.classList.add("blur");
  setTimeout(() => {
    blockquote.classList.remove("blur");
  }, 300);
}

// Génère un nombre aléatoire entre un min et un max

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// Faire apparaître une citation au hasard, en anglais ou en français

function displayQuote(event) {
  if (event.keyCode == 32 || event.type == "click") {
    // Si on appuie sur espace on exécute ce code

    event.preventDefault();

    // On stocke dans randomQuote une citation en fonction des cases cochées
    if (englishCheckbox.checked && !frenchCheckbox.checked) {
      // Génére un nombre aléatoire entre le premier et le dernier élément du tableau des citations anglaises

      randomNumber = randomRange(0, englishQuotes.length - 1);

      // Utilise ce nombre aléatoire comme l'index du tableau anglais, stocke citation aléatoire dans randomQuote

      randomQuote = englishQuotes[randomNumber];
    } else if (!englishCheckbox.checked && frenchCheckbox.checked) {
      // Pareil pour retourner citation française aléatoire

      randomNumber = randomRange(0, frenchQuotes.length - 1);

      randomQuote = frenchQuotes[randomNumber];
    } else if (englishCheckbox.checked && frenchCheckbox.checked) {
      // On retourne une citation du tableau original si les 2 cases sont cochées

      randomNumber = randomRange(0, quotes.length - 1);

      randomQuote = quotes[randomNumber];
    } else {
      // Si aucune case n'est cochée, on stoppe la fonction

      return;
    }

    // On insère la citation aléatoire et le nom de l'auteur dans le HTML
    blockquote.innerHTML = `<em>"${randomQuote.quote}"</em>`;

    figcaption.innerHTML = `${randomQuote.author}`;

    // Lance la fonction pour faire l'effet de flou
    blurQuote(blockquote);
  }
}

document.addEventListener("keydown", displayQuote);

h1.addEventListener("click", displayQuote);
