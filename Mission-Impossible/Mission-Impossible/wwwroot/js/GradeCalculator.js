$('#calculate').click(function () {
    finalgrade =
        $('#assignments').val() * 0.55 +
        $('#projects').val() * 0.05 +
        $('#quizzes').val() * 0.1 +
        $('#exams').val() * 0.2 +
        $('#intex').val() * 0.1;

    if (finalgrade >= 94) {
        lettergrade = 'A'
    } else if (finalgrade >= 90) {
        lettergrade = 'A-'
    } else if (finalgrade >= 87) {
        lettergrade = 'B+'
    } else if (finalgrade >= 84) {
        lettergrade = 'B'
    } else if (finalgrade >= 80) {
        lettergrade = 'B-'
    } else if (finalgrade >= 77) {
        lettergrade = 'C+'
    } else if (finalgrade >= 74) {
        lettergrade = 'C'
    } else if (finalgrade >= 70) {
        lettergrade = 'C-'
    } else if (finalgrade >= 67) {
        lettergrade = 'D+'
    } else if (finalgrade >= 64) {
        lettergrade = 'D'
    } else if (finalgrade >= 60) {
        lettergrade = 'D-'
    } else {
        lettergrade = 'E'
    }

    alert("Letter Grade: " + lettergrade + "\nNumeric Grade: " + finalgrade + "%");
})