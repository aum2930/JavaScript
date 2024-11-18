console.log("js running...");

/*
let obj = {
    a: 1,
    b: "Harry"
}

console.log(obj);

let animal = {
    eats: true
}

let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal // sets rabbit.[[Prototype]] = animal
*/



class Animal {
    constructor(name){
        this.name = name;
        console.log("Object is created...");
    }
    eats(){
        console.log("Kha raha hu");
    }
    jumps(){
        console.log("Kood raha hu");
    }
}

// by using thisyou extends method you will have all the properties of the Animal calass into the Lion class without overwriting it. This is also known as the Inheritance. 

class Lion extends Animal { 
    constructor(name){
        super(name) // to change the clog of the object instead of printing the same clog of above object you can print your custom clog as well but for that you have to use super() else it will throw an error.
        // this.name = name;
        console.log("Object is created and he is a Lion...");
    }
    eats(){
        super.eats() // this will let print the message of the Animal object as well. it's up to you if you want the linked objects's message too prints then you can do that as well using this super keyword.
        console.log("Kha raha hu roar"); // this is known as over-riding  we are customizing the message of the eats() of the Animal object. 
    }
}


let a = new Animal("Sunny"); // Sunny will go to the name of the constructure and then the name of the constructer will be stored in this.name means animal name.
console.log(a);
console.log(a.eats());
console.log(a.jumps());
console.log(a.name);
 let b = new Lion("Shera")
 console.log(b);
console.log(b.eats());
console.log(b.jumps());
console.log(b.name);


console.log(b  instanceof Lion );  //   b Lion ka hi object hai, kya b name ka object Lion class se bana hai? yes so true means b .
console.log(b  instanceof Animal ); //  yes so true, why? very intereasting thing happens here how? this is saying that does b name ka object Animal se bana hai? but b toh lion se bana hai but Lion class is made form Animal so it will return ture. 
console.log(a instanceof Lion ); // nhi bhai Lion toh badd mai bani so it this will return flase.

