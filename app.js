let count = 0; 

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
            if(click = "decrease"){
                value.style.color = "red";
            }
        }
        else if(styles.contains('increase')){
            count++;
            if(click = "increase"){
                value.style.color = "green";
            }
        }
        else{
            count = 0;
            if(count === 0){
                value.style.color = "black";
            }
        }
        value.textContent = count;
    })
})