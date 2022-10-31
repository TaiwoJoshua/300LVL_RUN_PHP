<?php
    include '../assets/php/db_connect.php';

    $DateTime = date('Y-m-d H:i:s');
    $admin = "false";
    $matric = $_SESSION['matric'];
    $password = $_SESSION['password'];
    if(isset($matric) && $password !== ""){
        $ttime = strtotime($DateTime) - 1800;
        $select = "SELECT * FROM mee_admin_login_time WHERE matric='$matric'";
        $result = $conn->query($select);
        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                $time = $_SESSION['time'] = $row['time'];
            }
            $ntime = strtotime($time);
            if($ntime > $ttime){
                $nselect = "SELECT * FROM admins WHERE matric='$matric' AND password='$password'";
                $nresult = $conn->query($nselect);
        
                if($nresult->num_rows > 0){
                    $admin = "true";
                }
            }else{
                session_destroy();
                header('location: ../index.php');
            }
        }else{
            header('location: ../index.php');
        }
    }else if(isset($matric)){
        $ttime = strtotime($DateTime) - 86400;
        $select = "SELECT * FROM mee_login_time WHERE matric='$matric'";
        $result = $conn->query($select);
        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                $time = $_SESSION['time'] = $row['time'];
            }

            $ntime = strtotime($time);
            if($ntime > $ttime){
                
            }else{
                session_destroy();
                header('location: ../index.php');
            }
        }else{
            header('location: ../index.php');
        }
    }else{
        header('location: ../index.php');
    }

    // -------------------------------------- Announcement Section Starts Here --------------------------------------
    $aready = "";
    $announce = array();
    $announcement = 'SELECT * FROM mee_announcement';
    $res_announcement = $conn->query($announcement);
    if($res_announcement->num_rows > 0){
        $i = 0;
        while($announcerow = $res_announcement->fetch_assoc()){
            $announce[$i] = $announcerow['info'];
            $aready = "announce";
            $i++;
        }
    }

    // -------------------------------------- Time-Table Section Starts Here -----------------------------------
    $tready = "";
    $period1 = array(); $period2 = array(); $period3 = array(); $period4 = array(); $period5 = array(); $period6 = array(); $period7 = array(); $period8 = array(); $period9 = array(); $period10 = array();
    $ttable = 'SELECT * FROM mee_timetable';
    $res_ttable = $conn->query($ttable);
    if($res_ttable->num_rows > 0){
        $i = 0;
        while($ttablerow = $res_ttable->fetch_assoc()){
            $period1[$i] = $ttablerow['Period 1'];
            $period2[$i] = $ttablerow['Period 2'];
            $period3[$i] = $ttablerow['Period 3'];
            $period4[$i] = $ttablerow['Period 4'];
            $period5[$i] = $ttablerow['Period 5'];
            $period6[$i] = $ttablerow['Period 6'];
            $period7[$i] = $ttablerow['Period 7'];
            $period8[$i] = $ttablerow['Period 8'];
            $period9[$i] = $ttablerow['Period 9'];
            $period10[$i] = $ttablerow['Period 10'];
            $tready = "ttable";
            $i++;
        }
    } 

    // -------------------------------------- Courses Section Starts Here --------------------------------------
    $ready = "";
    $course_code = array(); $course_title = array(); $units = array();
    $ccode = 'SELECT * FROM mee_courses';
    $res_ccode = $conn->query($ccode);
    if($res_ccode->num_rows > 0){
        $i = 0;
        while($ccoderow = $res_ccode->fetch_assoc()){
            $course_code[$i] = $ccoderow['course_code'];
            $course_title[$i] = $ccoderow['course_title'];
            $units[$i] = $ccoderow['units'];
            $ready = "ccode";
            $i++;
        }
    } 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../assets/img/redeemer's icon.jfif">
    <link rel="stylesheet" href="../assets/css/modal.css">
    <link rel="stylesheet" href="../assets/css/animate.min.css">
    <title>ENGINEERING 300LVL R.U.N</title>
    <style>
        .view{
            background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../assets/img/pavel-neznanov-w95Fb7EEcjE-unsplash.jpg);
        }
    </style>
