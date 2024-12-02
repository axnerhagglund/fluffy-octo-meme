

// när skärmen är större eller lika med 900 blir overlay 50% av skärmen 
//istället för 100 som jag vill ha den i mobile

function openOverlay(){
    if (window.innerWidth >= 900) {
        document.getElementById("navOverlay").style.width = "50%";
    } else {
        document.getElementById("navOverlay").style.width = "100%";
    }

}

function closeOverlay(){
    document.getElementById("navOverlay").style.width = "0";
}


