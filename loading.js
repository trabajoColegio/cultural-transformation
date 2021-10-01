const d = document

export default function loading(selector, selectorVideo) {
  d.addEventListener('click', musicPlay);
function musicPlay() {
    d.querySelector("audio").play();
    d.removeEventListener('click', musicPlay);

  const $loadingScreen = d.querySelector(selector),
  $introVideo = d.querySelector(selectorVideo),
  $introduction = d.querySelector(".introduction")

  setTimeout(() => {
    $loadingScreen.classList.add("disappear")
    $introVideo.pause();
    $introVideo.currentTime = 0;
    $introVideo.play();
    setTimeout(() => {
      $loadingScreen.classList.add("none")
      $introduction.classList.remove("disappear")
    }, 500);
  }, 1000);
}
}