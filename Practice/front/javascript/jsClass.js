/*  
    2. javascript ES6와 클래스
        - ES6에서 다른 언어의 객체 지향 문법과 유사한 class 키워드 기반 객체 생성 문법이 표준화됨
          하지만, 지금까지도 javascript 개발자들은 객체 리터럴을 주로 사용함
            - javascript로 그렇게까지 복잡한 코드를 작성할 일이 없기도 하고, 기존 객체 리터럴 방식에 익숙한 개발자가 많음
              따라서, 객체 리터럴 방식과, class 키워드 기반 객체 생성 문법을 둘 다 알아야함

        - 클래스 정의
            - class 클래스 명{}으로 클래스 정의 가능
            class User {

            }

        - constructor(): 클래스 생성자 함수
            - 클래스 내부에 constructor() 라는 이름으로 하나의 생성자 함수를 작성할 수 있음(function 이라는 키워드를 사용하지 않음)
            class User {
                constructor() {

                }
            }
            - class로 정의된 클래스는 new 클래스명()으로 객체로 생성될 수 있음
            - 클래스 프로퍼티는 constructor 내부에서 this키워드로 선언될 수도 있음
            class User1 {
                constructor() {
                    this.name = "sang";
                }
            }
            const sang = new User1();
            console.log(sang)
            - 객체 생성시 인자 정의는 constructor에서 할 수 있음
            class User1 {
                constructor(name) {
                    this.name = name;
                }
            }
            const sang = new User1('Sane');
            console.log(sang.name);
            - 클래스 내부에 메서드 선언 가능
            class User1 {
                constructor(name) {
                    this.name = name;
                }
                get_message() {
                    return 'hello';
                }
            }
            const sang = new User1('sangmin');
            console.log(sang.get_message());
            console.log(sang.name);
            - 상속도 일반적인 객체 지향 문법과 유사함
                - extends를 사용해서, 상속할 클래스를 선언할 수 있음
                - 자식 클래스에서는 super()(부모 클래스의 constructor()를 호출함)를 consturctor() 안에서 호출 해야함
            
            class Animal {
                constructor(name) {
                    this.name = name;
                }
            }
            class User extends Animal {
                constructor(name, brand) {
                    super(name);
                    this.brand = brand;
                }
            }
            const sang = new User('sangmin', 'Are fun?');
            console.log(sang.name, sang.brand);

            - 객체지향의 다형성(부모 클래스의 메서드명과 동일하지만, 자식 클래스에서 해당 메서드를 덮어씌워 다른 동작을 할 수 있는 기능)도 지원됨
            class Animal {
                constructor(name) {
                    this.name = name;
                }
                get_message() {
                    return 'Hello';
                }
            }
            class User extends Animal {
                constructor(name, brand) {
                    super(name);
                    this.brand = brand;
                }
                get_message() {
                    return 'Hello i am sang';
                }
            }
            const sang = new User('sangmin', 'Are you fun?');
            console.log(sang.name, sane.brand);
            console.log(sang.get_message());

            -hasOwnProperty() 사용법
                - 클래스명.prototype.프로퍼티 = 프로퍼티 값으로도 클래스 외부에서 프로퍼티 추가 가능 (클래스 내부에서 선언하는것을 추천하지만
                    이 케이스를 문법 에러로 막지는 않았음)
                - 클래스 내부에서 선언한 프로퍼티임을 확인하기 위해 hasOwnProperty(프로퍼티명)을 사용할 수 있음
                해당 메서드가 가끔 언급되므로 정리해둬야 함

                class Animal {
                    constructor(name) {
                        this.name = name;
                    }
                    get_message() {
                        return 'Hello';
                    }
                }
                Animal.prototype.age = 10;
                const sang = new Animal('sangmin');
                console.log(sang.name, sang.get_message);
                console.log(sang.hasOwnProperty('name'));
                console.log(sang.hasOwnProperty('age'));
            
*/