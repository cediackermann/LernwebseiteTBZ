function durchmesser() {
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

// Add additional functions for square calculations here if needed
