var buttons = document.querySelectorAll(".button");
var result = document.getElementById("result");
buttons.forEach(function(item){
    item.addEventListener("click", function(){
        result.innerHTML += item.innerHTML;
    })
})
var clear = document.getElementById("clear").addEventListener('click', function(){
    result.innerHTML = "";
})
var back = document.getElementById('back');
back.addEventListener('click', function(){
    result.innerHTML = result.innerHTML.slice(0, -1);
})
var shift = document.getElementById('shift');
var shifted = false;
shift.addEventListener("click", function(){
    if(shifted == false){
        buttons.forEach(function(element){
            element.innerHTML = element.innerHTML.toUpperCase();
        })
        shifted = true; 
      } else if (shifted == true){
        buttons.forEach(function(element){
            element.innerHTML = element.innerHTML.toLowerCase();
        })
        shifted = false;
    }
})
var ok = document.getElementById('go').addEventListener('click', function(){
    window.location.href = ('../index.html')
})