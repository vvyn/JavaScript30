window.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e){
    const keyNum = e.keyCode;

    //uses an attribute selector in `audio[data-key="${keyNum}"]`
    const getAudio = document.querySelector(`audio[data-key="${keyNum}"]`);

    if (!getAudio){ //stops function from running if key doesn't match & errors that result
        return;
    }

    const audioStr = getAudio.getAttribute("src");
    const audio = new Audio(audioStr);
    audio.currentTime = 0;//rewind to start when u hit it multiple times
    audio.play();


    const tile = document.querySelector(`div[data-key="${keyNum}"]`);
    tile.classList.add("playing");
    this.setTimeout(function() {
        tile.classList.remove("playing");
    }, 150)
}