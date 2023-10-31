let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89,100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
];

const numStudents = students.length;
for (i = 0; i < numStudents; i++) {
    let studentScores = students[i].scores;
    let studentScoreSum = 0;
    let studentAverage = 0;
    // get student scores, summate, and average
    const numScores = studentScores.length;
    for (i = 0; i < numScores; i++) {
        studentScoreSum += studentScores[i];
    }
    studentAverage = studentScoreSum / numScores;
    students[i].average = studentAverage;
}

console.log(students)