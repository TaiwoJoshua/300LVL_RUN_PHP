<?php
    include './assets/php/db_connect.php';

    $loginmsg = "";
    $check = "";
    $matric = "";

    if(isset($_POST['submit'])){
        $matric = $_POST['matric']; 
        $_SESSION['matric'] = $_POST['matric'];
        $_SESSION['password'] = "";
        $DateTime = date('Y-m-d H:i:s');
        if(isset($_POST['password']) && $_POST['password'] !== ""){
            $password = $_POST['password'];
            $select = "SELECT * FROM admins WHERE matric='$matric'";
            $result = $conn->query($select);

            if($result->num_rows > 0){
                while($row = $result->fetch_assoc()){
                    $_SESSION['matric']=$row['matric'];
                    $hpassword = $_SESSION['password']=$row['password'];
                }
                if(password_verify($password, $hpassword)){
                    if(stripos($matric, 'CPE') !== false){
                        $atselect = "SELECT * FROM cpe_admin_login_time WHERE matric='$matric'";
                        $atresult = $conn->query($atselect);
                        if($atresult->num_rows > 0){
                            $atupdate = "UPDATE cpe_admin_login_time SET time='$DateTime' WHERE matric='$matric'";
                            $atupdateresult = $conn->query($atupdate);
                            header('location: ./contents/cpe.php');
                        }else{
                            $adminlogin = "INSERT INTO cpe_admin_login_time VALUES(null, '$matric', '$DateTime')";
                            $result = $conn->query($adminlogin);
                            header('location: ./contents/cpe.php');
                        }
                    }else if(stripos($matric, 'CVE') !== false){
                        $atselect = "SELECT * FROM cve_admin_login_time WHERE matric='$matric'";
                        $atresult = $conn->query($atselect);
                        if($atresult->num_rows > 0){
                            $atupdate = "UPDATE cve_admin_login_time SET time='$DateTime' WHERE matric='$matric'";
                            $atupdateresult = $conn->query($atupdate);
                            header('location: ./contents/cve.php');
                        }else{
                            $adminlogin = "INSERT INTO cve_admin_login_time VALUES(null, '$matric', '$DateTime')";
                            $result = $conn->query($adminlogin);
                            header('location: ./contents/cve.php');
                        }
                    }else if(stripos($matric, 'EEE') !== false){
                        $atselect = "SELECT * FROM eee_admin_login_time WHERE matric='$matric'";
                        $atresult = $conn->query($atselect);
                        if($atresult->num_rows > 0){
                            $atupdate = "UPDATE eee_admin_login_time SET time='$DateTime' WHERE matric='$matric'";
                            $atupdateresult = $conn->query($atupdate);
                            header('location: ./contents/eee.php');
                        }else{
                            $adminlogin = "INSERT INTO eee_admin_login_time VALUES(null, '$matric', '$DateTime')";
                            $result = $conn->query($adminlogin);
                            header('location: ./contents/eee.php');
                        }
                    }else if(stripos($matric, 'MEE') !== false){
                        $atselect = "SELECT * FROM mee_admin_login_time WHERE matric='$matric'";
                        $atresult = $conn->query($atselect);
                        if($atresult->num_rows > 0){
                            $atupdate = "UPDATE mee_admin_login_time SET time='$DateTime' WHERE matric='$matric'";
                            $atupdateresult = $conn->query($atupdate);
                            header('location: ./contents/mee.php');
                        }else{
                            $adminlogin = "INSERT INTO mee_admin_login_time VALUES(null, '$matric', '$DateTime')";
                            $result = $conn->query($adminlogin);
                            header('location: ./contents/mee.php');
                        }
                    }
                }else{
                    $loginmsg = "Incorrect Password";
                    $check = "pass";
                }
            }else{
                $check = "matric";
            }
            
        }else{
            if(stripos($matric, 'CPE') !== false){
                $stselect = "SELECT * FROM cpe_login_time WHERE matric='$matric'";
                $stresult = $conn->query($stselect);
                if($stresult->num_rows > 0){
                    $stupdate = "UPDATE cpe_login_time SET time='$DateTime' WHERE matric='$matric'";
                    $stupdateresult = $conn->query($stupdate);
                    header('location: ./contents/cpe.php');
                }else{
                    $login = "INSERT INTO cpe_login_time VALUES(null, '$matric', '$DateTime')";
                    $result = $conn->query($login);
                    header('location: ./contents/cpe.php');
                }
            }else if(stripos($matric, 'CVE') !== false){
                $stselect = "SELECT * FROM cve_login_time WHERE matric='$matric'";
                $stresult = $conn->query($stselect);
                if($stresult->num_rows > 0){
                    $stupdate = "UPDATE cve_login_time SET time='$DateTime' WHERE matric='$matric'";
                    $stupdateresult = $conn->query($stupdate);
                    header('location: ./contents/cve.php');
                }else{
                    $login = "INSERT INTO cve_login_time VALUES(null, '$matric', '$DateTime')";
                    $result = $conn->query($login);
                    header('location: ./contents/cve.php');
                }
            }else if(stripos($matric, 'EEE') !== false){
                $stselect = "SELECT * FROM eee_login_time WHERE matric='$matric'";
                $stresult = $conn->query($stselect);
                if($stresult->num_rows > 0){
                    $stupdate = "UPDATE eee_login_time SET time='$DateTime' WHERE matric='$matric'";
                    $stupdateresult = $conn->query($stupdate);
                    header('location: ./contents/eee.php');
                }else{
                    $login = "INSERT INTO eee_login_time VALUES(null, '$matric', '$DateTime')";
                    $result = $conn->query($login);
                    header('location: ./contents/eee.php');
                }
            }else if(stripos($matric, 'MEE') !== false){
                $stselect = "SELECT * FROM mee_login_time WHERE matric='$matric'";
                $stresult = $conn->query($stselect);
                if($stresult->num_rows > 0){
                    $stupdate = "UPDATE mee_login_time SET time='$DateTime' WHERE matric='$matric'";
                    $stupdateresult = $conn->query($stupdate);
                    header('location: ./contents/mee.php');
                }else{
                    $login = "INSERT INTO mee_login_time VALUES(null, '$matric', '$DateTime')";
                    $result = $conn->query($login);
                    header('location: ./contents/mee.php');
                }
            }
        }
    };
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./assets/img/redeemer's icon.jfif">
    <link rel="stylesheet" href="./assets/css/index.css">
    <title>ENGINEERING 300LVL R.U.N</title>
