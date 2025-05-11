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

/* show details to books start */
  function openModal(content) {
      document.getElementById("modalContent").innerText = content;
      document.getElementById("modal").classList.remove("opacity-0", "pointer-events-none");
      document.getElementById("modal").classList.add("opacity-100", "pointer-events-auto");
  }

  function closeModal() {
      document.getElementById("modal").classList.remove("opacity-100", "pointer-events-auto");
      document.getElementById("modal").classList.add("opacity-0", "pointer-events-none");
  }
  /* show details to books end */
