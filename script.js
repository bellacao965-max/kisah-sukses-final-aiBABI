
function simpleAI(){
    document.getElementById('ai_out').innerText = "AI siap!";
}

const videos = [
 "https://www.youtube.com/embed/dQw4w9WgXcQ",
 "https://www.youtube.com/embed/3JZ_D3ELwOQ",
 "https://www.youtube.com/embed/L_jWHffIx5E"
];

document.getElementById('yt').innerHTML =
  `<iframe width="300" height="200" src="${videos[Math.floor(Math.random()*videos.length)]}" allowfullscreen></iframe>`;

fetch("quote.txt").then(r=>r.text()).then(t=>document.getElementById("quote").innerText=t);
