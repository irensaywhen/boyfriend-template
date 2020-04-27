function slideIfVisible(target){
    let distanceFromTop = target.getBoundingClientRect().top + window.scrollY + (target.offsetHeight / 2)
    if (distanceFromTop < window.scrollY + window.innerHeight){
        target.classList.add('loaded');
    }
}