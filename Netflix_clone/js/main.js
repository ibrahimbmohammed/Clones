const tab_cont = document.querySelector(".tabs");
// event delegation
tab_cont.addEventListener('click', event => {
    const id = event.target.closest('.tab-item').id;
    mainFunc(id);
})
// passes the id  to other func
function mainFunc(id) {
    let newid = id;
    if (newid) {
        removeEffects();
        addEffects(newid);
    }
}
//adds the tab effect and displays its content
function addEffects(newid1) {
    document.getElementById(newid1).classList.toggle('tab-border');
    document.getElementById(`${newid1}-content`).classList.toggle('show');
}
// removes the tab effect with its content
function removeEffects() {
    let allTabs = document.querySelectorAll('.tab-item');
    let allConts = document.querySelectorAll('.tab-content-item');
    allTabs.forEach(item => item.classList.remove('tab-border'));
    allConts.forEach(item => item.classList.remove('show'));
}