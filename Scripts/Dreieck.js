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
    let b = Math.sqrt((a * a) - (c * c));
    document.getElementById("seitebOutput0").textContent = b.toFixed(2);
}

function SeitecSeiteaSeiteb() {
    let a = document.getElementById("seitecSeiteaInput").value;
    a = parseFloat(a);
    let b = document.getElementById("seitecSeitebInput").value;
    b = parseFloat(b);
    let c = Math.sqrt((a * a) - (b * b));
    document.getElementById("seitecOutput0").textContent = c.toFixed(2);
}