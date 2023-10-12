function Durchmesser() {
  let radius = document.getElementById("radiusInput").value;
  let umfang = document.getElementById("umfangInput").value;


  radius = parseFloat(radius);
  console.log(radius);
  umfang = parseFloat(umfang);
  console.log(umfang);

  let durchmesserVonRadius = (radius * 2).toFixed(2);
  console.log(durchmesserVonRadius);

  let durchmesserVonUmfang = (umfang / Math.PI).toFixed(2);
  console.log(durchmesserVonUmfang);

  document.getElementById("durchmesserOutput").textContent = durchmesserVonRadius;
  document.getElementById("durchmesserOutput2").textContent = durchmesserVonUmfang;
}

function Umfang() {
  let radius = document.getElementById("radiusUmfangInput").value;
  radius = parseFloat(radius);

  let umfangVonRadius = (2 * radius * Math.PI).toFixed(2);
  document.getElementById("umfangOutput").textContent = umfangVonRadius;
}

function Radius() {
  let durchmesser = document.getElementById("durchmesserRadiusInput").value;

  durchmesser = parseFloat(durchmesser);
  console.log(durchmesser);

  let radiusVonDurchmesser = (durchmesser / 2).toFixed(2);
  console.log(radiusVonDurchmesser);

  document.getElementById("radiusOutput").textContent = radiusVonDurchmesser;
}


function Volumen() {
  let radius = document.getElementById("radiusVolumenInput").value;
  let hoehe = document.getElementById("hoeheVolumenInput").value;

  radius = parseFloat(radius);
  console.log(radius);

  hoehe = parseFloat(hoehe);
  console.log(hoehe);

  let volumen = (Math.PI * radius * radius * hoehe).toFixed(2);
  console.log(volumen);

  document.getElementById("volumenOutput").textContent = volumen;
}

function Grundflaeche() {
  let radius = document.getElementById("radiusGrundflaecheInput").value;

  radius = parseFloat(radius);
  console.log(radius);

  let grundflaeche = (Math.PI * radius * radius).toFixed(2);
  console.log(grundflaeche);

  document.getElementById("grundflaecheOutput").textContent = grundflaeche;
}

function Pythagoras() {
  let katheteB = document.getElementById("KathetebInput").value;
  let hypothenuseC = document.getElementById("HypothenusecInput").value;

  katheteB = parseFloat(katheteB);
  console.log(katheteB);

  hypothenuseC = parseFloat(hypothenuseC);
  console.log(hypothenuseC);

  let katheteA = Math.sqrt(hypothenuseC * hypothenuseC - katheteB * katheteB).toFixed(2);
  console.log(katheteA);

  document.getElementById("KatheteaOutput").textContent = katheteA;
}


