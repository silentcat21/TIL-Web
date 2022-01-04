function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("sang", 10);

function plus(a, b){
    console.log(a + b);
}

function divide(a, b) {
    console.log(a/b);
}
divide(2, 13)
plus(1, 3)

const player ={
    name: "sang",
    say: function (ab) {
         console.log("hello! " + ab);
    },
}

console.log(player.name);
player.say("sangmin")