var html = `<div id="MasonsHubStuff">
  <style>@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap'); 
#MasonsHub {
    margin-top: 25px;
    font-size: 11pt;
    border: 3px solid black;
   border-radius: 20px;
   font-family: 'Roboto', Sans-serif;
  position: absolute;
  z-index:99999;
   width: 500px;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
#welcome {
  text-align: center;
  font-size:30px;
  font-family: 'Roboto', Sans-serif;
}
#scriptHBE{
  margin-left: 20px;
  margin-bottom: 10px;
  margin-right 20px;
  font-family: 'Roboto', Sans-serif;
}
#note {
  margin-left: 20px;
  margin-right: 20px;
  font-family: 'Roboto', Sans-serif;
}
.ScriptHub {
  font-family: 'Roboto', Sans-serif;
  transition: 1s;
}
.ScriptHub:hover {
  border: solid 1px black;
}
#close {
  margin-left:80px;
  margin-bottom:20px;
}
#MasonsHub2 {
  margin-left: 20px;
}</style>
<div id="MasonsHub">
  <h3 id="welcome"> Welcome to Mason's Script hub!</h3><br><p id="note">Please keep in mind that the Idle Breakout Cheat can only be used on coolmathgames.com, or else it wont work.</p><br>
  <div id="scriptHBE">
    <button class="ScriptHub" onclick="if(document.body.contentEditable){document.body.contentEditable = false;}else{docuent.body.contentEditable = true;}">Edit Page</button>
    <button class="ScriptHub" onclick="if(window.location == 'https://deflyio.coolmathgames.com/game'){alert('Thanks for using Mason%5Cu2019s Defly.io name changer! Please close defly if its open.');localStorage.setItem('username', prompt('What username do you want?'));alert('Name Changed!')}else{window.location.href = 'https://deflyio.coolmathgames.com/game'}">Delfy.io Name Changer</button>
    <button class="ScriptHub" onclick="if(window.location == 'https://copterroyale.coolmathgames.com/game'){alert('Thanks for using Mason%5Cu2019s Copter Royale name changer! Please close copter royale if its open.');localStorage.setItem('username', prompt('What username do you want?'));alert('Name Changed!')}else{window.location.href = 'https://copterroyale.coolmathgames.com/game'}">Copter Royale Name Changer</button>
    <script>function idle(){var idle=document.createElement('script');
                           idle.src="https://mmccall0813.github.io/idleCheat.js";document.body.appendChild(idle)}
    function quiz(){
      var q=document.createElement("script");
      q.src="https://mmccall0813.github.io/quizlet.js";
      document.body.appendChild(q);
    }
    </script>
    <button class="ScriptHub" onclick="idle()">Idle Breakout Cheat</button>
    <button class="ScriptHub" onclick="quiz()">Snowlord7's Quizlet Cheat</button><br><button class="ScriptHub" onclick='(function()%7B(function() %7Bvar x %3D document.createElement("script")%3Bx.src %3D "https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FSnowLord7%2Fdevconsole%40master%2Fmain.js"%3Bx.onload %3D alert("Loaded Developer Console!")%3Bdocument.head.appendChild(x)%3B%7D)()%7D)()'>Snowlord7's Dev Console</button>
    <button class="ScriptHub">Fake Error</button>
    <button class="ScriptHub">Dino Game</button><br> <button onclick="document.write(`<style>iframe{width:100%;height:100%;position:absolute;top:0px;left:0px;}</style><iframe src='https://copterroyale.coolmathgames.com'></iframe>`)" class="ScriptHub">Fullscreen Copter Royale (Must be on coolmath for it to work)</button><br><button class="ScriptHub" onclick="remove_ads_from_free_game_pages();removePrerollAndDisplayGame()">Coolmath Adblock (remove ads)</button>
  </div>
  <br><br><div id="MasonsHub2">More Coming Soon!</div><br><button id="close" onclick="if(confirm('Are you sure you want to close Mason&rsquo;s hub?') == true){document.body.removeChild(document.getElementById('MasonsHubStuff'))}">Close</button>
  </div></div>`
  var elem = document.createElement("div");
  elem.src = html;
  document.body.appendChild(elem)
  
