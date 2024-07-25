var style = document.querySelector(':root')
function light(){
    style.style.setProperty('--ant','url("light.png")') 
    style.style.setProperty('--text','black')

}
function dark(){
    style.style.setProperty('--ant','url("dark.jpg")') 
    style.style.setProperty('--text','white')

}

let input = document.querySelector('input')

let ul = document.querySelector('ul')

function send (){
    let li =document.createElement('li')

    li.innerHTML = input.value;
    ul.appendChild(li)
    input.value = ''
    
}