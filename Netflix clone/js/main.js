const tab_cont = document.querySelector(".tabs");

tab_cont.addEventListener('click', event => {
    const pressedB = event.target.closest('.tab-item').id;
    mainFunc(pressedB);
})

function mainFunc(id) {
    let newid = id;
    if (newid) {
        removeEffects();
        addEffects(newid);
    }
}

function addEffects(newid1) {
    document.getElementById(newid1).classList.toggle('tab-border');
    document.getElementById(`${newid1}-content`).classList.toggle('show');
}

function removeEffects() {
    let allTabs = document.querySelectorAll('.tab-item');
    let allConts = document.querySelectorAll('.tab-content-item');
    allTabs.forEach(item => item.classList.remove('tab-border'));
    allConts.forEach(item => item.classList.remove('show'));
}