window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var mins = 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendMins = document.getElementById("mins")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');     
    var change = document.getElementById('time')
    const secHand = document.getElementById('second')
    const minHand = document.getElementById('min')
    var Interval ;

    setInterval(setClock, 1000)

    function setClock() {
      const currentDate = new Date()
      const secRatio = currentDate.getSeconds() / 60
      const minRatio = (secRatio + currentDate.getMinutes()) / 60
      setRotation(secHand, secRatio)
      setRotation(minHand, minRatio)
    }

    function setRotation(element, rotationRatio){
      element.style.setProperty('--rotation', rotationRatio * 360)
    }

    buttonStart.onclick = function() { 
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
      change.style.color = 'red'
      setClock()
    }
    
    buttonStop.onclick = function() {
       clearInterval(Interval);
       change.style.color = 'rgb(152, 196, 255)'
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
          mins = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
          appendMins.innerHTML = mins;
    }
    
     
    
    function startTimer () {
      tens++

      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }

      if (seconds > 59) {
        console.log("mins");
        mins++;
        appendMins.innerHTML = "0" + mins;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
      }

      if (mins > 9) {
        appendMins.innerHTML = mins;
      }
    
    }
    
  
  }
  