function copyFunction() {
    navigator.clipboard.writeText('g.van.loon@sintlucasedu.nl');
}

backgroundImages = ['noise_1', 'noise_2', 'noise_3', 'noise_4', 'noise_5'];

function randomBackground() {
    randomIndex = Math.floor(Math.random() * backgroundImages.length);
    
    currentBackground = backgroundImages[randomIndex];

    document.getElementsByClassName('noise').style.background = "url(/Images/${currentBackground})";

    // https://www.youtube.com/watch?v=1YjybCS4B2U
    // https://www.youtube.com/watch?v=OiSekG3DHbg
}