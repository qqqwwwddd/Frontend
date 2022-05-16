
"use strict"

// ver 1 객체

const baseURL = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
const keyValue = "c11fed9bc5fa097122e22446ecbb5dd3"
const targetDate = 20211101;
const drawInfoElement = document.getElementById("draw-info");

// ver 2 배열 

// const backimg = ["https://movie-phinf.pstatic.net/20210915_104/1631681279096sdjNA_JPEG/movie_image.jpg",
//                  "https://movie-phinf.pstatic.net/20211013_124/1634113091609idAKj_JPEG/movie_image.jpg",
//                  "https://movie-phinf.pstatic.net/20210831_152/1630371935224qy9s6_JPEG/movie_image.jpg"
//                 ]

// const coverimg = ["https://file.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1034057_16357473724834722.jpg",
//                   "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDZfMzYg%2FMDAxNjM2MjA5OTE0Nzc1.h2f1UYLiRPi5OtfPzNU-NUxuaPwjykT5UdVoD1OFUH0g.Ym1cGCBWzeQu1GSh4pC9SBQ1N6yM-No28SGmjJ7CszUg.JPEG.urjj%2FIMG_1326.jpg&type=sc960_832" ,
//                   "https://movie-phinf.pstatic.net/20210812_250/1628729731779sqakv_JPEG/movie_image.jpg?type=m886_590_2"
//                 ]


// 일별 박스오피스에서
// 2021년 11월 1일에 관객수가 2000 이상이고
// 상영된 횟수가 홀수인 영화만 출력해주세요!

// ver1
axios.get(baseURL, {
    params: {
        key: keyValue,
        targetDt: targetDate
    }
}).then(response => response.data)
    .then((data) =>
        data.boxOfficeResult.dailyBoxOfficeList.filter(
            (el) => (el.audiCnt >= 2000) && (el.showCnt % 2 === 1)
        )
    ).then((result) => {
        console.log(result);

        result[0].backimg = "https://movie-phinf.pstatic.net/20210915_104/1631681279096sdjNA_JPEG/movie_image.jpg"
        result[0].coverimg = "https://file.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1034057_16357473724834722.jpg"
        result[1].backimg = "https://movie-phinf.pstatic.net/20211013_124/1634113091609idAKj_JPEG/movie_image.jpg"
        result[1].coverimg = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDZfMzYg%2FMDAxNjM2MjA5OTE0Nzc1.h2f1UYLiRPi5OtfPzNU-NUxuaPwjykT5UdVoD1OFUH0g.Ym1cGCBWzeQu1GSh4pC9SBQ1N6yM-No28SGmjJ7CszUg.JPEG.urjj%2FIMG_1326.jpg&type=sc960_832"
        result[2].backimg = "https://movie-phinf.pstatic.net/20210831_152/1630371935224qy9s6_JPEG/movie_image.jpg"
        result[2].coverimg = "https://movie-phinf.pstatic.net/20210812_250/1628729731779sqakv_JPEG/movie_image.jpg?type=m886_590_2"

        result.forEach(element => {
            // ver1
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

            // ver2
            // axios.get(baseURL, {
            //     params: {
            //         key: keyValue,
            //         targetDt: targetDate
            //     }
            // }).then(response => response.data)
            // .then((data) => 
            //     data.boxOfficeResult.dailyBoxOfficeList.filter(
            //         (el) => (el.audiCnt >= 2000) && (el.showCnt % 2 === 1)
            //     )
            // ).then((result) => {
            //     console.log(result);
            // ver2
            // result.forEach((element, i) => { 
            //     drawInfoElement.innerHTML += `
            //     <div class="col-md-4">
            //     <div class="main">
            //         <div class="movie-img">
            //             <img src=${backimg[i]}
            //                 class="backimg">
            //             <img class="movie-cover"
            //                 src=${coverimg[i]}
            //             <i class="fa fa-play"></i>
            //         </div>
            //         <!-- 영화제목 movieNm -->
            //         <div class="movie-title">${element.movieNm}</div>
            //         <!-- 영화정보 -->
            //         <div class="movie-info-head text-center">
            //             <!-- rankOldAndNew -->
            //             <p>Status</p>
            //             <!-- rank -->
            //             <p>Rank</p>
            //             <!-- scrnCnt -->
            //             <p>Screens</p>
            //             <!-- showCnt -->
            //             <p>Show</p>
            //         </div>
            //         <div class="movie-info-content text-center">
            //             <!-- rankOldAndNew -->
            //             <p>${element.rankOldAndNew}</p>
            //             <!-- rank -->
            //             <p>${element.rank}</p>
            //             <!-- scrnCnt -->
            //             <p>${element.scrnCnt}</p>
            //             <!-- showCnt -->
            //             <p>${element.showCnt}</p>
            //         </div>
            //     </div>
            //     </div>`    
        });
    })
