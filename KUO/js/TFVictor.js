
$(document).ready(function(){
    $(".tf1").hide();
    $(".tf2").hide();
    $(".tf3").hide();
    $(".tf4").hide();
    $("#00izquierda").show();
    $("#00derecha").show();
    var i4=0;
    var d4=false;

    $("#infrastructure").on("click",function(){
        $(".tf1").show();
        $(".tf2").hide(1000);
        $(".tf3").hide(1000);
        $(".tf4").hide(1000);
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        d4 = true;
        
       
    });
    $("#technology").on("click",function(){
        $(".tf1").hide(1000);
        $(".tf2").show();
        $(".tf3").hide(1000);
        $(".tf4").hide(1000);
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        d4 = true;
        
    });
    $("#laboratory").on("click",function(){
        $(".tf1").hide(1000);
        $(".tf2").hide(1000);
        $(".tf3").show();
        $(".tf4").hide(1000);
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        d4 = true;
        
    });
    $("#awards").on("click",function(){
        $(".tf1").hide(1000);
        $(".tf2").hide(1000);
        $(".tf3").hide(1000);
        $(".tf4").show();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        d4 = true;
        
    
    });
    $("#back").on("click",function(){
        $(".tf1").hide(1000);
        $(".tf2").hide(1000);
        $(".tf3").hide(1000);
        $(".tf4").hide(1000);
        $("#00izquierda").show();
        $("#00derecha").show();
 });
});




//cargar la 1er imagen

