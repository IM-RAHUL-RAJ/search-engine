// c07e937aa2cea1e3d4a6b935a8fe0f84
$("form").submit(function (e) {
    e.preventDefault();

    var query=$("#search").val();


var API_KEY='c07e937aa2cea1e3d4a6b935a8fe0f84';



var url='http://api.serpstack.com/search?access_key='+API_KEY+'&type=web&query='+query;

console.log(url);

$.get(url,function(data){
    console.log(data);
})


})