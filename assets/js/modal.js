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

let matric = $("#matric").val();
let fname = "";
let fname2 = "";
$("#time_table").change(function(){
    const fileSize = document.getElementById("time_table").files[0].size;
    if(fileSize > 102400){
        $("#large").show();
        $("#format").hide();
        $("#name").hide();
        $("#update").addClass('disable');
    }else{
        $("#large").hide();
        const fnames = document.getElementById("time_table").files[0].name;
        const start = fnames.length - 4;
        const end = fnames.length + 1;
        const ext = fnames.slice(start, end);
        if(ext == "docx" || ext == ".doc"){
            if(matric.search(/CPE/i) > -1){
                fname = "CPE Time-Table for the Semester.docx";
                fname2 = "CPE Time-Table for the Semester.doc";
            }else if(matric.search(/CVE/i) > -1){
                fname = "CVE Time-Table for the Semester.docx";
                fname2 = "CVE Time-Table for the Semester.doc";
            }else if(matric.search(/EEE/i) > -1){
                fname = "EEE Time-Table for the Semester.docx";
                fname2 = "EEE Time-Table for the Semester.doc";
            }else if(matric.search(/MEE/i) > -1){
                fname = "MEE Time-Table for the Semester.docx";
                fname2 = "MEE Time-Table for the Semester.doc";
            }
            if(fnames == fname || fnames == fname2){
                $("#update").removeClass('disable');
                $("#format").hide();
                $("#name").hide();
            }else{
                $("#update").addClass('disable');
                $("#name").show();
                $("#format").hide();
            }
        }else{
            $("#update").addClass('disable');
            $("#format").show();
            $("#name").hide();
        }
    };
});