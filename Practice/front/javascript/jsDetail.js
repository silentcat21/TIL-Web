/*
    -javascript란?
        - javascript란 웹페이지 상에서 동적으로 요소를 변경하고, 사용자 인터페이스를 지원하기 위해 고안된 스크립트 언어
        - 넷스케이프 커뮤니케이션 사에서 개발하였으며, 본래의 이름은 모카. 그리고 라이브스크립트였으나, 당시 JAVA언어가 인기를 끔에 따라
          관련이 없음에도 'Javascript'라고 명명하였음

    -ECMAscript
        - 넷스케이프사에 대응하기 위해, 이후 MS사에서도 JScript 라는 javascript 와 호환되는 언어를 개발
        - 이에 넷스케이프사가 표준화 기구인 Ecma International에 javascript 표준화를 요청하였고, 1996년
          11월 ECMA-262라는 표준화 명세서 작업이 시작됨
        - 표준화를 통해, 이름을 지어야 하는 상황에서, 이미 Sun 마이크로시스템즈 사가 'JAVA'라는 상표를 등록해놓아서 javascript라는 이름으로 표준화하지 못함
        - 그래서, 표준화된 언어의 공식 이름은 ECMAScript이고, 대외적으로 사용되는 이름은 javascript가 됨

    -Javascript 엔진
        - javascript 는 웹브라우저 상에서 도앚ㄱ하며, 다양한 업체에서 만들기 때문에, 각기 다른 javascript엔진 구현 또는 채용 중
            - javascript 엔진이란, javascript코드를 이해하고, 실행하는 프로그램(더 깊게 들어가면, 인터프리터)이라고 이해하면 됨
        - 최근 사용중인 javascript 엔진
            - V8: 구글에서 만들었으며, 크롬에 먼저 채택되었고, 이후 Electron, Node.js 에서 사용 중,
              마이크로소프트에서도 기존 자체 엔진 버리고 V8 채택 중
            - SpiderMonkey: Firefox 브라우저에서 사용
            - JavaScriptCore: 오픈 소스로 Apple과 Safari 브라우저에서 사용

    -최근 Javascript 동향
        - 기존에는 웹페이지 상에서 동적으로 요소를 변경하고, 사용자 인터페이스를 지원하기 위한 프론트엔드에만 사용되었음
        - 서버 백엔드 기술인 Node.js 가 Javascript 기반으로 동작함에 따라, 프론트엔드 뿐만 아니라, 백엔드에도 활용 중
        - 최근에는 Electron을 사용해서, 데스크탑 프로그램도 만들 수 있고, react-native, NativeScript 등을 사용해서 모바일 앱도 만들 수 있음
        - Javascript는 처음부터 잘 고안된 언어가 아님에도 불구하고, 인터넷 환경에서 많이 사용하다보니, 갈수록 사용범위가 넓어지고 있음
        - 잘 고안된 언어가 아니다보니, 매년마다 새로운 문법이 추가되고 있지만, 크로스 브라우징 문제로 새로운 문법이 바로 채용되서 쓰이지는 못하고 있음
        - 현재는 크로스 브라우징 문제로 ES6기준으로 사용 중
            - ES6는 ECMAScript6(ES6)로 알려진 2015년 추가된 문법이며, ECMAScript 2015가 공식 명칭
    
    #결론
        - Javascript가 다양한 분야에서 많이 사용되므로(다양한 프레임워크를 익힐 때, 기본이 되고, 시너지 학습 효과가 큼), 파이썬과 마찬가지로 익혀둘
          필요가 있음, Javascript엔진은 V8이 중심이고, 문법은 ES6까지를 잘 알아두고 사용할 수 있어야 함

    - 미리 알아둘 이야기
        - naming rule
            변수 이름을 어떻게 짓느냐에 대해 각 언어별 추천 naming rule이 존재함
        - Javascript naming rule
            - camelCase: 두 단어를 붙일 때, 맨 앞에는 소문자, 뒤에 나오는 단어마다 앞글자는 대문자
            - boolean 변수는 isVariable, hasData, areEqual과 같이, is, has, are 와 같은 동사를 써서 boolean 변수임을 나타내면 좋다고 함
            - class 명은 PascalCase(두 단어를 붙일 때, 맨 앞의 단어의 앞글자도 대문자, 뒤의 단어의 앞글자도 대문자)
            - class 내부의 method, 또는 외부의 함수등은 모두 camelCase를 사용
            - getName과 같이 함수 /method는 동사로 시작하면 좋음
            - Javascript는 파이썬과 같이 잘 고안된 언어가 아니므로, 안되야할 것 같은 케이스도 정상 진행되는 경우도 많음(반대도 많음)
              따라서, 어느 정도는 융통성을 가지고, 비정상 동작을 할 경우, 코드를 변경해보며 실행해보는 것이 좋음

    - 변수
        - 변수 선언
            - 파이썬과 달리 선언 키워드(let)를 넣어줘야 함
              초기값을 넣을 수도 있고, 변수만 선언할 수도 있음
            - 파이썬과 마찬가지로 console.log()의 인자로 변수명을 넣으면, 변수값이 출력됨
            let testValue;
            testValue = 1;
            console.log(testValue);

            - 변수는 변할 수 있는 수로, 일종의 저장공간을 만들고, 특별한 이름을 붙이는 것(일반적인 프로그래밍과 동일)
                -한번 선언한 변수에 다른 변수값을 넣을 수도 있음
            let testValue;
            testValue = 1;
            console.log(testValue);
            testValue = 2;
            console.log(testValue);

            - 한번 선언한 변수를 다시 선언할 수는 없음(다음코드는 에러)
            let testValue = 1;
            console.log(testValue);
            let testValue = 10;

        - 상수 선언
            - 파이썬과 달리 특정 상수를 저장하는 변수를 선언할 수 있음
            - 한번 상수로 선언된 변수에는 새로운 값을 넣을 수 없음
            - 선언할 때, 특정 상수값까지 넣어서 선언해야 함
            - 가능 케이스
                - 상수라고 반드시 정수만 되는 것은 아님
            const testValue = 2;
            const testValue = 'test';
            const testValue = ''; <일종의 null(없음을 나타냄)을 나타내는 값을 넣을 수도 있음

        - Javascript 데이터 타입
            - 상수 선언에 이어서, Javascript 데이터 타입을 설명해야 함
            1. Number
            2. String
            3. Boolean
            4. null
            5. undefined
            6. object
            7. Symbol

        - Number
            - 파이썬은 int, float로 정수와 부동소숫점을 구분하지만, Javascript는 정수/ 부동소숫점을 통째로 Number 데이터 타입으로 처리함
                - 64비트 부동 소숫점 형(-(2^53 -1)~ 2^53 -1)사이의 값
            - typeof
                - 변수의 데이터 타입을 확인하기 위한 문법
                    typeof 후 한칸 띄고 변수명을 써야 함(특이함)
                    const testValue1 = 1;
                    console.log(typeof testValue1);
                    const testValue2 = 'test';
                    console.log(typeof testValue2);

        - Boolean
            - true 와 false 두 값을 가질 수 있음 파이썬처럼 대문자 아니고 소문자임

            let test = 1 > 2;
            console.log(test);
            console.log(typeof test);

            - Boolean() 로도 true 또는 false의 Boolean 타입의 값을 가져올 수도 있음
                - 문자열의 경우는 문자열이 없는 경우는 false, 있기만 하면 true
                let testBoolean1 = Boolean('hi');
                console.log(testBoolean1);
                let testBoolean2 = Boolean('');
                console.log(testBoolean2);

        - null 과 undefined
            - null은 값이 없음을 나타내고, undefined는 값이 할당되지 않았음을 나타냄
            - null은 null이라는 이름의 값, 하나만 가질 수 있음(Null 이나 NULL이 아니고, null임)
            - undefined도 undefined이라는 이름의 값, 하나만 가질 수 있음
            let testUndefined1;
            console.log(typeof testUndefined1, testUndefined1);
            let testNull1 = null;
            console.log(typeof testNull1, testNull1); 

        - object
            - 객체 타입을 나타냄
            - javascript 도 파이썬과 마찬가지로 결국 모든 기능을 객체로 다룸
            
        - Symbol
            - ES6에서 추가된 타입
            - Symbol은 unique한 값을 만듬
            - Symbol 문법
            Symbol([description])
            - description은 문자열, 숫자등의 데이터가 될 수 있으며, 해당 심볼을 설명하기 위한 목적 이외에는 심볼 생성, 접근등과 관련 없음
            let testSymbol1 = Symbol('1');
            let testSymbol2 = Symbol('1');
            console.log(testSymbol1, typeof testSymbol1);
            console.log(testSymbol1 == testSymbol2);
            console.log(testSymbol1 === testSymbol2);
    
    - 데이터 타입 변환
        1. Number(): Number 타입으로 변환
            console.log(typeof Number('1'), Number('1'));

        2. parseInt(): Number 타입으로 변환하되 정수로 만듬
            console.log(typeof parseInt(1.2), parseInt(1.2));

        3. parseFloat(): Number 타입 변환, 부동소숫점까지 그대로 데이터 변환
            console.log(typeof parseFloat(1.2), parseFloat(1.2));
        
        4. String(): String 타입으로 변환
            console.log(typeof String(O), String(O));

        5. Boolean(): Boolean 타입으로 변환
            console.log(typeof Boolean(0), Boolean(0));
    
    - 동등 연산자(==)와 일치 연산자(===)
        - 동등 연산자 (==,!=): 관대한 연산자로 기본적으로 값만 같은지 확인함
        - 일치 연산자 (===, !==): 엄격한 연산자로 기본적으로 값과 데이터 타입 둘 다 같은지를 확인함
        - 동등 연산자는(==) 타당성이나 일관성이 부족하므로 대부분 일치 연산자(===)를 사용함

    - 주요 연산자
        + : 덧셈
        - : 뺄셈
        * : 곱셈
        / : 나눗셈

        console.log((100 + 100) - (10/2)*4);

    - ++ 연산자
        - 변수++: 변수에서 먼저 값을 꺼내고, 그 다음에 1을 더함
        - ++변수: 변수 값에 1을 더한 값을 꺼냄
        let value1 = 1;
        console.log(value1++ === 2);
        console.log(++value1 === 3);

    - 대입 연산자
        - =으로 데이터를 변수에 대입할 수 있음
        - 다음과 같은 문법도 가능함
        let value10 = 1;
        value10 += 1;
        console.log(value10);
        value10 -= 1;
        console.log(value10);
        value10 *= 5;
        console.log(value10);
        value10 /= 5;
        console.log(value10);
    
    - 논리 연산자
        - !: NOT
        - &&: AND
        - ||: OR
        let value2 = false;
        console.log(!value2);
        let value3 = true && true;
        let value4 = false && true;
        console.log(value3, value4);
        let value5 = true || true;
        let value6 = false || true;
        console.log(value5, value6);

    - 문자열 연산
        - +로 문자열을 합칠 수 있음
        let string = 'Hello';
        console.log(string + ' World!');

    - 조건문
        - 파이썬에서는 탭으로 조건문 내부 실행문을 구분했지만, js는 {}라는 코드 블록으로 내부 실행문을 구분함
        if (조건) {
            코드;
        }
        - 조건문 코드 블록의 코드를 탭으로 indentation을 할 필요는 없음. 다만, 코드 이해를 돕기 위해, 일반적으로 함
        let age = 20;
        if (age > 19) {
            console.log('어른입니다.');
        }
        - if-else 구문도 가능함. else를 다음 줄에 놓든, 코드 블록 닫기와 같은 라인에 놓든 관련 없음
        let age = 20;
        if (age > 19) {
            console.log('어른입니다');
        } else {
            console.log('어른이 아닙니다.');
        }
        - else if도 지원함

    - switch/case 구문도 가능
        - C언어나 JAVA 언어등의 언어에서 지원하는 switch/case 구문 지원
        let month = 1;

        switch (month) {
            case 1:
                console.log('sang');
                break;
            case 2:
                console.log('Feb');
                break;
            default:
                console.log('Not Matched');
        }
        - case 문에서 break를 해주지 않으면, 다음 case 문 및 default 문도 실행하게 됨

    - 함수
        - 기본 문법
        function 함수이름(함수인자) {
            함수 실행 코드
        }
        - 예제
        function FunCoding(name) {
            console.log('HI' + name + '!');
        }
        FunCoding('fun-coding');
        - return 키워드 사용
        function FunCoding(name) {
            return 'Hi, ' + name + '!';
        }
        console.log(FunCoding('fun-coding'));

    - ES6 화살표 함수(Arrow function '=>') 선언
        - 함수 선언을 보다 간단하게 하기 위해 고안된 문법
        - 화살표 함수는 익명 함수임
            따라서, 익명 함수를 호출하기 위해, 변수에 대입하는 경우가 많음
        let func = (함수인자) => expression
        let func = (함수인자) => { statements }
        // 위 일반적인 화살표 함수 문법은 다음 함수 선언과 동일함
        let func = function(함수인자) {
            return expression;
        };
        - 다음과 같은 세 가지 단축 문법 지원
            - function 키워드 생략 가능
            - 함수 인자가 하나 뿐이면, 괄호() 생략 가능
            - 함수 코드가 한 라인이라면, 코드 블록 기호(중괄호) 및 return 키워드 생략 가능
        - 예1: 다음 두 함수 선언은 동일한 선언임
        let f1 = function() {
            return "hello";
        };
        let f1 = () => "hello";
        - 예2: 다음 두 함수 선언은 동일한 선언임
        let f2 = function(age) {
            return age * 2;
        };
        let f2 = age => age * 2;
        console.log(f2(1));
        - 예3: 다음 두 함수 선언은 동일한 선언임
        let f3 = function(item1, item2) {
            return item1 * item2;
        };
        console.log(f3(2,3));
 */