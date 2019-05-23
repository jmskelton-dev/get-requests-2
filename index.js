let breed = "";
let message = [];
let HTML = "";

function getDogImage() {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`, {
    })
    .then(response => response.json())
    .then(responseJson => 
      imageSrc(responseJson))
    .catch(error => alert('This breed is not available.'));
}

function imageSrc(responseJson){
  message = responseJson.message;
  displayResults();
}

function displayResults() {
  $('.results-img').replaceWith(`<img src="${message}" class="results-img">`);
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    breed = $(":input").val();
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});