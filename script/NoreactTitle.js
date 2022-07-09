
function noreact_title(instrument,hubname) {
    
    return ( 
      ` 
      <div class='mih_title'>
        <a class='title_redir' href='./index.html'>MIH</a>
        <div class='title_page_name'>`+  instrument+`<span class='phub'>`+hubname+`</span></div>
        <div class='title_menu_container'  onclick="DisplayTitleMenu()">
          <div class="menu_icon">I</div>
          <div id="title_menu" class="title_menu">
            <div> <a href ="index.html"> Choose different instrument</a></div>
            <div onclick="hide_h_keyboard(this)">Hide keyboard hints</div>
            <div onclick="hide_h_note(this)">Hide note hints</div>
          </div>
        </div>
      </div>
      `
      
    );
  }

function DisplayTitleMenu(){

  document.getElementById("title_menu").classList.toggle("menu_show");

}
  const title=document.getElementById('title');
  // console.log(title);
  if(title){
    if( title.dataset && title.dataset.instrument && title.dataset.hubname)
    {    
      // console.log(title.dataset);
      title.innerHTML=noreact_title(title.dataset.instrument,title.dataset.hubname);
    }  else {
      title.innerHTML=noreact_title ('','');
    }
  }

  function hide_h_keyboard(button){
    if(button.innerHTML=="Hide keyboard hints")button.innerHTML="Show keyboard hints";
    else button.innerHTML="Hide keyboard hints";
    
    const hints = document.querySelectorAll(".hints.h_keyboard");
    hints.forEach(
      function(node) {
        node.classList.toggle("transparent");
      }
    );
  }  
  function hide_h_note(button){    
  if(button.innerHTML=="Hide note hints")button.innerHTML="Show note hints";
  else button.innerHTML="Hide note hints";

  const hints = document.querySelectorAll(".hints.h_note"); 
    hints.forEach(function(node){
      node.classList.toggle("transparent");
    });
  }