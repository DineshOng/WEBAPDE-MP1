var lastIndex = 0;
//var listofImages = arraylist that i don't think will be necessary much
$(document).ready(function(){
    loadImages();
});

function loadImages(){
    for (i = 1; i <= 15; i++) { 
        $.ajax('https://jsonplaceholder.typicode.com/photos/'+Math.floor((Math.random() * 5000) + 1), {
            method: 'GET'
        }).then(function(data) {
            var iic = $("<div>").attr("id", "image_item_container");
            $("#image_container").append(iic);
            var tim = $("<img>").attr("src", data.thumbnailUrl);
            tim.attr("id", "thumbnail");
            $(iic).append(tim);
            var pop = $("<div>").addClass("popup");
            $(iic).append(pop);
            var imgpop = $("<img>").attr("id", "imgpopup");
            imgpop.attr("src", data.url);
            var xspan = $("<span>").addClass("close");
            $(xspan).html("&times;");
            $(pop).append(xspan);
            var ipop = $("<div>").attr("id", "imginfo");
            $(pop).append(ipop);
            $(pop).append(imgpop);
            $.ajax('https://jsonplaceholder.typicode.com/albums/'+data.albumId, {
                method: 'GET'
            }).then(function(dataa) {
                $.ajax('https://jsonplaceholder.typicode.com/users/'+dataa.userId, {
                method: 'GET'
                }).then(function(dataaa) {
                    $(ipop).append("<div id='username'>Name: <a id='photo_popup_name' href=users.html?"+dataaa.id+">"+dataaa.username+"</a></div><div id='album'>Album Name: <a id='photo_popup_album' href=albums.html?"+dataa.id+">"+dataa.title+"</a></div><div id='title'>Caption: <a id='photo_popup_title'>"+data.title+"</a></div>");
                });
            });
            tim.click(function(){
                $(pop).css("display", "block");
            });
            xspan.click(function(){
                $(pop).css("display", "none");
            });
        });
    }
}