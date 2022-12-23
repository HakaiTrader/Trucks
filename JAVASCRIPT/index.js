const slider = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

let etape = 0;

let nbrImage = slider.length;


function removeActiveImage() { 

  for (let i = 0; i < nbrImage; i++) {
      slider[i].classList.remove('active');
  }
 }

next.addEventListener('click', function () { 
  etape++;
  if (etape >= nbrImage) {
    etape = 0;
  }
  removeActiveImage();
  slider[etape].classList.add('active');
 })


previous.addEventListener('click', function () { 
  etape--;
  if (etape < 0) {
    etape = nbrImage -1
  }
  removeActiveImage();
  slider[etape].classList.add('active')
  })

  setInterval(() => {
    etape++;
    if (etape >= nbrImage) {
    etape = 0;
    }
    removeActiveImage();
    slider[etape].classList.add('active');

}, 5500);

const menu = document.querySelector('.menu')
const iconMenu = document.querySelector('.nav img');
const menuClick = document.querySelectorAll('.container .menu ul li')

toggleMenu = false;
iconMenu.addEventListener('click', function () {

  if(toggleMenu === false){
    menu.style.display = "block";
    menu.style.opacity = '1'; 
    toggleMenu = true;
  }else if (toggleMenu === true) {
    menu.style.opacity = '0';
    menu.style.display = 'none';
    toggleMenu = false;
  } else{
    menu.style.opacity = '0';
    menu.style.display = 'none';
  }
 })
  menu.addEventListener('mouseleave', function () { 
  menu.style.opacity = '0';
  menu.style.display = 'none';
  toggleMenu = false;
  })

for (let index = 0; index < menuClick.length; index++) {
  const menuleave = menuClick[index];
  menuleave.addEventListener('click', function () { 
    menu.style.opacity ='0'
    menu.style.display = 'none';
   })
  
}


  // const chiffre = parseInt(prompt('Entrez un chiffre entre 1 et 10: '));

  // for (let i = chiffre; i > -1; i--) {
  //   if (chiffre > 10 || chiffre < 0) {
  //     console.log('Veuillez entrer un chiffre entre 0 et 10.');
  //     break;
  //   }
  //   console.log(i);
  // }

  // let nombre = 8;
  // let question = ''

  // while (question !== nombre) {
  //   let question = parseInt(prompt('Veuillez entrer un nombre entre 0 et 10.: '));
  //   if (question == nombre) {
  //     alert('Félicitation !');
  //     break;
  //   }
  //   else if (question !== nombre) {
  //     alert('Dommage, retentez.')
  //   }
  
  // }