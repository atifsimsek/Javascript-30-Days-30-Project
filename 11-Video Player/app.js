const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.player__button');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

video.addEventListener("click", toggleVideo);
video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)
video.addEventListener("timeupdate", progressUpdate)


toggle.addEventListener("click", toggleVideo)
skipButtons.forEach(button => button.addEventListener("click", skip))
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));


let mausedown = false;
progress.addEventListener("click", scrub)
progress.addEventListener("mousemove", () => { mausedown && scrub(e) })
progress.addEventListener("mousedown", () => { mausedown = true; })
progress.addEventListener("mousedown", () => { mauseup = false; })





function toggleVideo() {

    const method = video.paused ? "play" : "pause";

    video[method]();

}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';

    toggle.innerHTML = icon;

}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)


}

function handleRangeUpdate() {

    video[this.name] = this.value;
    console.log(this.value)

}

function progressUpdate() {
    const time = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${time}%`;
}

function scrub(e) {

    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;

}






