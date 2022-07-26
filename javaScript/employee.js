const employee = document.querySelector('.employees__details');
const previews= document.querySelectorAll('.preview__details');
const devs = document.querySelectorAll('.devs');
const save = document.querySelector('.save');
const warning = document.querySelector('.warning');
const formViews = document.querySelectorAll('.form__view input')
const nameDetails = document.querySelectorAll('.name__details input');
const idDetails = document.querySelectorAll('.identity__details input');
const personals = document.querySelectorAll('.personal__details input');
const txtAreas = document.querySelectorAll('#txtArea');
const closes = document.querySelectorAll('.close')

// PREVIEW DETAILS

devs.forEach((dev) => {
    devs[0].addEventListener('click', function(){
         previews[0].style.display = 'block'
         
    });
    devs[1].addEventListener('click', function(){
         previews[1].style.display = 'block'

    });
    devs[2].addEventListener('click', function(){
         previews[2].style.display = 'block'

      });
     devs[3].addEventListener('click', function(){
            previews[3].style.display = 'block'

     });
     devs[4].addEventListener('click', function(){
           previews[4].style.display = 'block'

    });
     devs[5].addEventListener('click', function(){
           previews[5].style.display = 'block'

     });
     devs[6].addEventListener('click', function(){
           previews[6].style.display = 'block'

    });
    devs[6].addEventListener('click', function(){
            previews[6].style.display = 'block'

    });
    devs[7].addEventListener('click', function(){
            previews[7].style.display = 'block'

     });

});

// VALIDATION FOR PREVIEW FORM
nameDetails.forEach((nameDetail) => {
     nameDetail.addEventListener('keyup', function(){
          if(nameDetail.value == '') {
                warning.style.display = 'block'
          }
          else{
                 warning.style.display = ''
          }
     
     })

});

idDetails.forEach((idDetail) => {
     idDetail.addEventListener('keyup', function(){
          if(idDetail.value == '') {
                warning.style.display = 'block'
          }
          else{
               warning.style.display = ''
          }
     
     })

});

personals.forEach((personal) => {
     personal.addEventListener('keyup', function(){
          if(personal.value == '') {
                warning.style.display = 'block'
          }
          else{
               warning.style.display = ''
          }
     
     })

});

txtAreas.forEach((txtArea) => {
     txtArea.addEventListener('keyup', function(){
          if(txtArea.value == '') {
                warning.style.display = 'block'
          }
          else{
                 warning.style.display = ''
          }
     
     })

});

save.addEventListener('click', function(e){    
     e.preventDefault()
     
       formViews.forEach((formView) => {
            if(formView.value == "") {
                 warning.style.display = "block";
            }

            else{
                warning.style.display = ''
            }
          //   else {
          //       window.location.href = 'employees.html'
          //   }
       })
});

 closes.forEach((close) => {
     close.addEventListener('click', function(){
           window.location.href = 'employees.html'
    
    })


});



