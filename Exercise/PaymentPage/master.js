
// timer

let minute = 10
let seconds = 59

setInterval(timer,1000)

function timer(){
    if(seconds>0){
        seconds--
    }else if(seconds==0){
        minute--
        seconds = 59
    }
    if(seconds<10){
        document.getElementsByClassName('time')[0].innerHTML=minute +':0'+seconds
    }else{
        document.getElementsByClassName('time')[0].innerHTML=minute +':'+ seconds
    }
    if(minute==0 && seconds==0){
        alert('Time out!')
        window.location.href='https://arashkh.com'
    }
}


// cardNum

document.getElementById('cardnum').addEventListener('keyup',writeCardNum)

let card = document.getElementById('card')

function writeCardNum(){
    let numslots = document.querySelectorAll('#cardnumber>span')
    let temp = String(document.getElementById('cardnum').value)
    if(temp.length<=4){
        numslots[0].innerHTML=temp.substring(0,temp.length)
        numslots[1].innerHTML=null
    }else if(temp.length<=8 && temp.length>4){
        numslots[1].innerHTML=temp.substring(4,temp.length)
        numslots[2].innerHTML=null
    }else if(temp.length<=12 && temp.length>8){
        numslots[2].innerHTML=temp.substring(8,temp.length)
        numslots[3].innerHTML=null
    }else if(temp.length<=16 && temp.length>12){
        numslots[3].innerHTML=temp.substring(12,temp.length)

    }

    if(numslots[0].innerHTML=='6104'){
        card.style.backgroundImage='url(asset/cards/CARDmellat.webp)'
    }else if(numslots[0].innerHTML=='6037'){
        card.style.backgroundImage='url(asset/cards/CARDmelli.webp)'
    }else if(numslots[0].innerHTML=='5892'){
        card.style.backgroundImage='url(asset/cards/CARDsepah.webp)'
    }else{
        card.style.backgroundImage='none'
    }
    if(temp.length==16){
        document.getElementById('cvv2').focus()
    }
}

//cardCVV2

document.getElementById('cvv2').addEventListener('keyup',writeCVV2)

function writeCVV2(){
    document.querySelectorAll('div#cvv2section>span')[0].innerHTML = document.getElementById('cvv2').value

    if(document.querySelectorAll('div#cvv2section>span')[0].innerHTML.length == 4){
        document.getElementById('exp2').focus()
    }
}

// cardEXP

document.getElementById('exp').addEventListener('keyup',writeEXP)
document.getElementById('exp2').addEventListener('keyup',writeEXP)

function writeEXP(){
    let exp1 = document.getElementById('exp').value
    let exp2 = document.getElementById('exp2').value

    let temp$ = document.querySelectorAll('#expsection>span')
    temp$[0].innerHTML = exp1
    temp$[2].innerHTML = exp2

    if((temp$[2].innerHTML.length) == 2){
        document.getElementById('exp').focus()
    }
    if((temp$[0].innerHTML.length) == 2){
        document.getElementById('scrCode').focus()
    }
}



// Random security code

let code$ = ''

for(i=0;i<6;i++){
    code$ = code$ + parseInt(Math.random()*10)
}
document.getElementById('randomNumb').innerHTML=code$

document.getElementById('scrCode').addEventListener('keyup',(event)=>{
    if(String(event.target.value)== document.getElementById('randomNumb').innerHTML){
        event.target.style.backgroundColor='rgba(171, 255, 36, 0.479)'
        document.getElementById('pass').focus()
    }else{
        event.target.style.backgroundColor='white'
    }
})



