const quizContainer = document.querySelector('.quiz-container');
const submitBtn = document.querySelector('.submit-btn');
const resultDiv = document.querySelector('.result');

// let score=0;

submitBtn.addEventListener('click', checkAnswer);

function checkAnswer() {
    // Get user answers
    const answer = document.querySelector('input[name="answer"]:checked');
    const answer2 = document.querySelector('input[name="answer2"]:checked');
    const answer3 = document.querySelector('input[name="answer3"]:checked');
    const answer4 = document.querySelector('input[name="answer4"]:checked');
    const answer5 = document.querySelector('input[name="answer5"]:checked');


    // Correct answers
    const correctAnswer = 'A';
    const correctAnswer2 = 'D';
    const correctAnswer3 = 'B';
    const correctAnswer4 = 'A';
    const correctAnswer5 = 'C';


    // Result string to display all results together
    let resultMessage = '';

    // Check first answer
    if (answer && answer.value === correctAnswer) {
        resultMessage += 'Question 1: Correct!<br>';
        // score++;
    } else {
        resultMessage += `Question 1: Sorry, the correct answer is ${correctAnswer}.<br>`;
    }

     // Check second answer
     if (answer2 && answer2.value == correctAnswer2) {
        resultMessage += 'Question 2: Correct!<br>';
    } else {
        resultMessage += `Question 2: Sorry, the correct answer is ${correctAnswer2}.<br>`;
    }

    // Check third answer
    if (answer3 && answer3.value === correctAnswer3) {
        resultMessage += 'Question 3: Correct!<br>';
    } else {
        resultMessage += `Question 3: Sorry, the correct answer is ${correctAnswer3}.<br>`;
    }

    // Check four answer
    if (answer4 && answer4.value === correctAnswer4) {
        resultMessage += 'Question 4: Correct!<br>';
    } else {
        resultMessage += `Question 4: Sorry, the correct answer is ${correctAnswer4}.<br>`;
    }

    // Check five answer
    if (answer5 && answer5.value === correctAnswer5) {
        resultMessage += 'Question 5: Correct!<br>';
    } else {
        resultMessage += `Question 5: Sorry, the correct answer is ${correctAnswer5}.<br>`;
    }

    // To show the result
    resultDiv.innerHTML = resultMessage;
}