$(document).ready(function(){
    $("li.fader").mouseover(function(){
        $(this).animate({ opacity: '0.25'}, "fast");
    });
    $("li.fader").mouseout(function(){
        $(this).animate({ opacity: '1.0'}, "fast");
    });   
    $("#errorpopper").mouseover(function(){
        $(this).css("cursor", "pointer");
        $(this).css("text-decoration", "underline");
    });
    $("#errorpopper").mouseout(function(){
        $(this).css("cursor", "pointer");
        $(this).css("text-decoration", "none");
    });    
});	