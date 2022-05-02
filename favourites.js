// write js code here corresponding to favourites.html

var favArr = JSON.parse(localStorage.getItem("favourites"))

display(favArr)
function display(data){
    document.querySelector("tbody").innerHTML=null;
    data.forEach(function(ele,index){

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
        td6.innerText="Delete"
        td6.setAttribute("class","deleteText")
        td6.addEventListener("click",function(){
            removeFav(ele,index)
        });

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr)
    });
}

function removeFav(ele,index){
    favArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favArr))
    display(favArr)
}
