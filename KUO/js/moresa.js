
$(document).ready(function(){
        $(".moresa1").hide();
        $(".moresa2").hide();
        $(".moresa3").hide();
        $(".moresa4").hide();
        $("#00izquierda").show(1000);
        $("#00derecha").show(1000);
        var i4=0;
        var d4=false;
    $("#infrastructure").on("click",function(){
        $(".moresa1").show();
        $(".moresa2").hide(1000);
        $(".moresa3").hide(1000);
        $(".moresa4").hide(1000);
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        d4 = true;
    });
    $("#technology").on("click",function(){
        $(".moresa1").hide(1000);
        $(".moresa2").show();
        $(".moresa3").hide(1000);
        $(".moresa4").hide(1000);
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        d4 = true;
    });
    $("#laboratory").on("click",function(){
        $(".moresa1").hide(1000);
        $(".moresa2").hide(1000);
        $(".moresa3").show();
        $(".moresa4").hide(1000);
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        d4 = true;
    });
    $("#awards").on("click",function(){
        $(".moresa1").hide(1000);
        $(".moresa2").hide(1000);
        $(".moresa3").hide(1000);
        $(".moresa4").show();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        d4 = true;
    });
    $("#back").on("click",function(){
        console.log('click');
        $(".moresa1").hide(1000);
        $(".moresa2").hide(1000);
        $(".moresa3").hide(1000);
        $(".moresa4").hide(1000);
        $("#00izquierda").show();
        $("#00derecha").show();
 });
});

