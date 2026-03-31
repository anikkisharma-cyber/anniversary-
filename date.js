let startDate = new Date("March 31, 2022 00:00:00").getTime(); // CHANGE THIS DATE

function updateTimer() {
let now = new Date().getTime();
let diff = now - startDate;

let days = Math.floor(diff / (1000 * 60 * 60 * 24));
let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
let minutes = Math.floor((diff / (1000 * 60)) % 60);
let seconds = Math.floor((diff / 1000) % 60);

document.getElementById("d").innerHTML = days;
document.getElementById("h").innerHTML = hours;
document.getElementById("m").innerHTML = minutes;
document.getElementById("s").innerHTML = seconds;
}

setInterval(updateTimer, 1000);

/* 💌 TYPING TEXT (your original) */
let i = 0;
let text1 = "Hey! Handsome";
let text2 = "Today is the Big Day.";
let speed = 100;

function typeWriter(text, para){
if(ok == 2){
clearInterval(typeInterval);
}
if(i < text.length){
document.getElementById(para).innerHTML += text.charAt(i);
i++;
speed = Math.random() * 50 + 100;
}
else{
if(ok == 0){
i = 0;
}
ok += 1;
}
}

var typeInterval = setInterval(function(){
if(ok == 0){
typeWriter(text1, "txt1");
}
else if(ok == 1){
typeWriter(text2, "txt2");
}
}, 100);