</head>
<body>
<form action="../assets/php/mee_update.php" method="POST" id="form">
    <div class="pagewrapper animate__animated animate__slower" id="pagewrapper">
        <div class="view" id="view">
            <!-- -------------------------------------- Navbar Section Starts Here -------------------------------------- -->
            <div id="navbar">
                <h1>RUN 300LVL MECHANICAL ENGINEERING</h1>
            </div>
            <!-- -------------------------------------- Navbar Section Ends Here -------------------------------------- -->
            
            <!-- -------------------------------------- Timer Section Starts Here -------------------------------------- -->
            <div class="count">
                <h3>
                    Countdown To Next Class
                </h3>
                <div class="here">
                    <h2 id="next">
                    </h2>
                    <div class="container">
                        <div class="container-segment">
                            <div class="segment-title">Minutes</div>
                            <div class="segment">
                              <div class="flip-card" data-minutes-tens>
                                <div class="top">0</div>
                                <div class="bottom">0</div>
                              </div>
                              <div class="flip-card" data-minutes-ones>
                                <div class="top">0</div>
                                <div class="bottom">0</div>
                              </div>
                            </div>
                          </div>
                          <div class="container-segment">
                            <div class="segment-title">Seconds</div>
                            <div class="segment">
                              <div class="flip-card" data-seconds-tens>
                                <div class="top">0</div>
                                <div class="bottom">0</div>
                              </div>
                              <div class="flip-card" data-seconds-ones>
                                <div class="top">0</div>
                                <div class="bottom">0</div>
                              </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
            <!-- -------------------------------------- Timer Section Ends Here -------------------------------------- -->
        </div>

        <!-- -------------------------------------- Prev. and Now Section Starts Here -------------------------------------- -->
        <div class="class hidden animate__animated animate__slower" id="class">
            <div class="prev">
                <h2>Prev Class</h2>
                <div id="prev">
            
                </div>
            </div>
            <div class="next">
                <h2>Now</h2>
                <div id="now">
                    
                </div>
            </div>
        </div><br>
        <!-- -------------------------------------- Prev. and Now Section Ends Here -------------------------------------- -->
        
        <!-- -------------------------------------- Today Classes Section Starts Here -------------------------------------- -->
        <div class="today hidden animate__animated animate__slower" id="today">
            <h2>Classes for Today</h2>
            <div class="overflow">
                <table>
                    <thead>
                        <tr class="background">
                            <th></th>
                            <th>08:00 - 09:00</th>
                            <th>09:00 - 10:00</th>
                            <th>10:00 - 11:00</th>
                            <th>11:00 - 12:00</th>
                            <th>12:00 - 01:00</th>
                            <th>01:00 - 02:00</th>
                            <th>02:00 - 03:00</th>
                            <th>03:00 - 04:00</th>
                            <th>04:00 - 05:00</th>
                            <th>05:00 - 06:00</th>
                        </tr>
                    </thead>
                    <tbody id="todayclass">
                        <tr class="ttable">
                            <th>Courses</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div><br>
        <!-- -------------------------------------- Today Classes Section Ends Here -------------------------------------- -->
        
        <!-- -------------------------------------- Announcement Section Starts Here -------------------------------------- -->
        <div class="announcement hidden animate__animated animate__slower" id="announcement">
            <h2>Announcement</h2>
            <div>

            </div>
            <input type="number" name="n_announce" id="n_announce" style="display: none;">
            <div id="add1">
                <button id="edit" class="download update" onclick="return false;">Edit</button>
                <button id="add" class="download update">Add</button>        
            </div><br>
        </div>
        <!-- -------------------------------------- Announcement Section Ends Here -------------------------------------- -->
                
        <!-- -------------------------------------- Time-Table Section Starts Here -------------------------------------- -->
        <div class="timetable hidden animate__animated animate__slower" id="timetable">
            <h2>Time-Table for the Semester</h2>
            <div class="timetablecontent">
                <div class="overflow">
                    <table>
                        <thead>
                            <tr class="background">
                                <th></th>
                                <th>08:00 - 09:00</th>
                                <th>09:00 - 10:00</th>
                                <th>10:00 - 11:00</th>
                                <th>11:00 - 12:00</th>
                                <th>12:00 - 01:00</th>
                                <th>01:00 - 02:00</th>
                                <th>02:00 - 03:00</th>
                                <th>03:00 - 04:00</th>
                                <th>04:00 - 05:00</th>
                                <th>05:00 - 06:00</th>
                            </tr>
                        </thead>
                        <tbody id="tablewrapper">
                            <tr class="ttable">
                                <th>Monday</th>
                                <td><input type="text" name="period1[]"></td>
                                <td><input type="text" name="period2[]"></td>
                                <td><input type="text" name="period3[]"></td>
                                <td><input type="text" name="period4[]"></td>
                                <td><input type="text" name="period5[]"></td>
                                <td><input type="text" name="period6[]"></td>
                                <td><input type="text" name="period7[]"></td>
                                <td><input type="text" name="period8[]"></td>
                                <td><input type="text" name="period9[]"></td>
                                <td><input type="text" name="period10[]"></td>
                            </tr>
                            <tr class="ttable">
                                <th>Tuesday</th>
                                <td><input type="text" name="period1[]"></td>
                                <td><input type="text" name="period2[]"></td>
                                <td><input type="text" name="period3[]"></td>
                                <td><input type="text" name="period4[]"></td>
                                <td><input type="text" name="period5[]"></td>
                                <td><input type="text" name="period6[]"></td>
                                <td><input type="text" name="period7[]"></td>
                                <td><input type="text" name="period8[]"></td>
                                <td><input type="text" name="period9[]"></td>
                                <td><input type="text" name="period10[]"></td>
                            </tr>
                            <tr class="ttable">
                                <th>Wednesday</th>
                                <td><input type="text" name="period1[]"></td>
                                <td><input type="text" name="period2[]"></td>
                                <td><input type="text" name="period3[]"></td>
                                <td><input type="text" name="period4[]"></td>
                                <td><input type="text" name="period5[]"></td>
                                <td><input type="text" name="period6[]"></td>
                                <td><input type="text" name="period7[]"></td>
                                <td><input type="text" name="period8[]"></td>
                                <td><input type="text" name="period9[]"></td>
                                <td><input type="text" name="period10[]"></td>
                            </tr>
                            <tr class="ttable">
                                <th>Thursday</th>
                                <td><input type="text" name="period1[]"></td>
                                <td><input type="text" name="period2[]"></td>
                                <td><input type="text" name="period3[]"></td>
                                <td><input type="text" name="period4[]"></td>
                                <td><input type="text" name="period5[]"></td>
                                <td><input type="text" name="period6[]"></td>
                                <td><input type="text" name="period7[]"></td>
                                <td><input type="text" name="period8[]"></td>
                                <td><input type="text" name="period9[]"></td>
                                <td><input type="text" name="period10[]"></td>
                            </tr>
                            <tr class="ttable">
                                <th>Friday</th>
                                <td><input type="text" name="period1[]"></td>
                                <td><input type="text" name="period2[]"></td>
                                <td><input type="text" name="period3[]"></td>
                                <td><input type="text" name="period4[]"></td>
                                <td><input type="text" name="period5[]"></td>
                                <td><input type="text" name="period6[]"></td>
                                <td><input type="text" name="period7[]"></td>
                                <td><input type="text" name="period8[]"></td>
                                <td><input type="text" name="period9[]"></td>
                                <td><input type="text" name="period10[]"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="downloadwrapper">
                    <input type="number" name="nrow" id="nrow" style="display: none;">
                    <button class="download"><a href="../assets/files/MEE Time-Table for the Semester.docx" download="Time-Table for the Semester">Download Word</a></button>
                </div>
            </div>
        </div><br>
        <!-- -------------------------------------- Time-Table Section Ends Here -------------------------------------- -->

        <!-- -------------------------------------- Courses Section Starts Here -------------------------------------- -->
        <div class="course hidden animate__animated animate__slower" id="course">
            <h2>Courses for the Semester, their Title and Units</h2>
            <div class="coursecontent">
                <div class="bold center background">Course Code</div>
                <div class="bold background">Course Title</div>
                <div class="bold center background">Units</div>
            </div>
        </div>
        <div id="courses" class="hidden animate__animated animate__slower">
            <div class="coursecontent">
                <div><input type="text" name="courseCode[]"></div>
                <div><textarea rows="1" name="courseTitle[]"></textarea></div>
                <div><input type="text" name="units[]"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" name="courseCode[]"></div>
                <div><textarea rows="1" name="courseTitle[]"></textarea></div>
                <div><input type="text" name="units[]"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" name="courseCode[]"></div>
                <div><textarea rows="1" name="courseTitle[]"></textarea></div>
                <div><input type="text" name="units[]"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" name="courseCode[]"></div>
                <div><textarea rows="1" name="courseTitle[]"></textarea></div>
                <div><input type="text" name="units[]"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" name="courseCode[]"></div>
                <div><textarea rows="1" name="courseTitle[]"></textarea></div>
                <div><input type="text" name="units[]"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" name="courseCode[]"></div>
                <div><textarea rows="1" name="courseTitle[]"></textarea></div>
                <div><input type="text" name="units[]"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" name="courseCode[]"></div>
                <div><textarea rows="1" name="courseTitle[]"></textarea></div>
                <div><input type="text" name="units[]"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" name="courseCode[]"></div>
                <div><textarea rows="1" name="courseTitle[]"></textarea></div>
                <div><input type="text" name="units[]"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" name="courseCode[]"></div>
                <div><textarea rows="1" name="courseTitle[]"></textarea></div>
                <div><input type="text" name="units[]"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" name="courseCode[]"></div>
                <div><textarea rows="1" name="courseTitle[]"></textarea></div>
                <div><input type="text" name="units[]"></div>
            </div>
        </div>
        <div id="up">
            <input type="number" name="ncourse" id="ncourse" style="display: none;">
            <a href="#cupdate" id="update"><input type="button" name="update" value="Update All" class="download update"></a>
            <button class="download update" onclick="return false;" id="logout">Log Out</button>
        </div>
        <!-- -------------------------------------- Courses Section Ends Here -------------------------------------- -->
        
        <!-- -------------------------------------- Portal Section Starts Here -------------------------------------- -->
        <div class="portal">
            <button onclick="return false;">
                Go to Student Portal
            </button>
        </div>
        <!-- -------------------------------------- Portal Section Ends Here -------------------------------------- -->
        <p id="maintain">This project was built and is being maintained by <a href="https://taiwojoshua.netlify.app/" target="_blank">Taiwo Joshua</a></p>
    </div>
