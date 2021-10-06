const d = document

export default function activateVideo(video, change, secondVideo, change2) {
  let first = false
  const $videoDiv = d.querySelector(".video-div"),
  $video = d.querySelector(".video-div video"),
  $videoBtn = d.querySelector(".introduction button"),
  $introduction = d.querySelector(".introduction"),
  $introVideo = d.querySelector(".intro-video"),
  $change = d.querySelector(change),
  $change2 = d.querySelector(change2)

  $videoBtn.addEventListener("click", e => {
    $introduction.classList.add("disappear")
    $introVideo.classList.add("disappear")
    setTimeout(() => {
      d.querySelector("audio").pause();
      $introduction.classList.add("none")
      $introVideo.classList.add("none")
      $videoDiv.classList.remove("none")
      $videoDiv.classList.remove("disappear")
      $video.setAttribute("src", video)
      $video.play()
    }, 500);
  })

  $video.addEventListener("ended", e => {
    if (!first){
      $change.classList.remove("none")
      setTimeout(() => {
        $change.classList.remove("disappear")
      }, 500);
      first = true
    }
    else{
      $change2.classList.remove("none")
      setTimeout(() => {
        $change2.classList.remove("disappear")
      }, 500);
    }
  })

  const $circle1 = d.querySelector(`${change} div`)

  $circle1.addEventListener("click", e => {
    $video.setAttribute("src", secondVideo)
    $change.classList.add("disappear")
    setTimeout(() => {
      $change.classList.add("none")
      $video.play()
    }, 1000);
  })
}