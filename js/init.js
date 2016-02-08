(function($){
  $(function(){
    $('.button-collapse').sideNav();//Con esto activo la funcion del menu Desplegable cuando estoy en un mobil
    $('.modal-trigger').leanModal();//Activar modal
  }); // end of document ready
})(jQuery); // end of jQuery name space

//Adaptar resolucion
adaptar();
    $(window).resize(function() {
      adaptar();
    });

    function adaptar(){
      var ancho = $( window ).width();
          if(ancho < 584){
              $("#tituloP").children().css({"font-size":"30px", "margin-left":"15%"}); 
              $("#contenido").children().css({"margin-left":"5%"});
              $("#pie").children().css({"margin-left":"5%"});
              $("#subpie").children().css({"margin-left":"5%"});
          }else{
              if(ancho < 976){
                  $("#tituloP").children().css({"font-size":"35px", "margin-left":"15%"}); 
                  $("#contenido").children().css({"margin-left":"7%"});
                  $("#pie").children().css({"margin-left":"7%"});
                  $("#subpie").children().css({"margin-left":"7%"});
              }else{
                  if(ancho < 1055){
                    $("#tituloP").children().css({"font-size":"45px", "margin-left":"50%"}); 
                    $("#contenido").children().css({"margin-left":"27%"});
                    $("#pie").children().css({"margin-left":"27%"});
                    $("#subpie").children().css({"margin-left":"27%"});
                  }else{
                    if(ancho < 1155){
                        $("#tituloP").children().css({"font-size":"45px", "margin-left":"50%"}); 
                        $("#contenido").children().css({"margin-left":"26%"});
                        $("#pie").children().css({"margin-left":"26%"});
                        $("#subpie").children().css({"margin-left":"26%"});
                    }else{
                        if(ancho < 1300){
                            $("#tituloP").children().css({"font-size":"45px", "margin-left":"50%"}); 
                            $("#contenido").children().css({"margin-left":"25%"});
                            $("#pie").children().css({"margin-left":"25%"});
                            $("#subpie").children().css({"margin-left":"25%"});
                        }else{
                            $("#tituloP").children().css({"font-size":"45px", "margin-left":"50%"}); 
                            $("#contenido").children().css({"margin-left":"24%"});
                            $("#pie").children().css({"margin-left":"24%"});
                            $("#subpie").children().css({"margin-left":"24%"});
                        }
                    }    
                  }
              }
          }
    }