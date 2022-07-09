
// let cn = document.getElementsByClassName('playkey_button_container');
// console.log(cn);
// // cn.forEach(element => {
//     for(element in cn){
//         console.log(element);
// element.innerHTML = DisplayPlaykey(element);
// };
// console.log(list);
// console.log(list[0].dataset.keyboard_str);
function DisplayPlaykey(key){
    // <div class="playkey_button_container" data-keyboard_id="186" data-keyboard_str=";" data-note="E">
    // console.log(key.dataset);
    key.setAttribute("onclick","play_key(this)");
    let ret = 
    "<span class='hints h_keyboard'>"+key.dataset.keyboard_str+"</span>"+
    "<span class='hints h_note'>"+key.dataset.note+"</span>";
return ret;
}




let list = document.getElementsByClassName("playkey_button_container"),i=0;
while(list[i]) {
    // console.log(list[i]);
    list[i].innerHTML=DisplayPlaykey(list[i]);
    list[i].dataset.keyboard_str=list[i].dataset.keyboard_str.toLowerCase();
    i++;
}