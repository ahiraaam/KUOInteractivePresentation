
$(document).ready(function(){
        $(".moresa1").hide();
        $(".moresa2").hide();
        $(".moresa3").hide();
        $(".moresa4").hide();
        $("#00izquierda").show(1000);
        $("#00derecha").show(1000);
    $("#infrastructure").on("click",function(){
        $(".moresa1").show();
        $(".moresa2").hide();
        $(".moresa3").hide();
        $(".moresa4").hide();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
    });
    $("#technology").on("click",function(){
        $(".moresa1").hide();
        $(".moresa2").show();
        $(".moresa3").hide();
        $(".moresa4").hide();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
    });
    $("#laboratory").on("click",function(){
        $(".moresa1").hide();
        $(".moresa2").hide();
        $(".moresa3").show();
        $(".moresa4").hide();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
    });
    $("#awards").on("click",function(){
        $(".moresa1").hide();
        $(".moresa2").hide();
        $(".moresa3").hide();
        $(".moresa4").show();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
    });
    $("#back").on("click",function(){
        console.log('click');
        $(".moresa1").hide();
        $(".moresa2").hide();
        $(".moresa3").hide();
        $(".moresa4").hide();
        $("#00izquierda").show(1000);
        $("#00derecha").show(1000);
 });
});

