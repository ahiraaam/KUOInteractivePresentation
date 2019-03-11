const imagenesAwards=new Array(
    'img/02 Juego Moresa/05 Moresa/Moresa 08.jpg',
    'img/02 Juego Moresa/05 Moresa/Moresa 09.jpg',
);
const imagenesInfra=new Array(
    'img/02 Juego Moresa/02 Moresa/Moresa 02.jpg',
    'img/02 Juego Moresa/02 Moresa/Moresa 03.jpg',
);
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
        rotarImagenes("01derechaimg",imagenesInfra);
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
        rotarImagenes("04derechaimg",imagenesAwards);
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


function rotarImagenes(id,imagenes){
    this.imagenes=imagenes;
    var tiempo =3000;
    _img = document.getElementById(id);
    _img.src = imagenes[0];
    var i=1;
        setInterval(function(){
            _img.src = imagenes[i];
            i = (i == 1)? 0 : 1;
        }, tiempo);
}

//cargar la 1er imagen

