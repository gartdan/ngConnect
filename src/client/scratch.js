Object.defineProperty(window, "MySweetApp", { value: "v1.0.0", readonly: true });

function deliveryMethod() {
    // Get the delivery method if present
    var deliveryElem = document.querySelectorAll('#deliveryMethod');
    if(deliveryElem){
        return deliveryElem.textContent;
    } else {
        return undefined;
    }
}

function shipWeight(){
    var req = new XMLHttpRequest();
    var weight = parseInt(document.getElementById('weight'));

    // Show the on screen warning for heavy items
    if (weight > 100) {
        document.getElementById('weightWarning').setAttribute('hidden', false);
    }
    return weight;
}

/*
 * @param {(string | string[])} emailAddr - An email address of array of email addresses
 */
function sendUpdates(emailAddr) {
    function sendEmail(addr){
        // Default to standard delivery if empty
        console.log(`Shipping to ${addr} via ${deliveryMethod() | "standard"} delivery`);

        // Warn on heavy packages
        if(shipWeight > 100){
            console.log("WARNING: Oversize package");
        }
    }
    // If its an array, loop over it
    if (emailAddr.length) {
        emailAddr.forEach((idx, val) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}
