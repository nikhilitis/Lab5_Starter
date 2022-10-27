// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // function to display horn image and set audio
  const hornSelect = document.getElementById("horn-select");
  hornSelect.addEventListener('change', function() {
    // display correct image
    const image = document.querySelector("img");
    image.src = "assets/images/" + `${hornSelect.value}` + ".svg";

    // set audio
    const audio = document.querySelector("audio");
    audio.src = "assets/audio/" + `${hornSelect.value}` + ".mp3";
    //audio.play();
  });

  // change the volume icon
  const volumeBar = document.getElementById("volume");
  volumeBar.addEventListener('change', function(){
    let volumeImage = document.querySelectorAll("img")[1];

    if (volumeBar.value==0){
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (volumeBar.value<33){
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (volumeBar.value<67){
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
    const audio = document.querySelector("audio");
    audio.volume = volumeBar.value/100;

  });

  // connect the button to the audio
  const button = document.querySelector("button");

  button.onclick = function(){
    const audio = document.querySelector("audio");
    audio.play();
    if (hornSelect.value == "party-horn"){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  };



}