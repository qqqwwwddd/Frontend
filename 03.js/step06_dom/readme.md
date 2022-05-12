# [DOM] {https://github.com/qqqwwwddd/Frontend/blob/master/03.js/step06_dom/lab01_dom.html}

문서 객체 모델 (Document Object Model) : 웹페이지의 모든 컨텐츠를 객체로 표현하는 모델

DOM 트리 : DOM을 계층적으로 표현, 계층적인 단위 Node(노드, 관계성 개념)

Document 객체 : 웹페이지 자체, 따라서 모든 HTML 요소에 접근하기 위해서는 Document 객체로 부터 시작

## [DOM Selection(선택)]

-  getElementXXX

    - getElementById() : 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환
        -> Id 는 단수 (문서 내에서 유일한 하나의 값)

    - getElementsByClassName() : 클래스 이름을 이용하여 HTML 요소 선택
        -> 복수의 형태로 출력 

    - getElementsByTagName() : HTML 태그 이름을 이용하여 HTML 요소를 선택
        -> HTMLCollection

    - getElementsByName() : HTML 요소의 name 속성을 이용하여 HTML 요소를 선택함
        -> NodeList


- queryXXX : CSS 문법 적용 되어있어 . 이나 # 적용 시켜야함

    - querySelector() : 특정 name, id, class를 제한하지 않고 css선택자를 사용하여 요소 선택 
        -> 같은 id 또는 class 일 경우 스크립트 최상단 요소만 로직에 포함 
        -> 단수형태로 반환 (하나만) 

    - querySelectorAll() : 선택자를 선택하여 배열과 비슷한 객체인 nodeList를 반환
        -> 반환객체가 nodeList이기에 for문 또는 forEach문을 사용           

## [DOM Manipulation(조작)]
- document : DOM 은 document 객체에 구현되어 있어 브라우저에서 작동되는 코드에서는 document 객체 조회가능 

- 추가
    - appendChild() : 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙인다. 하나의 노드만 붙일 수 있음 
        -> 한 노드가 문서상의 두 지점에 동시에 존재할 수 없다 . 
        -> 노드가 이미 부모를 가지고 있다면 삭제되고 새로운 위치로 이동함



- 변경 
    - setAttribute(name, value) : 지정된 요소의 속성 값 설정
        -> 속성이 이미 존재하면 값이 update, 없으면 새속성 추가 

    - innerHTML : HTML 반환 

    - classList
        - add(string) : 지정한 클래스 값 추가
        - remove(string) : 지정한 클래스 값 제거
        - contains(string) : 지정한 클래스 값이 존재하는지 확인 (true false 반환)
        - replace(old, new) : old class new class로 대체
        - item(Number) : 인덱스 값을 활용하여 클래스 값 반환

- 삭제
    - removeChild() : 메모리에 해당 노드는 그대로 존재, 부모 노드와의 부모자식 관계를 끊어 DOM 트리에서 제거
        -> 최종적으로는 관계를 끊은 해당 노드의 참조를 반환한다.

    - removeAttribute()



---

## [Node]
    Node : HTML DOM ->  Node 라고 불리는 계층적 단위에 정보 저장하고 그 사이 관계를 설명해주는 역할 함 

    노드 트리 : HTML 문서의 정보가 저장되는 노드들의 집합 
        -> 최상위 레벨인 루트 노드로 시작해 가장 낮은 레벨인 텍스트 노드까지 내려감 HTML DOM 이용하여 노드 트리에 포함된 모든 노드에 접근 가능  

    노드를 통한 접근

    - 종류
    1. 문서 노드
    2. 요소 노드
    3. 텍스트 노드
    4. 주석 노드

    - 관계성
    1. 조상(상위) 
        - 부모 노드 parentNode
    2. 자손(하위) 
        - 자식 노드 리스트 childNodes 
        - 첫번째 자식 노드 fristChild 
        - 마지막 자식 노드 lastChild
    3. 형제  
        - 다음 형제 노드 nextSibling
        - 이전 형제 노드 previousSibling


    ---

# [Event] {https://github.com/qqqwwwddd/Frontend/blob/master/03.js/step06_dom/lab02_event.html}

### [Event 적용]

    1. 인라인 방식
    2. 프로퍼티 방식
    3. 이벤트 리스너 방식 

---
## [BOM(Browser Object Model)]
: 자바 스크립트를 이용하여 브라우저를 제어가능 하도록 설정하는 객체 모델

## [Event 종류]
    - MouseEvent : click, dbclick, mouseup, mousedown, ...

    - FocusEvent : focus, blur, focusin, focusout, ....

    - keyboardEvent : keydown, keypress, keyup, ...