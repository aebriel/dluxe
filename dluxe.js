function toggleNav() {
  let navList = document.querySelector('.navlist');
  navList.classList.toggle('open');
}

let navBar = document.querySelector('.navbar');
navBar.addEventListener('click', toggleNav);

document.addEventListener('DOMContentLoaded', function() {
  let treatmentSelect = document.getElementById('treatment');
  let treatmentTimeLabel = document.querySelector('label[for="treatment-time"]');
  let treatmentTimeSelect = document.getElementById('treatment-time');
  let treatment90Option = document.querySelector('option[value="treatment-90"]');
  let treatment120Option = document.querySelector('option[value="treatment-120"]');

  treatmentSelect.addEventListener('change', function() {
    if (treatmentSelect.value === 'treatment-journey') {
      treatmentTimeLabel.style.display = 'none';
      treatmentTimeSelect.style.display = 'none';
    } else {
      treatmentTimeLabel.style.display = 'block';
      treatmentTimeSelect.style.display = 'block';
    }

    if (treatmentSelect.value === 'treatment-facial') {
      treatment90Option.style.display = 'none';
      treatment120Option.style.display = 'none';
    } else {
      treatment90Option.style.display = 'block';
      treatment120Option.style.display = 'block';
    }
  });
});