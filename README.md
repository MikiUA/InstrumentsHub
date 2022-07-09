# InstrumentsHub version 0.1

<b>Features yet:</b>
- Playing the piano;
- Playing DJ themed keyboard.
- these work both with keyboard (pc) and onclick (mainly for mobile)

<b> Implementation:</b><br>
Why did I even begin this project - because single-page versions i have found on the network feeled like a lot of wasted work on every detail, key and script.
So what i am trying to make an easy to use approach, where all behind the scenes work will be done by scripts, and a developer of new instrument would only need to make their styling.
- Different instrument pages have same class names, which are referenced in different css files.
- All instrument html files do have the same scripts included (aside from unique ones, if needed), for example:
- Page title (with all the menus) for every page is handled with single script;
- Another lightweight button display script helps saving time and effort by assigning same onclick event to all buttons and adding hint objects, values for which should be printed in button dataset anyway.
- PlayAudio script is used to handle play events, is needed even in simplest versions, nothing interesting here
- Also added a unique script to DJ keyboard, that allows user to choose their own sound preset (sometimes bugged),script mounts a setting directly to the title dropdown menu
- Sizing of different devices is taken into consideration, though more testing is required.

<b> The most clear example</b> of developer work economy is the following line:<br>
`<div onclick="playkey(this)" data-key="65" class="key" data-note="C"> <span class="keyboard hints">A</span> <span class="note hints">C</span> </div>`
 <br> transformed into just:<br>
` <div class="playkey_button_container" data-keyboard_str="A" data-note="C">   </div>`<br>
It took 471 symbols of code to transform dev work from 150 to 75 symbols. 
<br><br>
This is only the beginning of the project though.
