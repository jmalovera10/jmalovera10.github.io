/* global $ */

function main(){
    'use strict';
    /*$(window).resize(function(){
        var tamPagina = $(document).height();
        if(tamPagina>=$(".home-header").height){
            $(".home-header").height(tamPagina);
        }
    });*/

    /*----------------------------------------
    Skill set initialization inside index.html
     -----------------------------------------*/
    function callback(data){
        var i = 1;
        data.forEach(function(d){
            $("#stats").append($("<div class='col-sm-8'>"))
                .append($("<div class='row justify-content-around'>")
                    .append($("<div class='col-sm-4'>")
                        .append($("<img class='skill-image'>")
                            .attr("src",d.image_path)
                            .attr("alt",d.name)))
                    .append($("<div class='col-sm-8'>")
                        .append($("<div id='my-progress'>")
                            .append($("<div id='skill"+i+"'>")
                                .text("10%"))))
            );
            //if($('#skill'+i).visible(true)){
                move(d.value,"skill"+i);
            //};
            i++;
        })

    }

    //Data upload
    $.getJSON("data/skills.json",callback);

    /*----------------------
    Dynamic barfill function
     -----------------------*/
    function move(value, skill) {
        var elem = document.getElementById(skill);
        var width = 10;
        var id = setInterval(frame, 20);
        function frame() {
            if (width >= value) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        }
    }
}
$(document).ready(main);
