var textVal=document.getElementById('read-txt')
 var generator=document.getElementById('call-generator')
 var writeContent=document.getElementById('to-captca-content')
 var value=document.getElementById('to-check-val')

 function generatorfun(){
    let text=''
    let character='ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'   
    for (let i = 0; i < 6; i++) {
       randomindex=Math.floor(Math.random()*character.length)
       text += character[randomindex] 
    }
  
 function updatefun(captchatext) {
    console.log(captchatext);
    writeContent.textContent=captchatext
 }
    updatefun(text)
 }

 generator.addEventListener('click',generatorfun)
 function valueCheck() {
    var textVal=document.getElementById('read-txt').value
    var write=document.getElementById('to-captca-content').textContent
        if (textVal===write) {
            var text=document.getElementById('result')
            text.textContent='Success'
            text.style.fontWeight='bold'
            text.style.color='green'
        }
      else {
        var text=document.getElementById('result')
        text.textContent='Wrong Captcha'
        text.style.fontWeight='bold'
        text.style.color='red'

    }
    
 }
value.addEventListener('click',valueCheck)
    