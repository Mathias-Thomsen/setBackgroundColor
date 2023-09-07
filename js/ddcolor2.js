console.log("Jeg er i ddColor2")

const colArray2 = [["red","#ff0000"], ["green","#00ff00"], ["yellow","#ffff00"], ["purple","#1f35a9"]]
const colorObjects = [{"name": "red", "id": "#ff0000"}, {"name": "green", "id": "#00ff00"}, {"name": "yellow", "id": "#ffff00"}, {"name": "purple", "id": "#1f35a9"} ]


const pbFillDropdown2 = document.getElementById("pbFillDropdown2")
const ddColors2 = document.getElementById("ddColor2")


function fillDropdown2(item) {
    const el = document.createElement("option")
    console.log(item)
    el.textContent = item[0]
    el.value = item[1]
    ddColors2.appendChild(el)

}

function fillDropdownObj(item) {
    //debugger til at debugge i webbrowseren.
    const el = document.createElement("option")
    el.textContent = item.name
    el.value = item.id
    ddColors2.appendChild(el)

}

function setBackgroundColor2(){
    const selindex = ddColors2.selectedIndex;
    const selectedOption = ddColors2.options[selindex];
    const color = selectedOption.value
    console.log(color)
    bdy.style.backgroundColor = color
}

function addColors2() {
    ddColors2.innerHTML = ""
    //colArray2.forEach(fillDropdown2)
    colorObjects.forEach(fillDropdownObj)
    console.log(document.all)
}

pbFillDropdown2.addEventListener('click',  addColors2)

ddColors2.addEventListener('change', setBackgroundColor2)
