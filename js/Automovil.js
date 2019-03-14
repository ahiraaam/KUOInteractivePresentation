  $(document).ready(function(){

    var Bando=false;
     var Lukoil=false;
    $('.motor').hide();
    $('.auto').show();
    $('.tren').hide();
    $('.freno').hide();
    $('.lubricante').hide();

    var modelo = document.getElementById('modelo');
    var engine = document.getElementById('engine');
    var train = document.getElementById('train');
    var brake = document.getElementById('brake');
    var lubri = document.getElementById('lubri');
    engine.style.opacity = "0.2";
    train.style.opacity = "0.2";
    brake.style.opacity = "0.2";
    lubri.style.opacity = "0.2";

  $("#logo3").hover(function(){
    modelo.style.opacity = "0.2";
    engine.style.opacity = "0.9";
    }, function(){
    modelo.style.opacity = "0.9";
    engine.style.opacity = "0.2";
  });
  $("#logo1").hover(function(){
    modelo.style.opacity = "0.2";
    brake.style.opacity = "0.9";
    }, function(){
    modelo.style.opacity = "0.9";
    brake.style.opacity = "0.2";
  });
  $("#logo2").hover(function(){
    modelo.style.opacity = "0.2";
    train.style.opacity = "0.9";
    }, function(){
    modelo.style.opacity = "0.9";
    train.style.opacity = "0.2";
  });
  $("#logo4").hover(function(){
    modelo.style.opacity = "0.2";
    lubri.style.opacity = "0.9";
    }, function(){
    modelo.style.opacity = "0.9";
    lubri.style.opacity = "0.2";
  });

  
  $(".imgBando").hover(function(){
    $('.imgDerechaBando').show();
    }, function(){
    $('.imgDerechaBando').hide();
  });


  $(".imgLukoil").hover(function(){
    $('.imgDerechaLukoil').show();
    }, function(){
    $('.imgDerechaLukoil').hide();
  });


  


  $("#logo3").on("click",function(){
   
    $('.auto').hide();
    $('.tren').hide();
    $('.freno').hide();
    $('.lubricante').hide();
     $('.motor').show();
     $('.imgDerechaBando').hide();
     $('.imgDerechatxtBando').hide();
    });

  $("#logo1").on("click",function(){
    $('.motor').hide();
    $('.auto').hide();
    $('.tren').hide();
    $('.freno').show();
    $('.lubricante').hide();
    });
  $("#logo2").on("click",function(){
    $('.motor').hide();
    $('.auto').hide();
    $('.tren').show();
    $('.freno').hide();
    $('.lubricante').hide();
    });
  $("#logo4").on("click",function(){
    $('.motor').hide();
    $('.auto').hide();
    $('.tren').hide();
    $('.freno').hide();
    $('.lubricante').show();
    $('.imgDerechaLukoil').hide();
     $('.imgDerechatxtLukoil').hide();
    });
  $("#back").on("click",function(){
    $('.motor').hide();
    $('.auto').show();
    $('.tren').hide();
    $('.freno').hide();
    $('.lubricante').hide();
    });


  $("body").on("click",function(){
    if (Bando) {
        console.log("holi")
    $('#engineCarousel').show();
    $('.imgDerechatxtBando').hide();
    Bando=false;}
     if (Lukoil) {
        console.log("holi")
    $('#luk').show();
    $('.imgDerechatxtLukoil').hide();
    Lukoil=false;}
    });

  $(".imgBando").on("click",function(){
    $('#engineCarousel').hide();
    $('.imgDerechaBando').hide();
    $('.imgDerechatxtBando').show();
    setTimeout(() => Bando=true, 1000);
    });

  $(".imgLukoil").on("click",function(){
    $('#luk').hide();
    $('.imgDerechaLukoil').hide();
    $('.imgDerechatxtLukoil').show();
    setTimeout(() => Lukoil=true, 1000);
    });

});