var mybutton = document.getElementById("myBtn");
window.onscroll = function() {myFunction()}

function myFunction() {
  var mybutton = document.getElementById("myBtn");
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When the user scrolls down 20px from the top of the document, show the button


$('#contactForm').validate({

  /* submit via ajax */
  submitHandler: function(form) {

    $.ajax({      	

        type: "POST",
        url: "php/mailsent.php",
        data: $(form).serialize(),
        beforeSend: function() { 

          sLoader.fadeIn(); 

        },
        success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#message-warning').html(msg);
              $('#message-warning').fadeIn();
            }

        },
        error: function() {
          sLoader.fadeOut(); 
          $('#message-warning').html("Something went wrong. Please try again.");
           $('#message-warning').fadeIn();

        }

      });     		
    }

});





