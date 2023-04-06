
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  $(document).ready(function()
{
        if($('.bbb_viewed_slider').length)
        {
            var viewedSlider = $('.bbb_viewed_slider');

            viewedSlider.owlCarousel(
            {
                loop:true,
                margin:30,
                autoplay:true,
                autoplayTimeout:6000,
                nav:false,
                dots:false,
                responsive:
                {
                    0:{items:1},
                    575:{items:2},
                    768:{items:3},
                    991:{items:4},
                    1199:{items:6}
                }
            });

            if($('.bbb_viewed_prev').length)
            {
                var prev = $('.bbb_viewed_prev');
                prev.on('click', function()
                {
                    viewedSlider.trigger('prev.owl.carousel');
                });
            }

            if($('.bbb_viewed_next').length)
            {
                var next = $('.bbb_viewed_next');
                next.on('click', function()
                {
                    viewedSlider.trigger('next.owl.carousel');
                });
            }
        }


    });
    let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function validation(){
    var userName=document.getElementById('username').value;
    var passWord=document.getElementById('password').value;
    if((userName=="priyavenkat192002@gmail.com")&&(passWord=="123456")){
        alert("Login Successfully");
    }
    else{
        alert("Oops..Username or Password is wrong");
        
    }
}
function validateform(){  
    var name=document.getElementById('username').value; 
    var phno=document.getElementById('phno').value; 
    var passWord=document.getElementById('password').value; 
    var ConfirmpassWord=document.getElementById('confirmpassword').value; 
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      
    }else if(passWord.length<6){  
      alert("Password must be at least 6 characters long.");  
      
      } 
      else if(phno.length<10){
        alert("Phone Number must contain 10 numbers");
       
      } 
      else if(passWord!=ConfirmpassWord){
        alert("Password and Confirm Password didn't match");
        
      }
      else{
        alert("Register Successfully");
      }
    }  
    
      