import $ from "jquery";

var folder = "Images/";

$.ajax({
    url : folder,
    success: function (data) {
        console.log(data)
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                $("body").append( "<img src='"+ folder + val +"'>" );
            }
        });
        console.log(data)
    }
});
