//selectionner l'élément
const selectElement = (s) => document.getElementById(s);

//MENU
const showMenu = (toggleId, navId) => {
  const toggle = selectElement(toggleId),
  nav = selectElement(navId);

  if(toggle && nav) {
    toggle.addEventListener('click', ()=>{
      console.log('toggle');
      nav.classList.toggle('show');
    })
  }
}

showMenu('nav-toggle', 'nav-menu');