function UmfangSeite() {
    let seite1 = document.getElementById("seite1UmfangInput").value;
    let seite2 = document.getElementById("seite2UmfangInput").value;
    seite1 = parseFloat(seite1);
    seite2 = parseFloat(seite2);
    umfang = (2 * seite1 + 2 * seite2).toFixed(2);
    document.getElementById("umfangOutput0").textContent = umfang;
}

function UmfangDiagonale() {
    let diagonale = document.getElementById("diagonaleUmfangInput").value;
    let seite = document.getElementById("seiteUmfangInput").value;
    diagonale = parseFloat(diagonale);
    seite = parseFloat(seite);
    let umfangDiagonale = (
        2 * Math.sqrt(diagonale * diagonale - seite * seite)
    ).toFixed(2);
    document.getElementById("umfangOutput1").textContent = umfangDiagonale;
}

function FlaecheSeite() {
    let seite1 = document.getElementById("seite1FlaecheInput").value;
    let seite2 = document.getElementById("seite2FlaecheInput").value;
    seite1 = parseFloat(seite1);
    seite2 = parseFloat(seite2);
    let flaecheSeite = (seite1 * seite2).toFixed(2);
    document.getElementById("flaecheOutput0").textContent = flaecheSeite;
}

function FlaecheDiagonale() {
    let diagonale = document.getElementById("diagonaleFlaecheInput").value;
    let seite = document.getElementById("seiteFlaecheInput").value;
    seite = parseFloat(seite);
    diagonale = parseFloat(diagonale);
    let flaecheDiagonale = (
        Math.sqrt(diagonale * diagonale - seite * seite) * seite
    ).toFixed(2);
    document.getElementById("flaecheOutput1").textContent = flaecheDiagonale;
}
function DiagonaleSeite() {
    let seite1 = document.getElementById("seite1DiagonaleInput").value;
    let seite2 = document.getElementById("seite2DiagonaleInput").value;
    parseFloat("seite1");
    parseFloat("seite2");
    let diagonaleSeite = (Math.sqrt(seite1 * seite1 + seite2 * seite2)).toFixed(2);
    document.getElementById("diagonaleOutput0").textContent = diagonaleSeite;
}

