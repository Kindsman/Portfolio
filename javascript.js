M.AutoInit();



  $(document).ready(function(){
    $('.sidenav').sidenav({
        edge: 'right',
          
    });
    
  });

  $(document).ready(function(){
    $('.slider').slider();
  });


  
  var nav = document.getElementById('nav');
  var brandLogo = document.getElementById('brand-logo');
  var menu = document.getElementById('menu');
  var links = document.querySelectorAll('div.nav-wrapper ul li a');
  console.log(links);
 

  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    
    
    if( scroll > 300)
    {
      
      nav.className = 'nav-white';
      brandLogo.className = 'brandlogo-blue center';
      menu.className = "material-icons blue-text";

      for(var i = 0; i < links.length; i++)
      {
        links[i].className = "blue-text";
      };
    }else
    {
      nav.className = 'nav-transp';
      brandLogo.className = 'brand-logo center';
      menu.className = "material-icons white-text";
      for(var i = 0; i < links.length; i++)
      {
        links[i].className = "white-text";
      };
    }
    
});


  