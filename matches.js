// write js code here corresponding to matches.html

var matchArr = JSON.parse(localStorage.getItem("schedule"))

function display(data){
    document.querySelector("tbody").innerHTML=null;
    data.forEach(function(ele){

        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText=ele.matchNumber

        var td2 = document.createElement("td")
        td2.innerText=ele.team1

        var td3 = document.createElement("td")
        td3.innerText=ele.team2

        var td4 = document.createElement("td")
        td4.innerText=ele.date

        var td5 = document.createElement("td")
        td5.innerText=ele.place

        var td6 = document.createElement("td")
        td6.innerText="Add as Favourite"
        td6.setAttribute("class","favouriteText")
        td6.addEventListener("click",function(){
            addToFav(ele)
        })

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr)
    });
}

display(matchArr)

var favArr = JSON.parse(localStorage.getItem("favourites")) || [];
function addToFav(ele){
    favArr.push(ele);
    localStorage.setItem("favourites",JSON.stringify(favArr))
}


document.getElementById("filterVenue").addEventListener("change",filterFun)

function filterFun(){
    var selected = document.getElementById("filterVenue").value
    console.log(selected)
    var filterArr = matchArr.filter(function(ele){
        return ele.place==selected;
        display(filterArr)
    })
    // localStorage.setItem("schedule",JSON.stringify(filterArr))
    display(filterArr)
}