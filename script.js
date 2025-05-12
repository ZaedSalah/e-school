/* show navbar start*/
function toggleMenu() 
{
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');

  const isOpen = !menu.classList.contains('translate-x-full');
  if (isOpen) {
    menu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  } else {
    menu.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
  }
}
/* show navbar end*/
