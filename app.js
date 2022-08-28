// https://www.omnicalculator.com/chemistry/reconstitution

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const reconstitutionconcentrationRadio = document.getElementById('reconstitutionconcentrationRadio');
const doseRadio = document.getElementById('doseRadio');
const dosevolumeRadio = document.getElementById('dosevolumeRadio');

let reconstitutionconcentration;
let dose = v1;
let dosevolume = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

reconstitutionconcentrationRadio.addEventListener('click', function() {
  variable1.textContent = 'Dose';
  variable2.textContent = 'Dose volume';
  dose = v1;
  dosevolume = v2;
  result.textContent = '';
});

doseRadio.addEventListener('click', function() {
  variable1.textContent = 'Reconstitution concentration';
  variable2.textContent = 'Dose volume';
  reconstitutionconcentration = v1;
  dosevolume = v2;
  result.textContent = '';
});

dosevolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Reconstitution concentration';
  variable2.textContent = 'Dose';
  reconstitutionconcentration = v1;
  dose = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(reconstitutionconcentrationRadio.checked)
    result.textContent = `Reconstitution concentration = ${computeReconstitutionconcentration().toFixed(2)}`;

  else if(doseRadio.checked)
    result.textContent = `Dose = ${computeDose().toFixed(2)}`;

  else if(dosevolumeRadio.checked)
    result.textContent = `Dose volume = ${computeDosevolume().toFixed(2)}`;
})

// calculation

function computeReconstitutionconcentration() {
  return Number(dose.value) / Number(dosevolume.value);
}

function computeDose() {
  return Number(reconstitutionconcentration.value) * Number(dosevolume.value);
}

function computeDosevolume() {
  return Number(dose.value) / Number(reconstitutionconcentration.value);
}