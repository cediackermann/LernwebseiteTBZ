function Flaeche() {
    let seite = document.getElementById("seiteFlaecheInput").value;
    let diagonale = document.getElementById("diagonaleFlaecheInput").value;

    seite = parseFloat(seite);
    diagonale = parseFloat(diagonale);

    let flaeche = (seite * seite).toFixed(2);
    let flaecheDiagonale = (diagonale * diagonale / 2).toFixed(2);

    document.getElementById("flaecheOutput0").textContent = flaeche;
    document.getElementById("flaecheOutput1").textContent = flaecheDiagonale;
}
