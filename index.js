let audio = new Audio("music/HIMYM.mp3");
audio.volume = 0.1;

document.body.addEventListener("mousemove", function () {
  audio.play();
});
