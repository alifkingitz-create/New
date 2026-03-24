const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

/* Load state */
let isPlaying = localStorage.getItem("musicPlaying") === "true";
let time = localStorage.getItem("musicTime");

if(time) music.currentTime = time;

/* 🔥 FORCE PLAY FUNCTION */
function startMusic(){
  music.play().then(()=>{
    localStorage.setItem("musicPlaying","true");
  }).catch(()=>{});
}

/* Button click */
btn.onclick = () => {
  if(music.paused){
    startMusic();
  } else {
    music.pause();
    localStorage.setItem("musicPlaying","false");
  }
};

/* Page load e resume */
window.onload = () => {
  if(isPlaying){
    startMusic();
  }
};

/* Page change er age time save */
window.onbeforeunload = () => {
  localStorage.setItem("musicTime", music.currentTime);
};

/* Navigation e music start add (IMPORTANT) */
function go(page){
  startMusic();   // 🔥 eta main fix
  window.location.href = page;
}

function back(){
  startMusic();   // 🔥 eta main fix
  window.history.back();
}

/* Letters */
function openLetter(n){
  startMusic();  // 🔥 ekhaneo add

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
