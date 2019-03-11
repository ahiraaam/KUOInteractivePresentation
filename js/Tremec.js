
$(document).ready(function(){
    $("#equipment").on("click",function(){
        $("#01izquierda").show();
        $("#01derecha").show();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        $("#02izquierda").hide(1000);
        $("#02derecha").hide(1000);
       
    });
    $("#certifications").on("click",function(){
        $("#02izquierda").show();
        $("#02derecha").show();
        $("#00izquierda").hide(1000);
        $("#00derecha").hide(1000);
        $("#01izquierda").hide(1000);
        $("#01derecha").hide(1000);
        
    });
    
    $("#back").on("click",function(){
        console.log('click');
        $("#00izquierda").show();
        $("#00derecha").show();
        $("#01izquierda").hide(1000);
        $("#01derecha").hide(1000);
        $("#02izquierda").hide(1000);
        $("#02derecha").hide(1000);
        
 });
});




//cargar la 1er imagen

