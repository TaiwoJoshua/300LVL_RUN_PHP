<?php
    include './db_connect.php';
    echo $_SESSION['matric'];
    if($admin == true){
        echo    '<script type="text/javascript">
                    $("input").prop("readonly", false);
                    $("textarea").prop("readonly", false);
                    $(".update").show();
                    $(".remove").show();
                </script>';
    }
?>