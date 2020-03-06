(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        /*
         * ----------------------------------------------------------------------------------------
         *  Expandable Menu script
         * ----------------------------------------------------------------------------------------
         */
        
        $(document).mouseup(function(e) {
            var container = $(".menu-wraper");

            // if the target of the click isn't the container and search-box-toggle nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0 && !$(e.target).is(".menu-trigger i")) {
                $(".menu-wraper").removeClass("open");
                $(".menu-trigger i").removeClass("fa-close");
                $(".search-form").removeClass("menu-open");
                $(".menu-trigger i").addClass("fa-align-right");
            }


        }); //Mouse up function

        $(".menu-trigger").on("click", function(e) { //When menu-trigger button will be clicked

            if ($(".menu-wraper").hasClass("open")) { //If menu class open then remove it
                $(".menu-wraper").removeClass("open");
                $(".menu-trigger i").removeClass("fa-close");
                $(".search-form").removeClass("menu-open");
                $(".menu-trigger i").addClass("fa-align-right");
            } else {
                $(".menu-wraper").addClass("open");
                $(".menu-trigger i").addClass("fa-close");
                $(".search-form").addClass("menu-open");
                $(".menu-trigger i").removeClass("fa-align-right");
            }

        })
        // End Expandable search box script


        // Magnificpopup activator
        $('.play-btn').magnificPopup({ type: 'image' });


    });





}(jQuery));