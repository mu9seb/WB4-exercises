let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

console.log(getAverage(myScores))
console.log(getAverage(yourScores))

function getAverage(score) {
    const totalScores = score.length
    let scoresTotal = 0;
    for (let i = 0; i < totalScores; i++) {
        scoresTotal += score[i]
    }
    let average = (scoresTotal / totalScores).toFixed(2);
    return average;
}