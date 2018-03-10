const countdown = document.querySelector('.countdown');

//set launch date
const launchDate = new Date('Sat Mar 10 2019 11:41:02').getTime();

const intv = setInterval(() => {

    const dateNow = new Date().getTime();

    //set the difference
    const diff = launchDate - dateNow;

    // Time calculation
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdown.innerHTML = `
<div>${days}<span> days</span></div>
<div>${hours}<span> hours</span></div>
<div>${mins}<span> mins</span></div>
<div>${seconds}<span> seconds</span></div>
    `


}, 1000);