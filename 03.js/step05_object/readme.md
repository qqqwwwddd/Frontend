## [object 정리해야함] {https://github.com/qqqwwwddd/Frontend/blob/master/03.js/step05_object/lab01_object.html}
# [객체(Object)]
    : 실제 존재하고 있는 사물의 실체, 속성 / 기능(동작)
    1. 리터럴 
    2. 생성자 함수
    3. 사용자 정의 생성자 함수 

---

## [Array] {https://github.com/qqqwwwddd/Frontend/blob/master/03.js/step05_object/lab02_array.html}
# [요소 추가]
- push() : 배열의 맨 뒤에 순차적 요소 추가
- unshift() : 배열의 맨 앞에 순차적 요소 추가 

# [요소 삭제]
- pop() 맨 뒤의 요소를 삭제(+반환) 

---
# [출력 기능]

- indexOf : 해당 요소의 인덱스 값 반환
    없는 요소 입력하면 -1 반환 

- find : 테스트 함수의 조건에 맞는 첫번째 요소 값을 반환

- findIndex : 테스트 함수의 조건에 맞는 첫번째 요소의 인덱스 값을 반환

- for ~ of : 순차적으로 내부 요소에 접근 할 수 있는 이터러블 (배열을 일반화)한 객체만 사용가능

- 유사배열 : 배열처럼 인덱스와 같이 길이 프로퍼티가 존재 / 배열은 아님

- Array.from() : 유사 배열을 받아서 진짜 배열로 만들어줌 

- join() : 문자열 연결

- map() : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

- filter() : 조건의 부합하는 모든 요소를 배열로 만들어서 출력


- foreach() : 배열만 사용 가능한 메서드 
    내부 함수의 형태로 값 전달하는 메서드

- reduce() : 값들을 축적해주는 역할 

---

## [문자열 (string)] {https://github.com/qqqwwwddd/Frontend/blob/master/03.js/step05_object/lab03_string.html}

- charAt(idx) : 해당 위치 index 에 있는 문자열을 반환

- substring(idx1, idx2) : idx1 부터 idx2 -1 까지 반환해주는 메서드 

- replace(바꾸려는 글자, 바꿀 글자)

- split('') : 기준에 따라 문자열을 분할하여 배열로 반환

- concat() : 문자열 결합 

---

## [숫자 (number)] {https://github.com/qqqwwwddd/Frontend/blob/master/03.js/step05_object/lab04_number.html}
front<->backend로 전달될때 실제값이 string ,숫자지만 숫자, string 으로 바뀌어서 전달 되는 경우 있음

- Number() : 문자열을 숫자로 변환 / 반환 

- parseXXX()
    - parseInt() : 소수점을 제외하고 정수로 반환 문자열 -> 숫자
    - parseFloat() : 문자열 -> 숫자 

- Number.toFixed() : 지정한 소수점 자리까지만 남김


## [Date] {https://github.com/qqqwwwddd/Frontend/blob/master/03.js/step05_object/lab05_date.html}
Date : 현재 날짜 및 시각을 참조하는 객체

Date.parse(str) : 문자열에서 날짜 타입으로 변경