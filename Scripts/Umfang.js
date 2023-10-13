function Umfang() {
    let seite = document.getElementById("seiteUmfangInput").value;
    let diagonale = document.getElementById("diagonaleUmfangInput").value;

    seite = parseFloat(seite);
    diagonale = parseFloat(diagonale);

    let umfang = (seite * 4).toFixed(2);
    let umfangDiagonale = (diagonale * 4).toFixed(2);

    document.getElementById("umfangOutput0").textContent = umfang;
    document.getElementById("umfangOutput1").textContent = umfangDiagonale;
}
