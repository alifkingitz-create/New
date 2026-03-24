const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

/* Load previous state */
let isPlaying = localStorage.getItem("musicPlaying") === "true";
let time = localStorage.getItem("musicTime");

if(time) music.currentTime = time;

/* FIRST CLICK e auto start */
document.body.addEventListener("click", () => {
  music.play();
  isPlaying = true;
  localStorage.setItem("musicPlaying", "true");
}, { once: true });

/* Button control */
btn.onclick = () => {
  if(music.paused){
    music.play();
    isPlaying = true;
  } else {
    music.pause();
    isPlaying = false;
  }
  localStorage.setItem("musicPlaying", isPlaying);
};

/* Page load e resume */
window.onload = () => {
  if(isPlaying){
    music.play();
  }
};

/* Save time */
window.onbeforeunload = () => {
  localStorage.setItem("musicTime", music.currentTime);
};

/* Navigation */
function go(page){
  window.location.href = page;
}

function back(){
  window.history.back();
}

/* Letters */
function openLetter(n){
  let img=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
  let text=[
    "Tumi amar sobcheye special 💖",
    "Miss korle amar kache chole asho 🥺",
    "Tomar smile amar duniya 😍",
    "Rag korle amake bolo 😘",
    "Ami sobsomoy tomar sathe 💕"
  ];

  document.getElementById("popup").style.display="block";
  document.getElementById("photo").src=img[n-1];
  document.getElementById("line").innerText=text[n-1];
}

function closePopup(){
  document.getElementById("popup").style.display="none";
}

/* Flower rain */
function createFlower(){
  const f=document.createElement("span");
  f.innerHTML="🌸";
  f.style.left=Math.random()*100+"vw";
  f.style.animationDuration=(Math.random()*3+2)+"s";
  document.querySelector(".flowers")?.appendChild(f);
  setTimeout(()=>f.remove(),5000);
}

setInterval(createFlower,300);
