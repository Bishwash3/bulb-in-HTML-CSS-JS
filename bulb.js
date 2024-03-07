let bulb = document.querySelector(".bulbSection");
let btn = document.querySelector("#bulbBtn");
let btnWork = 0;

btn.addEventListener('click',function(){
    if(btnWork == 0){
        bulb.style.backgroundColor = "yellow";
        btn.innerHTML = 'OFF';
        btnWork = 1;
    }
    else{
        bulb.style.backgroundColor = "white";
        btn.innerHTML = 'ON';
        btnWork = 0;
        
    }
})