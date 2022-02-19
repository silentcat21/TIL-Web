function func1(callback) {
    setTimeout(() => {
        console.log("1");
        setTimeout(() => {
            console.log("2");
            setTimeout(() => {
                callback();
            }, 1000);
        }, 1000);
    }, 1000);
}
function func2() {
    console.log("3");
}
func1(func2);