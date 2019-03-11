
$(document).ready(function(){
    $(".tf1").hide();
    $(".tf2").hide();
    $(".tf3").hide();
    $(".tf4").hide();
    $("#00izquierda").show(1000);
    $("#00derecha").show(1000);
    $("#infrastructure").on("click",function(){
        $(".tf1").show();
        $(".tf2").hide();
        $(".tf3").hide();
        $(".tf4").hide();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
       
    });
    $("#technology").on("click",function(){
        $(".tf1").hide();
        $(".tf2").show();
        $(".tf3").hide();
        $(".tf4").hide();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
    });
    $("#laboratory").on("click",function(){
        $(".tf1").hide();
        $(".tf2").hide();
        $(".tf3").show();
        $(".tf4").hide();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
    });
    $("#awards").on("click",function(){
        $(".tf1").hide();
        $(".tf2").hide();
        $(".tf3").hide();
        $(".tf4").show();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
    
    });
    $("#back").on("click",function(){
        $(".tf1").hide();
        $(".tf2").hide();
        $(".tf3").hide();
        $(".tf4").hide();
        $("#00izquierda").show(1000);
        $("#00derecha").show(1000);
 });
});




//cargar la 1er imagen

