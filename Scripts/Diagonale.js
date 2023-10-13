function Diagonale() {
    let seite = document.getElementById("seiteDiagonaleInput").value;
    let flaeche = document.getElementById("flaecheDiagonaleInput").value;


    seite = parseFloat(seite);
    flaeche = parseFloat(flaeche);

    let diagonaleSeite = (Math.sqrt((seite * seite) + (seite * seite))).toFixed(2);
    let diagonaleFlaeche = (Math.sqrt(Math.sqrt(flaeche) + Math.sqrt(flaeche))).toFixed(2);

    document.getElementById("diagonaleOutput0").textContent = diagonaleSeite;
    document.getElementById("diagonaleOutput1").textContent = diagonaleFlaeche;
}
