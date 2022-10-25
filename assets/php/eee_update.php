<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./img/redeemer's icon.jfif">
    <title>Updating</title>
    <style>
        body{ background-color: white;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
        .loader_wrapper{
            width: 40%;
            display: flex;
            flex-direction: column;
            margin: 20% auto;
            display: none;
        }
        .progressbar-wrapper{
            margin: 20px 10px;
        }
        progress{
            background-color: #f3f3f3;
            border: none;
            width: 80%;
            height: 18px;
            margin-right: 10px;
            border-radius: 9px;
        }
        progress::-webkit-progress-bar{
            background-color: #f3f3f3;
            border-radius: 9px;
        }
        progress::-webkit-progress-value{
            background: black;
            border-radius: 9px;
        }
        progress::-moz-progress-bar{
            background: black;
            border-radius: 9px;
        }
        progress::-ms-progress-bar{
            background: black;
            border-radius: 9px;
        }
        progress::-o-progress-bar{
            background: black;
            border-radius: 9px;
        }
        .none{
            display: none;
        }
    </style>
</head>
<body>
    <div class="loader_wrapper" id="loader_wrapper">
        <center><div class="progressbar-wrapper" id="progressbar-wrapper">
            <progress class="progressbar" max="100"></progress><br>
            <span>
                <span>Updating</span>
                <span class="progress-value">0%</span>
                <span class="none">100</span>
            </span>
        </div></center>
        <center>
            <h2 class="none" id="complete">
                Update Completed Succesfully!!! <br> Thank You
            </h2>
        </center>
    </div>
    <script>
            var progressbar = document.getElementsByClassName("progressbar");
            var progressvalue = document.getElementsByClassName("progress-value");
            var max = document.getElementsByClassName("none");
            setInterval(function(){
                var value = progressbar[0].value;
                if(value < parseInt(max[0].innerText)){
                    value += 1;
                    addValue = progressbar[0].value = value;
                    progressvalue[0].innerText = value + "%";
                }else{
                    document.getElementById("complete").style.display = "block";
                    document.getElementById("progressbar-wrapper").style.display = "none";
                }
            }, 50)
    </script>
</body>
</html>


<?php
    include './db_connect.php';
    if(isset($_POST['update'])){
        $DateTime = date('Y-m-d H:i:s');

        // -------------------------------------- Announcement Section Starts Here -------------------------------------- 
        $n_announce = $_POST['n_announce']; 
        $trun = "TRUNCATE eee_announcement";
        $res_trun = $conn->query($trun);
        for($i=0; $i < $n_announce; $i++){
            if($_POST['announce'][$i] == ""){
                continue;
            }else{
                $aannounced = $_POST['announce'][$i];
                $aupdate = "INSERT INTO eee_announcement VALUES(null,'$aannounced', '$DateTime')";
                $res_aupdate = $conn->query($aupdate);
            }
            
        }

        // -------------------------------------- Time-Table Section Starts Here --------------------------------------
        for($i=0; $i < 5; $i++){
            $period1 = $_POST['period1'][$i];
            $period2 = $_POST['period2'][$i];
            $period3 = $_POST['period3'][$i];
            $period4 = $_POST['period4'][$i];
            $period5 = $_POST['period5'][$i];
            $period6 = $_POST['period6'][$i];
            $period7 = $_POST['period7'][$i];
            $period8 = $_POST['period8'][$i];
            $period9 = $_POST['period9'][$i];
            $period10 = $_POST['period10'][$i];
            $tupdate = "UPDATE eee_timetable SET `Period 1`='$period1',`Period 2`='$period2',`Period 3`='$period3',`Period 4`='$period4',`Period 5`='$period5',`Period 6`='$period6',`Period 7`='$period7',`Period 8`='$period8',`Period 9`='$period9',`Period 10`='$period10' WHERE id=($i+1)";
            $res_tupdate = $conn->query($tupdate);
            
        }

        // -------------------------------------- Courses Section Starts Here --------------------------------------
        for($i=0; $i < 10; $i++){
            $courseCode = $_POST['courseCode'][$i];
            $courseTitle = $_POST['courseTitle'][$i];
            $units = $_POST['units'][$i];
            $cupdate = "UPDATE eee_courses SET `course_code`='$courseCode',`course_title`='$courseTitle',`units`='$units' WHERE id=($i+1)";
            $res_cupdate = $conn->query($cupdate);
        }
        echo    '<script>
                    document.getElementById("loader_wrapper").style.display = "flex";
                </script>';
        header('refresh: 7; ../../contents/eee.php');
    }else{
        echo '<center style="color: red;"><h1>Thou Shalt Not Pass ^_^</h1><h3>Matthew 7:7-8</h3></center>';
        header('refresh: 2; ../../index.php');
    }
?>