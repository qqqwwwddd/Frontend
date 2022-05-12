## [DOM]

문서 객체 모델 (Document Object Model) : 웹페이지의 모든 컨텐츠를 객체로 표현하는 모델

DOM 트리 : DOM을 계층적으로 표현, 계층적인 단위 Node(노드, 관계성 개념)

Document 객체 : 웹페이지 자체, 따라서 모든 HTML 요소에 접근하기 위해서는 Document 객체로 부터 시작

DOM Selection(선택)

-  getElementXXX

    - getElementById() : 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환
        -> Id 는 단수 (문서 내에서 유일한 하나의 값)

    - getElementsByClassName() -> 복수의 형태로 출력 

    - getElementsByTagName -> HTMLCollection

    - getElementsByName -> NodeList





    ---

    ## [Event]

    # [Event 적용]

    1. 인라인 방식
    2. 프로퍼티 방식
    3. 이벤트 리스너 방식 


    # [Event 종류]
    - MouseEvent : click, dbclick, mouseup, mousedown, ...

    - FocusEvent : focus, blur, focusin, focusout, ....

    - keyboardEvent : keydown, keypress, keyup, ...