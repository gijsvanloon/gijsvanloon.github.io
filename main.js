// copy email funciton
function copyFunction() {
    navigator.clipboard.writeText('g.van.loon@sintlucasedu.nl');
}

// random background function

backgroundImages = ['Images/noise_1.gif', 'Images/noise_2.gif', 'Images/noise_3.gif', 'Images/noise_4.gif', 'Images/noise_5.gif'];

function randomBackground() {
    randomIndex = Math.floor(Math.random() * backgroundImages.length);
    
    currentBackground = backgroundImages[randomIndex];

    test = 'url(' + currentBackground + ')';

    document.getElementById('noise').style.background = `url(${currentBackground})`;
}

// cursor function
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})