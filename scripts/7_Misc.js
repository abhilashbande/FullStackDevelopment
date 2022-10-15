// let and var
function Test() {
    for (var i = 0; i < 3; i++) {
        console.log(i);
    }

    console.log("After the loop i = " + i);

    for (let j = 0; j < 3; j++) {
        console.log(j);
    }

    //console.log("After the loop j = " + j);
}

Test();

// Arrow Functions

function DisplayMsgUsingFunction() {
    console.log("This message is displayed using function");
}

const DisplayMsgUsingArrow = () => {
    console.log("This message is displayed using arrow function");
};

DisplayMsgUsingFunction();
DisplayMsgUsingArrow();

const arr = [10, 20, 30, 40, 50, 60];
const [, a, , b] = arr;

console.log(a + " " + b);

const newarr = [...arr, 70, 80, 90];
console.log("Old arr = " + arr);
console.log("New arr = " + newarr);
