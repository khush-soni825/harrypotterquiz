const questions = [
    {
        question: "Which house values bravery the most?",
        answers: ["Slytherin", "Gryffindor", "Hufflepuff", "Ravenclaw"],
        correct: "Gryffindor"
    },
    {
        question: "What is the name of Harry Potter's owl?",
        answers: ["Hedwig", "Crookshanks", "Fawkes", "Scabbers"],
        correct: "Hedwig"
    },
    {
        question: "What sport is played on broomsticks?",
        answers: ["Gobstones", "Quidditch", "Wizard Chess", "Exploding Snap"],
        correct: "Quidditch"
    },
    {
        question: "Who teaches Potions at Hogwarts initially?",
        answers: ["Minerva McGonagall", "Albus Dumbledore", "Severus Snape", "Remus Lupin"],
        correct: "Severus Snape"
    },
    {
        question: "What platform does the Hogwarts Express depart from?",
        answers: ["9", "9¾", "10", "3"],
        correct: "9¾"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    let answerBox = document.getElementById("answers");
    answerBox.innerHTML = "";

    q.answers.forEach(ans => {
        let btn = document.createElement("button");
        btn.innerText = ans;
        btn.onclick = () => checkAnswer(ans);
        answerBox.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        score += 10;
        updateScore();
    }

    disableButtons();
    document.getElementById("nextBtn").style.display = "block";
}

function updateScore() {
    let scoreText = document.getElementById("score");
    scoreText.innerText = "Score: " + score;
    scoreText.style.transform = "scale(1.3)";
    setTimeout(() => scoreText.style.transform = "scale(1)", 300);
}

function disableButtons() {
    document.querySelectorAll("#answers button").forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = ".4";
    });
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        document.getElementById("nextBtn").style.display = "none";
        loadQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    const result = document.getElementById("result");

    if (score >= 30) {
        result.innerHTML = "✨ You Win! A true wizard of Hogwarts! ⚡";
    } else {
        result.innerHTML = "❌ You Lost... back to spell practice, young wizard!";
    }

    document.getElementById("answers").innerHTML = "";
    document.getElementById("question").innerText = "";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("replayBtn").style.display = "block";
}

function replayGame() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("replayBtn").style.display = "none";
    document.getElementById("score").innerText = "Score: 0";
    loadQuestion();
}

loadQuestion();
