$(document).ready(function () {
     $("#stream1_btn").on("click", function () {
          $(".stream1").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream1").addClass('highlight_stream');
     });
     $("#stream2_btn").on("click", function () {
          $(".stream1").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream2").addClass('highlight_stream');
     });
     $("#stream3_btn").on("click", function () {
          $(".stream1").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream3").addClass('highlight_stream');
     });

     $("p").on("click", function () {
          $("p").css('color', 'red');
     });
     $("h2").hover(function () {
          $("h2").css('color', 'lightblue');
     });
     $("h2").hover(function () {
          $(this).css('font-size', '40px');
     });
     $(".bottom_button").mouseenter(function(){
          $("body").css( "background-color", "black"); 
      });
      $(".bottom_button").mouseleave(function(){
          $("body").css( "background-color", "#eee"); 
      });
});