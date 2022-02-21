/*
    1. Dom(Document Object Model)
        - Document: 구조화된 데이터
        - DOM: 구조화된 문서를 객체로 표현하는 형식

    2. 웹브라우저 동작 과정
        - HTML 파일 가져오기
            보통 HTML 파일은 웹서버로부터 가져옴
        - 가져온 HTML 파일을 파싱(parsing)하여 DOM tree 생성, CSS 정보를 파싱하여 CSSOM tree 생성
        - DOM/CSSOM tree 기반 Render tree 생성
    
    3. 웹브라우저 동작과정과 javascript
        - javascript코드를 <head> 내에 <script>로 넣으면,
        - HTML 코드를 기반으로 DOM 트리를 구성하기 전에, script를 만나면, javascript 엔진에 제어권을 넘김
            - javascript엔진이 해당 javascript 코드 파일을 로드해서, 실행
            - 이후에 다시 HTML로 넘어와서 나머지 HTML 코드를 읽고, DOM 트리 구성부터 화면에 표시까지를 진행하게 됨
        - 따라서, <head> 내에 javascript를 넣게 되면
        - 화면 로딩이 느려질 수 있음
            - DOM tree 구성 전에 javascript가 실행되므로, DOM을 조작하는 javascript는 에러가 나거나, 정상 실행이 안될 수 있음
        - 따라서, javascript코드는 </body> (바디태그가 닫히기 직전에) <script>태그로 코드 파일 형태로 추가 해야 함

    - window와 document
        - window: 웹브라우저 객체
        - document: DOM 객체
    - window와 BOM(Browser Object Model)
        - window는 브라우저 환경 전체 객체를 가리키며, window를 안써도 됨
            // 다음 두 코드는 동일함
            alert("ㅎㅇ");
            window.alert("ㅎㅇ");
        - BOM의 주요 객체
            - navigator 객체: 브라우저와 운영체제 정보 제공
            - location 객체: URL 관련 핸들링
                console.log(navigator.userAgent);
                //사용자 에이전트 (User Agent)란, 우리가 사용하는 웹 브라우저 속에 숨겨진 중요한 기능 중 하나를 말합니다.
                 간단히 말해 내가 어떤 OS를 쓰고 있고, 버전은 어떤 버전인지 웹 브라우저의 정보는 어떤 것인지 등을 담고 있는 번호판 같은 개념입니다.
                console.log(navigator.platform); // 운영체제 정보
                console.log(location.href); // 현재 URL 정보
    
    - document
        - document 객체를 통해, HTML/CSS등 수정 가능
            document.body.style.background = 'red';

        - 자바스크립트로 HTML을 조작하기 위해서는 역시 CRUD 사용법을 이해해야 함
            - Create, Read(Find), Update, Delete: 원하는 HTML을 읽는다는 의미는 원하는 HTML을 찾는다는 의미임
    
    - 조작이 필요한 HTML 찾기 ()
        document.getElementById(id): id로 찾기
        document.getElementByTagName(name): 태그로 찾기(배열로 리턴)
        document.getElementByClassName(name): class 이름으로 찾기(배열로 리턴)
        document.querySelector(cssselector): CSS Selector로 찾기 (첫 번째 요소만 찾음)
        document.querySelectorAll(cssselector): CSS Selector로 찾기(모든 요소 찾음, 배열로 리턴)

    찾은 HTML 요소 확인/ 수정하기
*/