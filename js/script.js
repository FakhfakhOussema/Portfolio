function calculateScore() {
    var score = 0;
    var form = document.getElementById("quizForm");
    var totalQuestions = 10;

    for (var i = 1; i <= totalQuestions; i++) {
        var question = form["q" + i];
        for (var j = 0; j < question.length; j++) {
            if (question[j].checked) {
                score += parseInt(question[j].value);
            }
        }
    }

    document.getElementById("score").innerHTML = "Votre score : " + score + " sur 10";
}