
function zapreminaKocke() {
    var volume;
    var radius = document.getElementById("radius").value;
    volume = radius * radius * radius;
    document.getElementById("volume").value = volume;
    return false;
}

window.onload = document.getElementById("MyForm").onsubmit = zapreminaKocke;

function obimKocke() {
    var volume;
    var radius = document.getElementById("radius1").value;
    volume = 4 * radius; // radius + radius + radius + radius
    document.getElementById("volume1").value = volume;
    return false;
}

window.onload = document.getElementById("MyForm1").onsubmit = obimKocke;









