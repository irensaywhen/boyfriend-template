

function next(button){

    let target = button.dataset.target;
    const direction = button.dataset.direction;
    let counter = direction === "next" ? 1 : -1
    let next = parseInt(button.dataset.target) + counter;
    if((target === '3' && direction != "previous") || next < 1){
        return false;
    } else{
        console.log(target)
        document.getElementById(`signUp${target}`).classList.toggle('nodisplay');
        document.getElementById(`signUp${next}`).classList.toggle('nodisplay');
    }
  
}
