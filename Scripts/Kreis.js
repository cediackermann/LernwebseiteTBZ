function RadiusFlaeche() {
    let flaeche = document.getElementById("flaecheRadiusInput").value;
    flaeche = parseFloat(flaeche);
    let radiusFlaeche = (Math.sqrt(flaeche / Math.PI)).toFixed(2);
    document.getElementById("radiusOutput0").textContent = radiusFlaeche;

}

function RadiusUmfang() {
    let umfang = document.getElementById("umfangRadiusInput").value;
    umfang = parseFloat(umfang);
    let radiusUmfang = (umfang / (2 * Math.PI)).toFixed(2);
    document.getElementById("radiusOutput1").textContent = radiusUmfang;
}

function RadiusDurchmesser() {
    let durchmesser = document.getElementById("durchmesserRadiusInput").value;
    durchmesser = parseFloat(durchmesser);
    let radiusDurchmesser = (durchmesser / 2).toFixed(2);
    document.getElementById("radiusOutput2").textContent = radiusDurchmesser;
}

function UmfangRadius() {
    let radius = document.getElementById("radiusUmfangInput").value;
    radius = parseFloat(radius);
    let umfangRadius = (2 * Math.PI * radius).toFixed(2);
    document.getElementById("umfangOutput0").textContent = umfangRadius;
}

function UmfangFlaeche() {
    let flaeche = document.getElementById("flaecheUmfangInput").value;
    flaeche = parseFloat(flaeche);
    let umfangFlaeche = (Math.sqrt(flaeche / Math.PI) * 2 * Math.PI).toFixed(2);
    document.getElementById("umfangOutput1").textContent = umfangFlaeche;
}

function UmfangDurchmesser() {
    let durchmesser = document.getElementById("durchmesserUmfangInput").value;
    durchmesser = parseFloat(durchmesser);
    let umfangDurchmesser = (durchmesser * Math.PI).toFixed(2);
    document.getElementById("umfangOutput2").textContent = umfangDurchmesser;
}

function FlaecheRadius() {
    let radius = document.getElementById("radiusFlaecheInput").value;
    radius = parseFloat(radius);
    let flaecheRadius = (Math.PI * radius * radius).toFixed(2);
    document.getElementById("flaecheOutput0").textContent = flaecheRadius;
}

function FlaecheUmfang() {
    let umfang = document.getElementById("umfangFlaecheInput").value;
    umfang = parseFloat(umfang);
    let flaecheUmfang = (umfang * umfang / (4 * Math.PI)).toFixed(2);
    document.getElementById("flaecheOutput1").textContent = flaecheUmfang;
}

function FlaecheDurchmesser() {
    let durchmesser = document.getElementById("durchmesserFlaecheInput").value;
    durchmesser = parseFloat(durchmesser);
    let flaecheDurchmesser = (Math.PI * durchmesser * durchmesser / 4).toFixed(2);
    document.getElementById("flaecheOutput2").textContent = flaecheDurchmesser;
}

function DurchmesserRadius() {
    let radius = document.getElementById("radiusDurchmesserInput").value;
    radius = parseFloat(radius);
    let durchmesserRadius = (radius * 2).toFixed(2);
    document.getElementById("durchmesserOutput0").textContent = durchmesserRadius;
}

function DurchmesserUmfang() {
    let umfang = document.getElementById("umfangDurchmesserInput").value;
    umfang = parseFloat(umfang);
    let durchmesserUmfang = (umfang / Math.PI).toFixed(2);
    document.getElementById("durchmesserOutput1").textContent = durchmesserUmfang;
}

function DurchmesserFlaeche() {
    let flaeche = document.getElementById("flaecheDurchmesserInput").value;
    flaeche = parseFloat(flaeche);
    let durchmesserFlaeche = (Math.sqrt(flaeche / Math.PI) * 2).toFixed(2);
    document.getElementById("durchmesserOutput2").textContent = durchmesserFlaeche;
}