</form>
<div id="cupdate">
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">
        <div>Please, input your password below to proceed</div>
        <input type="password" name="upass" required id="upass" placeholder="Your Password Here...">
        <div>
            <i id="pincorrect">Incorrect Password</i>
        </div>
        <div>
            <input type="checkbox" onclick="myFunction()">
            <label>Show Password</label>
        </div>
        <input type="submit" value="update" id="usubmit" name="usubmit">
        <div id="close">X</div>
    </form>
</div>
    <script src="../assets/js/jquery.js"></script>
    <script src="../assets/js/sweetalert.min.js"></script>
    <script>
        function announce(){
            let nannounce = <?php echo $res_announcement->num_rows; ?>;
            var announce = <?php echo json_encode($announce); ?>;
            for(i=0; i < nannounce; i++){
                $("#announcement>div:nth-child(2)").append('<div><textarea readonly class="announce" name = "announce[]"></textarea></div>');
                let announcediv = document.querySelectorAll("#announcement>div:nth-child(2)>div>textarea");
                announcediv[i].innerText = announce[i];
            }

            let textarea = document.getElementsByTagName('textarea')
            for(i=0; i<textarea.length; i++){
                textarea[i].style.height = textarea[i].scrollHeight + 'px';
            }
        }

        function ttable(){
            let nttable = <?php echo $res_ttable->num_rows; ?>;
            let p1 = document.querySelectorAll("#tablewrapper>tr>td:nth-child(2)>input");
            let p2 = document.querySelectorAll("#tablewrapper>tr>td:nth-child(3)>input");
            let p3 = document.querySelectorAll("#tablewrapper>tr>td:nth-child(4)>input");
            let p4 = document.querySelectorAll("#tablewrapper>tr>td:nth-child(5)>input");
            let p5 = document.querySelectorAll("#tablewrapper>tr>td:nth-child(6)>input");
            let p6 = document.querySelectorAll("#tablewrapper>tr>td:nth-child(7)>input");
            let p7 = document.querySelectorAll("#tablewrapper>tr>td:nth-child(8)>input");
            let p8 = document.querySelectorAll("#tablewrapper>tr>td:nth-child(9)>input");
            let p9 = document.querySelectorAll("#tablewrapper>tr>td:nth-child(10)>input");
            let p10 = document.querySelectorAll("#tablewrapper>tr>td:nth-child(11)>input");
            var period1 = <?php echo json_encode($period1); ?>;
            var period2 = <?php echo json_encode($period2); ?>;
            var period3 = <?php echo json_encode($period3); ?>;
            var period4 = <?php echo json_encode($period4); ?>;
            var period5 = <?php echo json_encode($period5); ?>;
            var period6 = <?php echo json_encode($period6); ?>;
            var period7 = <?php echo json_encode($period7); ?>;
            var period8 = <?php echo json_encode($period8); ?>;
            var period9 = <?php echo json_encode($period9); ?>;
            var period10 = <?php echo json_encode($period10); ?>;            
            for(i=0; i < nttable; i++){
                p1[i].value = period1[i];
                p2[i].value = period2[i];
                p3[i].value = period3[i];
                p4[i].value = period4[i];
                p5[i].value = period5[i];
                p6[i].value = period6[i];
                p7[i].value = period7[i];
                p8[i].value = period8[i];
                p9[i].value = period9[i];
                p10[i].value = period10[i];
            }

            // -------------------------------------- Today Classes Section Starts Here --------------------------------------
            weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            date = new Date();
            today = weekday[date.getDay()];

            let tperiod = document.querySelectorAll("#todayclass>tr>td");
            var i = "";
            if(today == "Monday"){
                i=0;
            }else if(today == "Tuesday"){
                i=1;
            }else if(today == "Wednesday"){
                i=2;
            }else if(today == "Thursday"){
                i=3;
            }else if(today == "Friday"){
                i=4;
            }else if(today == "Saturday"){
                itsub = [];
                document.querySelector("#todayclass").innerHTML = '<p style = "text-align: left; margin-left: 50px;">There are no classes scheduled for today</p>';
            }else if(today == "Sunday"){
                itsub = [];
                document.querySelector("#todayclass").innerHTML = '<p style = "text-align: left; margin-left: 50px;">There are no classes scheduled for today</p>';
            } 
            let tclass = [period1[i], period2[i], period3[i], period4[i], period5[i], period6[i], period7[i], period8[i], period9[i], period10[i]];
            for(n = 0; n < tclass.length; n++){
                tperiod[n].innerText = tclass[n];
            }   
            
            // -------------------------------------- Prev, Now and Next --------------------------------------
            table2 = [];
            for(i = 0; i < tclass.length; i++){
                table2[i] = tclass[i];
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

        function ccode(){
            let nccode = <?php echo $res_ccode->num_rows; ?>;
            let ccodev = document.querySelectorAll("#courses>.coursecontent>div:nth-child(1)>input");
            let ctitle = document.querySelectorAll("#courses>.coursecontent>div:nth-child(2)>textarea");
            let cunits = document.querySelectorAll("#courses>.coursecontent>div:nth-child(3)>input");
            var course_code = <?php echo json_encode($course_code); ?>;
            var course_title = <?php echo json_encode($course_title); ?>;
            var units = <?php echo json_encode($units); ?>;
            for(i=0; i < nccode; i++){
                ccodev[i].value = course_code[i];
                ctitle[i].innerText = course_title[i];
                cunits[i].value = units[i];
            }  

            let textarea = document.getElementsByTagName('textarea')
            for(i=0; i<textarea.length; i++){
                textarea[i].style.height = textarea[i].scrollHeight + 'px';
            }
        }
    </script>
    <script src="../assets/js/modal.js"></script>
    <script src="../assets/js/animation.js"></script>
</body>
</html>
<?php
    if($admin == "true"){
        echo    '<script type="text/javascript">
                    $("input").prop("readonly", false);
                    $("textarea").prop("readonly", false);
                    $(".update").show();
                </script>';
    }
    if($aready == "announce"){
        echo    '<script>
                    announce();
                 </script>';
    }
    if($tready == "ttable"){
        echo    '<script>
                    ttable();
                 </script>';
    }
    if($ready == "ccode"){
        echo    '<script>
                    ccode();
                 </script>';
    }
    if(isset($_POST['usubmit'])){
        $upass = $_POST['upass'];
        if(password_verify($upass, $password)){
            echo    '<script>
                        document.getElementById("form").submit();
                    </script>';
        }else{
            echo    '<script>
                        document.getElementById("cupdate").style.display = "flex";
                        document.getElementById("pincorrect").style.display = "block";
                    </script>';
        }
    }
?>