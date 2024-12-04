

// när skärmen är större eller lika med 900 blir overlay 50% av skärmen 
//istället för 100 som jag vill ha den i mobile

function openOverlay(){
    if (window.innerWidth >= 900) {
        document.getElementById("navOverlay").style.width = "40%";
    } else {
        document.getElementById("navOverlay").style.width = "100%";
    }

}

// stänger overlay genom att göra bredden på overlayn till 0
function closeOverlay(){
    document.getElementById("navOverlay").style.width = "0";
}

// bara lite övning inför javascript kursen med att manipulera DOM:en

function bookedBtn(cabinId) {

    let card = document.getElementById(cabinId);
    let itsBooked = card.querySelector('.card__btn');
   

    itsBooked.textContent = "Reserved";
    itsBooked.disabled = true;
    itsBooked.style.backgroundColor = "#fff";
    itsBooked.style.color = "#000";
    itsBooked.style.fontWeight = "700";

    let cardConfirmationMessage = card.querySelector('.card__confirmation__message');
    

    cardConfirmationMessage.textContent = "Click here to see your reservations";
    cardConfirmationMessage.style.color = "green";
    cardConfirmationMessage.style.padding = ".7rem 0 0 0";
    
}














