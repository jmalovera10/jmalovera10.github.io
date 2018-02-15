/*global $*/

function main() {
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
    function callbackSkills(data) {
        var i = 1;
        data.forEach(function (d) {
            $("#stats").append($("<div class='col-sm-8'>"))
                .append($("<div class='row justify-content-around'>")
                    .append($("<div class='col-sm-3 center-items'>")
                        .append($("<img class='skill-image img-responsive'>")
                            .attr("src", d.image_path)
                            .attr("alt", d.name)))
                    .append($("<div class='col-sm-9 center-items'>")
                        .append($("<div id='my-progress'>")
                            .append($("<div id='skill" + i + "'>")
                                .text("10%"))))
                );
            //if($('#skill'+i).visible(true)){
            move(d.value, "skill" + i);
            //};
            i++;
        })

    }

    /*----------------------------------------
    Hobbies set initialization inside index.html
     -----------------------------------------*/
    function callbackHobbies(data) {
        data.forEach(function (d) {
            $("#hobbies").append($("<div class='col-sm-4 center-items'>")
                .append($("<div class='row justify-content-around center-items wow flipInX'>")
                    .append($("<div class='col center-items'>")
                        .append($("<img class='hobbies-image img-responsive'>")
                            .attr("src", d.img_src)
                            .attr("alt", d.name))))
                .append($("<div class='row justify-content-around center-items wow rubberBand'>")
                    .append($("<div class='col center-items'>")
                        .append($("<h2 class='hobbies-description'>")
                            .text(d.name))))
            )
        })
    };


    /*----------------------------------------
    Hobbies set initialization inside index.html
     -----------------------------------------*/

//Skills data upload
    $.getJSON("data/skills.json", callbackSkills);

//Hobbies data upload
    $.getJSON("data/hobbies.json", callbackHobbies);

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
