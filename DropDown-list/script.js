
function dropDown(){
    const select = document.getElementById("select-form");
    const selectedValue = select.value;
    const body = document.getElementById("body");
    const displayMessage = document.getElementById("display-message")

   switch(selectedValue){
    case "black":
        body.style.backgroundColor="black";
        body.style.color = "white";
        displayMessage.innerHTML = "You now have a black background color";
        break;
    case "green":
            body.style.backgroundColor="green";
            body.style.color = "white";
            displayMessage.innerHTML = "You now have a green background color";
            break;
    case "red":
                body.style.backgroundColor="red";
                body.style.color = "white";
                displayMessage.innerHTML = "You now have a Red background color"
                break;
    case "blue":
                    body.style.backgroundColor="blue";
                    body.style.color = "white";
                    displayMessage.innerHTML = "You now have a black background color"
   }
}