$(document).ready(function(){
  
    $(".Dacomsa1").show();
    $(".Dacomsa2").hide();
    $(".Dacomsa3").hide();
    $(".Dacomsa4").hide();
    $(".Dacomsa5").hide();
    $(".Dacomsa6").hide();

    var i4=0;
    var d4=false;
    //setInterval(function(){ alert("Hello"); }, 3000);

    $("#web").on("click",function(){
        $(".Dacomsa6").show();
        $("#06izquierda").show();
        $("#06derecha").show();
        $(".redesSociales").show();
        $(".video06").show();
        $(".link06").show();
        $(".Dacomsa1").hide(1000);
        $(".Dacomsa2").hide(1000);
        $(".Dacomsa3").hide(1000);
        $(".Dacomsa4").hide(1000);
        $(".Dacomsa5").hide(1000);
    });

    $("#segment").on("click",function(){
        $(".Dacomsa6").hide(1000);
        $("#06izquierda").hide(1000);
        $("#06derecha").hide(1000);
        $(".redesSociales").hide(1000);
        $(".video06").hide(1000);
        $(".link06").hide(1000);
        $(".Dacomsa1").hide(1000);
        $(".Dacomsa2").show();
        $(".Dacomsa3").hide(1000);
        $(".Dacomsa4").hide(1000);
        $(".Dacomsa5").hide(1000);
        $(".imgDerecha02").hide();
        $(".imgDerecha03").hide();
        $(".imgSmall1").on("click",function(){
            $(".imgDerecha01").show();
            $(".imgDerecha02").hide();
            $(".imgDerecha03").hide();
            console.log("hola");
        });
        $(".imgSmall2").on("click",function(){
            $(".imgDerecha01").hide();
            $(".imgDerecha02").show();
            $(".imgDerecha03").hide();
        });
        $(".imgSmall3").on("click",function(){
            $(".imgDerecha01").hide();
            $(".imgDerecha02").hide();
            $(".imgDerecha03").show();
        });
    });

    $("#dist").on("click",function(){
        $(".Dacomsa6").hide(1000);
        $("#06izquierda").hide(1000);
        $("#06derecha").hide(1000);
        $(".redesSociales").hide(1000);
        $(".video06").hide(1000);
        $(".link06").hide(1000);
        $(".Dacomsa1").hide(1000);
        $(".Dacomsa2").hide(1000);
        $(".Dacomsa3").show();
        $(".Dacomsa4").hide(1000);
        $(".Dacomsa5").hide(1000);
            $("#dacomsa3img01").show();
            $("#dacomsa3img02").hide();
            $("#dacomsa3img03").hide();
            $("#dacomsa3img04").hide();
            $("#dacomsa3img05").hide();

        $("#location").on("click",function(){
            $("#dacomsa3img01").hide();
            $("#dacomsa3img02").show();
            $("#dacomsa3img03").hide();
            $("#dacomsa3img04").hide();
            $("#dacomsa3img05").hide();

        });
        $("#time").on("click",function(){
            $("#dacomsa3img01").hide();
            $("#dacomsa3img02").hide();
            $("#dacomsa3img03").show();
            $("#dacomsa3img04").hide();
            $("#dacomsa3img05").hide();

        });
        $("#technology").on("click",function(){
            $("#dacomsa3img01").hide();
            $("#dacomsa3img02").hide();
            $("#dacomsa3img03").hide();
            $("#dacomsa3img04").show();
            $("#dacomsa3img05").hide();

        });
        $("#service").on("click",function(){
            $("#dacomsa3img01").hide();
            $("#dacomsa3img02").hide();
            $("#dacomsa3img03").hide();
            $("#dacomsa3img04").hide();
            $("#dacomsa3img05").show();

        });
        
    });

    $("#tech").on("click",function(){
        $(".Dacomsa6").hide(1000);
        $("#06izquierda").hide(1000);
        $("#06derecha").hide(1000);
        $(".redesSociales").hide(1000);
        $(".video06").hide(1000);
        $(".link06").hide(1000);
        $(".Dacomsa1").hide(1000);
        $(".Dacomsa2").hide(1000);
        $(".Dacomsa3").hide(1000);
        $(".Dacomsa4").show();
        $(".Dacomsa5").hide(1000);
        d4 = true;
        
    });

     $("#user").on("click",function(){
        $(".Dacomsa6").hide(1000);
        $("#06izquierda").hide(1000);
        $("#06derecha").hide(1000);
        $(".redesSociales").hide(1000);
        $(".video06").hide(1000);
        $(".link06").hide(1000);
        $(".Dacomsa1").hide(1000);
        $(".Dacomsa2").hide(1000);
        $(".Dacomsa3").hide(1000);
        $(".Dacomsa4").hide(1000);
        $(".Dacomsa5").show();
    });

    $("#back").on("click",function(){
        console.log('click');
        $(".Dacomsa1").show();
        $(".Dacomsa6").hide(1000);
        $("#06izquierda").hide(1000);
        $("#06derecha").hide(1000);
        $(".redesSociales").hide(1000);
        $(".video06").hide(1000);
        $(".link06").hide(1000);
        $(".Dacomsa2").hide(1000);
        $(".Dacomsa3").hide(1000);
        $(".Dacomsa4").hide(1000);
        $(".Dacomsa5").hide(1000);
    });
    
});
