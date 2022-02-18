/*
    1. 객체
        - Javascript도 파이썬과 마찬가지로 대부분의 기능은 내부적으로 객체로 다루어짐
        - Javascript 객체는 프로퍼티(일종의 변수)와, 메서드(일종의 함수)로 이루어질 수 있다고 이해하면 됨
            - Javascript 객체의 프로퍼티는 보통 프로퍼티 키(key)와 프로퍼티 값(value)로 이루어져 있다고 이야기 함
            - 파이썬은 보통 객체를 속성(attribute: 일종의 변수)와 메서드(method: 일종의 함수)로 이루어져 있다고 이야기 함
            - CSS는 프로퍼티(property)로 이루어져 있고, 각 프로퍼티에 대응하는 프로퍼티 값으로 이루어져 있다고 이야기 함
            - HTML은 속성(attribute)과 속성 값을 가질 수 있다고 이야기 함

    1.1 Javascript객체 프로퍼티(property)와 메서드(method)
        - 프로퍼티는 프로퍼티 키(key)와 프로퍼티 값(value)으로 구성
        - 프로퍼티 키는 보통 문자열 또는 심볼(Symbol) 값으로 구성되고, 프로퍼티 값은 해당 키에 저장하고자 하는 데이터가 들어가 있음
        - 메서드는 일반 함수와 구분하여, 객체가 가지고 있는 함수를 일컬음
        - Javascript 객체 생성 방법
            - 객체 리터럴 방식
            - new Object()로 생성하는 방식
            - 생성자 함수로 생성하는 방식
    
    1.2 Javascript 객체 생성 방법1: 객체 리터럴
        - Javascript는 클래스 기반 객체 지향 언어가 아니고, 프로토타입 기반 객체 지향 언어이기 때문에, 객체 생성
          방식이 일반적인 클래스 기반 객체 지향 문법과 달랐음. 이를 객체 리터럴이라고 부름.
        - Javascript 개발자 세계에서는 객체 리터럴 방식을 기존부터 많이 써오고 있으므로, 객체 리터럴 방식과 함께
          ES6에서 클래스 기반 객체 생성 문법을 지원하고 있으므로, 두 가지 방식을 익혀두고, 사용하기로 함(나머지는 참고)
        - 객체 생성 방법: {}괄호 안에 프로퍼티 키: 프로퍼티 값으로 필요한 프로퍼티를 정의하면 됨
            JSON, 파이썬 사전(dictionary)와 유사함
        const 객체이름 {
            프로퍼티 키: 프로퍼티값,
            프로퍼티 키: 프로퍼티값,
            프로퍼티 키: 프로퍼티값
        };
        - 참고
            - 객체이름 선언 시에는 보통 const를 사용함
            - const 선언 시 객체이름은 다른 객체로 재할당되지 않음 (객체에 할당된 주소값이 변경될 수 없기 때문)
                단, 객체 내부의 프로퍼티, 메서드 등은 변경될 수 있음 (객체에 할당된 주소값 자체와는 관련이 없기 때문)
            - 객체 주소값도 변경이 될 수 있다면(즉, 객체 변수 저장된 객체를 다른 객체로 재할당도 가능해야할 시에는) let을 사용

            - 주요 사용법
        - 주요 사용법
            - 객체 프로퍼티 값 가져오기
            const user = {
                age: 10,
                name: "sang"
            };
            console.log(user);
            console.log(user.age);
            console.log(user.name);
            user.age = 20;
            console.log(user.age);

            - 객체에 메서드 선언하기
            const user = {
                age: 10,
                name: "sang",
                get_data: function() {
                    return 1 + 2
                }
            };
            console.log(user.age);
            console.log(user.name);
            console.log(user.get_data());

            - 빈 객체 선언 후, 프로퍼티와 메서드 추가 가능
            const user = {};
            user.name = 'sang';
            user.age = 10;
            user.get_data = () => return 1 + 2;
            console.log(user);
            console.log(user.name);
            console.log(user.age);
            console.log(user.get_data());

            - 객체 안에 객체 생성 가능
            const user = {
                age: 10,
                name: 'sang',
                details: {
                    hobby: 'coding',
                    major: 'japanese',
                    get_details: function(item) {
                        return item;
                    },
                },
                get_data: function() {
                    return 1 + 2
                }
            };
            console.log(user.age);
            console.log(user.name);
            console.log(user.get_data());
            console.log(user.details.hobby);
            console.log(user.details.get_details(1));
    
        - 객체 리터럴 사용시 유의사항
            - 객체 리터럴과 this 키워드
                this 키워드는 자신의 객체를 가리킴
                const user = {
                    age: 10,
                    name: "sang",
                    details: {
                        hobby: 'coding',
                        major: 'japanese',
                        get_hobby: function() {
                            return this.hobby;
                        }
                    },
                    get_name: function() {
                        return this.name;
                    }
                };
                console.log(user.age);
                console.log(user.get_name());
                console.log(user.details.get_hobby());
            
            - 객체 메서드 선언에 화살표 함수를 사용해도 됨
            const user = {
                age: 10,
                name: 'sang',
                get_data: () => 1 + 2
            };
            console.log(user.age);
            console.log(user.name);
            console.log(user.get_data());

            - 화살표 함수에서는 this가 없음
                - 기본적으로 화살표 함수가 가리키는 this는 function이 가리키는 this와 다르지만, 사용하지 않는 편이 헷갈리지 않고 좋음

        - getter 와 setter
            - 클래스 기반 객체 지향 문법에서는 클래스 내부 변수를 외부에서 어느 범위까지 접근할 수 있을지를 지정하는 문법을 제공
                - public, private, protected 와 같은 키워드 제공
                - 정보 은닉(information Hiding)과 캡슐화 컨셉과 관련 있음
            - javascript 객체 리터럴에서는 이와 유사한 기능으로 getter와 setter 기능을 제공
                - 'getter(획득자)'와 'setter(설정자)' 메서드로 표현
                - 메서드를 포함해서, 전체를 프로퍼티라고 할 때, 프로퍼티를 데이터 프로퍼티(일반적인 프로퍼티), 접근자 프로퍼티(getter 와 setter)로 나누기도 함
                - getter는 프로퍼티 값을 접근할 때(읽을 때) 호출되는 메서드
                - setter는 프로퍼티 값을 수정할 때(설정할 때) 호출되는 메서드
            - 사용법
                - getter는 선언시 인자가 없어야 하고, setter는 선언시 인자가 반드시 하나 있어야 함
                get prop(인자없음) {

                }
                set prop(한개의 인자) {

                }
                - 예제
                    - getter는 함수처럼 괄호를 붙이지 않고, 프로퍼티처럼 호출
                    - setter는 함수처럼 괄호를 붙이지 않고, '='을 사용해서 값을 대입
                    const user = {
                        age: 10,
                        name: 'sang',

                        get get_age() {
                            return this. age
                        },
                        set set_age(value) {
                            this.age = value;
                        }
                    };
                    console.log(user.get_age);
                    user.set_age = 20;
                    console.log(user.get_age);
    
    1.2 new Object()로 생성하는 방식
        - 기본 객체인 Object()를 기반으로 생성하는 방식
          참고로만 알아둠, ES6 이전 javascript 언어조차, 객체 리터럴 방식을 권장
          */


/*  
    2. javascript ES6와 클래스
        - ES6에서 다른 언어의 객체 지향 문법과 유사한 class 키워드 기반 객체 생성 문법이 표준화됨
          하지만, 지금까지도 javascript 개발자들은 객체 리터럴을 주로 사용함
            - javascript로 그렇게까지 복잡한 코드를 작성할 일이 없기도 하고, 기존 객체 리터럴 방식에 익숙한 개발자가 많음
              따라서, 객체 리터럴 방식과, class 키워드 기반 객체 생성 문법을 둘 다 알아야함

        - 클래스 정의
            
*/