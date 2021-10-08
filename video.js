const d = document

export default function activateVideo(video, change, secondVideo, change2, thirdVideo, change3) {
  let first = false,
  second = false
  const $videoDiv = d.querySelector(".video-div"),
  $video = d.querySelector(".video-div video"),
  $videoBtn = d.querySelector(".introduction button"),
  $introduction = d.querySelector(".introduction"),
  $introVideo = d.querySelector(".intro-video"),
  $change = d.querySelector(change),
  $change2 = d.querySelector(change2),
  $change3 = d.querySelector(change3),
  $lastSong = d.querySelector(".lastSong"),
  $firstSong = d.querySelector(".song")

  $videoBtn.addEventListener("click", e => {
    $introduction.classList.add("disappear")
    $introVideo.classList.add("disappear")
    $firstSong.pause();
    setTimeout(() => {
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
       if (!second){
         $change2.classList.remove("none")
         setTimeout(() => {
        $change2.classList.remove("disappear")
       }, 500);
        second = true
      }
      else{
        $change3.classList.remove("none")
         setTimeout(() => {
        $change3.classList.remove("disappear")
       }, 500);
      }
    }
  })

  const $circle1 = d.querySelector(`${change} div`),
  $circle2 = d.querySelector(`${change2} div`),
  $circle3 = d.querySelector(`${change3} div`)

  console.log($circle2);

  $circle1.addEventListener("click", e => {
    $video.setAttribute("src", secondVideo)
    $change.classList.add("disappear")
    setTimeout(() => {
      $change.classList.add("none")
      $video.play()
    }, 1000);
  })
  $circle2.addEventListener("click", e => {
    $video.setAttribute("src", thirdVideo)
    $change2.classList.add("disappear")
    setTimeout(() => {
      $change2.classList.add("none")
      $video.play()
      $lastSong.play()
    }, 1000);
  })

  $circle3.addEventListener("click", e => {
    window.location.reload()
  })
}
