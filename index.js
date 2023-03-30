
// ==========================mennu Resp===========

var menuBtn = document.querySelectorAll('.menu-back');
var menuBack = document.querySelectorAll('.menu');
menuBtn[0].addEventListener('click', () => {
    menuBack[0].classList.toggle('mobile-menu');
})




function mylogin() {
    var user, pass,reseat,passreset

    user = document.getElementById('nameuser');
    reseat = user.value;
    
    pass = document.getElementById('userpassword');
    passreset =pass.value;
    
    if (reseat!= 'nagendra') {
        alert(" Incorrect Name");
        user.value = '';
        return false
    }
    if (passreset!= '12345') {
        alert("wrong password")
        pass.value='';
        return false
    }
    if (reseat == 'nagendra' && passreset == '12345') {
          setTimeout(welcome,4000);
        function welcome(){
           alert("welcome to effectron");
        }
        location.assign("http://127.0.0.1:5501/index.html");

        
    }
    

}

