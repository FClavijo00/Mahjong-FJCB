function cambiarTabla() {
    var nivel = document.getElementById("Nivel").value;

    switch (nivel) {
        case "1":
            document.getElementById("tablaFacil").style.display="block";
            document.getElementById("tablaMedio").style.display="none";
            document.getElementById("tablaDificil").style.display="none";
            break;

        case "2":
            document.getElementById("tablaFacil").style.display="none";
            document.getElementById("tablaMedio").style.display="block";
            document.getElementById("tablaDificil").style.display="none";    
            break;

        case "3":
            document.getElementById("tablaFacil").style.display="none";
            document.getElementById("tablaMedio").style.display="none";
            document.getElementById("tablaDificil").style.display="block";    
            break;    
    }
}
