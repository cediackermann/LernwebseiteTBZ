function RadiusFlaeche() {
    let flaeche = document.getElementById("flaecheRadiusInput").value;
    flaeche = parseFloat(flaeche);
    let radiusFlaeche = (Math.sqrt(flaeche / Math.PI)).toFixed(2);
    document.getElementById("radiusOutput0").textContent = radiusFlaeche;

}