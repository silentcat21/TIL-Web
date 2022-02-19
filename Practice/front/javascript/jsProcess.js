/*
    일반적인 언어와 달리 javascript의 특이하게 동작하는 케이스가 있어서, 이에 대해 명확히 이해할 필요가 있음

    1. Hoisting (호이스팅) 이슈
        - 호이스팅이란, '끌어 올린다'는 의미
        - 일반적인 언어는 함수, 변수를 선언한 후, 이후 라인에서 해당 함수와 변수를 사용할 수 있으나,
          javascript에서는 함수 또는 변수 선언 전에 해당 함수 또는 변수를 사용해도 에러를 내지 않는 현상을 의미함

        - var 키워드
            - var 키워드는 let과 같이 변수 선언에 쓰이는 키워드로, let과 달리 동일한 이름의 변수를 여러번 선언할 수 있음
                - var 키워드는 참고로만 알아두고, 쓰지 않도록 함
                var a = 1;
                var a = 2;
                console.log(a);
        - 호이스팅 현상과 이유
            - 호이스팅 현상은 var 키워드와 함수 선언에서만 일어남
            console.log(a);
            a = 10;
            console.log(a);
            var a = 20 ;

            - 함수의 경우도 동일
            getData();
            function getData() {
                console.log('he');
            }

        - 호이스팅 이유
            - Javascript는 함수와 변수 선언을 실행 전, 실행 영역의 맨 앞으로 이동해서 실행함
            - Javascript의 변수에 대한 실행 lifecycle은 다음과 같음
                - 선언 (var a;) > 초기화 (a=1;) > 사용 (a += 1;)
                - Javascript에서 선언과 초기화 문법을 동시에 쓸 수 있음(var a = 1;)
                - 하지만, 내부적으로는 Javascript는 함수와 변수 선언 부분만 분리해서, 실행 영역 맨 앞으로 이동해서 실행함
                - 따라서, 호이스팅 현상이 일어난 변수는 변수를 선언만 한 상태이기 때문에, 아직 값이 초기화되지 않아서, 해당 변수는 undefined가 들어가 있게 됨

        - 해결 방안
            1. 변수 선언의 경우, var 키워드는 쓰지 않고, let과 const만 사용할 것
                - codesandbox에서는 let과 const도 하위호환을 위해, var로 변환되어 실행되기 때문에, 동일한 호이스팅 현상을 볼 수 있음
            2. 함수 선언의 경우 함수 표현식으로 사용할 것
                - 함수 선언문과 함수 표현식
                    function getData() {
                        console.log('hello');
                    }
                    //함수 표현식
                    let getData = () => {
                        console.log('garg');
                    }
            ?? 기본과정에서 특히 쓰이지도 않는 var 키워드의 이상현상을 이해하는 이유는 기존에 작성된 상당량의 코드들이 var키워드를 사용하고,
            함수는 아직도 유사한 현상을 볼 수 있으므로, 알고 있어야 함

    2. Scope
        - scope 란 javascript 변수 또는 함수 선언 시, 해당 변수 또는 함수가 유효한 범위를 의미함
        - javascript scope는 다음과 같이 3가지 scope가 있음
            - Global (전역) scope: 코드 전체 범위
            - Function (함수) scope: 함수 내에서의 범위
            - Block (블록) scope: {} 괄호로 이루어진 블록 내에서의 범위
        - 일반적인 프로그래밍 언어는 전역 scope, 함수 scope로 나눠지는데 반해서, javascript는 블록 scope가 추가로 있고, 선언에 따라 유효 범위가 다르므로, 이해할 필요가 있다.

        - 전역 scope
            - 블록 또는 함수 안에서 선언되지 않고, 외부에서 선언된 변수/함수로 함수 또는 블록 포함 모든 코드에서 사용 가능

        - let과 const는 블록 scope
            - 블록 scope는 {}로 이루어진 영역을 의미함
            - let과 const로 선언된 변수는 블록 안에서 선언이 되었다면, 블록 밖에서는 유효하지 않음
                {
                    const name = 'Sang';
                    console.log(name);
                }
                console.log(name);
            - 블록 밖에서 let과 const로 선언된 변수는 블록 안에서도 유효함
                let name = 'Sang';
                {
                    console.log(name);
                }
                console.log(name);
            - 블록 안에서 또 다른 블록이 있을 수 있음
                {
                    let ame = 'sangmin';
                    {
                        console.log(ame);
                    }
                }
                console.log(ame);
            - if와 for 문에서도 블록을 사용하고 있으므로, 해당 블록 안에서 let 또는 const로 선언된 변수들은 블록 scope가 적용됨
                const item1 = 1;
                if (item1 === 1){
                    let item2 = 2;
                    console.log(item2);
                }
                console.log(item2);
            - 함수 선언도 마찬가지로 함수 내부에서 선언된 함수는 외부에서 호출할 수 없음
                var ame = 'sang';
                function getName () {
                    console.log(ame);
                    function show() {
                        console.log('gege');
                    }
                    show() //선언된 함수 안에서 호출 가능
                }
                getName();
                show();
                console.log(ame);
        - var 키워드와 함수 scope
            - var 키워드는 함수 scope를 가짐
            - 함수 안에서 var 키워드로 선언된 변수는 함수 외부에서는 유효하지 않지만, 블록 안에서 var 키워드로 선언된 변수는
              블록 외부에서도 유효함(이를 함수 scope라고 함)
            - 블록 외부에서 var 키워드로 선언된 변수는 당연히 블록 안에서도 참조 가능
            - 함수 안에서 var키워드로 선언된 변수는 함수 외부에서는 참고 불가(일반적인 프로그래밍 언어와 동일)
            - 함수가 아니라, 블록 안에서 var키워드로 선언된 변수는 블록 외부에서 선언된 변수와 동일하게 취급됨(블록은 무시함)
                {
                    var ame = 'Sa';
                    console.log(ame);
                }
                console.log(ame); // let, const에서는 에러
        
        - 전역변수와 지역변수
            - 함수에서 선언된 변수를 지역 변수라고 하며, 전역 scope를 가진 변수를 전역 변수라고 함
                - 동일한 이름을 가진 전역 변수와 지역 변수가 있으면, 함수 안에서는 지역 변수를 우선해서 사용
*/