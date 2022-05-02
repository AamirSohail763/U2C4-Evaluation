// write js code here corresponding to index.html
// You should add submit event on the form

document.getElementById("masaiForm").addEventListener("submit",saveData)
var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];

function saveData(){
    event.preventDefault();
    var matchObj = {
        matchNumber: masaiForm.matchNum.value,
        team1: masaiForm.teamA.value,
        team2: masaiForm.teamB.value,
        date: masaiForm.date.value,
        place: masaiForm.venue.value,
    }

    matchArr.push(matchObj)
    localStorage.setItem("schedule",JSON.stringify(matchArr));
}
