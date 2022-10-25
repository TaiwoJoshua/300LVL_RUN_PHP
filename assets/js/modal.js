function teejay(){
    // -------------------------------------- Prev, Now and Next --------------------------------------
    table2 = [];
    let tsub = document.querySelectorAll("#todayclass>tr>td");
    for(i = 0; i < tsub.length; i++){
        table2[i] = tsub[i].innerText;
    }
    
    const numbers = [10, 10, 10, 10, 10, 10, 10, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10]
    todayz = date.getDay();
    hour = date.getHours();
    prevHour = hour - 1;                 // To get Previous Hour
    currentHour = hour;                  // To get Current Hour
    nextHour = hour + 1;                 // To get Next Hour
    iprev = numbers[prevHour];           // Changes the value of hour to new index value from numbers
    inow = numbers[currentHour];         // Changes the value of hour to new index value from numbers
    inext = numbers[nextHour];           // Changes the value of hour to new index value from numbers
    prev = table2[iprev];                // Picks string from table2 based on the index value      
    now = table2[inow];                  // Picks string from table2 based on the index value
    next = table2[inext];                // Picks string from table2 based on the index value
    document.getElementById('prev').innerHTML = prev;
    document.getElementById('now').innerHTML = now;
    document.getElementById('next').innerHTML = next;
    if(iprev == 10 || today == "Saturday" || today == "Sunday"){
        document.getElementById('prev').innerHTML = "None";
    };
    if(inext == 10 || today == "Saturday" || today == "Sunday"){
        document.getElementById('next').innerHTML = "None";
    };
    if(inow == 10 || today == "Saturday" || today == "Sunday"){
        document.getElementById('now').innerHTML = "None";
    };
    if(prevHour == -1){
        document.getElementById('prev').innerHTML = "None";
    };

    // -------------------------------------- Alert Present Class --------------------------------------
    present = document.getElementById('now').innerHTML;
    if(todayz >= 1 && todayz < 6 && hour >= 8 && hour < 18){
        if(present != "None"){
            swal({
                title: 'Ongoing Class!',
                text: present,
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        }
    };
        
    // ---------------------------------------- Countdown Timer ----------------------------------------
    nextz = document.getElementById('next').innerHTML;
    if(todayz >= 1 && todayz < 6 && hour >= 7 && hour < 17 && nextz != "None"){
        const countToDate = new Date("Jan 5, 9999 15:00:00").getTime();
        let previousTimeBetweenDates
        setInterval(() => {
        const currentDate = new Date()
        const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
        flipAllCards(timeBetweenDates)
        previousTimeBetweenDates = timeBetweenDates
        }, 250)
        function flipAllCards(time) {
            const seconds = time % 60
            const minutes = Math.floor(time / 60) % 60
            flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
            flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
            flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
            flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
        }
        function flip(flipCard, newNumber) {
            const topHalf = flipCard.querySelector(".top")
            const startNumber = parseInt(topHalf.textContent)
            if (newNumber === startNumber) return
            const bottomHalf = flipCard.querySelector(".bottom")
            const topFlip = document.createElement("div")
            topFlip.classList.add("top-flip")
            const bottomFlip = document.createElement("div")
            bottomFlip.classList.add("bottom-flip")
            top.textContent = startNumber
            bottomHalf.textContent = startNumber
            topFlip.textContent = startNumber
            bottomFlip.textContent = newNumber
            topFlip.addEventListener("animationstart", e => {
                topHalf.textContent = newNumber
            })
            topFlip.addEventListener("animationend", e => {
                topFlip.remove()
            })
            bottomFlip.addEventListener("animationend", e => {
                bottomHalf.textContent = newNumber
                bottomFlip.remove()
            })
            flipCard.append(topFlip, bottomFlip)
        }
    }
}

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

autosize(document.querySelectorAll("textarea"));

$("input").prop("readonly", true);
$("textarea").prop("readonly", true);
$(".update").hide();

$("#logout").click(function(){
    window.open("../assets/php/logout.php", '_self');
});
$(".portal>button").click(function(){
    window.open("https://reg.run.edu.ng/stud_main.php", '_blank');
});
