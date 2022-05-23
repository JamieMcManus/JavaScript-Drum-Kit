document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
   
    if (name=="a"||name=="s"||name=="d"||name=="f"||name=="g"||name=="h"||name=="j"||
        name=="k"||name=="l") {
        console.log(`Combination of ctrlKey + ${name} \n Key code Value: ${code}`);
        document.getElementById(name).classList.add('playing');
        debugger
        var track = document.getElementById(name).dataset.key
        

        var audio = document.createElement('audio');
        audio.src = "./sounds/"+track+".wav";
        document.body.appendChild(audio);
        audio.play();
        
        audio.onended = function () {
          this.parentNode.removeChild(this);
        }
        
    }
  }, false);

  // Add event listener on keyup
  document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
   
    if (name=="a"||name=="s"||name=="d"||name=="f"||name=="g"||name=="h"||name=="j"||
        name=="k"||name=="l") {

        document.getElementById(name).classList.remove('playing');
    }
  }, false);