var cancel = document.getElementById("cancelBtn");

document.getElementById("saveTasbih").addEventListener("click", function () {
    const tasbih = {
        title: document.getElementById("title").value,
        startValue: document.getElementById("startValue").value,
        targetValue: document.getElementById("targetValue").value,
        reminder: document.getElementById("reminder").value,
        note: document.getElementById("note").value
    };

    localStorage.setItem("tasbih", JSON.stringify(tasbih));
    localStorage.removeItem("tasbihCount"); // Corrected typo: tasbihcCount -> tasbihCount
    localStorage.removeItem("tasbihProgress"); //Added to remove progress when new tasbih is added.
    window.location.href = "../index.html";
});

document.getElementById("cancelBtn").addEventListener("click", function () {
    document.getElementById("tasbihForm").reset();
});

function updateDisplay() {
    const tasbih = JSON.parse(localStorage.getItem("tasbih"));

    if (tasbih) {
        document.getElementById("displayTitle").innerText = tasbih.title || "-";
        document.getElementById("displayStart").innerText = tasbih.startValue || "-";
        document.getElementById("displayTarget").innerText = tasbih.targetValue || "-";
        document.getElementById("displayReminder").innerText = tasbih.reminder || "-";
        document.getElementById("displayNote").innerText = tasbih.note || "-";
    }
}

// Load saved tasbih data when the page loads
document.addEventListener("DOMContentLoaded", updateDisplay);

function Myfunc() {
    window.location.href = "../index.html";
}

// The following block of code was causing issues and has been removed.
// It's not needed and was likely the source of the "undefined" value.
/*
var tasbih = JSON.parse(localStorage.getItem("tasbih"));
var value = tasbih ? tasbih.title : null;
*/

// It's better to get the values directly in the places where you need them, 
// like in the updateDisplay function.  This keeps the code cleaner.
