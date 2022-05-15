## [HTTP]

1. Start Line
HTTP 메소드, Request(요청) 타겟 (= 목표 주소), HTTP 버전, HTTP 상태 ...
- HTTP 메소드 종류 
    - GET(데이터 요청) 
    - POST(데이터 추가)
    - PUT(데이터 수정) 
    - DELETE(데이터 삭제) 
    : https://developer.mozilla.org/ko/docs/Web/HTTP/Methods

- HTTP 상태 코드
    - 1xx : 데이터 주고받을 수 있는지 부분 
    - 2xx : 요청에 대한 부분 성공/실패 
    - 3xx : 응답에 대한 결과 
    - 4xx : 응답 에러 설명 
    - 5xx : 서버 내부 문제  
    : https://developer.mozilla.org/ko/docs/Web/HTTP/Status



2. Header : 기본적인 데이터 (key : value) 한쌍으로 표기
    - Date(현재 시간) 
    - Content-type (MIME, body부분의 미디어 타입, ex) text/html application/json, ...) 
         : https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_Types
    - Content-lenght(컨텐츠 길이)
    - Host(서버 호스트 이름과 포트번호)
    - Authorization(인증 토큰)
    - Cookie(쿠키)
    - Accept(미디어 타입 종류)



3. Body : 데이터 값 
    -> 요청에 따라 데이터 값 담길 수도 있고 안 담길 수도 있다.
- 실제 데이터(Request - 전송하는 데이터, Response - 반환하는 데이터)
- 전송 데이터 혹은 반환 데이터가 없다면 - Body는 비어 있을 수 있음


