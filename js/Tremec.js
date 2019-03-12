
$(document).ready(function(){
    $("#00izquierda").show();
    $("#00derecha").show();
    $(".tremec1").hide();
    $(".tremec2").hide();
    var i4=0;
    var d4=false;

    $("#equipment").on("click",function(){
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        $(".tremec1").show();
        $(".tremec2").hide(1000);
        d4 = true;
       
    });
    $("#certifications").on("click",function(){
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        $(".tremec1").hide(1000);
        $(".tremec2").show();
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

