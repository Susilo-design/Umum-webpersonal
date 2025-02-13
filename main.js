const menuicon = document.querySelector('#menu-icon')
const navlink = document.querySelector('.nav-link')

menuicon.onclick = () => {
    navlink.classList.toggle('active')
}


const toggleButton = document.getElementById('toggleButton');
const certificateSection = document.getElementById('certificateSection');
const skillsSection = document.getElementById('skillsSection');
certificateSection.style.display = 'none';


toggleButton.addEventListener('click', () => {
  if (certificateSection.style.display === 'block') {
    // Tampilkan Skills
    certificateSection.style.display = 'none';
    skillsSection.style.display = 'block';
    toggleButton.textContent = 'Skills';
  } else {
    // Tampilkan Certificates
    skillsSection.style.display = 'none';
    certificateSection.style.display = 'block';
    toggleButton.textContent = 'Certificate';
  }
}); 