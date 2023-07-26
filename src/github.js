function plantGrass (){
    let elements = document.querySelectorAll('[data-level]');
    for (let i = 0; i < elements.length; i++) {
        elements[i].dataset.level = Math.floor(Math.random() * 4);
}   
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("grassButton").addEventListener("click", function() {
      plantGrass();
    });
  });
  