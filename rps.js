console.log("rps loaded")

var player = document.getElementById('Player');
var cpu = document.getElementById("CPU");
var result = document.getElementById("Result");
var shots = document.getElementById("Shots");
var bg = document.getElementById("Bg");

var gun = [0,0,0,0,0,0]
var gunLength = gun.length -1

var bang = new Audio('bang.mp3');


var click = new Audio('click.mp3');

var yay = new Audio('yay.mp3')

var horn = new Audio('horn.mp3')


function loadGun(){
 gun[getRandomInt(gunLength)] = 1;
}

loadGun();

function fireGun(person){
    //disable input during this
    player.disabled = true;
    console.log(person + "Gunshot")
    console.log(gunLength)

    if (person == "Player"){
        alert("P̷͕̍.̴̳̂ù̴̫.̶͇͛L̶̮͋.̷̣̀l̴͉̕.̵̺́ ̵̧͑T̴̩̉.̶̧̊h̴͙̽.̶͓̃É̵͔.̴̧̓ ̷͇̓T̴̻̿.̵̯̔r̶͔͌.̷͈̎I̴̠͊.̸̨̔g̴͔͆.̴̲̒G̴̀͜.̶͈̋e̷̡̛.̷͚͐R̷̬̂.̸̜̀");
    }
    if (gun[gun.length-1] == 1){
        console.log("BANG")
        //play gunshot sound
        //person dies
        result.innerHTML = `<div>GAME OVER. ${person} has died a gruesome death.</div>`
        bang.play()
        bg.style.backgroundColor = "red";
        shots.innerHTML+= "<div class='shot'>☠️</div>"
        if (person == "CPU"){
            yay.play()
        } else {
            horn.play()
        }
    } else {
        console.log("CLICK")
        //play click sound
        //re enable input
        gun.pop()
        click.play()
        shots.innerHTML += "<div class='shot'>❌</div>"
        player.disabled = false;
    }
}

function game(){
console.log("Run")
//cpu randomly picks an index
cpu.options.selectedIndex = getRandomInt(3)
console.log("Selected")

let playerSelect= player.options.selectedIndex;
let cpuSelect = cpu.options.selectedIndex
//score is evaluated
if(playerSelect == cpuSelect){
    return tie()
} 

if ((playerSelect == 0 && cpuSelect == 2) || (playerSelect == 1 && cpuSelect == 0) || (playerSelect == 2 && cpuSelect == 1)){
 return win();
} else {
 return lose();
}



function tie(){
 result.innerHTML = '<div style="color:blue;">TIE!</div>'
 yay.play()
}
function win(){
    result.innerHTML = '<div style="color:green;">Player WIN!</div>'
    fireGun("CPU");
   }

   function lose(){
    result.innerHTML = '<div style="color:red;">CPU WIN!</div>'
    fireGun("Player")
   }


}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function game_init(){

    bg.style.backgroundColor = "white"
    shots.innerHTML = "";
    player.disabled = false;
    result.innerHTML = "";
    loadGun();
}