// TypeWriter

function typeWriter(){
    if(characterIndex <texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex)
        characterIndex++
        setTimeout(typeWriter, speed)
    }
    else {
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length
        characterIndex = 0
        setTimeout(typeWriter, 500)
    }
}

const texts = [
    "Desenvolvedor",
    "Engenheiro de Software"
]

let textIndex = 0;
let characterIndex = 0;
let speed = 100;
const textElements = document.querySelector(".typewriter-text")

window.onload = typeWriter
