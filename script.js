$(document).ready(function() {

  $("#stream1_btn").on("click", function() {
      $(".stream1").removeClass('highlight_stream');
      $(".stream2").removeClass('highlight_stream');
      $(".stream3").removeClass('highlight_stream');
      $(".stream1").addClass('highlight_stream');
 });
 $("#stream2_btn").on("click", function() {
      $(".stream1").removeClass('highlight_stream');
      $(".stream2").removeClass('highlight_stream');
      $(".stream3").removeClass('highlight_stream');
      $(".stream2").addClass('highlight_stream');
 });
 $("#stream3_btn").on("click", function() {
      $(".stream1").removeClass('highlight_stream');
      $(".stream2").removeClass('highlight_stream');
      $(".stream3").removeClass('highlight_stream');
      $(".stream3").addClass('highlight_stream');
 });
}); 

$("p").click(function() {
     $("p").css("color", "red");
});

$("h2").hover(function() {
     $("h2").css("background", "lightblue");
});

$("#hr_html").hover(function(){
     $("#hr_mysql").css('font-size', '1em');
     $("#hr_python").css('font-size', '1em');
     $("#hr_jquery").css('font-size', '1em');
     $("#hr_django").css('font-size', '1em');
     $("#hr_css").css('font-size', '1em');
     $("#hr_html").css('font-size', '2em');
 });

 $("#hr_mysql").hover(function(){
     $("#hr_mysql").css('font-size', '2em');
     $("#hr_python").css('font-size', '1em');
     $("#hr_jquery").css('font-size', '1em');
     $("#hr_django").css('font-size', '1em');
     $("#hr_css").css('font-size', '1em');
     $("#hr_html").css('font-size', '1em');
 });

 $("#hr_python").hover(function(){
     $("#hr_mysql").css('font-size', '1em');
     $("#hr_python").css('font-size', '2em');
     $("#hr_jquery").css('font-size', '1em');
     $("#hr_django").css('font-size', '1em');
     $("#hr_css").css('font-size', '1em');
     $("#hr_html").css('font-size', '1em');
 });

 $("#hr_jquery").hover(function(){
     $("#hr_mysql").css('font-size', '1em');
     $("#hr_python").css('font-size', '1em');
     $("#hr_jquery").css('font-size', '2em');
     $("#hr_django").css('font-size', '1em');
     $("#hr_css").css('font-size', '1em');
     $("#hr_html").css('font-size', '1em');
 });

 $("#hr_django").hover(function(){
     $("#hr_mysql").css('font-size', '1em');
     $("#hr_python").css('font-size', '1em');
     $("#hr_jquery").css('font-size', '1em');
     $("#hr_django").css('font-size', '2em');
     $("#hr_css").css('font-size', '1em');
     $("#hr_html").css('font-size', '1em');
 });

 $("#hr_css").hover(function(){
     $("#hr_mysql").css('font-size', '1em');
     $("#hr_python").css('font-size', '1em');
     $("#hr_jquery").css('font-size', '1em');
     $("#hr_django").css('font-size', '1em');
     $("#hr_css").css('font-size', '2em');
     $("#hr_html").css('font-size', '1em');
 });

$(".bottom_button").mouseenter(function() {
     $("body").css("background-color", "black");
});

$(".bottom_button").mouseleave(function() {
     $("body").css("background-color", "#eee");
});



