function main(){
    'use strict';
    $(window).resize(function(){
        var tamPagina = $(document).height();
        if(tamPagina>=$(".home-header").height){
            $(".home-header").height(tamPagina);
        }
    });
}
$(document).ready(main);