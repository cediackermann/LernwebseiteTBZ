function SeiteaSeitebSeitec() {
    let b = document.getElementById("seiteaSeitebInput").value;
    b = parseFloat(b);
    let c = document.getElementById("seiteaSeitecInput").value;
    c = parseFloat(c);
    let a = Math.sqrt((c * c) - (b * b));
    document.getElementById("seiteaOutput0").textContent = a.toFixed(2);
}

function SeitebSeiteaSeitec() {
    let a = document.getElementById("seitebSeiteaInput").value;
    a = parseFloat(a);
    let c = document.getElementById("seitebSeitecInput").value;
    c = parseFloat(c);
    let b = Math.sqrt((c * c) - (a * a));
    document.getElementById("seitebOutput0").textContent = b.toFixed(2);
}

function SeitecSeiteaSeiteb() {
    let a = document.getElementById("seitecSeiteaInput").value;
    a = parseFloat(a);
    let b = document.getElementById("seitecSeitebInput").value;
    b = parseFloat(b);
    let c = Math.sqrt((a * a) + (b * b));
    document.getElementById("seitecOutput0").textContent = c.toFixed(2);
}

function FlaecheSeiteHoehe() {
    let a = document.getElementById("flaecheSeiteInput").value;
    a = parseFloat(a);
    let h = document.getElementById("flaecheHoeheInput").value;
    h = parseFloat(h);
    let A = (a * h) / 2;
    document.getElementById("flaecheOutput0").textContent = A.toFixed(2);
}

function UmfangSeiteaSeitebSeitec() {
    let a = document.getElementById("umfangSeiteaInput").value;
    a = parseFloat(a);
    let b = document.getElementById("umfangSeitebInput").value;
    b = parseFloat(b);
    let c = document.getElementById("umfangSeitecInput").value;
    c = parseFloat(c);
    let U = a + b + c;
    document.getElementById("umfangOutput0").textContent = U.toFixed(2);
}