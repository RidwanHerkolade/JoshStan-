function displayTime(){
     let dateTime = new Date();
     let hrs = dateTime.getHours();
     let mins = dateTime.getMinutes();
     let secs = dateTime.getSeconds();
     let day = dateTime.getDate();
     let month = dateTime.getMonth();
     let year = dateTime.getFullYear();
      sessions = 'AM';
     
      if (hrs == 0){
           hrs = 12
      }
      if(hrs > 12 ) {
          hrs = hrs - 12;
          sessions = 'PM'
      }
      
     let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
     let ids = ['dayNum', 'month', 'year', 'hours', 'minutes', 'seconds', 'session' ];
     let values = [day,months[month], year, hrs, mins, secs, sessions];
     for(let i = 0; i < ids.length; i++)
     document.getElementById(ids[i]).firstChild.nodeValue = values[i];
         


}
setInterval(displayTime, 10);


const admin = document.querySelector('.adminn');
      admin.addEventListener('click', function(){
           window.location.href = 'index.html'  
      })



