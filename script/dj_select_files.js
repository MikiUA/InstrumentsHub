MountInterface();
MountForm();
function MountInterface(){
    const parent = document.getElementById(`title_menu`);

   let text=`
   <div onclick="DisplayForm()">Change Audio files</div>
   `;
   let child=document.createElement("div");
   parent.appendChild(child);
    child.outerHTML=text;

}
function MountForm(){
    let text=    
    `<form id="input_audio_form" class="input_audio_form">
    Here you can mount your own audiofiles to existing buttons
    <br><label>*Choose a file: <input name="myFile" type="file"/></label>
    <br><label>*Choose a keyboard button for your file: <input type="text"/></label>
    <br><label>Choose a hint name for your file: <input type="text"/></label>
    <br><input type="button" onclick="SubmitMusic(this)" value="Submit">
    </form> `;

    let child=document.createElement("form");
    document.body.appendChild(child);
    child.outerHTML=text;
}
function DisplayForm(form){
    if(!form) form=document.getElementById('input_audio_form');
    try{    form.classList.toggle("menu_show");}
    catch(e){console.log("a bug",e);}
}
function CheckSubmitForm(file,type,availible){
    if(!file || file==null){
        return 'no file';
    }
    if(type){
        if(type=='file') {file=file.toString().split('.').pop();}
        let i=0;
        while(availible[i]){
            if(file==availible[i]) return true;
            i++;
        }
    }
    return false;
}
function SubmitMusic(button){
    let form=button.parentNode;
    let file=form.childNodes[2].lastChild.value,
    keyboard_shortcut=form.childNodes[5].lastChild.value,
    note_name=form.childNodes[8].lastChild.value;

    let availible_buttons=['q','w','e','r','a','s','d','f','z','x','c','v'],
        availible_format=['wav','mp3'];
    let chkfile=CheckSubmitForm(file,'file',availible_format),
        chkkeyb=CheckSubmitForm(keyboard_shortcut,'key',availible_buttons);

    console.log(file,chkfile);
    console.log(keyboard_shortcut,chkkeyb);
    if(note_name||note_name=='')  note_name="Undefined";
    // note_name=file.toString().split('\\').pop();
        console.log(note_name);
    
    
        if(chkfile===true && chkkeyb===true){
        console.log('check passed',chkfile,chkkeyb);
        try{
            let newkey=document.querySelector(`.playkey_button_container[data-keyboard_str="${keyboard_shortcut}"]`);
            let newaudio=document.querySelector(`audio[data-note="${newkey.dataset.note}"]`);
            console.log(newkey,newaudio);
            newaudio.src=file;
            DisplayForm(form);
        }
        catch(e){
            console.log(e);
        }

    }

}