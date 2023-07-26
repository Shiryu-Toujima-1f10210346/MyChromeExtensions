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
    for (let i = 0; i < elements.length; i++) {
        elements[i].dataset.level = Math.floor(Math.random() * 4);
    }   
});
buttonElement.innerText = "Plant!";
buttonElement.style.borderRadius = "5px";
buttonElement.style.background = "#1f71eb";
buttonElement.style.border = "none";
parentElement.appendChild(buttonElement);
console.log("イメージするのは常に最強の自分");