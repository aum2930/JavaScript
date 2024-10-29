
const fn = () => {
  console.log("Nothing")
}


const callback = (arg, fn) => {
    console.log(arg);
}


const loadScript = (src, callback, fn) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("sc variable is loaded"), fn();
    document.head.append(sc);
    // document.querySelector(".my-container").append(sc); // Appends to a specific div
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback, fn)

