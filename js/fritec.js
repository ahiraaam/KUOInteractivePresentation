
$(document).ready(function(){
    $("#infrastructure").on("click",function(){
        $("#01izquierda").show();
        $("#01derecha").show();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        $("#02izquierda").hide(1000);
        $("#02derecha").hide(1000);
        $("#03izquierda").hide(1000);
        $("#03derecha").hide(1000);
        $("#04izquierda").hide(1000);
        $("#04derecha").hide(1000);
       
    });
    $("#technology").on("click",function(){
        $("#02izquierda").show();
        $("#02derecha").show();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        $("#01izquierda").hide(1000);
        $("#01derecha").hide(1000);
        $("#03izquierda").hide(1000);
        $("#03derecha").hide(1000);
        $("#04izquierda").hide(1000);
        $("#04derecha").hide(1000);
    });
    $("#laboratory").on("click",function(){
        $("#03izquierda").show();
        $("#03derecha").show();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        $("#01izquierda").hide(1000);
        $("#01derecha").hide(1000);
        $("#02izquierda").hide(1000);
        $("#02derecha").hide(1000);
        $("#04izquierda").hide(1000);
        $("#04derecha").hide(1000);
    });
    $("#awards").on("click",function(){
        $("#04izquierda").show();
        $("#04derecha").show();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        $("#01izquierda").hide(1000);
        $("#01derecha").hide(1000);
        $("#02izquierda").hide(1000);
        $("#02derecha").hide(1000);
        $("#03izquierda").hide(1000);
        $("#03derecha").hide(1000);
    
    });
    $("#back").on("click",function(){
        console.log('click');
        $("#00izquierda").show();
        $("#00derecha").show();
        $("#01izquierda").hide(1000);
        $("#01derecha").hide(1000);
        $("#02izquierda").hide(1000);
        $("#02derecha").hide(1000);
        $("#03izquierda").hide(1000);
        $("#03derecha").hide(1000);
        $("#04izquierda").hide(1000);
        $("#04derecha").hide(1000);
 });
});




//cargar la 1er imagen

