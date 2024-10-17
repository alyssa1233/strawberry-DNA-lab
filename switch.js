//connects to html element
const img = document.querySelector("#image")
const backgroundImg = document.querySelector("#bgImg")
const popUp = document.querySelector("#popUp")
const inst = document.querySelector("#instructions")
const popBtn = document.querySelector("#popBtn")
const root = document.querySelector(":root")
let source = [{
    src: "assets/sbry2.png",
    bgsrc: "assets/background1.png",
    x: 45,
    y: 53,
    width: "35%",
    description:[
        {
            words:"Welcome to the lab! All of the materials needed are shown here.",
            x: 70,
            y: 70
        },{
            words:"This is the salt that we will be using in our lab, which is non-iodized salt. It will be used to form our DNA extraction buffer.",
            x: 1200,
            y: 370
        },{
            words:"Non-iodized salt is essentially pure sodium chloride (NaCl), which helps in breaking down cell membranes and proteins, allowing the DNA to precipitate. Iodized salt, however, contains iodine, which might interact with the DNA in unintended ways.",
            x: 1200,
            y: 320
        },{
            words:"The dish soap and water will also be used to form our DNA extraction buffer.",
            x: 70,
            y: 130
        },{
            words:"Isopropyl alcohol is used to precipitate the DNA. Ethanol is also a good substitute, but isopropyl alcohol is often more effective. DNA doesn't desolve as easily in Isopropyl alcohol, so it precipitates faster even at low concentrations.",
            x: 350,
            y: 20
        },{
            words:"It is also toxic; contact with eyes or skin may have severe consequences.",
            x: 350,
            y: 40
        }
    ]
},{
    src: "assets/spoon.png",
    bgsrc: "assets/background2.png",
    x: 67,
    y: 20,
    angle: -35,
    width: "13.5%",
    rotation: 45,
    description:[
        {
            words:"hi",
            x: 40,
            y: 30
        }
    ]
},{
    src: "assets/arrow2.png",
    bgsrc: "assets/animation3.png",
    bgtop: "-100px",
    x: 90,
    y: 85,
    width: "10%",
    description:[
    ]
}]
let count = -1 //sets the index of the array
let c = 0 //keeping count of the popUp
// loads the images before running to prevent it from loading while running
preload()
function preload(){
    for(let s of source){
        let l = document.createElement("link") //creates an html link element for the image
        l.rel = "preload" //how the image link is applied to the code. relationship betweeen link and code.
        l.as = "image" //the format in which the link info is being brought in
        l.href = s.src //gives the link element the actual link
        document.head.appendChild(l) //adds the link element to the head element at the bottom
        let lbg = document.createElement("link") //repeat for background images
        lbg.rel = "preload" // how the background link in applied to the code. relationship between link and code.
        lbg.as = "image" // the format in which the link info is being brought in 
        lbg.href = s.bgsrc
        document.head.appendChild(lbg)
    }
}
/*
event listener 
window is the item that you are listening to, 
onload is what you are listening for, 
switchimg is the action that happens when the event is triggered
*/
window.onload = switchImg 
img.onclick = switchImg
//img.addEventListener("click",switchImg)
function switchImg(){ // this function switches the images in the array
    count++ //keeps track of which scene in our big array 
    c = 0 //keeps track of the popup array inside the big array
    popUp.style.display = "block" //setting the display value for the popup. shows how the image integrates with other elements. block is usually the default
    let item = source[count%source.length] //makes sure the array goes in a loop. % devides array length by count and gives the remainder.

    backgroundImg.src = item.bgsrc //sets the source of the background image
    if(item.hasOwnProperty("bgtop")){ //shifting the background upward if there is the bgtop attribute
        backgroundImg.style.top = item.bgtop
    } else {
        backgroundImg.style.top = 0
    }
    if(item.hasOwnProperty("angle")){ //changes the angle if there is the rotation attribute
        root.style.setProperty("--angle", ` ${item.angle}deg`) //changes the css angle variable
    } else {
        //img.style.transform = `rotate(0deg) ${img.style.transform}`
        root.style.setProperty("--angle", `0deg`)
    }
    if (item.hasOwnProperty("src")){  //it makes it so that it is possible to have a background without an object/image. it closes the loop.
        img.src = item.src
        img.style.left = item.x+"%"
        img.style.top = item.y +"%"
        img.style.width = item.width
        img.style.display = "block"
    }  else {
        img.style.display = "none" //display none means that it is not on the page anymore
    }
    //document.body.style.backgroungImage = `url(${filepath})` )
    instructions() // calls the instructions function
}
popBtn.onclick = instructions //event listener. runs instructions after you click on the popup.
function instructions(){
    console.log("intructions") //used for debugging, not essential
    let item = source[count%source.length]  //it loops the array
    if (c==item.description.length) { //it makes it so that the array doesnt loop after the last one
        popUp.style.display = "none"  //doesnt show the popup after the last one
    } else {
        console.log(item.description)
        popUp.style.left = item.description[c].x //controlling coordinates of the popup
        popUp.style.top = item.description[c].y
        inst.innerHTML = item.description[c].words
    }
    c++  
}

