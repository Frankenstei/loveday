$(function(){
$("input").keyup(function(){
var value=$(this).val();
$("#add").on("click",function(){
$("#lst").text(value);
}).keyup();
}
});