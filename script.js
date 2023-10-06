function durchmesser() {
  let radiusr = document.getElementById("radiusr").value;
  let umfangU = document.getElementById("umfangU").value;
  radiusr = parseFloat(radiusr);
  console.log(radiusr);
  umfangU = parseFloat(umfangU);
  console.log(umfangU);

  durchmesserdvonradius = (radiusr * 2).toFixed(2);
  console.log(durchmesserdvonradius);

  durchmesserdvonUmfang = (umfangU / Math.PI).toFixed(2);
  console.log(durchmesserdvonUmfang);

  document.getElementById("durchmesserdvonradiusOutput").value =
    durchmesserdvonradius;

  document.getElementById("durchmesserdvonUmfangOutput").value =
    durchmesserdvonUmfang;
}

function Umfang() {
  let radiusr = document.getElementById("radiusr").value;
  radiusr = parseFloat(radiusr);

  umfangvonRadius = (radiusr * 2 * Math.PI).toFixed(2);
  document.getElementById("umfangvonRadiusOutput").value = umfangvonRadius;
}

function Pythagoras() {
  let Katheteb = document.getElementById("Katheteb").value;
  let Hypothenusec = document.getElementById("Hypothenusec").value;

  Katheteb = parseInt(Katheteb);
  console.log(Katheteb);

  Hypothenusec = parseInt(Hypothenusec);
  console.log(Hypothenusec);

  Kathetea = Math.sqrt(
    Hypothenusec * Hypothenusec - Katheteb * Katheteb
  ).toFixed(2);
  console.log(Kathetea);

  document.getElementById("KatheteaOutput").value = Kathetea;
}
