$(document).ready(function(){
    let nannounce = $("#announcement>div:nth-child(2)>div>textarea").length;
    let nrow = $("#tablewrapper>tr").length;
    let ncourse = $("#courses>.coursecontent>div:nth-child(1)>input").length;
    $("#n_announce").val(nannounce);
    $("#nrow").val(nrow);
    $("#ncourse").val(ncourse);
})

$("#add").click(function(e){
    e.preventDefault();
    let a = document.querySelectorAll(".announce");
    let check = true;
    for(i = 0; i < a.length; i++){
        if(a[i].value == "" || a[i].value == "Please, use this first"){
            check = false;
            break;
        }
    }
    console.log(check);
    if(check == true && a.length < 5){
        $("#announcement>div:nth-child(2)").append('<div><textarea class="announce" name="announce[]" style="border: 1px solid black;"></textarea></div>');
    }else{
        a[a.length - 1].innerText = "Please, use this first";
    }
    let nannounce = $("#announcement>div:nth-child(2)>div>textarea").length;
    $("#n_announce").val(nannounce);
})

$("#edit").click(function(e){
    e.preventDefault();
    $("textarea").prop("readonly", false);
})

$("input").prop("readonly", true);
$("textarea").prop("readonly", true);
$(".update").hide();

$("#logout").click(function(){
    window.open("../assets/php/logout.php", '_self');
});
$(".portal>button").click(function(){
    window.open("https://reg.run.edu.ng/stud_main.php", '_blank');
});
