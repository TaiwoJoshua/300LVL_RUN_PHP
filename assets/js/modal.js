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
// $("textarea").prop("readonly", true);
$(".update").hide();
$("#upass").prop("readonly", false);

$("#logout").click(function(){
    window.open("../assets/php/logout.php", '_self');
});
$(".portal>button").click(function(){
    window.open("https://reg.run.edu.ng/stud_main.php", '_blank');
});

function myFunction(){
    let x = document.getElementById("upass");
    let y = document.querySelector("input[type='checkbox']");
    if(y.checked === true) {
        x.type = "text";
    }else{
        x.type = "password";
    }
}

$("#update").click(function(){
    $("#cupdate").css('display', 'flex');
});
$("#close").click(function(){
    $("#cupdate").hide();
});
const cupdate = document.getElementById("cupdate");
const pagew = document.getElementById("pagewrapper");
const form = document.querySelector("cupdate>form");
window.onclick = function(event) {
    if (event.target == cupdate || event.target == pagew){
        cupdate.style.display = "none";
    }
}

$('textarea').on('input', function () {
    this.style.height = 'auto';
      
    this.style.height = 
            (this.scrollHeight) + 'px';
});

let textarea = document.getElementsByTagName('textarea')
for(i=0; i<textarea.length; i++){
    textarea[i].style.height = textarea[i].scrollHeight + 'px';
}