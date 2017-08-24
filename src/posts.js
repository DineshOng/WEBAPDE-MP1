var lastIndex = 0;
var i = 0;

$(document).ready(function(){
    $.ajax('https://jsonplaceholder.typicode.com/posts/', {
            method: 'GET'
    }).then(function(len) {
        //alert(len.length);
        lastIndex = len.length;
        loadPosts();
        lastIndex = i;
    });
});

function loadPosts(len){
    for (i = lastIndex; i > lastIndex-10; i--) { 
            $.ajax('https://jsonplaceholder.typicode.com/posts/'+i, {
                method: 'GET'
            }).then(function(data) {
                var uname;
                var url='https://jsonplaceholder.typicode.com/users/'+data.userId;
                //alert(data.userId);
                $.ajax(url, {
                    method: 'GET'
                }).then(function(dataa) {
                    //console.log(dataa.username);
                    uname = dataa.username;
                    var pic = $("<div>").attr("id", "post_item_container");
                    $("#post_container").append(pic);
                    $(pic).append("<div id='p_name'><a id='uname' href=users.html?"+data.userId+">"+uname+"</a></div><div id='p_title'>"+data.title+"</div><div id='p_body'>"+data.body+"</div>");
                });
            });
        }
    lastIndex = i;
}
