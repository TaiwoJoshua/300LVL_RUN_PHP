<?php
    include '../assets/php/db_connect.php';

    $DateTime = date('Y-m-d H:i:s');
    $admin = false;
    $matric = $_SESSION['matric'];
    $password = $_SESSION['password'];
    if(isset($matric) && $password !== ""){
        $ttime = strtotime($DateTime) - 1800;
        $select = "SELECT * FROM admin_login_time WHERE matric='$matric'";
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
                    $admin = true;
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
        $select = "SELECT * FROM login_time WHERE matric='$matric'";
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
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../assets/img/redeemer's icon.jfif">
    <link rel="stylesheet" href="../assets/css/cpe.css">
    <link rel="stylesheet" href="../assets/css/animate.min.css">
    <title>ENGINEERING 300LVL R.U.N</title>
</head>
<body>
    <div class="pagewrapper animate__animated animate__slower" id="pagewrapper">
        <div class="view" id="view">
            <!-- -------------------------------------- Navbar Section Starts Here -------------------------------------- -->
            <div id="navbar">
                <h1>RUN 300LVL COMPUTER ENGINEERING</h1>
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
                <div>
                    <textarea class="announce">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis, voluptatum, a consectetur magni iste commodi dolore dolorem rem sint possimus dolor, doloribus eum aliquam quaerat id accusamus et minus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis, voluptatum, a consectetur magni iste commodi dolore dolorem rem sint possimus dolor, doloribus eum aliquam quaerat id accusamus et minus.</textarea>
                    <button class="remove download">Remove</button>
                </div>
                <div>
                    <textarea class="announce">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis, voluptatum, a consectetur magni iste commodi dolore dolorem rem sint possimus dolor, doloribus eum aliquam quaerat id accusamus et minus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis, voluptatum, a consectetur magni iste commodi dolore dolorem rem sint possimus dolor, doloribus eum aliquam quaerat id accusamus et minus.</textarea>
                    <button class="remove download">Remove</button>
                </div>
                <div>
                    <textarea class="announce">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis, voluptatum, a consectetur magni iste commodi dolore dolorem rem sint possimus dolor, doloribus eum aliquam quaerat id accusamus et minus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis, voluptatum, a consectetur magni iste commodi dolore dolorem rem sint possimus dolor, doloribus eum aliquam quaerat id accusamus et minus.</textarea>
                    <button class="remove download">Remove</button>
                </div>
                <div>
                    <textarea class="announce">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis, voluptatum, a consectetur magni iste commodi dolore dolorem rem sint possimus dolor, doloribus eum aliquam quaerat id accusamus et minus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis, voluptatum, a consectetur magni iste commodi dolore dolorem rem sint possimus dolor, doloribus eum aliquam quaerat id accusamus et minus.</textarea>
                    <button class="remove download">Remove</button>
                </div>
            </div>
            <div id="add1"><button id="add" class="download update">Add</button><button class="download update">Update</button></div>        
        </div><br>
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
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                            </tr>
                            <tr class="ttable">
                                <th>Tuesday</th>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                            </tr>
                            <tr class="ttable">
                                <th>Wednesday</th>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                            </tr>
                            <tr class="ttable">
                                <th>Thursday</th>
                                <td><input type="text" value="MEE 205"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                            </tr>
                            <tr class="ttable">
                                <th>Friday</th>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 200"></td>
                                <td><input type="text" value="MEE 202"></td>
                                <td><input type="text" value="MEE 203"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                                <td><input type="text" value="MEE 204"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="downloadwrapper">
                    <button class="download update">Update</button>
                    <button class="download"><a href="../assets/files/Time-Table for the Semester.pdf" download="Time-Table for the Semester">Download PDF</a></button>
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
                <div><input type="text" value=""></div>
                <div><textarea rows="1">COMPUTATION STRUCTURES I</textarea></div>
                <div><input type="text" value="3"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" value="EEE 313"></div>
                <div><textarea rows="1">ENGINEERING ANALYSIS I</textarea></div>
                <div><input type="text" value="3"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" value="CPE 303"></div>
                <div><textarea rows="1">LOW LEVEL LANGUAGE PROGRAMMING</textarea></div>
                <div><input type="text" value="3"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" value="EEE 301"></div>
                <div><textarea rows="1">MICROELECTRONIC DEVICES AND CIRCUITS I</textarea></div>
                <div><input type="text" value="3"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" value="EEE 309"></div>
                <div><textarea rows="1">SIGNALS AND SYSTEMS</textarea></div>
                <div><input type="text" value="3"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" value="CPE 301"></div>
                <div><textarea rows="1">DIGITAL SYSTEM DESIGN WITH VHDL</textarea></div>
                <div><input type="text" value="2"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" value="CPE 305"></div>
                <div><textarea rows="1">DIGITAL SYSTEM DESIGN LABORATORY</textarea></div>
                <div><input type="text" value="1"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" value="GST 309"></div>
                <div><textarea rows="1">STUDIES IN LEADERSHIP V</textarea></div>
                <div><input type="text" value="1"></div>
            </div>
            <div class="coursecontent">
                <div><input type="text" value="GIT 303"></div>
                <div><textarea rows="1">CISCO CERTIFIED NETWORK ASSOCIATE (CCNA) I</textarea></div>
                <div><input type="text" value="0"></div>
            </div>
        </div>
        <div id="up">
            <button class="download update">Update</button>
        </div>
        <!-- -------------------------------------- Courses Section Ends Here -------------------------------------- -->
        
        <!-- -------------------------------------- Portal Section Starts Here -------------------------------------- -->
        <div class="portal">
            <button>
                <a href="https://reg.run.edu.ng/stud_main.php" target="blank">Go to Student Portal</a>
            </button>
        </div>
        <!-- -------------------------------------- Portal Section Ends Here -------------------------------------- -->
        <p id="maintain">This project was built and is being maintained by <a href="https://taiwojoshua.netlify.app/" target="_blank">Taiwo Joshua</a></p>
    </div>
    <script src="../assets/js/jquery.js"></script>
    <script src="../assets/js/autosize.min.js"></script>
    <script src="../assets/js/sweetalert.min.js"></script>
    <script src="../assets/js/cpe.js"></script>
</body>
</html>
<?php
    if($admin == true){
        echo    '<script type="text/javascript">
                    $("input").prop("readonly", false);
                    $("textarea").prop("readonly", false);
                    $(".update").show();
                    $(".remove").show();
                </script>';
    }

    // -------------------------------------- Courses Section Starts Here --------------------------------------
    $course_code = array();
    $course_title = array();
    $units = array();
    $ccode = 'SELECT * FROM cpe_courses';
    $res_ccode = $conn->query($ccode);
    if($res_ccode->num_rows > 0){
        $i = 0;
        while($ccoderow = $res_ccode->fetch_assoc()){
            $course_code[$i] = $ccoderow['course_code'];
            $course_title[$i] = $ccoderow['course_title'];
            $units[$i] = $ccoderow['units'];
            $i++;
        }
    }
    for($i=0; $i < $res_ccode->num_rows; $i++){
        echo $course_code[$i];
        // $code = "#courses>.coursecontent>div:nth-child(".($i+1).")>input";
        echo    '<script>
                    code = document.querySelectorAll("#courses>.coursecontent>div:nth-child(1)>input");
                    code[0].value = "$course_code[2]";
                </script>';
    }  
?>