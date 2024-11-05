console.log("js running...");


/*-------------------------------------
function asyncfunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncfunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

console.log("fetching data1...");
 p1 = asyncfunc1();
 p1.then((res) =>{
    console.log(res);
 });

console.log("fetching data2...");
 p2 = asyncfunc2();
 p2.then((res) =>{
    console.log(res);
 });
------------------------------------------------*/   // in this case both data1 and data2 were coming together but I want that data2 comes with some delay. eg in instagram ke database mei  when username mila then password ke liye search karo. will do this by chaining means ek then ke ander another than.


function asyncfunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncfunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

console.log("fetching data1...");
asyncfunc1().then(() => {
    console.log("fetching data2...");
    asyncfunc2()
});    // this is known as promise chaining. inwhich in one than we used abother then.


