const quiz = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Home Tool Markup Language",
      "Hyper Transfer Markup Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    answer: "Django"
  }
];

let current = -1;
let score = 0;

function nextQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");

  current++;

  if (current < quiz.length) {
    questionEl.textContent = quiz[current].question;
    optionsEl.innerHTML = "";

    quiz[current].options.forEach(option => {
      const btn = document.createElement("button");
      btn.classList.add("option-btn");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      optionsEl.appendChild(btn);
    });

    nextBtn.style.display = "none";
  } else {
    questionEl.textContent = `Quiz Over! Your Score: ${score}/${quiz.length}`;
    optionsEl.innerHTML = "";
    nextBtn.textContent = "Restart Quiz";
    nextBtn.style.display = "inline-block";
    nextBtn.onclick = () => location.reload();
  }
}

function checkAnswer(selected) {
  const correct = quiz[current].answer;
  if (selected === correct) score++;

  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "#4caf50";
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "#f44336";
    }
  });

  document.getElementById("nextBtn").style.display = "inline-block";
}
