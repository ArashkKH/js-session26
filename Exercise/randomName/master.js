let $mode = 3
let button$ = document.getElementsByClassName('copyBtn')[0]


for(i=1;i<((document.querySelectorAll('.mode>div').length));i++){

    let x = document.querySelectorAll('.mode>div')
    x[i].setAttribute('data-mod',x[i].innerHTML.substring(1,3))
    console.log(x[i])
    x[i].addEventListener('click',(event)=>{
        $mode = event.target.getAttribute("data-mod")
        document.querySelector('#indicate>div').style.left=(($mode-3)*30)+'%'
        nameGenerate()
    })
}


let mute = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']


let vowel = ['a','e','i','o','u']



nameGenerate()

document.getElementById('name').addEventListener('click',nameGenerate)

function nameGenerate(){
    let genName =''

    for( i=0 ; i<($mode) ; i++ ){

        if(i%2 == 1){
            genName = genName + vowel[parseInt((Math.random())*((vowel.length-1)+1))]
        }
        if(i%2 == 0){
            genName = genName + mute[parseInt((Math.random())*((mute.length-1)+1))]
        }
        button$.innerHTML='Copy to clipBoard'
        button$.style.background='rgb(93, 182, 255)'
    }
    document.getElementById('name').innerHTML=genName
    document.getElementsByTagName('main')[0].style.background=' linear-gradient('+(Math.random())*360+'deg, rgb('+(Math.random())*256+','+(Math.random())*256+','+(Math.random())*256+'),rgb('+(Math.random())*256+','+(Math.random())*256+','+(Math.random())*256+'))'
}


document.getElementsByClassName('copyBtn')[0].addEventListener("click",copyName)

function copyName(){
    let temp = document.getElementById('name').innerHTML
    navigator.clipboard.writeText(temp)
    button$.style.background='rgb(39, 151, 39)'
    button$.innerHTML='Copied ✔'
}