</head>
<body>
    <div class="pagewrapper animate__animated animate__slower" id="pagewrapper">
        <div id="navbar">
            <h1>
                RUN 300LVL ENGINEERING
            </h1>
        </div>
        <div class="formwrapper">
            <div class="form">
                <div class="welcome">
                    <h1>
                        WELCOME
                    </h1>
                </div>
                <form id="form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">
                    <div>
                        Input your matric number to proceed
                    </div><br>
                    <input type="text" id="matric" required name="matric" value="<?php echo $matric ?>" placeholder="Your Matric No. here...">
                    <i id="empty">Please input your matric number</i>
                    <i id="incorrect">Invalid Matric No. Try again</i>
                    <input type="password" name="password" id="password" placeholder="Your Password here...">
                    <div id="showwrapper">
                        <div>
                            <i id="pincorrect"><?php echo $loginmsg?></i>
                        </div>
                        <div>
                            <input type="checkbox" onclick="myFunction()">
                            <label>Show Password</label>
                        </div>
                    </div>
                    <center>
                        <input type="submit" value="submit" name="submit" id="submit">
                    </center>
                    <div id="alogin">Admin Login</div>
                    <div id="slogin">Student Login</div>
                </form>
            </div>
        </div>
        <p id="maintain">This project was built and is being maintained by <a href="https://taiwojoshua.netlify.app/" target="_blank"><strong>Taiwo Joshua</strong></a></p>
    </div>
    <script src="./assets/js/jquery.js"></script>
    <script src="./assets/js/index.js"></script>
</body>
</html>
<?php 
    if($check == "pass"){
        echo    '<script type="text/javascript">
                    $("#pincorrect").show();
                    $("#incorrect").hide();
                    $("#password").show();
                    $("#password").prop("required", true);
                    $("#showwrapper").css("display", "flex");
                    $("#alogin").hide();
                    $("#slogin").show();
                </script>';
    }
    if($check == "matric"){
        echo    '<script type="text/javascript">
                    $("#incorrect").show();
                    $("#pincorrect").hide();
                    $("#password").show();
                    $("#password").prop("required", true);
                    $("#showwrapper").css("display", "flex");
                    $("#alogin").hide();
                    $("#slogin").show();
                </script>';
    }
?>