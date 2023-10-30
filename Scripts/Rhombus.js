function FlaecheSeite() {
    let seite = document.getElementById("seiteFlaecheInput").value;
    let hoehe = document.getElementById("hoeheFlaecheInput").value;
    flaeche = (parseFloat(seite) * parseFloat(hoehe)).toFixed(2);
    document.getElementById("flaecheOutput0").textContent = flaeche;
}

function FlaecheDiagonale() {
    let diagonale = document.getElementById("diagonaleFlaecheInput").value;
    diagonale = parseFloat(diagonale);
    let flaecheDiagonale = (diagonale * diagonale / 2).toFixed(2);
    document.getElementById("flaecheOutput1").textContent = flaecheDiagonale;
}

function UmfangSeite() {
    let seite = document.getElementById("seiteUmfangInput").value;
    seite = parseFloat(seite);
    let umfangSeite = (4 * seite).toFixed(2);
    document.getElementById("umfangOutput0").textContent = umfangSeite;
}
