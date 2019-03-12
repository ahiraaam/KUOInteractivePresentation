
$(document).ready(function(){
    $(".fritec1").hide();
    $(".fritec2").hide();
    $(".fritec3").hide();
    $(".fritec4").hide();
    $("#00izquierda").show(1000);
    $("#00derecha").show(1000);
    var i4=0;
    var d4=false;
    $("#infrastructure").on("click",function(){
        $(".fritec1").show();
        $(".fritec2").hide();
        $(".fritec3").hide();
        $(".fritec4").hide();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        d4 = true;
    });
    $("#technology").on("click",function(){
        $(".fritec1").hide();
        $(".fritec2").show();
        $(".fritec3").hide();
        $(".fritec4").hide();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        d4 = true;
    });
    $("#laboratory").on("click",function(){
        $(".fritec1").hide();
        $(".fritec2").hide();
        $(".fritec3").show();
        $(".fritec4").hide();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        d4 = true;
    });
    $("#awards").on("click",function(){
        $(".fritec1").hide();
        $(".fritec2").hide();
        $(".fritec3").hide();
        $(".fritec4").show();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        d4 = true;
    });
    $("#back").on("click",function(){
        
        $(".fritec1").hide();
        $(".fritec2").hide();
        $(".fritec3").hide();
        $(".fritec4").hide();
        $("#00izquierda").show(1000);
        $("#00derecha").show(1000);
 });
});




//cargar la 1er imagen

