let currentQuestionIndex = 0;
const userAnswers = [];
let missedAttempts = 0;

function loadQuestion() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    const questionData = questions[currentQuestionIndex];
    const questionTitle = document.createElement('h2');
    questionTitle.textContent = questionData.question;
    container.appendChild(questionTitle);

    questionData.answers.forEach(answer => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="answer" value="${answer.value}">
            ${answer.text}
        `;
        container.appendChild(label);
    });

    document.getElementById('next-button').style.display = 'block';
    updateMissedAttemptsDisplay(); // Actualizează afișajul
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        missedAttempts++;
        updateMissedAttemptsDisplay();
        showAggressiveAlert();
        return;
    }

    userAnswers.push(selectedAnswer.value);
    currentQuestionIndex++;
    missedAttempts = 0; // Resetează contorul la un răspuns valid

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        calculateResult();
    }
}

function showAggressiveAlert() {
    let message = 'Selectează un răspuns!';

    if (missedAttempts === 2) {
        message = 'Hai, răspunde! E important!';
    } else if (missedAttempts === 3) {
        message = 'Serios? E doar o întrebare. Apasă pe ceva!';
    } else if (missedAttempts === 4) {
        message = 'Hai te rog. Fără răspuns nu poți continua!';
    } else if (missedAttempts === 5) {
        message = 'RASPUNDE CHIAR ACUM🔥!!!!';
        document.body.style.backgroundColor = '#ffcccc';
    } else if (missedAttempts === 6) {
        message = 'La acest moment cred ca vrei sa stii ce te mai asteapta';
    } else if (missedAttempts === 7) {
        message = 'ULTIMA SANSA SA RASPUNZI!!!';
    } else if (missedAttempts >= 8) {
        message = 'SELECTEAZA UN RASPUNS!!!!!!!!!!!!!!!!!!!!!';
        document.body.style.backgroundColor = '#B80000';
    }

    alert(message);
}

function updateMissedAttemptsDisplay() {
    const display = document.getElementById('missed-attempts-display');
    display.textContent = `Răspunsuri ratate: ${missedAttempts}`;
}

function calculateResult() {
    const jobScores = {};
    userAnswers.forEach(answer => {
        if (!jobScores[answer]) jobScores[answer] = 0;
        jobScores[answer]++;
    });

    let bestMatch = null;
    let highestScore = 0;

    for (const job in jobScores) {
        if (jobScores[job] > highestScore) {
            highestScore = jobScores[job];
            bestMatch = job;
        }
    }

    document.getElementById('quiz-container').innerHTML = `
        <h2>Re-esind din raspunsurile dvs:</h2>
        <p>Cea mai potrivita cariera este: <strong>${bestMatch}</strong></p>
    `;
    document.getElementById('next-button').style.display = 'none';
}

window.onload = loadQuestion;
