/*
    1. 삼항 연산자
    - 간결한 문법으로, 자주 사용될 수 있음
    ## 개인적으로는 간결한 문법보다는 선명하게 이해할 수 있는 문법을 선호하지만, javascript 개발자들 사이에서 가끔 사용됨
        - 문법
            condition ? exprIfTrue : exprIfFalse
        - 예제
            - 삼항 연산자를 안쓸 시의 코드
                const myArray = [1, 2];
                let descMyArray = '';

                if (myArray.length === 0) {
                    descMyArray = '빈 배열';
                } else {
                    descMyArray = '아이템이 있는 배열';
                }
                console.log(descMyArray);
            - 동일한 동작을 하는 코드를 삼항 연산자로 작성시
                const myArray = [1, 2];
                let descMyArray = myArray.length === 0 ? '빈배열':'아이템이 있는 배열';
                console.log(descMyArray);
    2. 함수의 기본 인자(파라미터) 값 설정
    - ES6에서 나온 문법으로, 인자 값을 넣지 않을 시, 디폴트로 인자에 넣어지는 값을 설정할 수 있음
        - 인자 값을 넣지 않을 시의 이슈
            function printName(name) {
                console.log(name);
            }
            printName()
        - 디폴트 인자 값 설정
            function printName(name='Sang') {
                console.log(name);
            }
            printName();
            printName('Alex');
    3. 구조 분해 할당 (비구조화 할당) 문법
        - 이름만 보면 이해하기 어려운 구조 분해 할당은 배열이나 객체의 속성을 해체해서, 값을 개별 변수에 대입할 수 있게 하는 문법
        - 파이썬의 리스트처럼, javascript에서는 객체 리터럴 기반 객체와 배열이 가장 많이 사용되는 데이터 구조이며, 구조 분해 할당은 배열을 좀 더 쉽게 다루는 문법으로 이해
        - 객체 구조 분해 할당
            let data = {
                name: 'Sang',
                age: 20
            };
            let { age, name } = data; //동일한 프로퍼티명을 써줘야 해당 프로퍼티에 맞는 값이 대입됨
            console.log(name, age);
            // 프로퍼티명과 다른 변수명을 사용하고자 할 경우, 대입할 프로퍼티명: 다른 변수명의 형태로 써줘야 함
            let { name: myName, age: myAge } = data;
            console.log(myName, myAge);
            // 꼭 객체의 모든 프로퍼티를 가져올 필요는 없고, 객체의 프로퍼티 중 가져오고 싶은 데이터만 가져올 수 있음
            let { name: myName2 } = data;
            console.log(myName2);

            - 가져올 프로퍼티가 정의되 있지 않을 경우에는 디폴트 값으로 대입하게끔도 할 수 있다
                let data = {
                    name: 'Sang',
                    age: 20
                };
                let { name, hobby='coding' } = data;
                console.log(name, hobby);
            - 가져올 프로퍼티명을 다른 변수에 저장하되, 해당 프로퍼티명이 객체 안에 없을 경우, 다른 변수에 디폴트 값을 대입하기
                let data = {
                    name: 'Sang',
                    age: 20
                };
                let { name, age: myAge = 25, hobby= 'coding'} = data;
                console.log(name, myAge, hobby);
            
        - 배열 분해 할당
            - 배열의 각 아이템을 별도 변수에 할당하는 문법
                let myArray = [1, 2, 3, 4];
                let [first, second, third, fourth] = myArray;

                console.log(first, second, third, fourth);
                // 배열의 일부만 추출 가능, 첫 번째 아이템부터 대입, 대입할 변수가 없을 경우는 대입하지 않음(undefined)
                let [data1, data2] = myArray;
                console.log(data1, data2);
                //컴마를 통해, 필요하지 않은 아이템을 건너 뛸 수 있음
                let myArray3 = ['Sang', 'Min', 'Choi'];
                let [value, , value3] = myArray3;
                console.log(value1, value3);
            - ...를 통해, 나머지 요소를 한번에 가져올 수도 있음
                let myArray = ['Sang', 'Min', 'Choi', 'Coding'];
                let [item1, item2, ...item3] = myArray;
                console.log(item1);
                console.log(item2);
                console.log(item3);
            - 객체와 마찬가지로 기본값을 설정할 수도 있음
                let myArray1 = [10, 20];
                let [item1, item2= 10, item3= 20] = myArray1;
                console.log(item1, item2, item3);
    - 유용한 구조 분해 할당 문법 활용 팁
        - 변수값 교환하기
            let a = 1;
            let b = 2;
            [a, b] = [b, a];
            console.log(a, b)
        - 함수 리턴 시 여러 데이터 넘겨주기
            function getData() {
                return [10, 20];
            };

            let [a, b] = getData();
            console.log(a, b);
        - 문자열 분리해서, 각각의 변수에 대입하기
            - split()
                - 파이썬과 달리, 구분할 인자를 넣어주지 않는다고 해서, 디폴트로 ''로 구분되지는 않으므로, 명시적으로 ''를 인자로 넣어줘야 함
                let data = 'Choi Sang, Min'
                console.log(data.split(' '));
                console.log(data.split(','));
                - split()으로 문자열 분리해서, 각각의 변수에 대입하기
                let data =  'Sang min';
                let [f, s] = data.split(' ');
                console.log(f, s);
    4. Rest 파라미터
        - Rest 파라미터는 함수 인자 선언 앞에 ...을 붙여서 정의하는 문법
        - 해당 함수에 전달된 인자 리스트는 하나의 배열로 해당 변수에 넣어짐
        function getData(...rest) {
            console.log(rest);
            //typeof rest 실행시는 object로 출력되므로, Array.isArray() 의 경우 인자값이 배열이면 true를 리턴하므로,
            // 이를 사용해서 해당 변수가 배열임을 확인
            console.log(Array.isArray(rest));
        }
        getData(10,20,30,40,50,60);

        - 인자의 수 만큼 순차적으로 인자값이 대입되고, 나머지만 배열로 대입
            function getData(a, ...rest) {
                console.log(a);
                console.log(rest);
                // typeof rest 실행시는 object로 출력되므로, Array.isArray()의 경우 인자값이 배열이면 true
                console.log(Array.isArray(rest));
            }
            getData(10, 20, 30, 40, 50);

        - ...변수는 함수의 맨 마지막에 나와야 함
    
    5. Spread 파라미터
        - Rest 파라미터와 마찬가지로 ...을 붙여서 정의하는 문법
        - iterable 한 변수 앞에 붙여서, 해당 변수의 데이터를 개별 아이템으로 분리함
            - iterable 이란 반복 가능한 객체를 의미하며, 배열, 문자열 등을 의미함
            let myArray = [1, 2, 3];
            console.log(...myArray);

        - Spread 파라미터 사용이 유용한 경우
            - 함수 인자에 맞춰, 배열의 각 아이템을 대입하고 싶을 경우
            function func(a, b, c) {
                console.log(a);
                console.log(b);
                console.log(c);
            }
            const data = [1, 2, 3];
            func(...data);
            - 기존 배열로 새로운 배열 구성하기
            const myArray1 = [1, 2, 3];
            const myArray2 = [...myArray1, 4, 5, 6];
            console.log(myArray2);
*/