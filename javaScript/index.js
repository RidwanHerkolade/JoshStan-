
//  HOVERED LINKS
const links = document.querySelectorAll("#active");
links.forEach((link) => {
 
  link.addEventListener("click", function () {
    link.classList.add('hovered');
    // link.classList.remove('hovered')
  });
});

// LOG OUT BUTTON ICON 
const user = document.querySelector('.user');
user.addEventListener('click', function(){
   window.location.href = 'admin.html'
});


// MENU BTN
const flex = document.querySelector('.flex');
const menus = document.querySelectorAll('#menu');
const closeBtns = document.querySelectorAll('#close')
    menus.forEach((menu) => {
        menu.addEventListener('click', function(){
           flex.style.display = 'block'
           
        });
    });

 closeBtns.forEach((closeBtn) => {
     closeBtn.addEventListener('click', function(){
         flex.style.display = 'none'
         
      })
  });
    
