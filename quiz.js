// quiz.js
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    let score = 0;
    
    // Correct answers
    const answers = {
        q1: "B",
        q2: "A",
        q3: "A",
        q4: "B",
        q5: "B",
        q6: "B",
        q7: "B",
        q8: "B",
        q9: "B",
        q10: "B"
    };

    // Check answers
    for (let i = 1; i <= 10; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer && userAnswer.value === answers[`q${i}`]) {
            score += 1;
        }
    }

    // Redirect to the results page with score in query parameters
    window.location.href = `results.html?score=${score}`;
});
