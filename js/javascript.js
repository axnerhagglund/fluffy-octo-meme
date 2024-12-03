

// när skärmen är större eller lika med 900 blir overlay 50% av skärmen 
//istället för 100 som jag vill ha den i mobile

function openOverlay(){
    if (window.innerWidth >= 900) {
        document.getElementById("navOverlay").style.width = "50%";
    } else {
        document.getElementById("navOverlay").style.width = "100%";
    }

}

// stänger overlay genom att göra bredden på overlayn till 0
function closeOverlay(){
    document.getElementById("navOverlay").style.width = "0";
}


//byter text på book now! till reserverad samt lagt till en paragraf under
// så att kunden enkelt kan se vad hen har gjort samt få reda på vart hen kan se sina bokningar.

let itsBooked = document.getElementById("card_btn")
let cardConfirmationMessage = document.getElementById("card__confirmation__message")


function bookedBtn(){
    itsBooked.textContent = "reserved";
    itsBooked.disabled = true;
    itsBooked.style.backgroundColor = "#fff";
    itsBooked.style.color = "#000";
    itsBooked.style.fontWeight = "700";
    cardConfirmationMessage.textContent = "click here to see your reservations";
    cardConfirmationMessage.style.color = "green"
    cardConfirmationMessage.style.padding = ".7rem 0 0 0"
}





