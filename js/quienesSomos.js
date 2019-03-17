
$(document).ready(function(){
    $("#00izquierda").show();
    $("#00derecha").show();
    $(".quienes1").hide();
    $(".quienes2").hide();
    var i4=0;
    var d4=false;

    $("#comer").on("click",function(){
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        $(".quienes1").show();
        $(".quienes2").hide(1000);
        d4 = true;
       
    });
    $("#plants").on("click",function(){
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        $(".quienes1").hide(1000);
        $(".quienes2").show();
        d4 = true;
        
    });
    
    $("#back").on("click",function(){
        $("#00izquierda").show();
        $("#00derecha").show();
        $(".tremec1").hide(1000);
        $(".tremec2").hide(1000);
        
 });
});




//cargar la 1er imagen

