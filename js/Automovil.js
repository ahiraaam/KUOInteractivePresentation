  $(document).ready(function(){

    var Bando=false;
     var Lukoil=false;
    $('.motor').hide();
    $('.auto').show();
    $('.tren').hide();
    $('.freno').hide();
    $('.lubricante').hide();
    $(".logosBrakes").hide();
    $(".logosTrain").hide();
    $(".logosEngine").hide();
    $(".logosLubricants").hide();

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
    $(".logosEngine").show();
    }, function(){
    modelo.style.opacity = "0.9";
    engine.style.opacity = "0.2";
    $(".logosEngine").hide();
  });
  $("#logo1").hover(function(){
    modelo.style.opacity = "0.2";
    brake.style.opacity = "0.9";
    $(".logosBrakes").show();
    }, function(){
    modelo.style.opacity = "0.9";
    brake.style.opacity = "0.2";
    $(".logosBrakes").hide();
  });
  $("#logo2").hover(function(){
    modelo.style.opacity = "0.2";
    train.style.opacity = "0.9";
    $(".logosTrain").show();
    }, function(){
    modelo.style.opacity = "0.9";
    train.style.opacity = "0.2";
    $(".logosTrain").hide();
  });
  $("#logo4").hover(function(){
    modelo.style.opacity = "0.2";
    lubri.style.opacity = "0.9";
    $(".logosLubricants").show();
    }, function(){
    modelo.style.opacity = "0.9";
    lubri.style.opacity = "0.2";
    $(".logosLubricants").hide();
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


/*  $("body").on("click",function(){

    if (Bando) {
    
    Bando=false;
    }
     if (Lukoil) {
        console.log("holi")
    $('#luk').show();
    $('.imgDerechatxtLukoil').hide();
    Lukoil=false;}
    });
*/
    $(".header").on("click",function(){
    $('#engineCarousel').show();
    $('.moresaCarousel').hide();
    $('#moresaDieselCarousel').hide();
    $('#TFCarousel').hide();
    $('#TFDieselCarousel').hide();
    $('#SelloCarousel').hide();
    $('#VehycoCarousel').hide();
    $('.imgDerechatxtBando').hide();



    $("#trenCarousel").show();
    $('.tspCarousel').hide();
    $('.autopar2Carousel').hide();
    $('#tremecCarousel').hide();
    $('#raceCarousel').hide();


    $('#breakCarousel').show();
    $('.fritecCarousel').hide();
    $('#bioCarousel').hide();
    $('.autoparCarousel').hide();


    $('#luk').show();
    $('.imgDerechaLukoil').hide();
    $('.imgDerechatxtLukoil').hide();
    $('.lukoiCarousel').hide();


    });
  $(".imgBando").on("click",function(){
    $('#engineCarousel').hide();
    $('.moresaCarousel').hide();
    $('#moresaDieselCarousel').hide();
    $('#TFCarousel').hide();
    $('#TFDieselCarousel').hide();
    $('#SelloCarousel').hide();
    $('#VehycoCarousel').hide();
    $('.imgDerechaBando').hide();
    $('.imgDerechatxtBando').show();
    setTimeout(() => Bando=true, 1000);
    });

  $(".imgLukoil").on("click",function(){
    $('#luk').hide();
    $('.imgDerechaLukoil').hide();
    $('.imgDerechatxtLukoil').show();
    $('.lukoiCarousel').show();
    setTimeout(() => Lukoil=true, 1000);
    });

  $(".imgMoresa").on("click",function(){
    $('#engineCarousel').hide();
    $('.moresaCarousel').show();
    $('#moresaDieselCarousel').hide();
    $('#TFCarousel').hide();
    $('#TFDieselCarousel').hide();
    $('#SelloCarousel').hide();
    $('#VehycoCarousel').hide();
  });  
  $(".imgMoresaDiesel").on("click",function(){
    $('#engineCarousel').hide();
    $('.moresaCarousel').hide();
    $('#moresaDieselCarousel').show();
    $('#TFCarousel').hide();
    $('#TFDieselCarousel').hide();
    $('#SelloCarousel').hide();
    $('#VehycoCarousel').hide();
  }); 
  $(".imgTFVictor").on("click",function(){
    $('#engineCarousel').hide();
    $('.moresaCarousel').hide();
    $('#moresaDieselCarousel').hide();
    $('#TFCarousel').show();
    $('#TFDieselCarousel').hide();
    $('#SelloCarousel').hide();
    $('#VehycoCarousel').hide();
  }); 
  $(".imgTFVictorDiesel").on("click",function(){
    $('#engineCarousel').hide();
    $('.moresaCarousel').hide();
    $('#moresaDieselCarousel').hide();
    $('#TFCarousel').hide();
    $('#TFDieselCarousel').show();
    $('#SelloCarousel').hide();
    $('#VehycoCarousel').hide();
    
  }); 
  $(".imgSello").on("click",function(){
    $('#engineCarousel').hide();
    $('.moresaCarousel').hide();
    $('#moresaDieselCarousel').hide();
    $('#TFCarousel').hide();
    $('#TFDieselCarousel').hide();
    $('#SelloCarousel').show();
    $('#VehycoCarousel').hide();
  }); 
  $(".imgVehyco").on("click",function(){
    $('#engineCarousel').hide();
    $('.moresaCarousel').hide();
    $('#moresaDieselCarousel').hide();
    $('#TFCarousel').hide();
    $('#TFDieselCarousel').hide();
    $('#SelloCarousel').hide();
    $('#VehycoCarousel').show();
  }); 



  $(".imgFritec").on("click",function(){
    $('#breakCarousel').hide();
    $('.fritecCarousel').show();
    $('#bioCarousel').hide();
    $('.autoparCarousel').hide();
    
  }); 
  $(".imgBioceramic").on("click",function(){
    $('#breakCarousel').hide();
    $('.fritecCarousel').hide();
    $('#bioCarousel').show();
    $('.autoparCarousel').hide();
    
  }); 
  $(".imgAutopar").on("click",function(){
    $('#breakCarousel').hide();
    $('.fritecCarousel').hide();
    $('#bioCarousel').hide();
    $('.autoparCarousel').show();
    
  }); 
  $(".imgTSP").on("click",function(){
    $("#trenCarousel").hide();
    $('.tspCarousel').show();
    $('.autopar2Carousel').hide();
    $('#tremecCarousel').hide();
    $('#raceCarousel').hide();
    
  }); 
  $(".imgTremec").on("click",function(){
    $("#trenCarousel").hide();
    $('.tspCarousel').hide();
    $('.autopar2Carousel').hide();
    $('#tremecCarousel').show();
    $('#raceCarousel').hide();
    
  }); 
  $(".imgAutopar2").on("click",function(){
    $("#trenCarousel").hide();
    $('.tspCarousel').hide();
    $('.autopar2Carousel').show();
    $('#tremecCarousel').hide();
    $('#raceCarousel').hide();
    
  }); 
  $(".imgRace").on("click",function(){
    $("#trenCarousel").hide();
    $('.tspCarousel').hide();
    $('.autopar2Carousel').hide();
    $('#tremecCarousel').hide();
    $('#raceCarousel').show();
    
  }); 

});