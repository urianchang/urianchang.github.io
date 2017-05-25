$(document).ready( function() {
    //: Add smooth scrolling to nav bar links
    $("#nav a").on('click', function(event) {
        //: Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          event.preventDefault();   //: Prevent default anchor click behavior
          var hash = this.hash;     //: Store hash
          //: Using jQuery's animate() method to add smooth page scroll
          $('html, body').animate(
              {
                  scrollTop: $(hash).offset().top - 50
              },
              800,
              'swing',
            //   function(){
            //       window.location.hash = hash; //: Add hash (#) to URL when done scrolling
            //   }
          );
        }
    });
})
