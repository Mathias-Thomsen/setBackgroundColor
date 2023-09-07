console.log("Jeg er i background, CRAZYYYY")

const inpColor = document.querySelector(".inpColor")
console.log(inpColor)

const pbSetColor = document.querySelector(".pbSetColor")
console.log(pbSetColor)

const inpColorValue = document.querySelector(".inpColorValue")
console.log(inpColorValue)

const inpColorPicker = document.getElementById("inpColorPicker")
console.log(inpColorPicker)

const pTags = document.getElementsByTagName('p')
console.log(pTags)

const pArray = Array.from(pTags)
console.log(pArray)


pbSetColor.textContent = "Tryk mig for set color";


const bdy = document.querySelector("body");
console.log(bdy);


function increaseFont(element) {
    let fontSize = element.style.fontSize;
    console.log("fsize=" +fontSize)
    element.style.fontSize = 20 + 'px'
    fontSize = element.style.fontSize
    console.log("fsize=" +fontSize)
}

pArray.forEach(increaseFont)

function setBackgroundColor() {
    const col = inpColor.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor
}

function useColorPicker() {
    const col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor
}


pbSetColor.addEventListener('click', setBackgroundColor)

document.addEventListener('keyup', setBackgroundColor)

inpColorPicker.addEventListener('input', useColorPicker)













