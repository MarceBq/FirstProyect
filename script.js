//Usar el keyCode
//Pasar los data-key de string a num para poder validar
 
document.addEventListener('keydown', (e) => { 
    
    const keyCode =  e.keyCode; //num
     
    //Capturo el audio con el data-key de keyCode para que pueda sonar el audio
    const getAudio = document.querySelector(`audio[data-key="${keyCode}"]`)
 
    //Capturo el div con que tenga data-key con el keyCode
    const nodoList = document.querySelector(`div[data-key="${keyCode}"]`)
 
    getAudio.play()
    nodoList.classList.add('playing');

}) 

document.addEventListener('keyup', (e) =>{

    const nodoListUp = document.querySelector(`div[data-key="${e.keyCode}"]`)

    nodoListUp.classList.remove('playing');

})



 
 