
"use strict"

const keyURL = "http://openapi.seoul.go.kr:8088/6c69647661717171353869464f434c/json/culturalEventInfo/1/5"
const drawInfoElement = document.getElementById("draw-info");

axios.get(keyURL, {
    // params: {    
    // } 
}).then(res => res.data.culturalEventInfo.row)
    .then(data => console.log(data))
