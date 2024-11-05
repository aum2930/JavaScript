/* VERY IMP:

        PROMISE SETTLE MEANS RESOLVE OR REJECT:
  
                RESOLVE MEANS PROMISE HAS SETTLED SUCCESSFULLY.
                REJECT MEANS PROMISE HAS NOT SETTLED SUCCESSFULLY.
*/





// check handwritten notes better explained about this code there.


async function getData() { // making promise inside the getData function.
        let y =  await fetch('https://jsonplaceholder.typicode.com/todos/1') // this will return one promise.
        // .then(response => response.json()) // this ".then" will again return one more promise. jayson mai pass this url contains the network data.
        // .then(json => console.log(json)) // converting this both into await.
        // let data = await y.jason(); // THIS WILL PASS DATA IN JAVA SCRIPT OBJECT FORM.
            let data = await y.text(); //THIS WILL PASS THE DATA INTO TXT FORM AS A STRING.
        console.log(data);
    //   return y;
    }  // THIS FUNCTON FETCHES THE DATA FROM THE BACKGROUND.


 async function wrapper() {
    
    console.log("As I am synchronous in nature I will run 1st.");
    
    console.log("Sequentially I will run after the 1st.");
    
    console.log("I am the 3rd one running.");
    
    let  data = await getData();  // to use await function you need to wrap it into any ansync funciton.
    console.log(data); 
    
    console.log("4th one running after the promise executes.");

    console.log("5th one running after the promise executes.");

    console.log("6th one running after the promise executes.");

}
wrapper()
