/*
    javascript 배열
    - 파이썬에서 알 수 있듯이, 배열(파이썬의 리스트)이 많이 사용되므로, 배열에 대해 상세히 정리하기로 합니다.

    1. javascript 배열 CRUD
        - 데이터 구조를 다루는 문법을 익힐 때는 기본적으로 CRUD 문법을 확인하면 됨
            C(Create 생성), R(Read 읽기), U(Update 수정), D(Delete 삭제)

        Javascript 배열 생성(CRUD의 Create)
            - 파이썬과 마찬가지로 [] 괄호를 사용하고, 내부에서 아이템을 콤마(,)로 구분해서 넣으면 됨
            - 객체와 마찬가지로, 새로운 배열로 배열 변수의 배열을 덮어씌우는 경우는 많지 않으므로, 배열 변수 선언시 const를 많이 사용함
                const myArray = [1, 2, 'Sang', 100, true];
                console.log(myArray);
            - 배열 길이는 length로 확인 가능
                const myArray = [1, 2, 'Sang', 100, true];
                console.log(myArray.length);
            - 다른 언어와 달리 객체처럼 생성도 가능 // 빈 배열을 객체처럼 선언 후, 다음과 같이 직접 데이터를 넣어줄 수도 있음
                const myArray = new Array();
                myArray[0] = 1;
                myArray[1] = 2;
                myArray[2] = "Sang";
                console.log(myArray);
        Javascript 배열 읽기(CRUD의 Read)
            - 파이썬과 마찬가지로 0번 부터 시작하는 인덱스 번호로 각 아이템을 읽을 수 있음
                const myArray = [1, 2, 'Sang', 100];
                console.log(myArray[0]);
                console.log(myArray[myArray.length - 1])
        Javascript 배열 수정(CRUD의 Update)
            - 파이썬과 마찬가지로 인덱스 번호로 각 아이템을 수정할 수 있음
                const myArray = [1, 2, 'Sang', 100];
                myArray[0] = 'Are we?';
                console.log(myArray);
        Javascript 배열 삭제 (CRUD의 Delete)
            - 배열변수.splice(삭제를 시작할 인데스 번호, 삭제를 시작할 인덱스 번호부터 몇 개를 삭제할 지의 갯수)
                const myArray = [1, 2, 'Sang', 100];
                myArray.splice(1,1);
                console.log(myArray);
    
    2. 특별한 형태의 javascript 배열
        - 파이썬에서 파이썬 리스트 안에, 또 다른 리스트 또는 사전 데이터가 들어갈 수 있는 것 처럼, javascript 배열도 다양한 형태의 배열이 가능함
            //다양한 데이터 타입을 아이템으로 가질 수 있음
            const data1 = [10, 5, 'Sang', null];
            //여러 라인으로 선언 가능
            const data2 = [
                "Sangmin",
                "Are we?",
                1
            ];
            // { } 괄호는 객체 리터럴을 통한 객체로 인지하며, 객체도 아이템으로 선언 가능
            const data3 = [
                { name: "SSang", age: 20},
                { name: "Alex", age: 40}
            ];
            // 배열 안에 배열도 가능
            const data4 = [
                [10, 20, 30],
                [40, 50, 60]
            ];
            console.log(data1);
            console.log(data2);
            // 개별 아이템이 객체일 경우, 인덱스 번호로 객체의 프로퍼티도 접근 가능
            console.log(data3);
            console.log(data3[0].name);
            // 개별 아이템이 별도 배열일 경우, 인덱스 번호로 배열 안의 배열 접근 가능
            console.log(data4);
            console.log(data4[0][0]);
    3. 다양한 배열 관련 기능(함수)
        - push
            배열의 끝에 아이템 추가
                const myArray = [1, 2, 'Sang', 100];
                myArray.push(5);
                console.log(myArray);

        - pop
            배열의 끝에 있는 아이템을 리턴해주고, 해당 아이템은 배열에서 삭제
                const myArray = [1, 2, 'Sang', 100];
                let data = myArray.pop();
                console.log(myArray);
                console.log(data);
        - shift
            배열의 첫 번째 아이템을 삭제하고, 뒤에 있는 아이템을 앞으로 당김
                const myArray = [1, 2, 'Sang', 100];
                myArray.shift();
                console.log(myArray);
        - concat
            const myArray1 = [1, 2];
            const myArray2 = ['Sang', 100];
            let myArray = myArray1.concat(myArray2);
            console.log(myArray)
        - join
            - 아이템 사이에 특정 문자열을 넣어서, 모든 아이템을 합쳐서, 하나의 문자열로 만들어줌
                - 다음 코드에서 myArray가 let으로 선언된 이유
                    let myArray = [1, 2, 'Sangmin', 100];
                    myArray = myArray.join('|');
                    console.log(myArray, typeof myArray);
        - reverse
            - 배열을 역순으로 배치
                - 함수 호출시, 역순으로 배치한 배열을 리턴하는 것이 아니라, 현재 배열을 변경함
                    let myArray = [1, 2, 'Sang', 100];
                    myArray.reverse();
                    console.log(myArray);
        - slice
            - 배열의 일부분 반환
                - slice(a, b): a 아이템 인덱스부터 시작해서, b-1 아이템 인덱스까지 추출
                    let myArray = [1, 2, 'Dave', 100];
                    myArray.slice(0, 1);
                    console.log(myArray.slice(0, 2));
        - forEach
            - for문을 대체해서, 간단히 배열의 각 아이템을 가져올 수 있는 함수
                let myArray = [1, 2, 'Sang', 100];
                myArray.forEach(item => {
                    console.log(item)
                });
        - map
            - 배열의 각 아이템에 정의한 함수를 적용해서, 새로운 배열을 리턴하는 함수
                const myArray1 = [1, 2, 5, 10];
                const myArray2 = myArray1.map(item => item * 2);
                console.log(myArray2);
        - indexOf
            - 배열에서 지정한 데이터가 위치한 인덱스 번호를 리턴
                let myArray = [1, 2, 'Sang', 100];
                let index = myArray.indexOf('Sang');
                console.log(index);
        - findIndex
            - 배열의 아이템이 객체일 경우, 해당 객체에서 지정한 데이터 위치를 찾을 수 있는 방법을 제공
                const myArray = [
                    {
                        id: 1,
                        name: 'Sang min'
                    },
                    {
                        id: 2,
                        name: 'Alex'
                    }
                ];
                console.log(myArray.indexOf('Alex'));
                console.log(myArray.findIndex(item => item.name === 'Alex'));
        - find
            - findIndex 와 유사하지만, 지정한 데이터 위치치를 리턴하는 것이 아니라, 지정한 데이터가 들어 있는 객체를 리턴함
                const myArray = [
                    {
                        id: 1,
                        name: 'Sang min'
                    },
                    {
                        id: 2,
                        name: 'Alex'
                    }
                ]
                console.log(myArray.indexOf('Alex'));
                console.log(myArray.findIndex(item => item.name === 'Alex'));
                console.log(myArray.find(item => item.name === 'Alex'));
        - filter
            - 배열에서 특정 조건에 맞는 아이템만 추출할 때 사용하는 기능
                let myArray = [1,2,3,4,5,6,7,8,9];
                let even = myArray.filter(item => item % 2 === 0);
                console.log(even);
        
*/