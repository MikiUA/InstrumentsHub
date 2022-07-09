function play_keyboard(pressed){
    const UpperKey=pressed.key.toUpperCase();
    let key = document.querySelector(`.playkey_button_container[data-keyboard_str="${pressed.key}"]`);
    if(key) play_key(key);
    else {
        key = document.querySelector(`.playkey_button_container[data-keyboard_str="${UpperKey}"]`);
        if (key) play_key(key);
    }
}
function play_key(key){
    const audio = document.querySelector(`audio[data-note="${key.dataset.note}"]`);
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