
"use strict"

const keyURL = "http://openapi.seoul.go.kr:8088/6c69647661717171353869464f434c/json/culturalEventInfo/1/5"
const drawInfoElement = document.getElementById("draw-info");

axios.get(keyURL, {
    // params: {    
    // } 
}).then(res => res.data.culturalEventInfo.row)
    .then(data => console.log(data))

    res.forEach(element => {
        drawInfoElement.innerHTML += `
        
        <div class="col-md-4">
        <div class="main">
        <div class="movie-img">
        <img src=${element.backimg}
        class="backimg">
        <img class="movie-cover"
        src=${element.coverimg}
        <i class="fa fa-play"></i>
        </div>
        <!-- 영화제목 movieNm -->
        <div class="movie-title">${element.movieNm}</div>
        <!-- 영화정보 -->
        <div class="movie-info-head text-center">
        <!-- rankOldAndNew -->
        <p>Status</p>
        <!-- rank -->
        <p>Rank</p>
        <!-- scrnCnt -->
        <p>Screens</p>
        <!-- showCnt -->
        <p>Show</p>
        </div>
        <div class="movie-info-content text-center">
        <!-- rankOldAndNew -->
        <p>${element.rankOldAndNew}</p>
        <!-- rank -->
        <p>${element.rank}</p>
        <!-- scrnCnt -->
        <p>${element.scrnCnt}</p>
        <!-- showCnt -->
        <p>${element.showCnt}</p>
        </div>
        </div>
        </div>`
    });