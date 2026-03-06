// -----------------------
// CONFETTIS
// -----------------------
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettis = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createConfetti() {
    const colors = ["#FF595E","#FFCA3A","#8AC926","#1982C4","#6A4C93"];
    confettis.push({
        x: random(0, canvas.width),
        y: random(-50, 0),
        r: random(5, 10),
        d: random(2, 5),
        color: colors[Math.floor(random(0, colors.length))]
    });
}

for(let i=0;i<100;i++){ createConfetti(); }

function drawConfetti() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    confettis.forEach(c=>{
        ctx.beginPath();
        ctx.arc(c.x,c.y,c.r,0,Math.PI*2,false);
        ctx.fillStyle=c.color;
        ctx.fill();
        c.y += c.d;
        if(c.y>canvas.height) { c.y = -10; c.x = random(0, canvas.width); }
    });
    requestAnimationFrame(drawConfetti);
}

drawConfetti();

const quiz = [

{
question:"Quel est mon objectif ?",
answers:["Devenir multimilliardaire","Être employé","Ne rien faire"],
correct:0
},

{
question:"Quel plat j'aime le plus ?",
answers:["Pizza","Poulet","Salade"],
correct:1
},

{
question:"Je suis comment de caractère ?",
answers:["Dur","Doux","Méchant"],
correct:1
},

{
question:"Qu'est-ce que j'aime ?",
answers:["Cinéma et musique","Rien","Dormir seulement"],
correct:0
}

];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");

answersEl.innerHTML="";

questionEl.textContent = quiz[currentQuestion].question;

quiz[currentQuestion].answers.forEach((answer,index)=>{

const button = document.createElement("button");
button.textContent = answer;

button.onclick = ()=> checkAnswer(index);

answersEl.appendChild(button);

});

}

function checkAnswer(index){

if(currentQuestion < quiz.length){
    loadQuestion();
}else{
    document.getElementById("quiz-container").innerHTML =
    "<h3>Quiz terminé 🎉</h3><p>Ton score final est : "+score+" / "+quiz.length+"</p>";

    // Confettis supplémentaires pour le quiz terminé
    for(let i=0;i<200;i++){ createConfetti(); }
}

}

loadQuestion();
const cards = document.querySelectorAll(".card");
cards.forEach((c,i)=>{
    c.style.animationDelay = (i*0.2) + "s";
});
function checkAnswer(choice) {
    const result = document.getElementById("result");

    if (choice === 1) {
        result.textContent = "Bonne réponse 🔥";
        result.style.color = "green";
    } else {
        result.textContent = "Mauvaise réponse ❌";
        result.style.color = "red";
    }
}
const intro = document.getElementById("intro");

// Ajouter 5 ballons
for (let i = 0; i < 5; i++) {
    const b = document.createElement("div");
    b.classList.add("balloon");
    intro.appendChild(b);
}

// Disparition automatique après 5 secondes
setTimeout(() => {
    intro.style.transition = "opacity 1s ease";
    intro.style.opacity = 0;
    setTimeout(() => { intro.style.display = "none"; }, 1000);
}, 5000);