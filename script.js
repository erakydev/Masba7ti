var tasbih = JSON.parse(localStorage.getItem("tasbih"));
var value = tasbih ? tasbih.title : null;
var title = value;
var value2 = tasbih ? tasbih.startValue : null;
var startValue = value2;
var value3 = tasbih ? tasbih.targetValue : null;
var targetValue = value3;
var value4 = tasbih ? tasbih.reminder : null;
var reminder = value4;  
var value5 = tasbih ? tasbih.note : null;   
var note = value5;
let count = parseInt(localStorage.getItem('tasbihCount')) || startValue;
const input = document.getElementById('inputy');
const button = document.querySelector('.add1');
var progressBar = document.querySelector('.bakprogress');
var canplay = true;

var sot = document.querySelector('.sound');

if (sot) {
    sot.onclick = function () {
        canplay = !canplay;

        console.log("canplay =", canplay);

        if (canplay) {
            this.style.opacity = "1";
        } else {
            this.style.opacity = "0.5";
        }
    };
}

var totalClicks = targetValue; // Total number of clicks required to complete the tasbih

var sound = new Audio('assets/tasbih.mp3'); // Click sound effect
var sound2 = new Audio('assets/finish.mp3'); // Completion sound effect
var nav = document.querySelector('.nav-bar');
var down = document.querySelector('.down');
var menu= document.querySelector('.menu');
// Retrieve and set initial progress from localStorage
const savedProgress = localStorage.getItem('tasbihProgress') || '0%';
progressBar.style.width = savedProgress;

// Set initial value
input.value = count;
updatePlaceholder();

button.addEventListener('click', function () {                                                       
    count++;
    input.value = count;
    localStorage.setItem('tasbihCount', count); // Save to localStorage
    if (canplay == true) {
        sound.currentTime = 0; // Reset sound to the start if clicked repeatedly
        sound.play(); 
    }
    else{
        sound.pause()
    }
  // Play the sound effect
    updatePlaceholder();
    
    const percentage = (count / targetValue) * 100;
    
    // Set the width of the progress bar based on the percentage
    progressBar.style.width = percentage + '%';
    localStorage.setItem('tasbihProgress', percentage + '%'); // Save progress

    // If the counter reaches the totalClicks, reset
    if (count >= targetValue) {
        sound2.play();
        count = 0;
        input.value = count;
        localStorage.setItem('tasbihCount', count);
        progressBar.style.width = '0%';
        localStorage.setItem('tasbihProgress', '0%'); // Reset progress in localStorage
    }
});

input.addEventListener("input", function () {
    updatePlaceholder();
});

function updatePlaceholder() {
    let placeholder = "000000";
    let length = input.value.length;
    input.setAttribute("placeholder", placeholder.slice(length));
}

var click = 0;
var txt = document.querySelector('.txt');

down.addEventListener('click', function () { 
    nav.classList.toggle('active');
    nav.classList.toggle('nav-bar');
    down.classList.toggle('active-black');
    down.classList.toggle('icon-active');
    txt.classList.toggle('txt-show')
    ziqr.classList.toggle('dark')
    
});

document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.querySelector(".nav-bar");
    const menuIcon = document.getElementById("menuIcon");

    menuIcon.addEventListener("click", function () {
        navBar.classList.toggle("active"); // Add/remove 'active' class
    });
});

window.onload = function() {
    // Retrieve stored background color
    const savedColor = localStorage.getItem('bgColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }

    // Retrieve stored tasbih image
    const savedImage = localStorage.getItem('seb7aImage');
    if (savedImage) {
        document.getElementById('seb7a').src = savedImage;
    }
};


var mode = document.querySelector('.mode');
var apperance = document.querySelector('.apperance');
var sot = document.querySelector('.sound');
var vibration = document.querySelector('.vibration');
var body = document.querySelector('body');
var ziqr = document.querySelector('.ziqr');
mode.addEventListener('click', function () {
    body.classList.toggle('dark');
})
menu.addEventListener('click', function () {    
    window.location.href = 'add/add-new.html';
})


// The duplicate code block below has been removed.  It's already defined above.
/*
var tasbih = JSON.parse(localStorage.getItem("tasbih"));
var value = tasbih ? tasbih.title : null;
var title = value;
var value2 = tasbih ? tasbih.startValue : null;
var startValue = value2;
var value3 = tasbih ? tasbih.targetValue : null;
var targetValue = value3;
var value4 = tasbih ? tasbih.reminder : null;
var reminder = value4;  
var value5 = tasbih ? tasbih.note : null;   
var note = value5;
*/
if (targetValue === null ){
    targetValue = 100;
}
if (reminder === null ){
    reminder.innerHTML = "0";
}
if (note === null ){
    note.innerHTML="0";
}
if (startValue === null ){
    startValue = 0;
}
ziqr.innerHTML = title;
document.getElementById('reminder').innerHTML = reminder;
document.getElementById('target').innerHTML = targetValue;

//sound
//sound

apperance.addEventListener('click', function () {
    window.location.href = 'apperance/apperance.html';
});
var noni = true;
if (count === parseInt(value4)) {
    alert("Reminder");
    console.log("Reminder");
    noni = true;
}
if (noni === true) {
    alert("Reminder");
    console.log("Reminder");
}