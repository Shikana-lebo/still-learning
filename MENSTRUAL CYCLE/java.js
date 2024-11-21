function calculate(){
    const radius = Number(document.getElementById("txtRadius").value);
    const btnCalculate = document.getElementById("btnCalculate");

    let area = Math.PI*radius*radius;
    document.getElementById("txtAnswer").innerText = "The area of the circle with radius " + radius + " is " +area;
    
}


