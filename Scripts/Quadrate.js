function UmfangSeite() {
    let seite = document.getElementById("seiteUmfangInput").value;
    seite = parseFloat(seite);
    let umfang = (seite * 4).toFixed(2);
    document.getElementById("umfangOutput0").textContent = umfang;
}

function UmfangDiagonale() {
    let diagonale = document.getElementById("diagonaleUmfangInput").value;
    diagonale = parseFloat(diagonale);
    let umfangDiagonale = (diagonale * 4).toFixed(2);
    document.getElementById("umfangOutput1").textContent = umfangDiagonale;
}

function FlaecheSeite() {
    let seite = document.getElementById("seiteFlaecheInput").value;
    seite = parseFloat(seite);
    let flaeche = (seite * seite).toFixed(2);
    document.getElementById("flaecheOutput0").textContent = flaeche;
}

function FlaecheDiagonale() {
    let diagonale = document.getElementById("diagonaleFlaecheInput").value;
    diagonale = parseFloat(diagonale);
    let flaecheDiagonale = (diagonale * diagonale / 2).toFixed(2);
    document.getElementById("flaecheOutput1").textContent = flaecheDiagonale;
}

function DiagonaleSeite() {
    let seite = document.getElementById("seiteDiagonaleInput").value;
    seite = parseFloat(seite);
    let diagonaleSeite = (Math.sqrt((seite * seite) + (seite * seite))).toFixed(2);
    document.getElementById("diagonaleOutput0").textContent = diagonaleSeite;
}

function DiagonaleFlaeche() {
    let flaeche = document.getElementById("flaecheDiagonaleInput").value;
    flaeche = parseFloat(flaeche);
    let diagonaleFlaeche = (Math.sqrt(Math.sqrt(flaeche) + Math.sqrt(flaeche))).toFixed(2);
    document.getElementById("diagonaleOutput1").textContent = diagonaleFlaeche;
}

function UmfangSeite() {
    let seite = document.getElementById("seiteUmfangInput").value;
    seite = parseFloat(seite);
    let umfangSeite = (4 * seite).toFixed(2);
    document.getElementById("umfangOutput0").textContent = umfangSeite;
}

function UmfangDiagonale(){
    let diagonale = document.getElementById("diagonaleUmfangInput").value;
    diagonale = parseFloat(diagonale);
    let umfangDiagonale = (Math.sqrt(2)*diagonale).toFixed(2);
    document.getElementById("umfangOutput1").textContent = umfangDiagonale;
}

function UmfangFlaeche(){
    let flaeche = document.getElementById("flaecheUmfangInput").value;
    flaeche = parseFloat(flaeche);
    let umfangFlaeche = (2*Math.sqrt(flaeche)).toFixed(2);
    document.getElementById("umfangOutput2").textContent = umfangFlaeche;
}