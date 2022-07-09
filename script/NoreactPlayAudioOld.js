function play_keyboard(pressed){
    const key = document.querySelector(`.playkey_button_container[data-keyboard_id="${pressed.keyCode}"]`);
    if(key) play_key(key);
}
function play_key(key){
    const audio = document.querySelector(`audio[data-key="${key.dataset.keyboard_id}"]`);
    if(audio){
        key.classList.add("now_playing");
        audio.currentTime = 0;
        audio.play();
        setTimeout(removeTransition, 100,key);
    }
}
function removeTransition(key) {
    // if (e.propertyName !== "transform") return;
    key.classList.remove("now_playing");
  }

window.addEventListener("keydown", play_keyboard);