// document.getElementById("grassButton").addEventListener("click", function() {
//     let elements = document.querySelectorAll('[data-level]');

//     for (let i = 0; i < elements.length; i++) {
//         elements[i].dataset.level = Math.floor(Math.random() * 4);
// }   
//     console.log("hoge");
// });
let parentElement = document.getElementById("year-list-container");
let buttonElement = document.createElement("button");
buttonElement.addEventListener("click", function() {
    let elements = document.querySelectorAll('[data-level]');
    let sum = 0;
    for (let i = 0; i < elements.length; i++) {
        let random = Math.floor(Math.random() * 4);
        elements[i].dataset.level = random;
        sum += random;
    }   
    
    //let xpathResult = document.evaluate('//*[@id="user-profile-frame"]/div/div[3]/div/div[1]/div[1]/div[1]/h2', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    let hoge = document.querySelector("h2[class='f4 text-normal mb-2']");
    //let element = xpathResult.singleNodeValue;
    let year = hoge.innerText.split(" ")[3];
    hoge.innerText = sum*4 + " contributions in " + year;
});
buttonElement.innerText = "Plant!";
buttonElement.style.borderRadius = "5px";
buttonElement.style.background = "#1f71eb";
buttonElement.style.border = "none";
buttonElement.style.margin = "10px";
parentElement.insertBefore(buttonElement, parentElement.firstChild);
console.log("イメージするのは常に最強の自分");

