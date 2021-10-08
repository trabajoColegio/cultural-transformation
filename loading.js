const d = document

export default function loading(selector, selectorVideo) {
  const $btn = d.querySelector(".activate-sound-div"),
  $soundImg = d.querySelector(".activate-sound-div img"),
  $song = d.querySelector(".song")
  $btn.addEventListener("mouseover", e => {
    $soundImg.classList.add("activate-sound-div-img-hover")
  })
  $btn.addEventListener("mouseout", e => {
    $soundImg.classList.remove("activate-sound-div-img-hover")
  })
  $btn.addEventListener('click', e => {
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
  });
  $btn.addEventListener("click", e => $song.play())
}
