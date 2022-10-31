function myFunction(){
    let x = document.getElementById("password");
    let y = document.querySelector("input[type='checkbox']");
    if(y.checked === true) {
        x.type = "text";
    }else{
        x.type = "password";
    }
}

$("#alogin").click(function(){
    $("#password").show();
    $("#password").prop('required', true);
    $("#showwrapper").css('display', 'flex');
    $("#alogin").hide();
    $("#slogin").show();
    $("#incorrect").hide();
    $("#empty").hide();
})

$("#slogin").click(function(){
    $("#password").hide();
    $("#password").prop('required', false);
    $("#showwrapper").hide();
    $("#slogin").hide();
    $("#alogin").show();
    $("#incorrect").hide();
    $("#empty").hide();
    $("#pincorrect").hide();
})

$("#submit").click(function(e){
    let matric = $("#matric").val();
    let no = matric.slice(8, 10);
    var rx = /[a-z]/gi;
    var rxn = /[0-9]/gi;
    var m = matric.match(rx);
    var n = matric.match(rxn);
    if(matric == ""){
        $("#empty").show();
        $("#incorrect").hide();
    }else{
        if((matric.search(/CPE/i) > -1 || matric.search(/CVE/i) > -1 || matric.search(/EEE/i) > -1 || matric.search(/MEE/i) > -1)  && m.length > 5 && n.length > 5  && (no == "21" || no == "20")){
            $("#incorrect").hide();
            $("#empty").hide();
        }else{
            $("#incorrect").show();
            $("#empty").hide();
            e.preventDefault();
        }
    }
})