let i = 0;
let text1 = "Hey Handsome ❤️";
let text2 = "Today is our special day 💖";
let speed = 100;
let ok = 0;

function typeWriter(text, para){
if(i < text.length){
document.getElementById(para).innerHTML += text.charAt(i);
i++;
}
else{
i = 0;
ok++;
}
}

setInterval(function(){
if(ok == 0){
typeWriter(text1, "txt1");
}
else if(ok == 1){
typeWriter(text2, "txt2");
}
}, speed);
